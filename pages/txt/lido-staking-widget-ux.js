import React from "react";
import Image from "next/image";
import WrapBalancer from "react-wrap-balancer";
import { Container } from "../../components/Grid";
import { SolidLink } from "../../components/SolidLink";
import Link from "next/link";

import Showcase from "../../components/Showcase";

import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { Equation } from "react-notion-x/build/third-party/equation";

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
    <article className="article">
      <Container className="article__header" placement="inner">
        <div className="article__category">research</div>
        <h1 className="article__h1">
          <WrapBalancer>User-Centered Liquid Staking</WrapBalancer>
        </h1>

        <WrapBalancer>
          An incomplete UX Audit of Lido.fi, the leading decentralised protocol for Ethereum liquid
          staking.
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
  );
}
