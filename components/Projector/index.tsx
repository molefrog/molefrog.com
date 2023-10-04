import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

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

    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [slides.length]);

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

      <div
        className="projector__progress"
        style={{ "--total": slides.length, "--current": currentSlide } as React.CSSProperties}
      >
        {Array.from({ length: slides.length - 1 }).map((_, i) => (
          <div className="projector__progress-mark" key={i} style={{ left: `${(i + 1) * 10}px` }} />
        ))}
        <div className={clsx("projector__progress-step")} />
      </div>
    </div>
  );
};

export default Projector;
