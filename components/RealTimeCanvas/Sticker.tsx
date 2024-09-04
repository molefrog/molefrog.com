import { memo, useEffect, useRef } from "react";
import styles from "./Sticker.module.css";

import { $lightSourcePosition } from "./state";
import { StickerAssetName, stickers } from "./stickers";

import {
  motion,
  MotionValue,
  useAnimate,
  useMotionValue,
  usePresence,
  useTransform,
} from "framer-motion";
import { useAtomValue } from "jotai";
import { StaticImageData } from "next/image";

type StickerProps = {
  x: number;
  y: number;
  asset: StickerAssetName;
  angle: number;
  animation: "none" | "pop" | "stamp";

  animationDelay?: number;
  label?: string;
  order?: number;
};

function Sticker({
  x,
  y,
  asset,
  label,
  angle,
  animation = "none",
  animationDelay = 0,
  order = 0,
}: StickerProps) {
  const stickerImg = stickers[asset];
  const elevation = useMotionValue(1);

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const light = useAtomValue($lightSourcePosition);

  const animationRef = useRef(animation);
  animationRef.current = animation;

  useEffect(() => {
    if (animationRef.current === "none") {
      elevation.set(0);

      if (!isPresent) {
        safeToRemove();
      }

      return;
    }

    if (animationRef.current === "pop") {
      if (isPresent) {
        elevation.set(0);
        animate(scope.current, { opacity: [0, 1] }, { delay: animationDelay });
      } else {
        safeToRemove();
      }

      return;
    }

    if (isPresent) {
      const enterAnimation = async () => {
        const transition = { duration: 0.3, ease: "anticipate" } as const;

        await Promise.all([
          animate(elevation, 0, transition),
          animate(scope.current, { opacity: [0.8, 1] }, transition),
          animate(
            "." + styles.shine,
            {
              backgroundPositionX: ["40%", "0%"],
              opacity: [0, 0.3, 0.2],
            },
            { duration: 1.2, ease: "easeOut", delay: 0.2 },
          ).then(() => {
            return animate(
              "." + styles.shine,
              { opacity: [0.2, 0.0] },
              { duration: 1, ease: "easeOut" },
            );
          }),
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
        left: -stickerImg.width * 0.25, // Centering the sticker (84px / 2)
        top: -stickerImg.height * 0.25,
        transform: `translate(${x}px, ${y}px)`,
        zIndex: order,
      }}
    >
      <div>
        <StickerSprite
          angle={angle}
          image={stickerImg}
          x={x}
          y={y}
          lightSource={light}
          elevationValue={elevation}
        />
      </div>

      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
}

type StickerSpriteProps = {
  x: number;
  y: number;
  lightSource: [number, number];
  angle?: number;

  elevation?: number; // 0..1
  elevationValue?: MotionValue<number>;
  image: StaticImageData;
};

export function StickerSprite({
  x,
  y,
  lightSource,
  elevation: elevationProp = 1,
  elevationValue,
  image,
  angle = 0,
}: StickerSpriteProps) {
  const elevationStatic = useMotionValue(elevationProp); // used when `elevationValue` is not provided
  const elevation = elevationValue ?? elevationStatic;

  const scale = useTransform(elevation, [0, 1], [1.0, 1.15]);

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
        width: Math.ceil(image.width * 0.5),
        height: Math.ceil(image.height * 0.5),
        backgroundImage: `url(${image.src})`,
        filter: filterProperty,
        scale,
        rotate: angle,
      }}
    >
      <motion.div
        className={styles.shine}
        style={{
          maskImage: `url(${image.src})`,
          WebkitMaskImage: `url(${image.src})`,
        }}
      />
    </motion.div>
  );
}

export default memo(Sticker);
