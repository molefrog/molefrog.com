import React from "react";

import { BannerCV } from "./BannerCV";

const Footer = () => (
  <footer className="footer">
    <div className="layout__container">
      <div className="footer__reach-out">
        You can reach out to me online via one of the links below
      </div>

      <div className="footer__links">
        <div className="footer__cv">
          <BannerCV resumeSSID="vGP2z" />
        </div>

        <div className="footer__line">
          <a
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/molefrog"
          >
            GitHub
          </a>
        </div>

        <div className="footer__line">
          <a
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/molefrog"
          >
            Telegram
          </a>
        </div>

        <div className="footer__line">
          <a
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mlfrg"
          >
            Twitter
          </a>
        </div>

        <div className="footer__line">
          <a
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://codepen.io/molefrog/"
          >
            Codepen
          </a>
        </div>

        <div className="footer__line">
          <a
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://speakerdeck.com/molefrog"
          >
            Speaker Deck
          </a>
        </div>

        <div className="footer__line">
          <a
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/@molefrog"
          >
            Unsplash
          </a>
        </div>
      </div>

      <div className="footer__side-note">
        Bonus: I write down every single movie I've watched since 2010, so feel free to follow my{" "}
        <a href="https://letterboxd.com/molefrog/" target="_blank" rel="noopener noreferrer">
          Letterboxd account
        </a>{" "}
        if you're into movies
      </div>
    </div>
  </footer>
);

export default Footer;
