import { useState, useEffect, useRef } from "react";
import WrapBalancer from "react-wrap-balancer";
import Image from "next/image";
import useMouse from "@react-hook/mouse-position";

import { Container } from "../components/Grid";
import Showcase, { ShowcaseLink } from "../components/Showcase";

import viipuriLibraryImg from "../public/speaking/viipuri-library.webp";
import hooksCharactersImg from "../public/speaking/hooks-characters.webp";
import renderingImg from "../public/speaking/rendering.webp";
import presaImg from "../public/speaking/presa.webp";
import instaStoriesVideo from "../public/speaking/insta-stories-demo.mp4";
import gotMilkImg from "../public/speaking/got-milk.webp";
import simachevaImg from "../public/speaking/simacheva.webp";

import { Segmented } from "../components/Segmented";

import servSlide_1 from "../public/speaking/serverless-1.jpg";
import servSlide_2 from "../public/speaking/serverless-2.jpg";

import hooksSlide_1 from "../public/speaking/hooks-1.jpg";
import hooksSlide_2 from "../public/speaking/hooks-2.jpg";
import hooksSlide_3 from "../public/speaking/hooks-3.jpg";
import hooksSlide_4 from "../public/speaking/hooks-4.jpg";

import animSlide_1 from "../public/speaking/animations-1.png";
import animSlide_2 from "../public/speaking/animations-2.png";
import animSlide_3 from "../public/speaking/animations-3.png";
import animSlide_4 from "../public/speaking/animations-4.png";

