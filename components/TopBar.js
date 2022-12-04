import React from "react";

const LinkSeparator = () => <span className="top-bar__link-separator">/</span>;

const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar__links">
      <a
        className="top-bar__link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://resume.io/r/vGP2z"
      >
        CV
      </a>
      <LinkSeparator />

      <a
        className="top-bar__link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/molefrog"
      >
        GitHub
      </a>
      <LinkSeparator />

      <a
        className="top-bar__link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/mlfrg"
      >
        Twitter
      </a>
      <LinkSeparator />

      <a
        className="top-bar__link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/molefrog"
      >
        Telegram
      </a>
    </div>
  </div>
);

export default TopBar;
