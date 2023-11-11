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
      <Container className="article__header" placement="outer">
        <h1 className="article__h1">
          <WrapBalancer>UX Audit of Lido.fi Staking Widget Frontend Application</WrapBalancer>
        </h1>

        <WrapBalancer>
          This article presents a comprehensive UX audit of the lido.fi staking widget frontend
          application. It delves into the user interface, interaction design, and overall user
          experience, providing insights and recommendations for improvement.
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
