import React, { useEffect } from "react";
import Script from "next/script";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";
import Head from "next/head";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import "../styles/index.css";
import favicon from "../public/favicon.svg";

// If loading a variable font, you don't need to specify the font weight
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

const DSEG7Classic = localFont({
  src: [
    {
      path: "../styles/fonts/DSEG7Classic/DSEG7Classic-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/DSEG7Classic/DSEG7Classic-Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../styles/fonts/DSEG7Classic/DSEG7Classic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/DSEG7Classic/DSEG7Classic-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  fallback: ["monospace"],
  display: "swap",
});

const DSEG14Classic = localFont({
  src: [
    {
      path: "../styles/fonts/DSEG14Classic/DSEG14Classic-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/DSEG14Classic/DSEG14Classic-Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../styles/fonts/DSEG14Classic/DSEG14Classic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/DSEG14Classic/DSEG14Classic-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  fallback: ["monospace"],
  display: "swap",
});

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
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: system-ui, sans-serif;
          --font-serif: ${Redaction35.style.fontFamily};
          --font-mono: ${jetBrainsMono.style.fontFamily};
          --font-segm7: ${DSEG7Classic.style.fontFamily};
          --font-segm14: ${DSEG14Classic.style.fontFamily};
        }
      `}</style>

      <Head>
        <title>Overcoming overcomplication → Alexey Taktarov</title>

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <link rel="icon" type="image/svg+xml" href={favicon.src} />

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

      <Script data-domain="molefrog.com" src="https://plausible.io/js/script.js"></Script>

      <WrapBalancerProvider>
        <TopBar />

        <Component {...pageProps} />

        <Footer />

        {/* Floating preview */}
        <div className="preview" />
      </WrapBalancerProvider>
    </>
  );
}
