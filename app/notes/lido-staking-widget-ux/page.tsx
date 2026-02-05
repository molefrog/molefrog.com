import Image from "next/image";
import { Metadata } from "next";

import { Container } from "@/components/Container";
import { ShowcaseLink } from "@/components/Showcase";
import { NotionPage } from "./NotionPage";
import { NotionAPI } from "notion-client";

import lidoImg from "@/public/txt/lido-ui.webp";
import coverImg from "@/public/images/lido-article-cover.webp";

export const metadata: Metadata = {
  title: "Lido.fi UX: User-Centered Audit of the Staking Widget",
  description:
    "How user experience of Ethereum staking on Lido.fi can be improved: research, customer journey maps, draft ideas, futher steps.",
  keywords: ["Web3 UX Patterns", "UX Audit", "Etherium", "Crypto"],
};

export default async function Index() {
  const PAGE_ID = "196e6fc3715b4d9a95e2d46549df07eb";

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(PAGE_ID);

  return (
    <article className="pt-10 pb-24">
      <Container className="pb-14 md:pb-20 text-lg/[29px] font-normal" placement="inner">
        <div className="text-ds-xs font-medium text-ds-accent-400 uppercase tracking-[2px] mb-4 inline-block rounded-md">
          research
        </div>
        <h1 className="font-ds-serif font-normal text-[44px]/[46px] md:text-[54px]/[56px] tracking-tight text-ds-gray-800 max-w-[480px] mb-5 md:mb-6 text-balance">
          User-Centered Liquid Staking
        </h1>

        <div className="text-pretty">
          Initial UX evaluation of{" "}
          <ShowcaseLink
            href="https://stake.lido.fi"
            media={{ image: lidoImg, aspectRatio: "auto" }}
          >
            Lido.fi
          </ShowcaseLink>
          , the leading decentralised protocol for Ethereum liquid staking
        </div>
      </Container>

      <Container placement="outer">
        <div className="h-[200px] sm:h-[380px] overflow-hidden relative rounded mb-8 sm:mb-12 [&_img]:object-cover [&_img]:object-top">
          <Image src={coverImg} alt="Lido.fi staking widget UX" fill placeholder="blur" />
        </div>
      </Container>

      <Container placement="inner">
        <NotionPage recordMap={recordMap} className="article__notion" fullPage={false} />
      </Container>
    </article>
  );
}
