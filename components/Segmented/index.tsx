"use client";

import React, { useEffect } from "react";

const ALPHA = "!*~abcdefghijklmnopqrstuvwxyz0123456789".split("");

export const Segmented = ({
  children,
  cellColor = "var(--color-gray-200)",
  animated = false,
}: {
  children: string;
  cellColor?: string;
  animated?: boolean;
}) => {
  const text = typeof children !== "string" ? "" : children.trim().toLowerCase();
  const [seg, setSeg] = React.useState<string>(text);
  const prevRef = React.useRef<string>(text);

  useEffect(() => {
    if (!animated) {
      setSeg(text);
      return;
    }

    let prev = prevRef.current.split(""); // prev value (array of chars)
    prevRef.current = text; // update ref

    let timers: ReturnType<typeof setTimeout>[] = [];

    text.split("").forEach((ch, i) => {
      const prCh = prev[i];

      // shifts the character
      const upd = (char: string) => {
        prev[i] = char;
        setSeg(prev.join(""));
      };

      // characters are not present in the alphabet, just add them
      const alphabet = [...ALPHA, ch, prCh].filter((v, i, a) => a.indexOf(v) === i);
      let s = alphabet.indexOf(prCh);

      const anim = () => {
        if (prev[i] === ch) return; // reached the target character
        upd(alphabet[s++ % alphabet.length]);

        const rate = 16 + Math.random() * 30; // random delay
        timers[i] = setTimeout(anim, rate);
      };

      timers.push(setTimeout(anim, 0));
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [text, animated]);

  const cells = Array.from({ length: seg.length })
    .map((_) => "8")
    .join("");

  return (
    <span
      className="font-ds-segm14 relative text-inherit before:absolute before:inset-0 before:-z-10 before:text-[var(--cell-color)] before:content-[attr(data-cells)] after:content-[attr(data-text)]"
      style={{ "--cell-color": cellColor } as React.CSSProperties}
      data-cells={cells}
      data-text={seg}
    />
  );
};

export default Segmented;
