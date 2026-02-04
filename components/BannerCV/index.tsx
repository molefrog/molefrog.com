import Image from "next/image";
import placeholder from "./placeholder.webp";
import { ChevronRight } from "../icons";

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
    <a
      href={url}
      className="group bg-white rounded-md h-16 sm:h-15 px-4 flex items-center cursor-pointer relative overflow-hidden select-none max-w-none sm:max-w-md text-inherit no-underline shadow-[0px_0px_0px_2px_var(--color-ds-gray-200)] z-10 hover:shadow-[0px_0px_0px_2px_var(--color-ds-accent)]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <div className="text-ds-sm text-ds-gray-700 font-medium mr-24 mb-0.5 flex items-center gap-1 group-hover:text-ds-accent">
          Read my CV{" "}
          <ChevronRight className="w-2 h-2 text-ds-gray-400 group-hover:text-ds-accent" />
        </div>
        <div className="text-ds-xs text-ds-gray-400 leading-none mb-1.5">hosted on resume.io</div>
      </div>

      {/* there is no need to load the image from Next image optimizer bc
        resume.io CDN could take a while to generate the preview */}
      <Image
        className="w-28 sm:w-32 h-auto absolute top-0 right-0 shadow-[1px_1px_16px_0_var(--color-ds-gray-300),0px_0px_0px_0.5px_var(--color-ds-gray-100)] translate-y-1.5 rotate-3 scale-110 transition-transform duration-200 will-change-transform pointer-events-none bg-cover bg-top z-50 group-hover:translate-y-2.5 group-hover:rotate-0 group-hover:shadow-[1px_1px_8px_0_var(--color-ds-gray-200),0px_0px_0px_0.5px_var(--color-ds-gray-200)] group-active:translate-y-1"
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
