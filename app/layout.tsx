import { Viewport, type Metadata } from "next";
import Script from "next/script";
import React from "react";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import favicon from "../public/favicon.svg";

import VideoAssets from "@/content/videos";
import { fontsCSSVars } from "@/styles/fonts/fonts";
import "@/styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://molefrog.com"),
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

const isProduction = process.env.NODE_ENV === "production";

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

        {isProduction && (
          <>
            {/* 🌚 */}
            <Script data-domain="molefrog.com" src="https://plausible.io/js/script.js"></Script>
            <Script src="https://cdn.seline.so/seline.js"></Script>
          </>
        )}
      </body>
    </html>
  );
}
