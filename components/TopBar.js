import React from "react";

const LinkSeparator = () => <span className="top-bar__link-separator">/</span>;

const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar__links">
      <a className="top-bar__link" href="/static/cv-alexey-taktarov.pdf">
        CV
      </a>
      <LinkSeparator />

      <a className="top-bar__link" href="https://github.com/molefrog">
        GitHub
      </a>
      <LinkSeparator />

      <a className="top-bar__link" href="https://twitter.com/mlfrg">
        Twitter
      </a>
      <LinkSeparator />

      <a className="top-bar__link" href="https://t.me/molefrog">
        Telegram
      </a>
    </div>

    <a className="top-bar__cta" href="mailto:molefrog@gmail.com">
      Send me a GIF →
    </a>
  </div>
);

export default TopBar;
