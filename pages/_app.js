import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

const isServer = typeof window === "undefined";

import "../styles/index.scss";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if (!isServer) {
      const legacyPreview = require("../components/legacy-preview").default;
      legacyPreview(document.body);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Alex Taktarov — maker and full-stack engineer</title>
          <meta
            name="description"
            key="meta-description"
            content="Alexey Taktarov — a startup maker and full-stack engineer. Helps startups to launch products. Loves experimenting with UIs and design."
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
