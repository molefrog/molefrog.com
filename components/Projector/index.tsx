"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { animate } from "motion/react";

interface ProjectorProps {
  slides: StaticImageData[];
  title: string;
}

export const Projector: React.FC<ProjectorProps> = ({ slides, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<number>(0);

  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;

    const handleScroll = () => {
      const slideWidth = el.clientWidth;
      const scrollLeft = el.scrollLeft;

      const dir = el.scrollLeft - posRef.current > 0 ? "right" : "left";

      const newSlide =
        dir === "right" ? Math.ceil(scrollLeft / slideWidth) : Math.floor(scrollLeft / slideWidth);

      setCurrentSlide(newSlide);
      posRef.current = el.scrollLeft;
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [slides.length]);

  const animationRef = useRef<{ stop: () => void }>();
  const scrollingToSlide = useRef<number | null>(null);

  const scrollToNextSlide = async () => {
    const el = slidesRef.current;
    if (!el) return;

    scrollingToSlide.current = ((scrollingToSlide.current ?? currentSlide) + 1) % slides.length;

    // Cancel any existing animation
    animationRef.current?.stop();

    const slideWidth = el.clientWidth;
    const targetScroll = slideWidth * scrollingToSlide.current;

    // Disable scroll snap before animation
    el.style.scrollSnapType = "none";

    // Save new animation reference
    animationRef.current = animate(el.scrollLeft, targetScroll, {
      onUpdate: (latest) => {
        el.scrollLeft = latest;
      },
      duration: animationRef.current ? 0 : 0.25,
      ease: "circInOut",
    });

    await animationRef.current;

    // clean up temp state
    scrollingToSlide.current = null;
    animationRef.current = undefined;

    // Restore scroll snap after animation
    el.style.scrollSnapType = "x mandatory";
  };

  const shouldDisplayProgress = slides.length > 1;

  return (
    <div className="projector" style={{ "--slides-n": slides.length } as React.CSSProperties}>
      <div className="projector__slides" ref={slidesRef}>
        {slides.slice().map((slide, i) => (
          <div className="projector__slide-step" key={slide.src + String(i)}>
            <div className="projector__slide" onClick={() => scrollToNextSlide()}>
              <Image
                className="projector__slide-img"
                placeholder="blur"
                alt={`${title} Slide #${i + 1}`}
                fill
                src={slide}
              />
            </div>
          </div>
        ))}
      </div>

      {shouldDisplayProgress && (
        <div className="projector__progress-control" onClick={() => scrollToNextSlide()}>
          <div
            className="projector__progress"
            style={{ "--total": slides.length, "--current": currentSlide } as React.CSSProperties}
          >
            <div className={clsx("projector__progress-step")} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projector;
