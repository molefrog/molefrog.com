import React from "react";
import Image from "next/image";
import WrapBalancer from "react-wrap-balancer";
import { Container } from "../components/Grid";
import { SolidLink } from "../components/SolidLink";

import Showcase from "../components/Showcase";

import domikImg from "../public/images/domik-highlight.webp";
import wouterImg from "../public/images/wouter-highlight.webp";

import useLeaderThumbImg from "../public/showcase/use-leader-thumb.webp";
import useLeaderImg from "../public/showcase/use-leader.webp";
import theseGuysThumbImg from "../public/showcase/these-guys-thumb.webp";
import laxlabsThumbImg from "../public/showcase/laxlabs-thumb.webp";
import ficusThumbImg from "../public/showcase/ficus-thumb.webp";
import dirtyAnimationsThumbImg from "../public/showcase/dirty-animations-thumb.gif";
import reduxActuatorImg from "../public/showcase/redux-actuator.gif";
import reduxActuatorThumbImg from "../public/showcase/redux-actuator-thumb.gif";
import ryeThumbImg from "../public/showcase/rye-thumb.gif";
import pidnnThumbImg from "../public/showcase/pidnn-thumb.jpg";
import pplaworkThumbImg from "../public/showcase/pplawork-thumb.webp";
import pplaworkImg from "../public/showcase/pplawork.webp";
import wultraThumbImg from "../public/showcase/wultra-thumb.webp";
import wultraImg from "../public/showcase/wultra.webp";
import dateParseThumbImg from "../public/showcase/date-parse-thumb.webp";
import dateParseImg from "../public/showcase/date-parse.webp";
import railsFrontendImg from "../public/showcase/rails-frontend.webp";

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
              <LinkWithPreview
                href="https://youtube.com/playlist?list=PLU9XtFnZ-v2bp1l0a2QMdHScWYKc_scWk&si=RPuK8YmdApuYj39V"
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
                image: useLeaderImg,
                description:
                  "Experimental library for primary tab detection that uses `BroadcastChannel` and distributed leader election. Not to be used in production!",
                tags: ["2023", "React"],
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${useLeaderThumbImg.src})`,
                }}
                href="https://use-leader.surge.sh"
              />
            </Showcase>

            <Showcase
              media={{
                image: wultraImg,
                description:
                  "Demo app that shows how wouter can be used with Ultra.js, a Deno framework.",
                tags: ["2023", "Deno", "React"],
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${wultraThumbImg.src})`,
                }}
                href="https://wultra.deno.dev/"
              />
            </Showcase>

            <Showcase
              media={{
                image: pplaworkImg,
                description:
                  "$PPLAWORK – an NFT photo series that documents the lives of people at work. Featuring the film photos I captured during my travels.",
                tags: ["2023", "NFT"],
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${pplaworkThumbImg.src})`,
                }}
                href="https://sloika.xyz/mlfrg.eth/people-at-work"
              />
            </Showcase>

            <Showcase
              media={{
                video: "/showcase/dirty-animations.mp4",
                tags: "2018",
                aspectRatio: 16 / 9,
                description:
                  "'Animations in a Stateful World' is an interactive presentation I made for my HolyJS'2018 talk. It highlights principles of making fluid and stateful animations in React.",
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${dirtyAnimationsThumbImg.src})`,
                }}
                href="https://molefrog.com/etc/stateful-animations/"
              />
            </Showcase>

            <Showcase
              media={{
                image: reduxActuatorImg,
                aspectRatio: 16 / 9,
                description:
                  "Redux middleware to trigger imperative effects using pure state updates. No longer maintained.",
                tags: ["2017", "OSS", "React"],
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${reduxActuatorThumbImg.src})`,
                }}
                href="https://github.com/molefrog/redux-actuator"
              />
            </Showcase>

            <Showcase
              media={{
                description:
                  "The first version of resume.io was launched in 2016 as a simple MVP built with Rails. By 2018, I had been working on it full-time, handling both backend and frontend work. I was personally responsible for rolling out the next version of the editor.",
                tags: ["2018"],
                video: "/showcase/resume-io-sections.mp4",
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: "url('/images/resume-thumb.gif')",
                }}
                href="https://resume.io/?ref=mlfrg"
              />
            </Showcase>

            <Showcase
              media={{
                video: "/showcase/laxlabs.mp4",
                tags: ["2017"],
                description:
                  "Client work. I designed and coded the prototype of a Lacrosse drill diagram editor using Rails, React.js, react-motion and SVG.",
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${laxlabsThumbImg.src})`,
                }}
                href="https://www.lacrosselabs.io/"
              />
            </Showcase>

            <Showcase
              media={{
                video: "/showcase/these-guys.mp4",
                description:
                  "I created an Easter egg demo where you could interact with flying particles. To animate these particles, I experimented with the bird flocking algorithm.",
                tags: ["2017"],
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${theseGuysThumbImg.src})`,
                }}
                href="https://molefrog.com/etc/stateful-animations/#11"
              />
            </Showcase>

            <Showcase
              media={{
                video: "/showcase/ficus-stars.mp4",
                description:
                  "I designed and developed these real-time polls for ficus.io, an online presentation app that my friends and I built during a hackathon. The polls were built with React, D3, and React and Canvas API. The app won several awards and received funding from a local accelerator and Microsoft.",
                tags: ["startup", "2014–2018"],
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: `url(${ficusThumbImg.src})`,
                }}
                href="https://ficus.io"
              />
            </Showcase>

            <Showcase
              media={{
                image: railsFrontendImg,
                description:
                  'My talk "Give a Second Chance to Rails Frontend" presented at Rails Club 2016, was dedicated to using modern bundlers, particularly Webpack, with Ruby on Rails 4.2',
                aspectRatio: 16 / 9,
                tags: ["2016", "Ruby on Rails", "Speaking"],
              }}
            >
              <a
                className="mini-map__item"
                style={{
                  backgroundImage: "url('/images/rails-webpack-thumb.jpg')",
                }}
                href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
              />
            </Showcase>

            <Showcase
              media={{
                image: dateParseImg,
              }}
            >
              <a
                className="mini-map__item"
                data-image="/showcase/date-parse.jpg"
                style={{
                  backgroundImage: `url(${dateParseThumbImg.src})`,
                }}
                href="https://medium.com/@mlfrg/rules-of-parsing-dates-with-date-parse-c5a73525a72e"
              />
            </Showcase>

            <a
              className="mini-map__item"
              data-video="/showcase/smartomato.mp4"
              style={{
                backgroundImage: "url('/images/smartomato-thumb.jpg')",
              }}
              href="https://smartomato.ru"
            />

            <a
              className="mini-map__item"
              data-video="/showcase/graphemescope.mp4"
              style={{ backgroundImage: "url('/images/scope-thumb.gif')" }}
              href="https://codepen.io/molefrog/pen/juBad"
            />

            <Showcase
              media={{
                video: "/showcase/pidnn-talk.mp4",
                description:
                  "For the Learning Systems course, I did a presentation on the PID Neural Networks, using Deck.js and Tangle.js for draggable controls that affect the controller's performance.",
                tags: ["2013"],
              }}
            >
              <a
                className="mini-map__item"
                style={{ backgroundImage: `url(${pidnnThumbImg.src})` }}
                href="https://molefrog.com/etc/pid-neural-network/"
              />
            </Showcase>

            <Showcase
              media={{
                video: "/showcase/rye.mp4",
                description:
                  "Rye.js was my first open-source project. I wrote it in JavaScript while studying Abstract Algebra and Cryptography during my Bachelor's. ",
                tags: ["2012"],
              }}
            >
              <a
                className="mini-map__item"
                style={{ backgroundImage: `url(${ryeThumbImg.src})` }}
                href="https://molefrog.com/etc/rye-js/"
              />
            </Showcase>
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
