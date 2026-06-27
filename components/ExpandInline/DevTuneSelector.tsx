"use client";

import { useStore } from "@nanostores/react";
import React, { useEffect, useMemo, useState } from "react";
import { VARIANTS, synth } from "./synth";
import { $variant } from "./variant";

const DevTuneSelector: React.FC = () => {
  const current = useStore($variant);
  const [open, setOpen] = useState(true);

  // Preview player is rebuilt whenever the variant changes.
  const play = useMemo(() => synth(current), [current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "~" || e.key === "`") setOpen((o) => !o);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-3 right-3 z-[9999] rounded-full bg-black/80 text-white text-xs px-3 py-1.5 font-mono shadow-lg hover:bg-black"
        aria-label="Open tune selector"
      >
        ♪ tune
      </button>
    );
  }

  return (
    <div className="fixed bottom-3 right-3 z-[9999] w-64 rounded-lg bg-white text-ds-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-ds-gray-200 font-mono text-xs">
      <div className="flex items-center justify-between px-3 py-2 border-b border-ds-gray-150">
        <span className="uppercase tracking-wide text-ds-gray-500">CE tune · dev</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-ds-gray-400 hover:text-ds-gray-700"
          aria-label="Close tune selector"
        >
          ×
        </button>
      </div>

      <ul className="p-1">
        {VARIANTS.map((v) => {
          const active = v.id === current;
          return (
            <li key={v.id}>
              <button
                type="button"
                onClick={() => $variant.set(v.id)}
                className={
                  "w-full text-left px-2 py-1.5 rounded-md transition-colors " +
                  (active
                    ? "bg-ds-accent-500 text-white"
                    : "hover:bg-ds-gray-100 text-ds-gray-800")
                }
              >
                <div className="flex items-center gap-2">
                  <span className="w-3">{active ? "▸" : ""}</span>
                  <span className="font-medium">{v.name}</span>
                </div>
                <div
                  className={
                    "pl-5 text-[11px] " + (active ? "text-white/80" : "text-ds-gray-500")
                  }
                >
                  {v.blurb}
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-2 px-3 py-2 border-t border-ds-gray-150">
        <button
          type="button"
          onClick={() => play(5)}
          className="flex-1 bg-ds-gray-900 text-white rounded-md py-1.5 hover:bg-black"
        >
          ▶ play all 5
        </button>
        <button
          type="button"
          onClick={() => play(1)}
          className="px-3 bg-ds-gray-100 rounded-md hover:bg-ds-gray-200"
          title="Play one note"
        >
          ·
        </button>
      </div>

      <div className="px-3 pb-2 text-[10px] text-ds-gray-400">
        ` to toggle · persists in localStorage
      </div>
    </div>
  );
};

export default DevTuneSelector;
