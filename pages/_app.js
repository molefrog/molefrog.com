import React, { useEffect } from "react";
import Head from "next/head";
import localFont from "@next/font/local";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import "../styles/index.css";

const Redaction35 = localFont({
  src: [
    {
      path: "../styles/fonts/Redaction/Redaction_35-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    { path: "../styles/fonts/Redaction/Redaction_35-Italic.woff2", weight: "500", style: "italic" },
    { path: "../styles/fonts/Redaction/Redaction_35-Bold.woff2", weight: "700", style: "normal" },
  ],
  fallback: ["serif"],
  display: "swap",
});

export default function Layout({ Component, pageProps }) {
  useEffect(() => {
    import("../components/legacy-preview").then(({ default: legacyPreview }) => {
      legacyPreview(document.body);
    });
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: system-ui, sans-serif;
          --font-serif: ${Redaction35.style.fontFamily};
        }
      `}</style>

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

      <TopBar />

      <Component {...pageProps} />

      <Footer />

      {/* Floating preview */}
      <div className="preview" />
    </>
  );
}
