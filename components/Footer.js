import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="footer__link-below">
      ↘ You can reach out to me online via one of the links below.
    </div>
    <div className="footer__links">
      <div className="footer__line">
        <a className="footer__link" href="/static/CV Alexey Taktarov.pdf">
          CV in English
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="https://t.me/molefrog">
          Telegram
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="mailto:molefrog@gmail.com">
          Email
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="https://github.com/molefrog">
          GitHub
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="http://codepen.io/molefrog/">
          Codepen
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="https://speakerdeck.com/molefrog">
          Speaker Deck
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="https://vk.com/molefrog">
          VK
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="https://twitter.com/mlfrg">
          Twitter
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="https://angel.co/molefrog">
          AngelList
        </a>
      </div>

      <div className="footer__line">
        <a className="footer__link" href="https://instagram.com/molefrog/">
          Instagram
        </a>
      </div>
    </div>

    <div className="footer__note">
      <br /> Bonus: I write down every single movie I watched since 2010, so
      feel free to follow my{" "}
      <a href="https://letterboxd.com/molefrog/" target="_blank" rel="noopener">
        Letterboxd page
      </a>{" "}
      if you're into movies.
    </div>

    <div className="footer__copyright">
      ...<br />
      <br />
      2018. This site was build with React. Too much for a static website? I
      don't care.<br />
      <a href="https://github.com/molefrog/molefrog.github.io">Source code</a>.
    </div>
  </div>
);

export default Footer;
