import React from "react";
import Script from "next/script";
import { Viewport, type Metadata } from "next";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

import favicon from "../public/favicon.svg";

import "../styles/index.css";
import VideoAssets from "@/content/videos";

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

const Redaction10 = localFont({
  src: [
    {
      path: "../styles/fonts/Redaction/Redaction_10-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    { path: "../styles/fonts/Redaction/Redaction_10-Italic.woff2", weight: "500", style: "italic" },
    { path: "../styles/fonts/Redaction/Redaction_10-Bold.woff2", weight: "700", style: "normal" },
  ],
  fallback: ["serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Overcoming overcomplication → Alexey Taktarov",
  description:
    "Alexey Taktarov (@mlfrg), web engineering consultant. " +
    "Former resume.io founding engineer. " +
    "I build things in JS, React, Node.js, Ruby on Rails.",

  icons: [{ url: favicon.src, type: "image/svg+xml", sizes: "any" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --font-sans: system-ui, sans-serif;
            --font-serif: ${Redaction35.style.fontFamily};
            --font-serif-fine: ${Redaction10.style.fontFamily};
            --font-mono: ${jetBrainsMono.style.fontFamily};
            --font-segm7: ${DSEG7Classic.style.fontFamily};
            --font-segm14: ${DSEG14Classic.style.fontFamily};
          }
        `,
          }}
        />

        <VideoAssets />

        <WrapBalancerProvider>
          <TopBar />

          {children}

          <Footer />
        </WrapBalancerProvider>

        <Script data-domain="molefrog.com" src="https://plausible.io/js/script.js"></Script>
      </body>
    </html>
  );
}