const Projector = ({ slides, title }) => {
  return (
    <div className="projector" style={{ "--slides-n": slides.length }}>
      <div className="projector__slides">
        {slides.slice().map((slide, i) => (
          <div className="projector__slide-step" key={slide.src + String(i)}>
            <div className="projector__slide">
              <Image
                className="projector__slide-img"
                placeholder="blur"
                alt={`${title} Slide #${i + 1}`}
                fill
                src={slide}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Conference = ({ year, children, format, ...props }) => {
  const ref = useRef(null);
  const pos = useMouse(ref, { fps: 24 });

  const formats = {
    recording: "~REC",
    slides: "DECK",
  };

  const label = pos.isOver ? formats[format] || "none" : year;

  return (
    <a className="speaking__conf" {...props} ref={ref}>
      {children}
      <span className="speaking__conf-year">
        <Segmented animated>{label}</Segmented>
      </span>
    </a>
  );
};

export default function Speaking() {
  return (
    <main>
      <Container placement="outer">
        <div className="speaking">
          <div className="speaking__talk">
            <div className="speaking__slides">
              <Projector
                title="Practical Serverless and Edge Computing"
                slides={[servSlide_1, servSlide_2]}
              />
            </div>

            <div className="speaking__info">
              <h3 className="speaking__head">
                <WrapBalancer>Practical Serverless and Edge Computing</WrapBalancer>
              </h3>

              <div className="speaking__desc">
                <p>
                  In this talk, I provided an overview of serverless functions in Vercel and
                  Cloudflare Workers. I covered frontend microservices, JWT authorization, dynamic
                  CDNs, caching, <code>stale-while-revalidate</code>, and more.
                </p>

                <p>
                  Most of the examples featured in this presentation are based on the real
                  challenges that my team at resume.io had to solve, including increasing TTFB,
                  building scalable{" "}
                  <ShowcaseLink media={{ image: renderingImg, aspectRatio: "auto" }}>
                    PDF/DOCX rendering
                  </ShowcaseLink>
                  , serving OG previews, and automatically injecting Critical CSS at the edge.
                </p>
              </div>

              <div className="speaking__confs">
                <Conference year="2021" format="recording" href="https://youtu.be/HSmdcVhvjIA">
                  HolyJS
                </Conference>
                <Conference
                  year="2020"
                  format="recording"
                  href="https://www.youtube.com/live/X1fzml5OEAQ?t=4088"
                >
                  TverIO Perf Meetup
                </Conference>
              </div>
            </div>
          </div>

          <div className="speaking__talk">
            <div className="speaking__slides">
              <Projector
                title="React Hooks in action"
                slides={[hooksSlide_1, hooksSlide_2, hooksSlide_3, hooksSlide_4]}
              />
            </div>

            <div className="speaking__info">
              <h3 className="speaking__head">
                <WrapBalancer>Hooks in action: implementing a 1KB React router</WrapBalancer>
              </h3>

              <div className="speaking__desc">
                <p>
                  A comprehensive introduction to React hooks, including a step-by-step tutorial on
                  building a fully-functional router library. This presentation showcases my work on
                  the initial version of wouter, an open-source project that is still actively
                  maintained. The goal was to demonstrate the built-in hooks provided by React and
                  how they can be combined.
                </p>

                <p>
                  I am proud to have presented this at a{" "}
                  <ShowcaseLink
                    href="https://www.alvaraalto.fi/en/architecture/alvar-aalto-library/"
                    media={{ image: viipuriLibraryImg }}
                  >
                    Viipuri Library
                  </ShowcaseLink>{" "}
                  in Vyborg, which was designed by Alvar Aalto. The library&apos;s emphasis on
                  natural lighting inspired me to create{" "}
                  <ShowcaseLink
                    href="https://www.instagram.com/p/B0AlB5aCqdS/"
                    media={{ image: hooksCharactersImg }}
                  >
                    illustrated icons
                  </ShowcaseLink>{" "}
                  for each hook mentioned in the talk, together with my friend and illustrator,{" "}
                  <ShowcaseLink
                    media={{ image: simachevaImg, aspectRatio: "auto" }}
                    href="https://www.instagram.com/simacheva.katya/"
                  >
                    Katya Simacheva
                  </ShowcaseLink>
                  .
                </p>
              </div>

              <div className="speaking__confs">
                <Conference year="2019" format="recording" href="https://youtu.be/bFYxkONAmn8">
                  React Amsterdam
                </Conference>
                <Conference year="2019" format="recording" href="https://youtu.be/3LnMGyJ0M40">
                  React Russia
                </Conference>
              </div>
            </div>
          </div>

          <div className="speaking__talk">
            <div className="speaking__slides">
              <Projector
                title="React Animations talk"
                slides={[animSlide_1, animSlide_2, animSlide_3, animSlide_4]}
              />
            </div>

            <div className="speaking__info">
              <h3 className="speaking__head">
                <WrapBalancer>Animations in a Stateful World</WrapBalancer>
              </h3>

              <div className="speaking__desc">
                <p>
                  A highly interactive presentation that explores the principles of creating fluid
                  and stateful animations in React. In this talk, I cover CSS transitions,
                  spring-based animations with <code>react-spring</code>, Canvas animations, and
                  exit transitions.
                </p>

                <p>
                  I&apos;ve spent an incredible amount of time polishing the slides and coding the
                  demos that you can interact with. These demos are running on my own React
                  presentation engine —{" "}
                  <ShowcaseLink
                    href="https://github.com/molefrog/presa"
                    media={{ image: presaImg, aspectRatio: "auto" }}
                  >
                    Presa
                  </ShowcaseLink>
                  , that I had fun hacking while procrastinating on the slides.
                </p>

                <p>
                  The talk has been well received by the audience and was included in the list of{" "}
                  <a
                    className="solid-link"
                    href="https://habr.com/ru/companies/jugru/articles/350164/#:~:text=%D0%90%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D0%B8%20%D0%B2%20%D0%BC%D0%B8%D1%80%D0%B5%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B9"
                  >
                    Top-10 HolyJS
                  </a>{" "}
                  talks.
                </p>
              </div>

              <div className="speaking__confs">
                <Conference year="2018" format="recording" href="https://youtu.be/bn3je3u-UIo">
                  React Kyiv
                </Conference>
                <Conference year="2017" format="recording" href="https://youtu.be/Ug_dwJa07Os">
                  HolyJS
                </Conference>
                <Conference year="2017">Krasnodar Dev Days</Conference>
              </div>
            </div>
          </div>

          {/* other conferences */}

          <section className="speaking__rest">
            <div className="speaking__talk">
              <div className="speaking__info">
                <h3 className="speaking__head">
                  <WrapBalancer>React Hooks: Iteractivity in Functional Components</WrapBalancer>
                </h3>

                <div className="speaking__desc">
                  <p>
                    Guest lecture for the Web Development class at the SFU university with live
                    coding demos. React Hooks overview: from <code>useState</code> to{" "}
                    <code>useImperativeHandle</code>. How rendering in React works under the hood.
                  </p>

                  <p>
                    The final demo of this lecture was a simplified{" "}
                    <ShowcaseLink
                      href="https://codesandbox.io/s/react-hooks-playground-kdpxx"
                      media={{ video: instaStoriesVideo, aspectRatio: 16 / 9 }}
                    >
                      Instagram stories
                    </ShowcaseLink>{" "}
                    look-alike app.
                  </p>
                </div>

                <div className="speaking__confs">
                  <Conference
                    year="2021"
                    format="slides"
                    href="https://speakerdeck.com/molefrog/react-hooks-iteractivity-in-functional-components"
                  >
                    SFU
                  </Conference>
                </div>
              </div>
            </div>

            <div className="speaking__talk">
              <div className="speaking__info">
                <h3 className="speaking__head">
                  <WrapBalancer>
                    Can Design Principles Help me Become a Better Software Engineer?
                  </WrapBalancer>
                </h3>

                <div className="speaking__desc">
                  <p>
                    How is Panasonic tape recorder related to the APIs we write and deploy? And do
                    programmers need to be concerned of how their code will be used by others?
                  </p>

                  <p>
                    Inspired by the history of design and Bauhas, I&apos;ve tried to draw a parallel
                    between the design principles and coding best practices.
                  </p>
                </div>

                <div className="speaking__confs">
                  <Conference year="2019" format="recording" href="https://youtu.be/08I6pIpXsgU">
                    TverIO Design
                  </Conference>
                  <Conference year="2019">SouthConf</Conference>
                  <Conference year="2018">SPB Frontend</Conference>
                </div>
              </div>
            </div>

            <div className="speaking__talk">
              <div className="speaking__info">
                <h3 className="speaking__head">
                  <WrapBalancer>Give a Second Chance to Rails Frontend!</WrapBalancer>
                </h3>

                <div className="speaking__desc">
                  <p>
                    How to bundle frontend with Webpack in Rails 4 projects. Brief overview of
                    Webpack features: HMR, code splitting, <code>manifest.json</code> generation.
                  </p>
                </div>

                <div className="speaking__confs">
                  <Conference
                    year="2016"
                    format="slides"
                    href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
                  >
                    Rails Club
                  </Conference>
                  <Conference year="2017">Rails Meetup RND</Conference>
                </div>
              </div>
            </div>

            <div className="speaking__talk">
              <div className="speaking__info">
                <h3 className="speaking__head">
                  <WrapBalancer>
                    Got Milk? A Short Introduction to Node.js and Event-Driven Programming
                  </WrapBalancer>
                </h3>

                <div className="speaking__desc">
                  <p>
                    When I was first introduced to Node.js, it blew my mind. I was fascinated with
                    its simplicity and a hacker spirit of the growing Node community.
                  </p>

                  <p>
                    In this short presentation that I made for a Web Dev club at my university, I
                    explained how the JS event loop works using an analogy of{" "}
                    <ShowcaseLink
                      href="https://speakerdeck.com/molefrog/got-milk-a-short-introduction-to-nodejs-and-event-driven-programming"
                      media={{ image: gotMilkImg, aspectRatio: "auto" }}
                    >
                      buying milk
                    </ShowcaseLink>{" "}
                    at the supermarket.
                  </p>
                </div>

                <div className="speaking__confs">
                  <Conference
                    year="2012"
                    format="slides"
                    href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
                  >
                    WebDevClub, MMCS
                  </Conference>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
