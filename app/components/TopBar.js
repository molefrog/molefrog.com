import React from "react";

const LinkSeparator = () => <span className="top-bar__link-separator">/</span>;

const TopBar = () => (
  <div className="top-bar">
    <a className="top-bar__link" href="/CV Alexey Taktarov.pdf">
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
);

export default TopBar;
