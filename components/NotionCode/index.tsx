import * as React from "react";
import { highlight } from "sugar-high";
import { CodeBlock } from "notion-types";
import { getBlockTitle } from "notion-utils";
import { useNotionContext, Text } from "react-notion-x";
import clsx from "clsx";

export const NotionCode: React.FC<{
  block: CodeBlock;
  defaultLanguage?: string;
  className?: string;
}> = ({ block, defaultLanguage = "typescript", className }) => {
  const { recordMap } = useNotionContext();
  const content = getBlockTitle(block, recordMap);
  const language = (block.properties?.language?.[0]?.[0] || defaultLanguage).toLowerCase();
  const caption = block.properties.caption;

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
      <pre className={clsx("notion-code", className)}>
        <code
          className={`language-${language}`}
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
