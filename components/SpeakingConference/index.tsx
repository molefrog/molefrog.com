"use client";

import { useRef } from "react";
import useMouse from "@react-hook/mouse-position";

import { Segmented } from "@/components/Segmented";

const formats = {
  recording: "~REC",
  slides: "DECK",
  link: "LINK",
} as const;

interface SpeakingConferenceProps {
  year: string;
  children: React.ReactNode;
  format: keyof typeof formats;
  href?: string;
  target?: string;
  rel?: string;
}

export const SpeakingConference = ({
  year,
  children,
  format,
  ...props
}: SpeakingConferenceProps) => {
  const ref = useRef(null);
  const pos = useMouse(ref, { fps: 24 });

  const label = pos.isOver ? formats[format] ?? "none" : year;

  return (
    <a
      className="text-ds-sm font-medium border border-ds-gray-300 h-8 rounded-lg flex items-center pl-3 whitespace-nowrap gap-4 overflow-hidden shadow-[0px_1px_0px_1px_var(--color-ds-gray-100)] no-underline text-inherit hover:text-ds-accent-700 hover:border-ds-accent-700 [&:hover_span]:border-ds-accent-700"
      {...props}
      ref={ref}
    >
      {children}
      <span className="flex h-full items-center px-3 text-ds-xs border-l border-ds-gray-300 italic font-bold tracking-tighter">
        <Segmented animated>{label}</Segmented>
      </span>
    </a>
  );
};
