import React from "react";
import WrapBalancer from "react-wrap-balancer";
import { Container } from "../components/Grid";

const MagicLink = (props) => {
  const { children } = props;
  const linkProps = { href: props.href, target: props.target, rel: props.rel };

  return (
    <a className="about__link reference reference--inline" data-video={props.video} {...linkProps}>
      {children}
    </a>
  );
};

const Index = () => (
  <Container placement="inner">
    <section className="about">
      <h1 className="about__header">
        Hi, it&apos;s Alexey. <WrapBalancer>I build some web things.</WrapBalancer>
      </h1>
      <div className="about__description">
        <div className="about__text">
          <p></p>
          <p>
            Occasionally, I{" "}
            <MagicLink
              href="http://molefrog.com/stateful-animations/"
              video="/showcase/dirty-animations.mp4"
            >
              speak
            </MagicLink>{" "}
            at tech conferences, write some{" "}
            <MagicLink href="https://github.com/molefrog">open-source code</MagicLink> and teach
            other people to code. I love designing UIs, playing around with animations, and writing
            performant web apps & backends. I primarily use JS, Node, and Ruby.
          </p>
          <p>
            I&apos;ve recently finished my work at{" "}
            <MagicLink video="/showcase/resume-io-sections.mp4" href="https://resume.io">
              resume.io
            </MagicLink>{" "}
            — the company that I&apos;ve co-founded, and helped to build. If you have some
            interesting project or a startup idea, drop me a line, I&apos;m always happy to talk!
          </p>
        </div>
      </div>
      <div className="mini-map__section">
        <div className="mini-map__header">recent work & some experiments</div>
        <div className="mini-map">
          <a
            className="mini-map__item reference"
            data-video="/showcase/resume-io-sections.mp4"
            style={{
              backgroundImage: "url('/images/resume-thumb.gif')",
            }}
            href="https://resume.io/?ref=mlfrg"
          />

          <div
            className="mini-map__item reference"
            data-video="/showcase/dirty-animations.mp4"
            style={{
              backgroundImage: "url('/images/dirty-anim-thumb.gif')",
            }}
            href="http://molefrog.com/stateful-animations"
          />

          <a
            className="mini-map__item reference"
            data-video="/showcase/redux-actuator.mp4"
            style={{
              backgroundImage: "url('/images/actuator-thumb.gif')",
            }}
            href="https://github.com/molefrog/redux-actuator"
          />

          <div
            className="mini-map__item reference"
            data-video="/showcase/laxlabs.mp4"
            style={{
              backgroundImage: "url('/images/laxlabs-thumb.jpg')",
            }}
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
            data-video="/showcase/smartomato.mp4"
            style={{
              backgroundImage: "url('/images/smartomato-thumb.jpg')",
            }}
            href="http://smartomato.ru"
          />

          <a
            className="mini-map__item reference"
            data-video="/showcase/pidnn-talk.mp4"
            style={{ backgroundImage: "url('/images/pidnn-thumb.jpg')" }}
            href="http://molefrog.com/pidnn-talk"
          />

          <a
            className="mini-map__item reference"
            data-video="/showcase/graphemescope.mp4"
            style={{ backgroundImage: "url('/images/scope-thumb.gif')" }}
            href="http://codepen.io/molefrog/pen/juBad"
          />

          <a
            className="mini-map__item reference"
            data-video="/showcase/rye.mp4"
            style={{ backgroundImage: "url('/images/rye-thumb.gif')" }}
            href="http://molefrog.com/rye"
          />
        </div>
      </div>
    </section>
  </Container>
);

export default Index;
