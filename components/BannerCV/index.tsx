import Image from "next/image";
import placeholder from "./placeholder.webp";

export interface BannerCVProps {
  resumeSSID: string;
}

export const BannerCV = ({ resumeSSID }: BannerCVProps) => {
  const cache = new Date().getMonth(); // update the preview once in a month

  const width = 460; // a4
  const height = 325;

  const imageSrc = `https://ssr.resume.tools/to-image/ssid-${resumeSSID}-1.webp?size=${460}&cache=${cache}`;
  const url = `https://resume.io/r/${resumeSSID}`;

  return (
    <a href={url} className="banner-cv__button" target="_blank" rel="noopener noreferrer">
      <div className="banner-cv__preview-col"></div>

      <div>
        <div className="banner-cv__label">Read my CV →</div>
        <div className="banner-cv__sub-label">hosted on resume.io</div>
      </div>

      {/* there is no need to load the image from Next image optimizer bc
        resume.io CDN could take a while to generate the preview */}
      <Image
        className="banner-cv__page"
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
