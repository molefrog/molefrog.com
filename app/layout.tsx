import React from "react";
import { Viewport, type Metadata } from "next";
import Script from "next/script";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import favicon from "../public/favicon.svg";

import "@/styles/index.css";
import { fontsCSSVars } from "@/styles/fonts/fonts";
import VideoAssets from "@/content/videos";

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
    <html className={fontsCSSVars} lang="en">
      <body>
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
