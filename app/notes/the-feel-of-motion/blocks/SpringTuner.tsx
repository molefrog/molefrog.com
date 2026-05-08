"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion } from "motion/react";
import { PlaygroundFrame } from "@/components/MDX/PlaygroundFrame";

interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

const DEFAULT: SpringConfig = { stiffness: 220, damping: 16, mass: 1 };

export function SpringTuner() {
  const [config, setConfig] = useState<SpringConfig>(DEFAULT);
  const [progress, setProgress] = useState(0);
  const [token, setToken] = useState(0);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  const play = () => {
    animRef.current?.stop();
    setProgress(0);
    setToken((t) => t + 1);
    animRef.current = animate(0, 1, {
      type: "spring",
      stiffness: config.stiffness,
      damping: config.damping,
      mass: config.mass,
      onUpdate: setProgress,
    });
  };

  useEffect(() => {
    const t = setTimeout(play, 350);
    return () => {
      clearTimeout(t);
      animRef.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.stiffness, config.damping, config.mass]);

  return (
    <PlaygroundFrame
      label="03 / Spring tuner"
      caption={
        <>
          A spring has no duration. It has <em>physics</em>: how stiff, how damped, how heavy.
          Tweak the dials and watch the same trip change personality.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-0">
        {/* Track */}
        <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-ds-gray-150">
          <div className="relative h-44 rounded-lg bg-ds-gray-50 border border-ds-gray-150 overflow-hidden">
            <div className="absolute top-1/2 left-3 right-3 h-px bg-ds-gray-200/70" aria-hidden />
            <div
              className="absolute top-1/2 left-3 h-px bg-ds-accent/40"
              style={{ width: `calc((100% - 64px) * ${progress} + 32px)` }}
              aria-hidden
            />

            <div className="absolute top-0 bottom-0 left-3 w-px bg-ds-gray-200" aria-hidden />
            <div className="absolute top-0 bottom-0 right-3 w-px bg-ds-gray-200" aria-hidden />

            <div
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10"
              style={{ left: `calc(12px + (100% - 64px) * ${progress})` }}
            >
              <motion.span
                key={token}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-10 h-10 rounded-full bg-ds-accent shadow-[0_6px_16px_-3px_rgba(44,87,251,0.45),inset_0_-4px_8px_rgba(0,0,0,0.18),inset_0_3px_6px_rgba(255,255,255,0.35)]"
              />
            </div>

            <div className="absolute left-3 top-2 font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-400">
              start
            </div>
            <div className="absolute right-3 top-2 font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-400">
              target
            </div>
            <div className="absolute right-3 bottom-2 font-ds-mono text-[11px] text-ds-gray-500 tabular-nums">
              {progress.toFixed(3)}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={play}
              className="inline-flex items-center gap-2 h-9 px-3.5 rounded-full bg-ds-gray-900 text-white font-medium text-sm hover:bg-ds-accent transition-colors"
            >
              ↻ Replay
            </button>
            <button
              onClick={() => setConfig(DEFAULT)}
              className="font-ds-mono text-[11px] uppercase tracking-[0.12em] text-ds-gray-500 hover:text-ds-accent"
            >
              reset
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="p-5 md:p-6 flex flex-col gap-5">
          <Knob
            label="stiffness"
            value={config.stiffness}
            min={40}
            max={600}
            step={5}
            onChange={(stiffness) => setConfig((c) => ({ ...c, stiffness }))}
          />
          <Knob
            label="damping"
            value={config.damping}
            min={2}
            max={50}
            step={1}
            onChange={(damping) => setConfig((c) => ({ ...c, damping }))}
          />
          <Knob
            label="mass"
            value={config.mass}
            min={0.3}
            max={4}
            step={0.1}
            decimals={1}
            onChange={(mass) => setConfig((c) => ({ ...c, mass }))}
          />

          <pre className="mt-auto font-ds-mono text-[12px] leading-relaxed bg-ds-gray-50 border border-ds-gray-150 rounded-md px-3 py-2.5 text-ds-gray-800 overflow-x-auto">
            {`transition={{
  type: "spring",
  stiffness: ${config.stiffness},
  damping: ${config.damping},
  mass: ${config.mass.toFixed(1)},
}}`}
          </pre>
        </div>
      </div>
    </PlaygroundFrame>
  );
}

interface KnobProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  decimals?: number;
  onChange: (n: number) => void;
}

function Knob({ label, value, min, max, step, decimals = 0, onChange }: KnobProps) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-500">
          {label}
        </span>
        <span className="font-ds-mono text-[12px] text-ds-gray-800 tabular-nums">
          {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="feel-range w-full"
      />
    </label>
  );
}

