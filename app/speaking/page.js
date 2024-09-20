import Image from "next/image";
import Link from "next/link";
import WrapBalancer from "react-wrap-balancer";
import { Spoiler } from "spoiled";

import { Projector } from "@/components/Projector";
import { Container } from "@/components/Grid";
import { ShowcaseLink } from "@/components/Showcase";
import { SpeakingConference } from "@/components/SpeakingConference";

import viipuriLibraryImg from "@/public/speaking/viipuri-library.webp";
import hooksCharactersImg from "@/public/speaking/hooks-characters.webp";
import renderingImg from "@/public/speaking/rendering.webp";
import presaImg from "@/public/speaking/presa.webp";
import instaStoriesVideo from "@/public/speaking/insta-stories-demo.mp4";
import multiplayerVideo from "@/public/speaking/multiplayer-demo.mp4";
import figjamSpoiledVideo from "@/public/speaking/figjam-spoiled.mp4";
import gotMilkImg from "@/public/speaking/got-milk.webp";
import simachevaImg from "@/public/speaking/simacheva.webp";

import servSlide_1 from "@/public/speaking/serverless-1.webp";
import servSlide_2 from "@/public/speaking/serverless-2.webp";
import servSlide_3 from "@/public/speaking/serverless-3.webp";
import servSlide_4 from "@/public/speaking/serverless-4.webp";

import hooksSlide_1 from "@/public/speaking/hooks-1.webp";
import hooksSlide_2 from "@/public/speaking/hooks-2.webp";
import hooksSlide_3 from "@/public/speaking/hooks-3.webp";
import hooksSlide_4 from "@/public/speaking/hooks-4.webp";

import animSlide_1 from "@/public/speaking/animations-1.webp";
import animSlide_2 from "@/public/speaking/animations-2.webp";
import animSlide_3 from "@/public/speaking/animations-3.webp";
import animSlide_4 from "@/public/speaking/animations-4.webp";

import tricksSlide_1 from "@/public/speaking/react-tricks-1.webp";
import tricksSlide_2 from "@/public/speaking/react-tricks-2.webp";
import tricksSlide_3 from "@/public/speaking/react-tricks-3.webp";
import tricksSlide_4 from "@/public/speaking/react-tricks-4.webp";
import tricksSlide_5 from "@/public/speaking/react-tricks-5.webp";

import spoiledSlide_1 from "@/public/speaking/spoiled-1.webp";
import spoiledSlide_2 from "@/public/speaking/spoiled-2.webp";

import milkIcon from "@/public/speaking/anicon-milk.png";
import socketIcon from "@/public/speaking/anicon-socket.png";
import radioIcon from "@/public/speaking/anicon-radio.png";
import phoneIcon from "@/public/speaking/anicon-phone.png";

