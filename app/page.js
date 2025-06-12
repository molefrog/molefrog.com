import React from "react";
import Image from "next/image";
import WrapBalancer from "react-wrap-balancer";
import { Container } from "@/components/Grid";
import Link from "next/link";

import Showcase, { ShowcaseLink } from "@/components/Showcase";
import { RecentBlogPosts } from "@/components/RecentBlogPosts";

import domikImg from "@/public/images/domik-highlight.webp";
import wouterImg from "@/public/images/wouter-highlight.webp";
import githubImg from "@/public/showcase/github.webp";
import firaImg from "@/public/showcase/fira.webp";
import speakingVideo from "@/public/showcase/speaking-use-state.mp4";
import resumeBuilderVideo from "@/public/showcase/resume-io-builder.mp4";
import domikLtdVideo from "@/public/showcase/domik-ltd.mp4";

import MINI_MAP_ITEMS from "@/content/mini-map.tsx";
import ExpandInline from "@/components/ExpandInline";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <Container placement="inner">
      <section className="about">
        <h1 className="about__header">
          <WrapBalancer>
            Hi, it&apos;s Alexey.
            <br />
            I&nbsp;design and code web things.
          </WrapBalancer>
        </h1>
        <div className="about__description">
          <div className="about__text">
            <p>
              I am a founder,{" "}
              <Showcase media={{ video: speakingVideo, aspectRatio: 2.2 }} prefer="below">
                <Link className="solid-link" href="/speaking">
                  conference speaker
                </Link>
              </Showcase>
              ,{" "}
              <Showcase
                media={{ image: "/screenshot/github", aspectRatio: 1400 / 860 }}
                prefer="below"
              >
                <Link
                  className="solid-link"
                  href="https://github.com/molefrog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open-source
                </Link>
              </Showcase>{" "}
              maintainer and full-stack engineer. I&nbsp;love designing UIs, playing around with
              animations, and writing small yet expressive programs. The tools I use to get the job
              done are:{" "}
              <ExpandInline
                items={[
                  "Figma",
                  "React",
                  "Svelte",
                  "Ruby on Rails",
                  "Node.js",
                  "Deno",
                  "framer-motion",
                  "TypeScript",
                  "Tailwind",
                  "Remix",
                  "Next.js",
                  "Postgres",
                  "Redis",
                  "Cloudflare Workers",
                ]}
                withAnd
                expandBy={3}
                displayFirst={6}
              />
            </p>
            <p>
              Now that{" "}
              <Showcase media={{ video: resumeBuilderVideo, aspectRatio: 1200 / 768 }}>
                <Link className="solid-link" href="https://resume.io">
                  resume.io
                </Link>
              </Showcase>
              , where I was a technical co-founder and head of engineering, has been acquired,
              I&apos;m focusing on my own projects and exploring fresh ideas. I&apos;m particularly
              interested in local-first web, multiplayer apps and{" "}
              <Showcase media={{ video: domikLtdVideo, aspectRatio: 1460 / 1080 }}>
                <Link className="solid-link" href="https://domik.ltd/story">
                  interactive storytelling
                </Link>
              </Showcase>
              .
            </p>

            <p>
              Currently, I am building{" "}
              <Showcase media={{ image: firaImg }}>
                <Link href="https://firaresearch.com" className="solid-link">
                  Fira (YC W25)
                </Link>
              </Showcase>
              , an AI-powered financial research assistant. We&apos;re on a mission to help analysts
              at M&A and investment firms accelerate their research and due diligence work. Drop me
              a line if you&apos;re interested in joining us.
            </p>
          </div>
        </div>

        <div className="about__selected-projects selected-projects__grid">
          <div className="selected-projects__item">
            <a href="https://domik.ltd" className="selected-projects__pic">
              <Image
                src={domikImg}
                fill
                placeholder="blur"
                priority
                className="selected-projects__img"
                alt="Domik Limited. Interactive story."
              />
            </a>

            <div className="selected-projects__title">
              As a side-project, I&apos;ve written, designed and programmed an illustrated web-story
              with puzzles, animations and mini-games.
            </div>

            <div className="selected-projects__links">
              <a href="https://domik.ltd" className="project-link project-link--primary">
                Read
              </a>

              <a href="https://youtu.be/rA4dgn4rt5E?si=1Gv_nncJrY6zcU9B" className="project-link">
                <PlayIcon />
                Behind the scenes
              </a>
            </div>
          </div>
          <div className="selected-projects__item">
            <a href="https://github.com/molefrog/wouter" className="selected-projects__pic">
              <Image
                src={wouterImg}
                fill
                placeholder="blur"
                priority
                className="selected-projects__img"
                alt="wouter, open-source React.js router"
              />
            </a>

            <div className="selected-projects__title">
              Minimalistic React and Preact router library with 5k+&nbsp;stars on GitHub and an API
              similar to classic react-router.
            </div>

            <div className="selected-projects__links">
              <a href="https://github.com/molefrog/wouter" className="project-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="about__mini-map">
          <div className="mini-map">
            {MINI_MAP_ITEMS.map((item, idx) => {
              // all /etc/* pages are actually external apps mounted on the same domain
              const shouldPrefetch = !/molefrog\.com\/etc\//.test(item.url);

              return (
                <Showcase key={String(idx) + item.url} media={item}>
                  <Link
                    prefetch={shouldPrefetch}
                    className="mini-map__item"
                    aria-label={`Read more on ${item.url}`}
                    style={{
                      backgroundImage: `url(${item.thumb?.src})`,
                    }}
                    href={item.url}
                  />
                </Showcase>
              );
            })}
          </div>
        </div>

        <div className="about__blog">
          <RecentBlogPosts />
        </div>
      </section>
    </Container>
  );
}

const PlayIcon = () => (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.32995 3.61615C8.0396 3.99172 8.0396 5.00828 7.32995 5.38385L1.46777 8.48634C0.801771 8.83881 -4.08964e-07 8.356 -3.76027e-07 7.60249L-1.04798e-07 1.39751C-7.18613e-08 0.643995 0.801772 0.161188 1.46777 0.513658L7.32995 3.61615Z"
      fill="currentColor"
    />
  </svg>
);
