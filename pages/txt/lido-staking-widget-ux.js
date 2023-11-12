import React from "react";
import Head from "next/head";
import WrapBalancer from "react-wrap-balancer";
import { Container } from "../../components/Grid";
import { ShowcaseLink } from "../../components/Showcase";

import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { Equation } from "react-notion-x/build/third-party/equation";

import lidoImg from "../../public/txt/lido-ui.webp";

import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";

export const getStaticProps = async () => {
  const PAGE_ID = "196e6fc3715b4d9a95e2d46549df07eb";

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(PAGE_ID);

  return {
    props: {
      recordMap,
    },
  };
};

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Lido.fi UX: User-Centered Audit of the Staking Widge</title>

        <meta
          name="description"
          key="meta-description"
          content={
            "How user experience of Ethereum staking on Lido.fi can be improved: research, customer journey maps, draft ideas, futher steps."
          }
        />

        <meta
          name="keywords"
          key="meta-keywords"
          content={["Web3 UX Patterns", "UX Audit", "Etherium", "Crypto"].join(", ")}
        />
      </Head>
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

        <Container placement="inner">
          <NotionRenderer
            recordMap={props.recordMap}
            components={{ Equation }}
            className="article__notion"
            fullPage={false}
          />
        </Container>
      </article>
    </>
  );
}
