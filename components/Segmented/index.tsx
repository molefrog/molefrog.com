import { join } from "path";
import React, { useEffect } from "react";

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
    const alphabet = "!abcdefghijklmnopqrstuvwxyz0123456789".split("");

    text.split("").forEach((ch, i) => {
      // shifts the character
      const upd = (char: string) => {
        prev[i] = char;
        setSeg(prev.join(""));
      };

      let s = alphabet.indexOf(prev[i]);

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
      className="segmented__text"
      style={
        {
          "--cell-color": cellColor,
        } as React.CSSProperties
      }
      data-cells={cells}
      data-text={seg}
    />
  );
};

export default Segmented;
