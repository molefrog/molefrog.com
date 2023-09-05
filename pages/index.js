import React from "react";
import Image from "next/image";
import WrapBalancer from "react-wrap-balancer";
import { Container } from "../components/Grid";
import { SolidLink } from "../components/SolidLink";

import Showcase from "../components/Showcase";

import domikImg from "../public/images/domik-highlight.webp";
import wouterImg from "../public/images/wouter-highlight.webp";

const LinkWithPreview = ({ video, ...props }) => (
  <SolidLink className="reference reference--inline" data-video={video} {...props} />
);

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
              <LinkWithPreview
                href="http://molefrog.com/stateful-animations/"
                video="/showcase/dirty-animations.mp4"
                external
              >
                speak
              </LinkWithPreview>{" "}
              at tech conferences, contribute to{" "}
              <LinkWithPreview href="https://github.com/molefrog" external>
                open-source
              </LinkWithPreview>{" "}
              and teach others to code. I love designing UIs, playing around with animations, and
              writing performant web apps & backends. I primarily use JS, Node/Deno, and Ruby.
            </p>
            <p>
              I&apos;ve recently finished my work at{" "}
              <LinkWithPreview
                video="/showcase/resume-io-sections.mp4"
                href="https://resume.io"
                external
              >
                resume.io
              </LinkWithPreview>{" "}
              — the company that I&apos;ve co-founded, and helped to build. If you have some
              interesting project or a startup idea, drop me a line, I&apos;m always happy to talk!
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
            <Showcase
              media={{
                video: "/showcase/resume-io-sections.mp4",
              }}
            >
              <a
                className="mini-map__item reference"
                style={{
                  backgroundImage: "url('/images/resume-thumb.gif')",
                }}
                href="https://resume.io/?ref=mlfrg"
              />
            </Showcase>

            <Showcase
              media={{
                video: "/showcase/dirty-animations.mp4",
                description:
                  "'Animations in a Stateful World' is an interactive presentation I made for my HolyJS'2018 talk. It highlights principles of making fluid and stateful animations in React.",
              }}
            >
              <a
                className="mini-map__item reference"
                style={{
                  backgroundImage: "url('/images/dirty-anim-thumb.gif')",
                }}
                href="https://molefrog.com/etc/stateful-animations/"
              />
            </Showcase>

            <a
              className="mini-map__item reference"
              data-video="/showcase/redux-actuator.mp4"
              style={{
                backgroundImage: "url('/images/actuator-thumb.gif')",
              }}
              href="https://github.com/molefrog/redux-actuator"
            />

            <a
              className="mini-map__item reference"
              data-video="/showcase/laxlabs.mp4"
              style={{
                backgroundImage: "url('/images/laxlabs-thumb.jpg')",
              }}
              href="https://www.lacrosselabs.io/"
            />

            <a
              className="mini-map__item reference"
              data-image="/showcase/rails-webpack.jpg"
              style={{
                backgroundImage: "url('/images/rails-webpack-thumb.jpg')",
              }}
              href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
            />

            <a
              className="mini-map__item reference"
              data-image="/showcase/date-parse.jpg"
              style={{
                backgroundImage: "url('/images/date-parse-thumb.jpg')",
              }}
              href="https://medium.com/@mlfrg/rules-of-parsing-dates-with-date-parse-c5a73525a72e"
            />

            <a
              className="mini-map__item reference"
              style={{
                backgroundImage: "url('/images/ficus-thumb.jpg')",
              }}
              href="https://ficus.io"
            />

            <a
              className="mini-map__item reference"
              data-video="/showcase/smartomato.mp4"
              style={{
                backgroundImage: "url('/images/smartomato-thumb.jpg')",
              }}
              href="https://smartomato.ru"
            />

            <a
              className="mini-map__item reference"
              data-video="/showcase/pidnn-talk.mp4"
              style={{ backgroundImage: "url('/images/pidnn-thumb.jpg')" }}
              href="https://molefrog.com/etc/pid-neural-network/"
            />

            <a
              className="mini-map__item reference"
              data-video="/showcase/graphemescope.mp4"
              style={{ backgroundImage: "url('/images/scope-thumb.gif')" }}
              href="https://codepen.io/molefrog/pen/juBad"
            />

            <a
              className="mini-map__item reference"
              data-video="/showcase/rye.mp4"
              style={{ backgroundImage: "url('/images/rye-thumb.gif')" }}
              href="https://molefrog.com/etc/rye-js/"
            />
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
