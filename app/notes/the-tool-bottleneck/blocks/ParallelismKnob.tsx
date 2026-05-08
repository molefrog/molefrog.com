"use client";

import { useMemo, useState } from "react";
import { PlaygroundFrame } from "@/components/MDX/PlaygroundFrame";

const TOOLS: { name: string; ms: number }[] = [
  { name: "Read app/page.tsx", ms: 380 },
  { name: "Read components/Foo.tsx", ms: 420 },
  { name: "Read styles/index.css", ms: 360 },
  { name: "Grep \"useEffect\"", ms: 1100 },
  { name: "Grep \"export\"", ms: 950 },
  { name: "Bash bun lint", ms: 1400 },
  { name: "Bash git status", ms: 320 },
  { name: "Read package.json", ms: 290 },
];

interface Placed {
  tool: (typeof TOOLS)[number];
  lane: number;
  start: number;
  end: number;
}

export function ParallelismKnob() {
  const [lanes, setLanes] = useState(4);

  const placement = useMemo(() => binPack(TOOLS, lanes), [lanes]);
  const wall = placement.reduce((acc, p) => Math.max(acc, p.end), 0);
  const serial = TOOLS.reduce((acc, t) => acc + t.ms, 0);
  const speedup = serial / Math.max(wall, 1);

  return (
    <PlaygroundFrame
      label="03 / Lanes"
      caption={
        <>
          Eight tool calls, same total work. Slide the lanes up: wall clock collapses, until you
          run out of independent things to do.
        </>
      }
    >
      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-4 mb-4">
          <div>
            <label className="block">
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-500">
                  parallel lanes
                </span>
                <span className="font-ds-mono text-[12px] text-ds-gray-800 tabular-nums">
                  {lanes}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={8}
                step={1}
                value={lanes}
                onChange={(e) => setLanes(parseInt(e.target.value, 10))}
                className="feel-range w-full"
              />
            </label>
          </div>
          <div className="text-right md:text-right">
            <div className="font-ds-mono uppercase tracking-[0.12em] text-[10px] text-ds-gray-500">
              wall clock
            </div>
            <div className="font-ds-serif italic text-[28px] md:text-[32px] tracking-tight text-ds-gray-900 tabular-nums">
              {(wall / 1000).toFixed(2)}s
            </div>
            <div className="font-ds-mono text-[11px] text-ds-accent">
              {speedup.toFixed(2)}× faster than serial
            </div>
          </div>
        </div>

        <Lanes placed={placement} lanes={lanes} wall={wall} />

        <div className="mt-4 flex items-center justify-between font-ds-mono text-[11px] text-ds-gray-500">
          <span>
            serial total <span className="text-ds-gray-800 tabular-nums">{(serial / 1000).toFixed(2)}s</span>
          </span>
          <span>
            theoretical floor{" "}
            <span className="text-ds-gray-800 tabular-nums">
              {(Math.max(...TOOLS.map((t) => t.ms)) / 1000).toFixed(2)}s
            </span>
          </span>
        </div>
      </div>
    </PlaygroundFrame>
  );
}

function Lanes({ placed, lanes, wall }: { placed: Placed[]; lanes: number; wall: number }) {
  return (
    <div className="rounded-md border border-ds-gray-200 bg-ds-gray-50 p-2 md:p-3">
      <div className="flex flex-col gap-1.5">
        {Array.from({ length: lanes }).map((_, laneIdx) => {
          const items = placed.filter((p) => p.lane === laneIdx);
          return (
            <div
              key={laneIdx}
              className="relative h-7 rounded-[4px] bg-white border border-ds-gray-150 overflow-hidden"
            >
              <span className="absolute left-1.5 top-1/2 -translate-y-1/2 font-ds-mono text-[9px] text-ds-gray-300 z-0">
                lane {laneIdx + 1}
              </span>
              {items.map((p, i) => {
                const left = (p.start / wall) * 100;
                const width = ((p.end - p.start) / wall) * 100;
                return (
                  <div
                    key={i}
                    className="absolute top-0.5 bottom-0.5 rounded-[3px] bg-ds-accent/15 border border-ds-accent/30 px-1.5 flex items-center transition-[left,width] duration-300"
                    style={{ left: `${left}%`, width: `calc(${width}% - 2px)` }}
                    title={`${p.tool.name} · ${p.tool.ms} ms`}
                  >
                    <span className="font-ds-mono text-[10px] text-ds-gray-800 truncate">
                      {p.tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function binPack(tools: typeof TOOLS, laneCount: number): Placed[] {
  const lanes: number[] = Array.from({ length: laneCount }, () => 0);
  const sorted = [...tools].sort((a, b) => b.ms - a.ms);
  const placed: Placed[] = [];
  for (const t of sorted) {
    let bestLane = 0;
    let bestEnd = lanes[0];
    for (let i = 1; i < lanes.length; i++) {
      if (lanes[i] < bestEnd) {
        bestEnd = lanes[i];
        bestLane = i;
      }
    }
    const start = lanes[bestLane];
    const end = start + t.ms;
    lanes[bestLane] = end;
    placed.push({ tool: t, lane: bestLane, start, end });
  }
  return placed;
}
