"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

interface PlaygroundFrameProps {
  children: ReactNode;
  label?: string;
  caption?: ReactNode;
  className?: string;
  bleed?: boolean;
}

export function PlaygroundFrame({
  children,
  label,
  caption,
  className,
  bleed = false,
}: PlaygroundFrameProps) {
  return (
    <figure className={clsx("my-10 md:my-12", bleed && "md:-mx-12", className)}>
      <div className="rounded-xl border border-ds-gray-200 bg-white shadow-ds-small overflow-hidden">
        {label && (
          <div className="px-4 md:px-5 pt-3 pb-2 border-b border-ds-gray-150 flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-ds-accent shrink-0" />
            <span className="font-ds-mono uppercase tracking-[0.12em] text-[11px] text-ds-gray-500">
              {label}
            </span>
          </div>
        )}
        <div>{children}</div>
      </div>
      {caption && (
        <figcaption className="text-ds-sm text-ds-gray-500 mt-3 px-1 leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
