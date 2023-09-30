import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface ProjectorProps {
  slides: StaticImageData[];
  title: string;
}

export const Projector: React.FC<ProjectorProps> = ({ slides, title }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (slidesRef.current) {
        const slideWidth = slidesRef.current.clientWidth;
        const scrollLeft = slidesRef.current.scrollLeft;
        const newSlide = Math.ceil(scrollLeft / slideWidth) + 1;
        setCurrentSlide(newSlide);
      }
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

      <div className="projector__progress">
        {slides.map((_, i) => (
          <div
            key={String(i)}
            className={clsx(
              "projector__progress-step",
              currentSlide >= i + 1 ? "projector__progress-step--active" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Projector;
