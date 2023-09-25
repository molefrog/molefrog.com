import { Container } from "../components/Grid";
import WrapBalancer from "react-wrap-balancer";

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
                  I am proud to have presented this at a Viipuri Library in Vyborg, which was
                  designed by Alvar Aalto. The library&apos;s emphasis on natural lighting inspired
                  me to create illustrated icons for each hook mentioned in the talk, together with
                  my friend and illustrator, Katya Simacheva.
                </p>
              </div>

              <div className="speaking__confs">
                <Conference year="2019">React Russia </Conference>
                <Conference year="2019">React Amsterdam</Conference>
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
                  presentation engine — Presa, that I had fun hacking while procrastinating on the
                  slides.
                </p>

                <p>
                  The talk has been well received by the audience and was included in the list of
                  top-10 HolyJS talks.
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
