import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./SolfegeHands.module.css";

import hands from "./hands.jpg";

export const $note = atom<string | null>(null);

const noteToOffset: { [key: string]: number } = {
  C: 0,
  "C#": 1,
  D: 2,
  "D#": 3,
  E: 4,
  F: 5,
  "F#": 6,
  G: 7,
  "G#": 8,
  A: 9,
  "A#": 10,
  B: 11,
};

const SolfegeHands: React.FC = () => {
  const note = useStore($note);

  const noteWithoutOctave = note?.replace(/\d/g, "");
  const offset = noteWithoutOctave ? noteToOffset[noteWithoutOctave] : 0;
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
