"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import { PlaygroundFrame } from "@/components/MDX/PlaygroundFrame";

type Mode = "ease" | "spring";

export function SpringRace() {
  const [easeP, setEaseP] = useState(0);
  const [springP, setSpringP] = useState(0);
  const easeAnim = useRef<ReturnType<typeof animate> | null>(null);
  const springAnim = useRef<ReturnType<typeof animate> | null>(null);

  const go = () => {
    easeAnim.current?.stop();
    springAnim.current?.stop();
    setEaseP(0);
    setSpringP(0);

    easeAnim.current = animate(0, 1, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setEaseP,
    });
    springAnim.current = animate(0, 1, {
      type: "spring",
      stiffness: 220,
      damping: 16,
      mass: 1,
      onUpdate: setSpringP,
    });
  };

  useEffect(() => {
    const t = setTimeout(go, 500);
    const i = setInterval(go, 4500);
    return () => {
      clearTimeout(t);
      clearInterval(i);
      easeAnim.current?.stop();
      springAnim.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlaygroundFrame
      label="04 / Same trip, different feel"
      caption={
        <>
          A tuned <em>ease-out</em> finishes faster and stops cold. A spring takes a beat longer
          and lets you feel the arrival. Neither is right — the choice is what you mean.
        </>
      }
    >
      <div className="p-5 md:p-6">
        <Track label="ease-out · cubic-bezier(.16,1,.3,1)" progress={easeP} mode="ease" />
        <div className="h-3" />
        <Track label="spring · stiffness 220, damping 16" progress={springP} mode="spring" />

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={go}
            className="inline-flex items-center gap-2 h-9 px-3.5 rounded-full bg-ds-gray-900 text-white font-medium text-sm hover:bg-ds-accent transition-colors"
          >
            ↻ Race again
          </button>
          <span className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-400">
            auto · every 4.5s
          </span>
        </div>
      </div>
    </PlaygroundFrame>
  );
}

function Track({ label, progress, mode }: { label: string; progress: number; mode: Mode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-500">
          {label}
        </span>
        <span className="font-ds-mono text-[11px] text-ds-gray-500 tabular-nums">
          {progress.toFixed(2)}
        </span>
      </div>

      <div className="relative h-14 rounded-md bg-ds-gray-50 border border-ds-gray-150 overflow-hidden">
        <div className="absolute top-0 bottom-0 left-2 w-px bg-ds-gray-200" aria-hidden />
        <div className="absolute top-0 bottom-0 right-2 w-px bg-ds-gray-200" aria-hidden />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-7 h-7"
          style={{ left: `calc(8px + (100% - 44px) * ${progress})` }}
        >
          <span
            className={
              "block w-7 h-7 rounded-full shadow-[0_4px_12px_-2px_rgba(44,87,251,0.45),inset_0_-3px_6px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.4)] " +
              (mode === "ease" ? "bg-ds-gray-700" : "bg-ds-accent")
            }
          />
        </div>
      </div>
    </div>
  );
}
