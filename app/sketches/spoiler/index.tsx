"use client";

import { useRef, useEffect } from "react";
import { Spoiler } from "spoiled";

export default function Sketches() {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <p>
        I became curious whether the Telegram spoiler effect could be recreated on the web.{" "}
        <Spoiler theme="light" density={0.2}>
          It turns out it can be, but I had to use the CSS Paint API to achieve proper text wrapping
          and reveal animation.
        </Spoiler>{" "}
        Sadly, this is not yet supported in Safari and Firefox, so a{" "}
        <Spoiler forceFallback theme="light">
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
