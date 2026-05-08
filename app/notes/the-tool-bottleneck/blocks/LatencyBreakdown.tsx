"use client";

import { useState } from "react";
import { PlaygroundFrame } from "@/components/MDX/PlaygroundFrame";

interface Segment {
  key: string;
  label: string;
  ms: number;
  shade: string;
}

const SEGMENTS: Segment[] = [
  { key: "model", label: "model thinking", ms: 1800, shade: "bg-ds-gray-300" },
  { key: "tools", label: "tool execution", ms: 5200, shade: "bg-ds-accent" },
  { key: "io", label: "serialization + i/o", ms: 900, shade: "bg-ds-gray-500" },
];

export function LatencyBreakdown() {
  const [modelMs, setModelMs] = useState(1800);
  const [toolsMs, setToolsMs] = useState(5200);
  const [ioMs, setIoMs] = useState(900);

  const total = modelMs + toolsMs + ioMs;
  const segs = [
    { ...SEGMENTS[0], ms: modelMs },
    { ...SEGMENTS[1], ms: toolsMs },
    { ...SEGMENTS[2], ms: ioMs },
  ];

  return (
    <PlaygroundFrame
      label="01 / Latency budget"
      caption={
        <>
          A typical agent turn, broken into the three places time goes. Drag <em>model</em> to
          zero — the bar barely shrinks.
        </>
      }
    >
      <div className="p-5 md:p-6">
        <div className="flex h-12 w-full overflow-hidden rounded-md border border-ds-gray-200">
          {segs.map((s) => (
            <div
              key={s.key}
              className={`${s.shade} h-full transition-[flex-basis] duration-300 ease-out relative group`}
              style={{ flexBasis: `${(s.ms / total) * 100}%` }}
              title={`${s.label}: ${s.ms} ms`}
            >
              <span className="sr-only">
                {s.label}: {s.ms} ms
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {segs.map((s) => (
            <div key={s.key}>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className={`block w-2 h-2 rounded-full ${s.shade}`} />
                <span className="font-ds-mono uppercase tracking-[0.1em] text-[10px] text-ds-gray-500 truncate">
                  {s.label}
                </span>
              </div>
              <div className="font-ds-mono tabular-nums text-ds-gray-800 text-[13px]">
                {(s.ms / 1000).toFixed(2)}s ·{" "}
                <span className="text-ds-gray-500">
                  {Math.round((s.ms / total) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-5 border-ds-gray-150" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Knob label="model thinking" value={modelMs} min={0} max={6000} step={50} onChange={setModelMs} />
          <Knob label="tool execution" value={toolsMs} min={0} max={20000} step={100} onChange={setToolsMs} />
          <Knob label="serialization + i/o" value={ioMs} min={0} max={4000} step={50} onChange={setIoMs} />
        </div>

        <div className="mt-5 flex items-baseline justify-between">
          <span className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-500">
            wall clock
          </span>
          <span className="font-ds-serif italic text-[28px] md:text-[32px] tracking-tight text-ds-gray-900 tabular-nums">
            {(total / 1000).toFixed(2)}s
          </span>
        </div>
      </div>
    </PlaygroundFrame>
  );
}

function Knob({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-500">
          {label}
        </span>
        <span className="font-ds-mono text-[12px] text-ds-gray-800 tabular-nums">
          {value} ms
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="feel-range w-full"
      />
    </label>
  );
}
