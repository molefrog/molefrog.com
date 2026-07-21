"use client";

import { Spoiler } from "spoiled";
import { play } from "cuelume";

export default function Sketches() {
  const onHiddenChange = (hidden: boolean) => {
    if (!hidden) play("whisper");
  };

  return (
    <>
      <p>
        I became curious whether the Telegram spoiler effect could be recreated on the web.{" "}
        <Spoiler theme="light" density={0.2} onHiddenChange={onHiddenChange}>
          It turns out it can be, but I had to use the CSS Paint API to achieve proper text wrapping
          and reveal animation.
        </Spoiler>{" "}
        Sadly, this is not yet supported in Safari and Firefox, so a{" "}
        <Spoiler forceFallback theme="light" onHiddenChange={onHiddenChange}>
          static fallback
        </Spoiler>{" "}
        is used instead — this is the best I could come up with.
      </p>

      <p>
        I&apos;ve published this as a standalone{" "}
        <a href="https://github.com/molefrog/spoiled">React component</a> so you can use it in your
        projects, but be aware it&apos;s still experimental.
      </p>
    </>
  );
}
