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

  const scrollToSlide = async (index: number) => {
    const el = slidesRef.current;
    if (!el) return;

    // Cancel any existing animation
    animationRef.current?.stop();

    const slideWidth = el.clientWidth;
    const targetScroll = slideWidth * index;

    // Disable scroll snap before animation
    el.style.scrollSnapType = "none";

    // Save new animation reference
    animationRef.current = animate(el.scrollLeft, targetScroll, {
      onUpdate: (latest) => {
        el.scrollLeft = latest;
      },
      duration: 0.4,
      ease: "anticipate",
    });

    await animationRef.current;

    // Restore scroll snap after animation
    el.style.scrollSnapType = "x mandatory";
  };

  const shouldDisplayProgress = slides.length > 1;

  return (
    <div className="projector" style={{ "--slides-n": slides.length } as React.CSSProperties}>
      <div className="projector__slides" ref={slidesRef}>
        {slides.slice().map((slide, i) => (
          <div className="projector__slide-step" key={slide.src + String(i)}>
            <div className="projector__slide">
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
        <div
          className="projector__progress"
          onClick={() => scrollToSlide((currentSlide + 1) % slides.length)}
          style={{ "--total": slides.length, "--current": currentSlide } as React.CSSProperties}
        >
          {Array.from({ length: slides.length - 1 }).map((_, i) => (
            <div
              className="projector__progress-mark"
              key={i}
              style={{ left: `${(i + 1) * 10}px` }}
            />
          ))}
          <div className={clsx("projector__progress-step")} />
        </div>
      )}
    </div>
  );
};

export default Projector;
