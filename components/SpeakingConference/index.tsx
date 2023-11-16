"use client";

import { useRef } from "react";
import useMouse from "@react-hook/mouse-position";

import { Segmented } from "@/components/Segmented";

const formats = {
  recording: "~REC",
  slides: "DECK",
} as const;

export const SpeakingConference = ({
  year,
  children,
  format,
  ...props
}: {
  year: string;
  children: React.ReactNode;
  format: keyof typeof formats;
}) => {
  const ref = useRef(null);
  const pos = useMouse(ref, { fps: 24 });

  const label = pos.isOver ? formats[format] ?? "none" : year;

  return (
    <a className="speaking__conf" {...props} ref={ref}>
      {children}
      <span className="speaking__conf-year">
        <Segmented animated>{label}</Segmented>
      </span>
    </a>
  );
};
