import React from "react";
import WrapBalancer from "react-wrap-balancer";

import { BannerCV } from "../BannerCV";
import { Container } from "../Grid";

import Image from "next/image";
import logo from "./logo.svg";

const Footer = () => (
  <footer className="footer">
    <Container placement="inner">
      <div className="footer__main">
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
      </div>
    </Container>

    <Container placement="inner" className="footer__additional">
      <div className="footer__side-note">
        <Image width={32} className="footer__logo" src={logo} alt="molefrog.com" />

        <WrapBalancer>
          The source code of this website can be found on{" "}
          <a
            href="https://github.com/molefrog/molefrog.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . The website uses{" "}
          <a
            className="footer__font footer__font--redaction"
            href="https://redaction.us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redaction
          </a>{" "}
          and{" "}
          <a
            className="footer__font footer__font--dseg7"
            href="https://www.keshikan.net/fonts-e.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            DSEG
          </a>{" "}
          typefaces, which are distributed under the Open Font License. Hosted on{" "}
          <a href="https://pages.cloudflare.com/" target="_blank" rel="noopener noreferrer">
            Cloudflare Pages
          </a>
          .
        </WrapBalancer>

        <p>
          <WrapBalancer>
            Bonus: I have been logging every single movie I have watched since 2010, feel free to
            follow my{" "}
            <a href="https://letterboxd.com/molefrog/" target="_blank" rel="noopener noreferrer">
              Letterboxd account
            </a>{" "}
            if you&apos;re into movies.
          </WrapBalancer>
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
