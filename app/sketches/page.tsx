import dynamic from "next/dynamic";
import { ReactNode } from "react";

import { Container } from "@/components/Container";

const FicusSketch = dynamic(() => import("./ficus"));
const PogSketch = dynamic(() => import("./pogs"));
const SpoilerSketch = dynamic(() => import("./spoiler"));

export default function Sketches() {
  return (
    <main className="font-[family-name:var(--font-inter)] pb-24 md:pb-32">
      <Container placement="inner">
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 mb-10 justify-items-center">
          <div className="md:order-none order-2">
            <div className="max-w-sm sm:max-w-full md:max-w-sm rounded-2xl p-4 bg-ds-gray-100 text-ds-sm font-normal text-ds-gray-800 mb-2 [&_a]:text-ds-accent-600 [&_a]:font-semibold [&_a]:no-underline [&_a:hover]:underline [&_p]:m-0 [&_p+p]:mt-3">
              <FicusSketch />
              <PublicationDate>2014–2024</PublicationDate>
            </div>
            <div className="max-w-sm sm:max-w-full md:max-w-sm rounded-2xl p-4 bg-ds-gray-100 text-ds-sm font-normal text-ds-gray-800 mb-2 last:mb-0 [&_a]:text-ds-accent-600 [&_a]:font-semibold [&_a]:no-underline [&_a:hover]:underline [&_p]:m-0 [&_p+p]:mt-3">
              <SpoilerSketch />
              <PublicationDate>April, 2024</PublicationDate>
            </div>
          </div>

          <div>
            <div className="max-w-sm sm:max-w-full md:max-w-sm rounded-2xl p-4 bg-ds-gray-100 text-sm tracking-tight font-normal text-ds-gray-800 mb-2 font-ds-mono">
              Here be dragons! This is the place for various sketches, experiments, and side-project
              demos.
            </div>
            <div className="max-w-sm sm:max-w-full md:max-w-sm rounded-2xl p-4 bg-ds-gray-100 text-ds-sm font-normal text-ds-gray-800 mb-2 last:mb-0 [&_a]:text-ds-accent-600 [&_a]:font-semibold [&_a]:no-underline [&_a:hover]:underline [&_p]:m-0 [&_p+p]:mt-3">
              <PogSketch />
              <PublicationDate>June, 2023</PublicationDate>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

interface PublicationDateProps {
  children: ReactNode;
}

const PublicationDate = ({ children }: PublicationDateProps) => {
  return (
    <div className="pt-4">
      <div className="font-ds-mono uppercase text-xs font-bold inline-flex items-center text-ds-gray-600 tracking-wide bg-white py-1 px-3 rounded-xl">
        <svg
          className="w-2.5 rotate-45 align-middle mr-1.5 pt-px"
          viewBox="0 0 60 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.863 8.832H13.3318C11.031 8.832 9.16771 6.9687 9.16771 4.6679C9.16771 2.3671 11.031 0.499901 13.3318 0.499901H46.6678C48.9686 0.499901 50.8319 2.3671 50.8319 4.6679C50.8319 6.9687 48.9686 8.832 46.6678 8.832H43.1366L46.1093 29.648C47.6093 30.4957 49.0273 31.4683 50.3437 32.566C55.871 37.1715 59.1679 43.597 59.1679 50.5C59.1679 52.8008 57.3007 54.668 54.9999 54.668H4.99991C2.69911 54.668 0.831909 52.8008 0.831909 50.5C0.831909 43.5977 4.12881 37.172 9.65611 32.566C10.9725 31.4683 12.3905 30.4957 13.8905 29.648L16.863 8.832ZM25.281 8.832L21.8357 32.945C21.6365 34.3356 20.7537 35.5309 19.4841 36.1286C17.8318 36.9059 16.32 37.8591 14.988 38.9684C12.4372 41.0973 10.7107 43.6481 9.83571 46.3317H50.1637C49.2887 43.6481 47.5621 41.0973 45.0114 38.9684C43.6794 37.859 42.1676 36.9059 40.5153 36.1286C39.2458 35.5309 38.363 34.3356 38.1637 32.945L34.7184 8.832H25.281Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 46.332C32.3008 46.332 34.168 48.1992 34.168 50.5V71.332C34.168 73.6328 32.3008 75.5 30 75.5C27.6992 75.5 25.832 73.6328 25.832 71.332V50.5C25.832 48.1992 27.6992 46.332 30 46.332Z"
            fill="currentColor"
          />
        </svg>
        {children}
      </div>
    </div>
  );
};
