"use client";

import { useRef, useEffect } from "react";

// Importing the createPoll function from the provided CDN
import { createPoll } from "https://ficus.io/widget.js";
import "./ficus-widget.d.ts";

import styles from "./ficus.module.css";

// const POLL_ID = /* __POLL_ID__ */ location.hash.replace("#", "");

// document.addEventListener("DOMContentLoaded", async function () {
//   if (!POLL_ID) {
//     console.error("Please provide a poll ID in the URL's hash. Example: /#poll-1");
//     return;
//   }

//   const rootElement = document.getElementById("poll");
//   const response = await fetch(`/${POLL_ID}`);
//   const { config, votes: initialVotes, me } = await response.json();

//   const [update, unmount] = createPoll(rootElement, {
//     type: "cloud",
//     config: config,
//     votes: initialVotes,
//     theme: {
//       textColor: "#18181b",
//     },
//   });

//   const setState = (state) => {
//     if (state.votes) update({ votes: state.votes });

//     const myVotes = state.votes.find((vote) => vote.id === me.id)?.answers || [];

//     document.querySelectorAll(".buttons button").forEach((button) => {
//       button.disabled = myVotes.includes(button.id);
//     });
//   };

//   setState({ votes: initialVotes });

//   const wsOrigin = location.origin.replace(/^http/, "ws");
//   const socket = new WebSocket(`${wsOrigin}/${POLL_ID}/sub`);

//   socket.onmessage = function (event) {
//     const state = JSON.parse(event.data);

//     console.log("update via ws", state);
//     setState(state);
//   };

//   config.answers.forEach((answer) => {
//     document.getElementById(answer.id)?.addEventListener("click", async () => {
//       const resp = await fetch(`/${POLL_ID}/vote/${answer.id}`, { method: "POST" });
//       const data = await resp.json();

//       setState(data);
//     });
//   });

//   window.onunload = () => {
//     unmount();
//     socket.close();
//   };
// });

export default function Sketches() {
  const elementRef = useRef<HTMLDivElement>(null);
  // const

  //   const rootElement = document.getElementById("poll");
  //   const response = await fetch(`/${POLL_ID}`);
  //   const { config, votes: initialVotes, me } = await response.json();

  useEffect(() => {
    let unmount: () => void;

    async function init() {
      if (!elementRef.current) return;

      const response = await fetch(`https://v.ficus.io/qukuta-vuvygo-qovuli`);
      const { config, votes: initialVotes, me } = await response.json();

      const [update, unmount_] = createPoll(elementRef.current, {
        type: "simple",
        config: config,
        votes: initialVotes,
        theme: {
          textColor: "#18181b",
        },
      });

      unmount = unmount_;
    }

    init();
    return () => {
      unmount?.();
    };
  }, []);

  return (
    <>
      <div className={styles.poll}>
        <div ref={elementRef}></div>
      </div>
      Ficus was an app for making online presentations with real-time polls and instant feedback
      from the audience.
    </>
  );
}
