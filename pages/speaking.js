import { Container } from "../components/Grid";
import WrapBalancer from "react-wrap-balancer";
import Showcase, { ShowcaseLink } from "../components/Showcase";

import viipuriLibraryImg from "../public/speaking/viipuri-library.webp";
import hooksCharactersImg from "../public/speaking/hooks-characters.webp";

const Conference = ({ year, children }) => {
  return (
    <div className="speaking__conf">
      {children}
      <span className="speaking__conf-year">{year}</span>
    </div>
  );
};

export default function Speaking() {
  return (
    <main>
      <Container placement="outer">
        <div className="speaking">
          <div className="speaking__talk">
            <div className="speaking__slides">
              <div className="projector">
                <div className="projector__slide" />
              </div>
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
                  <a className="solid-link" href="https://www.instagram.com/simacheva.katya/">
                    Katya Simacheva
                  </a>
                  .
                </p>
              </div>

              <div className="speaking__confs">
                <Conference year="2019">React Amsterdam</Conference>
                <Conference year="2019">React Russia </Conference>
              </div>
            </div>
          </div>

          <div className="speaking__talk">
            <div className="speaking__slides">
              <div className="projector">
                <div className="projector__slide projector__slide--anim" />
              </div>
            </div>

            <div className="speaking__info">
              <h3 className="speaking__head">
                <WrapBalancer>Animations in a Stateful World</WrapBalancer>
              </h3>

              <div className="speaking__desc">
                <p>
                  A highly interactive presentation that explores the principles of creating fluid
                  and stateful animations in React. In this talk, I cover CSS transitions,
                  spring-based animations with react-spring, Canvas animations, and exit
                  transitions.
                </p>

                <p>
                  I&apos;ve spent an incredible amount of time polishing the slides and coding the
                  demos that you can interact with. These demos are running on my own React
                  presentation engine —{" "}
                  <a className="solid-link" href="https://github.com/molefrog/presa">
                    Presa
                  </a>
                  , that I had fun hacking while procrastinating on the slides.
                </p>

                <p>
                  The talk has been well received by the audience and was included in the list of
                  <a
                    className="solid-link"
                    href="https://habr.com/ru/companies/jugru/articles/350164/#:~:text=%D0%90%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D0%B8%20%D0%B2%20%D0%BC%D0%B8%D1%80%D0%B5%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B9"
                  >
                    top-10 HolyJS
                  </a>{" "}
                  talks.
                </p>
              </div>

              <div className="speaking__confs">
                <Conference year="2018">React Kyiv</Conference>
                <Conference year="2017">HolyJS</Conference>
                <Conference year="2017">Krasnodar Dev Days</Conference>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
