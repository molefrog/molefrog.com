import React, { useEffect } from "react";
import Head from "next/head";

import { Inter } from "@next/font/google";

import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ Component, pageProps }) {
  useEffect(() => {
    import("../components/legacy-preview").then(({ default: legacyPreview }) => {
      legacyPreview(document.body);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Overcoming overcomplication → Alexey Taktarov</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48" />

        <meta
          name="description"
          key="meta-description"
          content={
            "Alexey Taktarov (@mlfrg), web engineering consultant. " +
            "Former resume.io founding engineer. " +
            "I build things in JS, React, Node.js, Ruby on Rails."
          }
        />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
