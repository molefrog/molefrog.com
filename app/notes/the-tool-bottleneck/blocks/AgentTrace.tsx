"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import { clsx } from "clsx";
import { PlaygroundFrame } from "@/components/MDX/PlaygroundFrame";

type Kind = "model" | "tool";

interface Step {
  name: string;
  ms: number;
  kind: Kind;
}

const TRACE: Step[] = [
  { name: "think", ms: 1200, kind: "model" },
  { name: "Read app/page.tsx", ms: 380, kind: "tool" },
  { name: "think", ms: 800, kind: "model" },
  { name: "Grep \"useEffect\"", ms: 1100, kind: "tool" },
  { name: "think", ms: 600, kind: "model" },
  { name: "Read 4 files (parallel)", ms: 720, kind: "tool" },
  { name: "think", ms: 1000, kind: "model" },
  { name: "Bash bun test", ms: 4200, kind: "tool" },
  { name: "think", ms: 500, kind: "model" },
  { name: "Edit components/Foo.tsx", ms: 220, kind: "tool" },
];

export function AgentTrace() {
  const [instantModel, setInstantModel] = useState(false);
  const [now, setNow] = useState(0);
  const [token, setToken] = useState(0);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  const steps = TRACE.map((s) => ({
    ...s,
    ms: instantModel && s.kind === "model" ? 0 : s.ms,
  }));
  const total = steps.reduce((acc, s) => acc + s.ms, 0);

  let cursor = 0;
  const positioned = steps.map((s) => {
    const start = cursor;
    cursor += s.ms;
    return { ...s, start, end: cursor };
  });

  const play = () => {
    animRef.current?.stop();
    setNow(0);
    setToken((t) => t + 1);
    animRef.current = animate(0, total, {
      duration: 4.5,
      ease: "linear",
      onUpdate: setNow,
    });
  };

  useEffect(() => {
    const t = setTimeout(play, 350);
    return () => {
      clearTimeout(t);
      animRef.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instantModel]);

  return (
    <PlaygroundFrame
      label="02 / An agent turn, by the millisecond"
      caption={
        <>
          A real-ish trace of one task. Toggle <em>instant model</em> and watch the wall clock
          barely move — the model was never the long pole.
        </>
      }
    >
      <div className="p-5 md:p-6">
        {/* time ruler */}
        <Ruler total={total} />

        <div className="mt-2 relative flex flex-col gap-1">
          <div
            key={token}
            className="absolute top-0 bottom-0 w-px bg-ds-accent/70 transition-[left] duration-100 pointer-events-none z-10"
            style={{ left: `${(now / Math.max(total, 1)) * 100}%` }}
            aria-hidden
          />
          {positioned.map((s, i) => {
            const filled = clamp((now - s.start) / Math.max(s.ms, 1), 0, 1);
            const widthPct = (s.ms / total) * 100;
            const offsetPct = (s.start / total) * 100;
            return (
              <div key={i} className="relative h-7 flex items-center">
                <div
                  className="absolute top-0 bottom-0 rounded-[5px]"
                  style={{ left: `${offsetPct}%`, width: `calc(${widthPct}% + 1px)` }}
                >
                  <div
                    className={clsx(
                      "absolute inset-0 rounded-[5px] border",
                      s.kind === "model"
                        ? "border-ds-gray-200 bg-ds-gray-100"
                        : "border-ds-accent/30 bg-ds-accent/10",
                    )}
                  />
                  <div
                    className={clsx(
                      "absolute inset-y-0 left-0 rounded-[5px] origin-left transition-[width] duration-100",
                      s.kind === "model" ? "bg-ds-gray-300" : "bg-ds-accent",
                    )}
                    style={{ width: `${filled * 100}%` }}
                  />
                  <div
                    className={clsx(
                      "absolute inset-0 px-2 flex items-center justify-between font-ds-mono text-[11px] tracking-tight whitespace-nowrap overflow-hidden",
                      "mix-blend-difference text-white",
                    )}
                  >
                    <span className="truncate">{s.name}</span>
                    <span className="tabular-nums opacity-80 ml-2 shrink-0">
                      {s.ms === 0 ? "—" : `${s.ms}ms`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={play}
              className="inline-flex items-center gap-2 h-9 px-3.5 rounded-full bg-ds-gray-900 text-white font-medium text-sm hover:bg-ds-accent transition-colors"
            >
              ↻ Replay
            </button>
            <Toggle
              checked={instantModel}
              onChange={setInstantModel}
              label="instant model"
            />
          </div>

          <div className="text-right">
            <div className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-500">
              wall clock
            </div>
            <div className="font-ds-serif italic text-[24px] tracking-tight text-ds-gray-900 tabular-nums">
              {(total / 1000).toFixed(2)}s
            </div>
          </div>
        </div>
      </div>
    </PlaygroundFrame>
  );
}

function Ruler({ total }: { total: number }) {
  const seconds = Math.ceil(total / 1000);
  const ticks = Array.from({ length: seconds + 1 }, (_, i) => i);
  return (
    <div className="relative h-5">
      <div className="absolute inset-x-0 top-2 h-px bg-ds-gray-150" />
      {ticks.map((t) => (
        <div
          key={t}
          className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
          style={{ left: `${(t * 1000 / total) * 100}%` }}
        >
          <span className="font-ds-mono text-[9px] text-ds-gray-400 tabular-nums">{t}s</span>
          <span className="block w-px h-1.5 bg-ds-gray-300 mt-0.5" />
        </div>
      ))}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (b: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-2 group"
    >
      <span
        className={clsx(
          "relative w-9 h-5 rounded-full border transition-colors",
          checked
            ? "bg-ds-accent border-ds-accent"
            : "bg-ds-gray-100 border-ds-gray-200 group-hover:border-ds-gray-300",
        )}
      >
        <span
          className={clsx(
            "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-[left]",
            checked ? "left-[18px]" : "left-0.5",
          )}
        />
      </span>
      <span className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-600">
        {label}
      </span>
    </button>
  );
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
