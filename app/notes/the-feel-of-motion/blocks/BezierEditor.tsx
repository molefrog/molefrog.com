"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { animate } from "motion/react";
import { clsx } from "clsx";
import { PlaygroundFrame } from "@/components/MDX/PlaygroundFrame";

type Point = readonly [number, number];

const PRESETS: { name: string; values: [number, number, number, number] }[] = [
  { name: "linear", values: [0, 0, 1, 1] },
  { name: "ease-out", values: [0, 0, 0.58, 1] },
  { name: "ease-in-out", values: [0.42, 0, 0.58, 1] },
  { name: "snap", values: [0.6, -0.05, 0.4, 1.6] },
  { name: "soft", values: [0.45, 0.05, 0.25, 1.0] },
];

const SIZE = 320;
const PAD = 28;
const BAND = SIZE - 2 * PAD;

export function BezierEditor() {
  const [c1, setC1] = useState<Point>([0.6, -0.05]);
  const [c2, setC2] = useState<Point>([0.4, 1.6]);
  const [activePreset, setActivePreset] = useState<string>("snap");

  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef<"c1" | "c2" | null>(null);
  const [progress, setProgress] = useState(0);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  const applyPreset = (p: (typeof PRESETS)[number]) => {
    setC1([p.values[0], p.values[1]]);
    setC2([p.values[2], p.values[3]]);
    setActivePreset(p.name);
  };

  const snapEnd = () => setActivePreset("custom");

  const onPointerDown = (which: "c1" | "c2") => (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as Element).setPointerCapture(e.pointerId);
    dragging.current = which;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const xs = (e.clientX - rect.left) * (SIZE / rect.width);
    const ys = (e.clientY - rect.top) * (SIZE / rect.height);
    const x = clamp01((xs - PAD) / BAND);
    const y = clamp((PAD + BAND - ys) / BAND, -0.6, 1.7);
    if (dragging.current === "c1") setC1([x, y]);
    else setC2([x, y]);
    snapEnd();
  };

  const onPointerUp = () => {
    dragging.current = null;
  };

  const play = () => {
    animRef.current?.stop();
    setProgress(0);
    animRef.current = animate(0, 1, {
      duration: 1.1,
      ease: [c1[0], c1[1], c2[0], c2[1]] as [number, number, number, number],
      onUpdate: (v) => setProgress(v),
    });
  };

  // auto play once on first mount
  useEffect(() => {
    const t = setTimeout(play, 500);
    return () => {
      clearTimeout(t);
      animRef.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const path = useMemo(() => buildPath(c1, c2), [c1, c2]);
  const formula = `cubic-bezier(${fmt(c1[0])}, ${fmt(c1[1])}, ${fmt(c2[0])}, ${fmt(c2[1])})`;

  const c1Px = toSVG(c1[0], c1[1]);
  const c2Px = toSVG(c2[0], c2[1]);
  const p0Px = toSVG(0, 0);
  const p3Px = toSVG(1, 1);

  return (
    <PlaygroundFrame
      label="02 / Cubic Bézier"
      caption={
        <>
          Drag the two blue handles to reshape the curve. The bottom track plays it back — same
          duration, very different feel.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0">
        <div className="md:border-r border-b md:border-b-0 border-ds-gray-150 p-4 md:p-5 flex md:block items-center justify-center">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            width={SIZE}
            height={SIZE}
            className="w-full max-w-[280px] md:max-w-[320px] touch-none select-none"
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <BezierGrid />

            {/* tangent lines */}
            <line
              x1={p0Px[0]}
              y1={p0Px[1]}
              x2={c1Px[0]}
              y2={c1Px[1]}
              stroke="currentColor"
              strokeWidth="1"
              className="text-ds-gray-300"
            />
            <line
              x1={p3Px[0]}
              y1={p3Px[1]}
              x2={c2Px[0]}
              y2={c2Px[1]}
              stroke="currentColor"
              strokeWidth="1"
              className="text-ds-gray-300"
            />

            {/* curve */}
            <path
              d={path}
              fill="none"
              stroke="var(--color-ds-accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* anchors */}
            <Anchor cx={p0Px[0]} cy={p0Px[1]} />
            <Anchor cx={p3Px[0]} cy={p3Px[1]} />

            {/* handles */}
            <Handle cx={c1Px[0]} cy={c1Px[1]} onPointerDown={onPointerDown("c1")} />
            <Handle cx={c2Px[0]} cy={c2Px[1]} onPointerDown={onPointerDown("c2")} />
          </svg>
        </div>

        <div className="p-4 md:p-5 flex flex-col gap-5">
          <div>
            <div className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-400 mb-2">
              presets
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p)}
                  className={clsx(
                    "font-ds-mono text-[12px] px-2.5 py-1 rounded-md border transition-colors",
                    activePreset === p.name
                      ? "bg-ds-accent text-white border-ds-accent"
                      : "bg-white text-ds-gray-700 border-ds-gray-200 hover:border-ds-accent hover:text-ds-accent",
                  )}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-400 mb-2">
              formula
            </div>
            <pre className="font-ds-mono text-[12.5px] leading-snug bg-ds-gray-50 border border-ds-gray-150 px-3 py-2.5 rounded-md text-ds-gray-800 overflow-x-auto">
              {formula}
            </pre>
          </div>

          <div className="mt-auto">
            <div className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-400 mb-2">
              playback
            </div>
            <div className="relative h-12 rounded-md bg-ds-gray-50 border border-ds-gray-150">
              <div className="absolute top-0 bottom-0 left-2 w-px bg-ds-gray-200" aria-hidden />
              <div className="absolute top-0 bottom-0 right-2 w-px bg-ds-gray-200" aria-hidden />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6"
                style={{ left: `calc(8px + (100% - 40px) * ${progress})` }}
              >
                <span className="block w-6 h-6 rounded-full bg-ds-accent shadow-[0_4px_12px_-2px_rgba(44,87,251,0.5),inset_0_-3px_6px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.4)]" />
              </div>
            </div>

            <button
              onClick={play}
              className="mt-3 inline-flex items-center gap-2 h-9 px-3.5 rounded-full bg-ds-gray-900 text-white font-medium text-sm hover:bg-ds-accent transition-colors"
            >
              <PlayIcon /> Play this curve
            </button>
          </div>
        </div>
      </div>
    </PlaygroundFrame>
  );
}

function BezierGrid() {
  const id = useId();
  return (
    <g aria-hidden>
      <defs>
        <pattern id={id} width={BAND / 4} height={BAND / 4} patternUnits="userSpaceOnUse" x={PAD} y={PAD}>
          <path d={`M ${BAND / 4} 0 L 0 0 0 ${BAND / 4}`} fill="none" stroke="currentColor" strokeWidth="1" className="text-ds-gray-100" />
        </pattern>
      </defs>
      <rect x={PAD} y={PAD} width={BAND} height={BAND} fill={`url(#${id})`} />
      <rect x={PAD} y={PAD} width={BAND} height={BAND} fill="none" stroke="currentColor" strokeWidth="1" className="text-ds-gray-200" />
      <text x={PAD} y={PAD - 8} className="font-ds-mono fill-ds-gray-400" fontSize="10">
        value
      </text>
      <text x={SIZE - PAD} y={SIZE - 8} className="font-ds-mono fill-ds-gray-400" fontSize="10" textAnchor="end">
        time
      </text>
    </g>
  );
}

function Anchor({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r={4} className="fill-ds-gray-400" />;
}

function Handle({ cx, cy, onPointerDown }: { cx: number; cy: number; onPointerDown: (e: React.PointerEvent) => void }) {
  return (
    <g onPointerDown={onPointerDown} className="cursor-grab active:cursor-grabbing">
      <circle cx={cx} cy={cy} r={14} fill="transparent" />
      <circle cx={cx} cy={cy} r={7} className="fill-white stroke-ds-accent" strokeWidth={2.5} />
    </g>
  );
}

function PlayIcon() {
  return (
    <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
      <path
        d="M8.06 4.616c.71.376.71 1.392 0 1.768L1.96 9.55C1.297 9.9.5 9.42.5 8.67V2.33c0-.75.797-1.232 1.46-.88l6.1 3.166z"
        fill="currentColor"
      />
    </svg>
  );
}

function buildPath(c1: Point, c2: Point) {
  const [p0x, p0y] = toSVG(0, 0);
  const [p3x, p3y] = toSVG(1, 1);
  const [c1x, c1y] = toSVG(c1[0], c1[1]);
  const [c2x, c2y] = toSVG(c2[0], c2[1]);
  return `M ${p0x} ${p0y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p3x} ${p3y}`;
}

function toSVG(x: number, y: number): Point {
  return [PAD + x * BAND, PAD + BAND - y * BAND];
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
function clamp01(v: number) {
  return clamp(v, 0, 1);
}

function fmt(v: number) {
  return Math.round(v * 100) / 100;
}
