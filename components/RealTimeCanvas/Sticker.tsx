import { memo } from "react";
import styles from "./Sticker.module.css";

import { motion } from "framer-motion";

type StickerProps = {
  x: number;
  y: number;
  lightSource: [number, number];
  label?: string;
  attached: boolean;
};

function Sticker({ x, y, lightSource, label, attached }: StickerProps) {
  // Calculate shadow offset based on light source and sticker position
  const shadowX = 0.1 * (x - lightSource[0]);
  const shadowY = 0.1 * (y - lightSource[1]);

  return (
    <div
      className={styles.stickerContainer}
      style={{
        left: -42, // Centering the sticker (84px / 2)
        top: -42,
        transform: `translate(${x}px, ${y}px)`,
        filter: attached ? "none" : `drop-shadow(${shadowX}px ${shadowY}px 6px rgba(0, 0, 0, 0.3))`,
      }}
    >
      <motion.div
        exit={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 1.2 }}
        transition={{ type: "spring" }}
      >
        <div className={styles.stickerImage}>🌟</div>
        {label && <div className={styles.label}>{label}</div>}
      </motion.div>
    </div>
  );
}

export default memo(Sticker);
