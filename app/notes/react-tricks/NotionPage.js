"use client";

import React from "react";
import { NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";
import { NotionCode } from "@/components/NotionCode";

export function NotionPage({ recordMap, ...props }) {
  return <NotionRenderer recordMap={recordMap} components={{ Code: NotionCode }} {...props} />;
}
