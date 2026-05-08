"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { PlaygroundFrame } from "./PlaygroundFrame";

const SPRING = { type: "spring" as const, stiffness: 280, damping: 14, mass: 1 };

export function SpringFlick() {
  const constraints = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [bumps, setBumps] = useState(0);

  const recenter = () => {
    animate(x, 0, SPRING);
    animate(y, 0, SPRING);
    setBumps((b) => b + 1);
  };

  return (
    <PlaygroundFrame
      label="01 / Drag, release"
      caption={
        <>
          A spring is a feeling, not a curve. The ball overshoots, bounces back, and settles.
          That overshoot is what makes it feel <em>alive</em>.
        </>
      }
    >
      <div
        ref={constraints}
        className="relative h-72 md:h-80 select-none touch-none bg-[radial-gradient(circle_at_center,rgba(44,87,251,0.04),transparent_70%)]"
      >
        <Grid />

        <motion.button
          drag
          dragConstraints={constraints}
          dragElastic={0.18}
          dragTransition={{ bounceStiffness: SPRING.stiffness, bounceDamping: SPRING.damping }}
          onDragEnd={recenter}
          whileTap={{ scale: 0.92 }}
          style={{ x, y }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
          aria-label="Drag me"
        >
          <span className="block w-16 h-16 rounded-full bg-ds-accent shadow-[0_8px_24px_-4px_rgba(44,87,251,0.45),inset_0_-6px_12px_rgba(0,0,0,0.18),inset_0_4px_8px_rgba(255,255,255,0.35)]" />
        </motion.button>

        <div className="absolute left-3 bottom-3 font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-400">
          flicks: {String(bumps).padStart(2, "0")}
        </div>
        <div className="absolute right-3 bottom-3 font-ds-mono text-[10px] text-ds-gray-400 tracking-tight">
          stiffness {SPRING.stiffness} · damping {SPRING.damping}
        </div>
      </div>
    </PlaygroundFrame>
  );
}

function Grid() {
  return (
    <svg className="absolute inset-0 w-full h-full text-ds-gray-100" aria-hidden>
      <defs>
        <pattern id="flick-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#flick-grid)" />
    </svg>
  );
}
