import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
  variable: "--font-mono",
});

const DSEG7Classic = localFont({
  src: [
    {
      path: "./DSEG7Classic/DSEG7Classic-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DSEG7Classic/DSEG7Classic-BoldItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  fallback: ["monospace"],
  variable: "--font-segm7",
  display: "swap",
});

const DSEG14Classic = localFont({
  src: [
    {
      path: "./DSEG14Classic/DSEG14Classic-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DSEG14Classic/DSEG14Classic-BoldItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  fallback: ["monospace"],
  variable: "--font-segm14",
  display: "swap",
});

const Redaction35 = localFont({
  src: [
    /* not being used at the moment
    {
      path: "./Redaction/Redaction_35-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    */
    { path: "./Redaction/Redaction_35-Italic.woff2", weight: "500", style: "italic" },
  ],
  fallback: ["serif"],
  variable: "--font-serif",
  display: "swap",
});

export const fontsCSSVars = [JetBrainsMono, DSEG7Classic, DSEG14Classic, Redaction35]
  .map((f) => f.variable)
  .join(" ");

export { JetBrainsMono, DSEG7Classic, DSEG14Classic, Redaction35 };
