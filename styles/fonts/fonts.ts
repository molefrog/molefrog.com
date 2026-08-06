import localFont from "next/font/local";

// Inter 4.1, self-hosted from https://rsms.me/inter/download/ (SIL OFL 1.1)
const InterFont = localFont({
  src: "./Inter/InterVariable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-sans",
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

const BerkeleyMono = localFont({
  src: "./BerkeleyMono/Berkeley Mono Variable.woff2",
  fallback: ["monospace"],
  variable: "--font-mono",
  display: "swap",
});

const Discordia = localFont({
  src: [
    {
      path: "./Discordia/Discordia-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Discordia/Discordia-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Discordia/Discordia-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  fallback: ["serif"],
  variable: "--font-serif",
  display: "swap",
});

export const fontsCSSVars = [DSEG7Classic, DSEG14Classic, BerkeleyMono, Discordia, InterFont]
  .map((f) => f.variable)
  .join(" ");

export { DSEG7Classic, DSEG14Classic, BerkeleyMono, Discordia, InterFont };
