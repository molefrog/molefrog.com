import { memo, useEffect } from "react";
import styles from "./Sticker.module.css";

import img from "./toilet-sticker.png";

import {
  motion,
  MotionValue,
  useAnimate,
  useMotionValue,
  usePresence,
  useTransform,
} from "framer-motion";

type StickerProps = {
  x: number;
  y: number;
  lightSource: [number, number];
  label?: string;
};

function Sticker({ x, y, lightSource, label }: StickerProps) {
  const elevation = useMotionValue(1);

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        const transition = { duration: 0.3, ease: "anticipate" } as const;

        await Promise.all([
          animate(elevation, 0, transition),
          animate(scope.current, { opacity: [0.5, 1] }, transition),
          animate(
            "." + styles.shine,
            {
              background: [
                `linear-gradient(45deg,
                  transparent 0%, rgba(250, 250, 247, .9) 0%, transparent 0%)`,

                `linear-gradient(45deg,
                  transparent 100%, rgba(250, 250, 247, .9) 200%, transparent 300%)`,
              ],
            },
            { duration: 1.6, ease: "easeOut", delay: 0.2 },
          ),
        ]);
      };

      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { opacity: 0, filter: "blur(24px)" },
          { duration: 0.6, ease: "circIn" },
        );

        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={scope}
      className={styles.stickerContainer}
      style={{
        left: -45, // Centering the sticker (84px / 2)
        top: -45,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div>
        <StickerSprite x={x} y={y} lightSource={lightSource} elevationValue={elevation} />
      </div>

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

  const scale = useTransform(elevation, [0, 1], [1.0, 1.1]);

  const filterProperty = useTransform(() => {
    // Calculate shadow offset based on light source and sticker position
    const shadowX = 0.07 * elevation.get() * (x - lightSource[0]);
    const shadowY = 0.07 * elevation.get() * (y - lightSource[1]);

    const blur = 1 + 7 * elevation.get();

    return `
      drop-shadow(${shadowX}px ${shadowY}px ${blur}px rgba(0, 0, 0, 0.1))
      drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.6))
    `;
  });

  useEffect(() => {
    elevationStatic.set(elevationProp);
  }, [elevationProp, elevationStatic]);

  return (
    <motion.div
      className={styles.stickerImage}
      style={{
        backgroundImage: `url(${img.src})`,
        filter: filterProperty,
        scale,
      }}
    >
      <motion.div
        className={styles.shine}
        style={{
          maskImage: `url(${img.src})`,
          WebkitMaskImage: `url(${img.src})`,
        }}
      />
    </motion.div>
  );
}

export default memo(Sticker);
