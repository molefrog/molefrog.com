import WrapBalancer from "react-wrap-balancer";

import { Container } from "@/components/Grid";
import { NotionPage } from "./NotionPage";
import { NotionAPI } from "notion-client";
import { ShowcaseLink } from "@/components/Showcase";

import wouterImg from "@/public/txt/wouter.webp";

export const metadata = {
  title: "React Tricks: Fast, Fit and Fun",
  description:
    "How to make your React app or library faster and smaller. Tips and tricks: `useEvent`, `useSyncExternalStore`, stable object references, readonly `useState`.",
  keywords: ["React.js", "Web Performance", "React hooks", "Maintaining Open-Source"],
};

export default async function Index(props) {
  const PAGE_ID = "a08dd8c84fb443ac997d33174409ff9f";

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(PAGE_ID);

  return (
    <article className="article">
      <Container className="article__header" placement="inner">
        <h1 className="article__h1">
          <WrapBalancer>React Tricks: Fast, Fit and Fun</WrapBalancer>
        </h1>

        <div className="article__description">
          Lessons and hacks learned from developing a{" "}
          <ShowcaseLink
            href="https://github.com/molefrog/wouter"
            prefer="below"
            media={{ image: wouterImg, aspectRatio: "auto" }}
          >
            micro-library
          </ShowcaseLink>
        </div>

        <div className="article__info">
          <div className="article__date">November 30, 2024</div>
        </div>
      </Container>

      <Container placement="inner">
        <NotionPage recordMap={recordMap} className="article__notion" fullPage={false} />
      </Container>
    </article>
  );
}
