"use client";

import { useEffect } from "react";
import { bind, play } from "cuelume";

/**
 * Wires up all `data-cuelume-*` interaction sound attributes across the site.
 * Listeners are delegated on the document, so dynamically mounted elements
 * work without rebinding.
 */
export const CuelumeSounds = () => {
  useEffect(() => {
    bind();

    // cuelume has no volume control, so nav ticks are doubled up — a second
    // render at the same instant sums coherently to roughly twice the volume
    const boostNavTick = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest('[data-cuelume-press="tick"]')) play("tick");
    };

    document.addEventListener("pointerdown", boostNavTick, true);
    return () => document.removeEventListener("pointerdown", boostNavTick, true);
  }, []);

  return null;
};
