"use client";
import dynamic from "next/dynamic";

export const DynamicHeader = dynamic(
  () => import("https://fast-fit-fun.vercel.app/fast-fit-fun.js").then((module) => module.CatDemo),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
