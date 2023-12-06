"use client";

import * as React from "react";
import { highlight } from "sugar-high";
import { CodeBlock } from "notion-types";
import { getBlockTitle } from "notion-utils";
import { Decoration } from "notion-types";
import { useNotionContext, Text } from "react-notion-x";
import clsx from "clsx";

import { ExecCode } from "./ExecCode";

const Code = ({
  block,
  caption,
  content,
  language,
  className,
}: {
  block: CodeBlock;
  caption?: Decoration[];
  className?: string;
  content: string;
  language: string;
}) => {
  const highlightedHTML = React.useMemo(() => {
    try {
      if (!["typescript", "javascript"].includes(language)) {
        throw new Error(`unsupported language: ${language}`);
      }

      return highlight(content);
    } catch (err) {
      console.warn("error highlighting the code", err);
      return content;
    }
  }, [content, language]);

  return (
    <>
      <pre className={clsx("notion-code notion-article-code__code", className)}>
        <code
          className={`notion-article-code--language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedHTML }}
        />
      </pre>

      {caption && (
        <figcaption className="notion-asset-caption">
          <Text value={caption} block={block} />
        </figcaption>
      )}
    </>
  );
};

export const NotionCode: React.FC<{
  block: CodeBlock;
  defaultLanguage?: string;
  className?: string;
}> = ({ block, defaultLanguage = "typescript", className }) => {
  const { recordMap } = useNotionContext();
  const content = getBlockTitle(block, recordMap);

  /**
   * Support special type of code blocks can (unsafely) execute an arbitrary JS code
   */
  if (content.startsWith("/* @dangerously-exec-code */")) {
    return <ExecCode js={content} />;
  }

  const language = (block.properties?.language?.[0]?.[0] || defaultLanguage).toLowerCase();

  return (
    <Code
      block={block}
      caption={block.properties.caption}
      content={content}
      language={language}
      className={className}
    />
  );
};
