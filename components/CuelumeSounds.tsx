"use client";

import { useEffect } from "react";
import { bind } from "cuelume";

/**
 * Wires up all `data-cuelume-*` interaction sound attributes across the site.
 * Listeners are delegated on the document, so dynamically mounted elements
 * work without rebinding.
 */
export const CuelumeSounds = () => {
  useEffect(() => {
    bind();
  }, []);

  return null;
};
