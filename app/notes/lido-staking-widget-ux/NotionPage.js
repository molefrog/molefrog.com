"use client";

import React from "react";
import { NotionRenderer } from "react-notion-x";
import { Equation } from "react-notion-x/build/third-party/equation";

import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";

export async function NotionPage({ recordMap, ...props }) {
  return <NotionRenderer recordMap={recordMap} components={{ Equation }} {...props} />;
}
