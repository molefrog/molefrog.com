import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectorProps {
  slides: StaticImageData[];
  title: string;
}

export const Projector: React.FC<ProjectorProps> = ({ slides, title }) => {
  return (
    <div className="projector" style={{ "--slides-n": slides.length } as React.CSSProperties}>
      <div className="projector__slides">
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
    </div>
  );
};

export default Projector;
