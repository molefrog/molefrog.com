import React, { Component } from "react";

import TopBar from "components/TopBar";
import Footer from "components/Footer";

const MagicLink = props => {
  const { children } = props;
  const linkProps = { href: props.href, target: props.target, rel: props.rel };

  return (
    <a
      className="reference reference--inline"
      data-video={props.video}
      {...linkProps}
    >
      {children}
    </a>
  );
};

const Content = () => (
  <div>
    <section className="about">
      <h1 className="about__header">Hello.</h1>

      <div className="about__description">
        <div className="about__text">
          <p>
            I'm <MagicLink>Alexey Taktarov</MagicLink> — a startup maker and a
            consultant with software engineering background: I design, develop
            and launch web products from scratch.
          </p>

          <p>
            I occasionally{" "}
            <MagicLink
              href="http://molefrog.com/stateful-animations/"
              video="/showcase/dirty-animations.mp4"
            >
              speak
            </MagicLink>{" "}
            at tech and startup conferences and write some{" "}
            <MagicLink href="https://github.com/molefrog">
              open-source code
            </MagicLink>. The stack of the tools I use on an everyday basis
            includes React/Redux, Node.js, Ruby on Rails and Sketch.
          </p>
          <p>
            I've co-launched{" "}
            <MagicLink
              video="/showcase/resume-io-sections.mp4"
              href="https://resume.io"
            >
              resume.io
            </MagicLink>{" "}
            — a simple online tool for job seekers, which is now the most
            upvoted resume builder on{" "}
            <MagicLink href="https://www.producthunt.com/posts/resume-io">
              Product Hunt
            </MagicLink>{" "}
            with more than 2 million resumes created. Before joining resume.io
            as a full-time tech lead, I worked as a frontend engineer and
            designer at{" "}
            <MagicLink href="https://getshogun.com">Shogun</MagicLink>
            (YC'18 applicant).
          </p>
        </div>
      </div>

      <section className="mini-map__section">
        <div className="mini-map__header">Recent projects & activities</div>
        <div className="mini-map">
          <a
            className="mini-map__item reference"
            data-video="/showcase/resume-io-sections.mp4"
            style={{ backgroundImage: "url('/images/resume-thumb.gif')" }}
            href="https://resume.io"
          />

          <div
            className="mini-map__item reference"
            data-video="/showcase/dirty-animations.mp4"
            style={{ backgroundImage: "url('/images/dirty-anim-thumb.gif')" }}
          />

          <a
            className="mini-map__item reference"
            data-video="/showcase/redux-actuator.mp4"
            style={{ backgroundImage: "url('/images/actuator-thumb.gif')" }}
            href="https://github.com/molefrog/redux-actuator"
          />

          <div
            className="mini-map__item reference"
            data-video="/showcase/laxlabs.mp4"
            style={{ backgroundImage: "url('/images/laxlabs-thumb.jpg')" }}
          />

          <a
            className="mini-map__item reference"
            data-image="/showcase/rails-webpack.jpg"
            style={{
              backgroundImage: "url('/images/rails-webpack-thumb.jpg')"
            }}
            href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
          />

          <a
            className="mini-map__item reference"
            data-image="/showcase/date-parse.jpg"
            style={{ backgroundImage: "url('/images/date-parse-thumb.jpg')" }}
            href="https://medium.com/@mlfrg/rules-of-parsing-dates-with-date-parse-c5a73525a72e"
          />

          <a
            className="mini-map__item reference"
            data-video="/showcase/smartomato.mp4"
            style={{ backgroundImage: "url('/images/smartomato-thumb.jpg')" }}
            href="http://smartomato.ru"
          />

          <a
            className="mini-map__item reference"
            data-video="/showcase/pidnn-talk.mp4"
            style={{ backgroundImage: "url('/images/pidnn-thumb.jpg')" }}
            href="http://molefrog.com/piddn-talk"
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
      </section>
    </section>
  </div>
);

const Site = () => (
  <div className="site__container">
    <div className="preview" />
    <div className="site__main-layout">
      <main className="site__content">
        <TopBar />
        <Content />
        <Footer />
      </main>
    </div>
  </div>
);

export default Site;