export default function Speaking() {
  return (
    <main>
      <Container placement="outer">
        <div className="speaking">
          {/* CSS Paint API talk */}
          <div className="speaking__talk">
            <div className="speaking__slides">
              <Projector
                title="Leveraging CSS Paint API for Realistic Particle Animation"
                slides={[spoiledSlide_1, spoiledSlide_2]}
              />
            </div>

            <div className="speaking__info">
              <h3 className="speaking__head">
                <WrapBalancer>
                  {'"Spoiled"'}: Leveraging CSS Paint API for Realistic Particle Animation{" "}
                </WrapBalancer>
              </h3>

              <div className="speaking__desc">
                <p>
                  CSS Paint API isn&apos;t new, yet it&apos;s still an experimental web API for
                  extending browser&apos;s rendering engine. Using special worklet scripts, you can
                  define custom CSS functions for drawing backgrounds, borders, custom gradients
                  etc., in other words, things you would not be able to do with a regular{" "}
                  <code>{"<canvas>"}</code>.
                </p>

                <p>
                  For this talk, I&apos;ve used Paint API to recreate a{" "}
                  <Spoiler density={0.25} theme="light" mimicWords noiseFadeDuration={0.8}>
                    Telegram-inspired spoiler
                  </Spoiler>{" "}
                  animation. I&apos;ve dived into complexities related to the stateless nature of
                  worklets, along with performance benefits and drawbacks.
                </p>

                <p>
                  I love experimenting with new ways of presenting content, so it was also fun to
                  use the{" "}
                  <ShowcaseLink
                    href="https://www.figma.com/board/GcxLloYgJ5A1e3UX6B99NO/Spoiled%3A-BarcelonaJS-Talk?node-id=0-1&t=om9qWTe6M8pKGUod-1"
                    media={{ video: figjamSpoiledVideo, aspectRatio: 1200 / 768 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FigJam board
                  </ShowcaseLink>{" "}
                  instead of regular slides for the first time.
                </p>
              </div>

              <div className="speaking__confs">
                <SpeakingConference
                  year="2024"
                  format="link"
                  href="https://www.meetup.com/barcelonajs/events/302268223/"
                >
                  BarcelonaJS
                </SpeakingConference>
                <SpeakingConference
                  year="2024"
                  format="link"
                  href="https://www.meetup.com/copenhagenjs/events/299917900/"
                >
                  CopenhagenJS
                </SpeakingConference>
              </div>
            </div>
          </div>

          {/* React Tricks talk */}
          <div className="speaking__talk">
            <div className="speaking__slides">
              <Projector
                title="React Tricks: Fast, Fit and Fun"
                slides={[tricksSlide_1, tricksSlide_2, tricksSlide_3, tricksSlide_4, tricksSlide_5]}
              />
            </div>

            <div className="speaking__info">
              <h3 className="speaking__head">
                <WrapBalancer>React Tricks: Fast, Fit and Fun</WrapBalancer>
              </h3>

              <div className="speaking__desc">
                <p>
                  In this talk, I uncovered some tricks and hacks in React that I learned while
                  maintaining a micro-library. I discussed performance and size optimizations, as
                  well as the importance of keeping object references stable when passing them down
                  as props to React components.
                </p>

                <p>
                  I talked about the non-standard use of the <code>useState</code> hook,{" "}
                  <code>cloneElement</code> API for component composition, the{" "}
                  <code>useSyncExternalStore</code> hook introduced in React 18, and its caveats; as
                  well as lesser-known non-standard hooks such as <code>useEvent</code> and more. To
                  demonstrate these tricks, we built a{" "}
                  <ShowcaseLink
                    href="https://molefrog.com/notes/react-tricks#fb9ff506bb224647be3a78276f229561"
                    media={{ video: multiplayerVideo, aspectRatio: 16 / 9 }}
                  >
                    fake multiplayer
                  </ShowcaseLink>{" "}
                  client component.
                </p>

                <p>
                  You can find the{" "}
                  <Link className="solid-link" href="/notes/react-tricks">
                    transcript of this talk{" "}
                  </Link>
                  , including these demos, in my blog.
                </p>
              </div>

              <div className="speaking__confs">
                <SpeakingConference
                  year="2024"
                  format="link"
                  href="https://guild.host/events/react-advanced-london-3n0aqe"
                >
                  React Advanced London
                </SpeakingConference>
                <SpeakingConference
                  year="2023"
                  format="link"
                  href="https://www.meetup.com/copenhagen-react-meetup/events/297182537/"
                >
                  Copenhagen React
                </SpeakingConference>
              </div>
            </div>
          </div>

          <div className="speaking__talk">
            <div className="speaking__slides">
              <Projector
                title="Practical Serverless and Edge Computing"
                slides={[servSlide_1, servSlide_2, servSlide_3, servSlide_4]}
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
                <SpeakingConference
                  year="2021"
                  format="recording"
                  href="https://youtu.be/HSmdcVhvjIA"
                >
                  HolyJS
                </SpeakingConference>
                <SpeakingConference
                  year="2020"
                  format="recording"
                  href="https://www.youtube.com/live/X1fzml5OEAQ?t=4088"
                >
                  TverIO Perf Meetup
                </SpeakingConference>
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
                <SpeakingConference
                  year="2019"
                  format="recording"
                  href="https://youtu.be/bFYxkONAmn8"
                >
                  React Amsterdam
                </SpeakingConference>
                <SpeakingConference
                  year="2019"
                  format="recording"
                  href="https://youtu.be/3LnMGyJ0M40"
                >
                  React Russia
                </SpeakingConference>
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
                <SpeakingConference
                  year="2018"
                  format="recording"
                  href="https://youtu.be/bn3je3u-UIo"
                >
                  React Kyiv
                </SpeakingConference>
                <SpeakingConference
                  year="2017"
                  format="recording"
                  href="https://youtu.be/Ug_dwJa07Os"
                >
                  HolyJS
                </SpeakingConference>
                <SpeakingConference year="2016">Krasnodar Dev Days</SpeakingConference>
              </div>
            </div>
          </div>

          {/* other conferences */}

          <section className="speaking__rest">
            <div className="speaking__talk">
              <div className="speaking__info">
                <div className="speaking__title-with-icon">
                  <AnimatedIcon icon={phoneIcon} />

                  <h3 className="speaking__head">
                    <WrapBalancer>React Hooks: Iteractivity in Functional Components</WrapBalancer>
                  </h3>
                </div>

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
                  <SpeakingConference
                    year="2021"
                    format="slides"
                    href="https://speakerdeck.com/molefrog/react-hooks-iteractivity-in-functional-components"
                  >
                    SFU
                  </SpeakingConference>
                </div>
              </div>
            </div>

            <div className="speaking__talk">
              <div className="speaking__info">
                <div className="speaking__title-with-icon">
                  <AnimatedIcon icon={radioIcon} />

                  <h3 className="speaking__head">
                    <WrapBalancer>
                      Can Design Principles Help me Become a Better Software Engineer?
                    </WrapBalancer>
                  </h3>
                </div>

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
                  <SpeakingConference
                    year="2019"
                    format="recording"
                    href="https://youtu.be/08I6pIpXsgU"
                  >
                    TverIO Design
                  </SpeakingConference>
                  <SpeakingConference year="2019">SouthConf</SpeakingConference>
                  <SpeakingConference year="2019">SPB Frontend</SpeakingConference>
                </div>
              </div>
            </div>

            <div className="speaking__talk">
              <div className="speaking__info">
                <div className="speaking__title-with-icon">
                  <AnimatedIcon icon={socketIcon} />

                  <h3 className="speaking__head">
                    <WrapBalancer>Give a Second Chance to Rails Frontend!</WrapBalancer>
                  </h3>
                </div>

                <div className="speaking__desc">
                  <p>
                    How to bundle frontend with Webpack in Rails 4 projects. Brief overview of
                    Webpack features: HMR, code splitting, <code>manifest.json</code> generation.
                  </p>
                </div>

                <div className="speaking__confs">
                  <SpeakingConference
                    year="2016"
                    format="slides"
                    href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
                  >
                    Rails Club
                  </SpeakingConference>
                  <SpeakingConference year="2017">Rails Meetup RND</SpeakingConference>
                </div>
              </div>
            </div>

            <div className="speaking__talk">
              <div className="speaking__info">
                <div className="speaking__title-with-icon">
                  <AnimatedIcon icon={milkIcon} />

                  <h3 className="speaking__head">
                    <WrapBalancer>
                      Got Milk? A Short Introduction to Node.js and Event-Driven Programming
                    </WrapBalancer>
                  </h3>
                </div>

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
                  <SpeakingConference
                    year="2012"
                    format="slides"
                    href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
                  >
                    WebDevClub, MMCS
                  </SpeakingConference>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

const AnimatedIcon = ({ icon }) => {
  return (
    <div className="sp-icon">
      {/** Squircle background */}
      <svg width="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.187012 24C0.187012 12.6863 0.187012 7.02944 3.70173 3.51472C7.21645 0 12.8733 0 24.187 0C35.5007 0 41.1576 0 44.6723 3.51472C48.187 7.02944 48.187 12.6863 48.187 24C48.187 35.3137 48.187 40.9706 44.6723 44.4853C41.1576 48 35.5007 48 24.187 48C12.8733 48 7.21645 48 3.70173 44.4853C0.187012 40.9706 0.187012 35.3137 0.187012 24Z"
          fill="currentColor"
        />
      </svg>

      <Image src={icon} width="54" height="54" className="sp-icon__img" alt="" aria-hidden />
    </div>
  );
};
