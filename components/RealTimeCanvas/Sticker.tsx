import { memo, useEffect } from "react";
import styles from "./Sticker.module.css";

import img from "./toilet-sticker.png";

import { motion, MotionValue, useMotionValue, useTransform } from "framer-motion";

type StickerProps = {
  x: number;
  y: number;
  lightSource: [number, number];
  label?: string;
};

// <motion.div
//   exit={{ opacity: 0, scale: 1.2 }}
//   animate={{ opacity: 1, scale: 1 }}
//   initial={{ opacity: 0, scale: 1.5 }}
//   transition={{ type: "tween", ease: "anticipate", duration: 0.6 }}
// >

function Sticker({ x, y, lightSource, label }: StickerProps) {
  return (
    <div
      className={styles.stickerContainer}
      style={{
        left: -42, // Centering the sticker (84px / 2)
        top: -42,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <StickerSprite x={x} y={y} lightSource={lightSource} elevation={0} />

      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
}

type StickerSpriteProps = {
  x: number;
  y: number;
  lightSource: [number, number];

  elevation?: number; // 0..1
  elevationValue?: MotionValue<number>;
};

export function StickerSprite({
  x,
  y,
  lightSource,
  elevation: elevationProp = 1,
  elevationValue,
}: StickerSpriteProps) {
  const elevationStatic = useMotionValue(elevationProp); // used when `elevationValue` is not provided
  const elevation = elevationValue ?? elevationStatic;

  const scale = useTransform(elevation, [0, 1], [1.0, 1.05]);

  const filterProperty = useTransform(() => {
    // Calculate shadow offset based on light source and sticker position
    const shadowX = 0.075 * elevation.get() * (x - lightSource[0]);
    const shadowY = 0.075 * elevation.get() * (y - lightSource[1]);

    const blur = 1 + 7 * elevation.get();

    return `drop-shadow(${shadowX}px ${shadowY}px ${blur}px rgba(0, 0, 0, 0.3))`;
  });

  useEffect(() => {
    elevationStatic.set(elevationProp);
  }, [elevationProp]);

  return (
    <motion.div
      className={styles.stickerImage}
      style={{
        backgroundImage: `url(${img.src})`,
        filter: filterProperty,
        scale,
      }}
    ></motion.div>
  );
}

export default memo(Sticker);
