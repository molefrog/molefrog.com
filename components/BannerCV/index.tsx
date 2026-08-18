"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import placeholder from "./placeholder.webp";
import { ChevronRight } from "../icons";

export interface BannerCVProps {
  resumeSSID: string;
}

// press-and-hold checkerboard physics
const MAX_SPEED = 250; // px/s
const ACCEL = 175; // px/s² while holding
const DECEL = 1100; // px/s² after release
const TILE = 32; // checker tile size, px (one full repeat)

export const BannerCV = ({ resumeSSID }: BannerCVProps) => {
  const cache = new Date().getMonth(); // update the preview once in a month

  const imageSrc = `https://ssr.resume.tools/to-image/ssid-${resumeSSID}-1.webp?size=${460}&cache=${cache}`;
  const url = `https://resume.io/r/${resumeSSID}`;

  const patternRef = useRef<HTMLDivElement>(null);
  const holding = useRef(false);
  const velocity = useRef(0);
  const offset = useRef(0);
  const rafId = useRef(0);
  const lastTime = useRef(0);
  const heldSince = useRef(0);
  const navTimer = useRef(0);

  const tick = useCallback((now: number) => {
    const dt = Math.min((now - lastTime.current) / 1000, 0.05);
    lastTime.current = now;

    velocity.current = holding.current
      ? Math.min(velocity.current + ACCEL * dt, MAX_SPEED)
      : Math.max(velocity.current - DECEL * dt, 0);

    offset.current = (offset.current + velocity.current * dt) % TILE;

    const el = patternRef.current;
    if (el) {
      el.style.backgroundPosition = `0px ${-offset.current}px`;
      el.style.opacity = String(Math.min(velocity.current / 250, 1));
    }

    if (holding.current || velocity.current > 0) {
      rafId.current = requestAnimationFrame(tick);
    }
  }, []);

  const startHold = useCallback(() => {
    holding.current = true;
    heldSince.current = performance.now();
    cancelAnimationFrame(rafId.current);
    lastTime.current = performance.now();
    rafId.current = requestAnimationFrame(tick);
  }, [tick]);

  const endHold = useCallback(() => {
    holding.current = false;
  }, []);

  useEffect(
    () => () => {
      cancelAnimationFrame(rafId.current);
      clearTimeout(navTimer.current);
    },
    []
  );

  return (
    <a
      href={url}
      className="group bg-white rounded-md h-16 sm:h-15 px-4 flex items-center cursor-pointer relative overflow-hidden select-none max-w-none sm:max-w-md text-inherit no-underline shadow-[0px_0px_0px_2px_var(--color-ds-gray-200)] z-10 hover:shadow-[0px_0px_0px_2px_var(--color-ds-accent)] [-webkit-touch-callout:none]"
      target="_blank"
      rel="noopener noreferrer"
      data-cuelume-press
      data-cuelume-release
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        // capture the pointer so the hold survives moving outside the card;
        // releasing anywhere ends it
        e.currentTarget.setPointerCapture(e.pointerId);
        clearTimeout(navTimer.current);
        startHold();
      }}
      onPointerUp={endHold}
      onPointerCancel={endHold}
      onClick={(e) => {
        if (performance.now() - heldSince.current <= 250) return; // quick click → follow right away

        // after a long hold, let the pattern wind down before following the link,
        // and only if the pointer was released over the card
        e.preventDefault();
        const r = e.currentTarget.getBoundingClientRect();
        const inside =
          e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (inside) {
          navTimer.current = window.setTimeout(
            () => window.open(url, "_blank", "noopener,noreferrer"),
            500
          );
        }
      }}
    >
      <div
        ref={patternRef}
        aria-hidden
        className="absolute left-1/2 top-1/2 w-[160%] aspect-square -translate-x-1/2 -translate-y-1/2 z-0 rotate-30 opacity-0 pointer-events-none [--checker:color-mix(in_oklab,var(--color-ds-accent)_7%,white)]"
        style={{
          backgroundImage:
            "conic-gradient(var(--checker) 0 25%, transparent 0 50%, var(--checker) 0 75%, transparent 0)",
          backgroundSize: `${TILE}px ${TILE}px`,
        }}
      />

      <div className="relative z-10 [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white,0_0_6px_white,0_0_12px_white,0_0_20px_white]">
        <div className="text-ds-sm text-ds-gray-700 font-medium mr-24 mb-0.5 flex items-center gap-1 group-hover:text-ds-accent">
          Read my CV{" "}
          <ChevronRight className="w-2 h-2 text-ds-gray-400 group-hover:text-ds-accent" />
        </div>
        <div className="text-ds-xs text-ds-gray-400 leading-none mb-1.5">hosted on resume.io</div>
      </div>

      {/* there is no need to load the image from Next image optimizer bc
        resume.io CDN could take a while to generate the preview */}
      <Image
        className="w-28 sm:w-32 h-auto absolute top-0 right-0 shadow-[1px_1px_16px_0_var(--color-ds-gray-300),0px_0px_0px_0.5px_var(--color-ds-gray-100)] translate-y-1.5 rotate-3 scale-110 transition-transform duration-200 will-change-transform pointer-events-none bg-cover bg-top z-50 group-hover:translate-y-2.5 group-hover:rotate-0 group-hover:shadow-[1px_1px_8px_0_var(--color-ds-gray-200),0px_0px_0px_0.5px_var(--color-ds-gray-200)] group-active:-translate-y-0.5"
        alt="Alexey Taktarov, CV"
        src={imageSrc}
        placeholder="blur"
        blurDataURL={placeholder.blurDataURL}
        unoptimized
        width={460}
        height={325}
        priority
      />
    </a>
  );
};
