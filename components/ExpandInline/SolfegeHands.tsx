import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./SolfegeHands.module.css";

import hands from "./hands.jpg";

export const $note = atom<string | null>(null);

const noteToSpriteOffset = (note: string): number => {
  const notes = "C C# D D# E F F# G G# A A# B".split(" ");
  const idx = notes.indexOf(note);
  return idx !== -1 ? idx : 0;
};

const SolfegeHands: React.FC = () => {
  const note = useStore($note);

  const noteWithoutOctave = note?.replace(/\d/g, "");
  const offset = noteWithoutOctave ? noteToSpriteOffset(noteWithoutOctave) : 0;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (note) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        $note.set(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [note]);

  return (
    <div
      className={`${styles.container} ${visible ? styles.visible : ""}`}
      style={{ "--horizontal-offset": offset } as React.CSSProperties}
    >
      <Image
        src={hands}
        alt={`Solfege hand sign for note ${note}`}
        style={{
          objectFit: "contain",
          objectPosition: "left middle",
          position: "relative",
        }}
      />
    </div>
  );
};

export default SolfegeHands;
