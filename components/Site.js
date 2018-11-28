import React, { Component } from "react";

import TopBar from "./TopBar";
import Footer from "./Footer";

const MagicLink = props => {
  const { children } = props;
  const linkProps = { href: props.href, target: props.target, rel: props.rel };

  return (
    <a
      className="about__link reference reference--inline"
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
              video="/static/showcase/dirty-animations.mp4"
            >
              speak
            </MagicLink>{" "}
            at tech and startup conferences and write some{" "}
            <MagicLink href="https://github.com/molefrog">
              open-source code
            </MagicLink>. The stack of the tools I use on an everyday basis
            includes React, Ruby on Rails, Node.js and Sketch.
          </p>
          <p>
            I've co-founded{" "}
            <MagicLink
              video="/static/showcase/resume-io-sections.mp4"
              href="https://resume.io"
            >
              resume.io
            </MagicLink>{" "}
            — an online tool for job seekers, which is now the most upvoted
            resume builder on{" "}
            <MagicLink href="https://www.producthunt.com/posts/resume-io">
              Product Hunt
            </MagicLink>{" "}
            with more than 2 million resumes created. Before joining resume.io
            full-time, I worked as a frontend engineer and designer at{" "}
            <MagicLink href="https://getshogun.com">Shogun</MagicLink> — a web
            page builder for e-commerce sites, YC'18 applicant.
          </p>
        </div>
      </div>

      <section className="mini-map__section">
        <div className="mini-map__header">Recent projects & activities</div>
        <div className="mini-map">
          <a
            className="mini-map__item reference"
            data-video="/static/showcase/resume-io-sections.mp4"
            style={{
              backgroundImage: "url('/static/images/resume-thumb.gif')"
            }}
            href="https://resume.io"
          />

          <div
            className="mini-map__item reference"
            data-video="/static/showcase/dirty-animations.mp4"
            style={{
              backgroundImage: "url('/static/images/dirty-anim-thumb.gif')"
            }}
          />

          <a
            className="mini-map__item reference"
            data-video="/static/showcase/redux-actuator.mp4"
            style={{
              backgroundImage: "url('/static/images/actuator-thumb.gif')"
            }}
            href="https://github.com/molefrog/redux-actuator"
          />

          <div
            className="mini-map__item reference"
            data-video="/static/showcase/laxlabs.mp4"
            style={{
              backgroundImage: "url('/static/images/laxlabs-thumb.jpg')"
            }}
          />

          <a
            className="mini-map__item reference"
            data-image="/static/showcase/rails-webpack.jpg"
            style={{
              backgroundImage: "url('/static/images/rails-webpack-thumb.jpg')"
            }}
            href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend"
          />

          <a
            className="mini-map__item reference"
            data-image="/static/showcase/date-parse.jpg"
            style={{
              backgroundImage: "url('/static/images/date-parse-thumb.jpg')"
            }}
            href="https://medium.com/@mlfrg/rules-of-parsing-dates-with-date-parse-c5a73525a72e"
          />

          <a
            className="mini-map__item reference"
            data-video="/static/showcase/smartomato.mp4"
            style={{
              backgroundImage: "url('/static/images/smartomato-thumb.jpg')"
            }}
            href="http://smartomato.ru"
          />

          <a
            className="mini-map__item reference"
            data-video="/static/showcase/pidnn-talk.mp4"
            style={{ backgroundImage: "url('/static/images/pidnn-thumb.jpg')" }}
            href="http://molefrog.com/piddn-talk"
          />

          <a
            className="mini-map__item reference"
            data-video="/static/showcase/graphemescope.mp4"
            style={{ backgroundImage: "url('/static/images/scope-thumb.gif')" }}
            href="http://codepen.io/molefrog/pen/juBad"
          />

          <a
            className="mini-map__item reference"
            data-video="/static/showcase/rye.mp4"
            style={{ backgroundImage: "url('/static/images/rye-thumb.gif')" }}
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
