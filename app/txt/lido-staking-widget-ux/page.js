import Image from "next/image";
import WrapBalancer from "react-wrap-balancer";

import { Container } from "@/components/Grid";
import { ShowcaseLink } from "@/components/Showcase";
import { NotionPage } from "./NotionPage";
import { NotionAPI } from "notion-client";

import lidoImg from "@/public/txt/lido-ui.webp";

export const metadata = {
  title: "Lido.fi UX: User-Centered Audit of the Staking Widget",
  description:
    "How user experience of Ethereum staking on Lido.fi can be improved: research, customer journey maps, draft ideas, futher steps.",
  keywords: ["Web3 UX Patterns", "UX Audit", "Etherium", "Crypto"],
};

export default async function Index(props) {
  const PAGE_ID = "196e6fc3715b4d9a95e2d46549df07eb";

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(PAGE_ID);

  return (
    <article className="article">
      <Container className="article__header" placement="inner">
        <div className="article__category">research</div>
        <h1 className="article__h1">
          <WrapBalancer>User-Centered Liquid Staking</WrapBalancer>
        </h1>

        <WrapBalancer>
          An incomplete UX Audit of{" "}
          <ShowcaseLink
            href="https://stake.lido.fi"
            media={{ image: lidoImg, aspectRatio: "auto" }}
          >
            Lido.fi
          </ShowcaseLink>
          , the leading decentralised protocol for Ethereum liquid staking
        </WrapBalancer>
      </Container>

      <Container placement="outer">
        <div className="article__cover">
          <Image
            src="/images/lido-article-cover.webp"
            alt="Lido.fi staking widget UX"
            fill
            placeholder="blur"
          />
        </div>
      </Container>

      <Container placement="inner">
        <NotionPage recordMap={recordMap} className="article__notion" fullPage={false} />
      </Container>
    </article>
  );
}
