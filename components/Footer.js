import React from "react";

const FooterCV = ({ resumeSSID }) => {
  const cache = new Date().getMonth();
  const imageSrc = `https://ssr.resume.tools/to-image/ssid-${resumeSSID}-1.webp?size=320&cache=${cache}`;
  const url = `https://resume.io/r/${resumeSSID}`;

  return (
    <div className="footer-cv">
      <a href={url} className="footer-cv__banner" target="_blank" rel="noopener noreferrer">
        <div className="footer-cv__preview-col"></div>

        <div>
          <div className="footer-cv__label">Read my CV →</div>
          <div className="footer-cv__sub-label">hosted on resume.io</div>
        </div>

        <img className="footer-cv__page" src={imageSrc} alt="Alexey Taktarov, CV" />
      </a>
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <div className="footer__reach-out">
      ↘ You can reach out to me online via one of the links below
    </div>

    <div className="footer__links">
      <FooterCV resumeSSID="vGP2z" />

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
);

export default Footer;
