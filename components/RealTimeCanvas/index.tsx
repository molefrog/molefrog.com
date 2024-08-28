"use client";
import { useMouse } from "@uidotdev/usehooks";
import { useState } from "react";
import styles from "./RealTimeCanvas.module.css";

// Define the Sticker type
type Sticker = {
  x: number;
  y: number;
};

export function RealTimeCanvas() {
  const [stickerPosition, setStickerPosition] = useState<Sticker | null>(null);
  const [mouse, containerRef] = useMouse<HTMLDivElement>();

  const handleClick = () => {
    setStickerPosition({ x: mouse.elementX, y: mouse.elementY });
  };

  return (
    <div className={styles.container} ref={containerRef} onClick={handleClick}>
      {/* Shadow Sticker that always follows the cursor */}
      <img
        src="/path-to-your-emoji.png"
        alt="Sticker Shadow"
        className={`${styles.sticker} ${styles.shadow}`}
        style={{
          transform: `translate(${mouse.elementX}px, ${mouse.elementY}px)`,
        }}
      />

      {/* Permanent Sticker only rendered after being attached */}
      {stickerPosition && (
        <img
          src="/path-to-your-emoji.png"
          alt="Sticker"
          className={styles.sticker}
          style={{
            transform: `translate(${stickerPosition.x}px, ${stickerPosition.y}px)`,
          }}
        />
      )}
    </div>
  );
}
