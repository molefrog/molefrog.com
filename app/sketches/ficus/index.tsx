"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import useSound from "use-sound";
import clsx from "clsx";
import { useLocalStorage } from "usehooks-ts";

// Importing the createPoll function from the provided CDN
import "./ficus-widget.d.ts";
import { createPoll } from "https://ficus.io/widget.js";

// API for fetching poll state on startup and real-time voting
import type { API } from "./ficus-api";

import clickFX from "./click.mp3";
import styles from "./ficus.module.css";

function FicusPoll({ id }: { id: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  // poll state
  const [config, setConfig] = useState<API.PollState["config"]>();
  const [me, setMe] = useState<string>();
  const [votes, setVotes] = useState<API.PollState["votes"]>();

  const instanceRef = useRef<ReturnType<typeof createPoll>>();

  const [token, setToken] = useLocalStorage<string | null>("ficus-token", null, {
    initializeWithValue: typeof window !== "undefined",
  });

  const tokenRef = useRef(token);
  tokenRef.current = token;

  const [playSound] = useSound(clickFX);

  // fetch initial state: questions, answers, and user id
  useEffect(() => {
    async function init() {
      if (!elementRef.current) return;

      const response = await fetch(`https://v.ficus.io/${id}`, {
        headers: tokenRef.current ? { "X-Ficus": tokenRef.current } : {},
      });

      if (response.headers.has("X-Ficus")) {
        setToken(response.headers.get("X-Ficus"));
      }

      const { config, votes: initialVotes, me } = (await response.json()) as API.PollState;

      setMe(me.id);
      setConfig(config);
      setVotes(initialVotes);
    }

    init();
  }, [id, setToken]);

  useEffect(() => {
    if (!config || !elementRef.current) return;

    instanceRef.current = createPoll(elementRef.current, {
      type: "cloud",
      config: config,
      votes: votes,
      theme: {
        aspectRatio: "16:9",
        textColor: "#18181b",
      },
    });

    return () => {
      // clean up
      if (instanceRef.current) {
        const [, unmount] = instanceRef.current;
        unmount();

        instanceRef.current = undefined;
      }
    };
    // assume that votes are set along with the config
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  // new votes incoming
  useEffect(() => {
    if (instanceRef.current && votes) {
      const [update] = instanceRef.current;
      update({ votes: votes });
    }
  }, [config, votes]);

  // subscribe to real-time updates
  useEffect(() => {
    if (!config) return;
    const socket = new WebSocket(`https://v.ficus.io/${config.name}/sub`);

    socket.onmessage = function (event) {
      const state = JSON.parse(event.data) as API.PollState;
      setVotes(state.votes);
    };

    return () => {
      socket.close();
    };
  }, [config]);

  const [votedFor, setVotedFor] = useState<string[]>([]);

  useEffect(() => {
    const my = votes?.find((vote) => vote.id === me)?.answers ?? [];
    setVotedFor(my);
  }, [me, votes]);

  return (
    <>
      <div className={styles.poll}>
        <div ref={elementRef}></div>
      </div>

      <div className={styles.vote}>
        {config?.answers.map((answer) => {
          const isActiveVote = votedFor.includes(answer.id);

          return (
            <button
              key={answer.id}
              className={clsx(styles.button, {
                [styles.button_voted]: isActiveVote,
              })}
              onClick={async () => {
                if (!config || !votes) return;

                const newVotes = isActiveVote
                  ? votedFor.filter((id) => id !== answer.id)
                  : [...votedFor, answer.id];

                setVotedFor(newVotes); // optimistic update
                playSound({ playbackRate: isActiveVote ? 0.75 : 1.0 });

                const votesParam = newVotes.length < 1 ? "_" : newVotes.join(",");

                const resp = await fetch(`https://v.ficus.io/${config.name}/vote/${votesParam}`, {
                  method: "POST",
                  headers: {
                    "X-Ficus": tokenRef.current || "",
                  },
                });

                const data = (await resp.json()) as API.PollState;
                setVotes(data.votes);
              }}
            >
              <span>{answer.label}</span>
            </button>
          );
        })}
      </div>
      <p>
        <a href="https://ficus.io">ficus.io</a> was an app for making online presentations with
        real-time polls and instant feedback from the audience. Initially, it was a hackathon
        project that had been running until it was shut down in 2018.
      </p>
      <p>
        In 2024, I brought it back online as an{" "}
        <a href="https://github.com/molefrog/ficus.io">ESM module</a> for drawing polls and a
        limited real-time API powered by Cloudflare Workers and Durable Objects.
      </p>
    </>
  );
}

export default function Sketch() {
  return <FicusPoll id="hawire-galake-nawofo" />;
}
