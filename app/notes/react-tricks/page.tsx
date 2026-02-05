import { Container } from "@/components/Container";
import { NotionPage } from "./NotionPage";
import { NotionAPI } from "notion-client";
import { ShowcaseLink } from "@/components/Showcase";
import { Metadata } from "next";

import wouterImg from "@/public/txt/wouter.webp";

export const metadata: Metadata = {
  title: "React Tricks: Fast, Fit and Fun",
  description:
    "How to make your React app or library faster and smaller. Tips and tricks: `useEvent`, `useSyncExternalStore`, stable object references, readonly `useState`.",
  keywords: ["React.js", "Web Performance", "React hooks", "Maintaining Open-Source"],
};

export default async function Index() {
  const PAGE_ID = "a08dd8c84fb443ac997d33174409ff9f";

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(PAGE_ID);

  return (
    <article className="pt-10 pb-24">
      <Container className="pb-8 md:pb-12 font-normal border-b border-gray-200" placement="inner">
        <h1 className="font-serif font-normal text-[44px]/[46px] md:text-[54px]/[56px] tracking-tight text-gray-800 max-w-[480px] mb-3 md:mb-4 text-balance">
          React Tricks: Fast, Fit and Fun
        </h1>

        <div className="text-pretty pr-10 text-lg/relaxed md:text-xl/relaxed">
          Performance and size optimizations, stable references, and other tricks learned from
          maintaining{" "}
          <ShowcaseLink
            href="https://github.com/molefrog/wouter"
            prefer="below"
            media={{ image: wouterImg, aspectRatio: "auto" }}
          >
            wouter
          </ShowcaseLink>
          , a tiny React router
        </div>

        <div className="text-gray-500 text-base font-mono md:mt-6 mt-4">
          <div>@molefrog &middot; November 30, 2024</div>
        </div>
      </Container>

      <Container placement="inner" className="pt-6 md:pt-18">
        <NotionPage recordMap={recordMap} className="article__notion" fullPage={false} />
      </Container>
    </article>
  );
}
