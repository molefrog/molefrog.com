import React from "react";
import Image from "next/image";
import WrapBalancer from "react-wrap-balancer";
import { Container } from "../components/Grid";
import { SolidLink } from "../components/SolidLink";
import Link from "next/link";

import Showcase from "../components/Showcase";

import domikImg from "../public/images/domik-highlight.webp";
import wouterImg from "../public/images/wouter-highlight.webp";

import MINI_MAP_ITEMS from "../content/mini-map.tsx";

const LinkWithPreview = ({ video, ...props }) => <SolidLink data-video={video} {...props} />;

export default function Index() {
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
            <p></p>
            <p>
              Occasionally, I{" "}
              <Link legacyBehavior passHref href="/speaking">
                <SolidLink>speak</SolidLink>
              </Link>{" "}
              at tech conferences, contribute to{" "}
              <SolidLink href="https://github.com/molefrog" external>
                open-source
              </SolidLink>{" "}
              and teach others to code. I love designing UIs, playing around with animations, and
              writing performant web apps & backends. I primarily use JS, Node/Deno, and Ruby.
            </p>
            <p>
              I&apos;ve recently finished my work at{" "}
              <SolidLink video="/showcase/resume-io-sections.mp4" href="https://resume.io" external>
                resume.io
              </SolidLink>{" "}
              — the company I co-founded, and helped to build. If you have some interesting project
              or a startup idea, drop me a line, I&apos;m always happy to talk!
            </p>
          </div>
        </div>

        <div className="selected-projects__grid">
          <div className="selected-projects__item">
            <a href="https://domik.ltd" className="selected-projects__pic">
              <Image
                src={domikImg}
                fill
                placeholder="blur"
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
        <div className="mini-map__section">
          <div className="mini-map">
            {MINI_MAP_ITEMS.map((item, idx) => {
              return (
                <Showcase key={String(idx) + item.url} media={item}>
                  <a
                    className="mini-map__item"
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
