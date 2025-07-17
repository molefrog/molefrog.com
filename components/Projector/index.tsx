"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { animate } from "motion/react";

import { BlossomCarousel } from "@blossom-carousel/react";
import "@blossom-carousel/core/style.css";

interface ProjectorProps {
  slides: StaticImageData[];
  title: string;
}

export const Projector: React.FC<ProjectorProps> = ({ slides, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<number>(0);

  const getCarouselElement = () => {
    return slidesRef.current?.querySelector("[blossom-carousel]") as HTMLDivElement;
  };

  useEffect(() => {
    const el = getCarouselElement();
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

  const scrollingToSlide = useRef<number | null>(null);

  const scrollToNextSlide = async () => {
    const el = getCarouselElement();
    if (!el) return;

    scrollingToSlide.current = ((scrollingToSlide.current ?? currentSlide) + 1) % slides.length;

    const slideWidth = el.clientWidth;
    const targetScroll = slideWidth * scrollingToSlide.current;

    el.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const shouldDisplayProgress = slides.length > 1;

  return (
    <div
      className="projector"
      style={{ "--slides-n": slides.length } as React.CSSProperties}
      ref={slidesRef}
    >
      <BlossomCarousel className="projector__slides">
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
      </BlossomCarousel>

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
