"use client";

import React, { useState } from "react";

interface ExpandInlineProps {
  items: React.ReactNode[];
  displayFirst: number;
  withAnd?: boolean;
  expandBy?: number;
}

export const ExpandInline: React.FC<ExpandInlineProps> = ({
  items,
  displayFirst,
  withAnd = false,
  expandBy = 1,
}) => {
  const [displayCount, setDisplayCount] = useState(displayFirst);

  const visibleItems = items.slice(0, displayCount);
  const hasMore = items.length > displayCount;

  const handleExpand = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + expandBy, items.length));
  };

  return (
    <span className="expand-inline">
      {visibleItems.map((item, index) => {
        const shouldAddAnd = withAnd && index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && (shouldAddAnd ? " and " : ", ")}
            {item}
            {index === items.length - 1 && "."}
          </React.Fragment>
        );
      })}
      {hasMore && (
        <>
          {" "}
          <button className="expand-inline__button" onClick={handleExpand}>
            <MoreHorizontalIcon />
          </button>
        </>
      )}
    </span>
  );
};

const MoreHorizontalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
);

export default ExpandInline;
