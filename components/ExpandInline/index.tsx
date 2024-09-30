"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

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
  const [playNotes, setPlayNotes] = useState<(n?: number) => void>(() => {});

  useEffect(() => {
    import("./synth").then((module) => {
      const synthFunction = module.synth();
      setPlayNotes(() => synthFunction);
    });
  }, []);

  const visibleItems = items.slice(0, displayCount);
  const hasMore = items.length > displayCount;

  const handleExpand = () => {
    const n = Math.min(expandBy, items.length - displayCount);
    setDisplayCount((prev) => Math.min(prev + expandBy, items.length));

    playNotes(n);
  };

  return (
    <span className="expand-inline">
      <AnimatePresence initial={false}>
        {visibleItems.map((item, index) => {
          const shouldAddAnd = withAnd && index === items.length - 1;

          const delay = Math.max(0, 0.1 * (index - (visibleItems.length - expandBy)));

          return (
            <motion.span
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 1000,
                  damping: 25,
                  delay: delay,
                },
                opacity: {
                  ease: "linear",
                  duration: 0.1,
                  delay: delay,
                },
              }}
            >
              {item}
              {index < visibleItems.length - 1 && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {shouldAddAnd ? " and " : ", "}
                </motion.span>
              )}
              {index === items.length - 1 && "."}
            </motion.span>
          );
        })}
      </AnimatePresence>

      {hasMore && (
        <>
          {" "}
          <motion.button
            className="expand-inline__button"
            onClick={handleExpand}
            layout
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          >
            <MoreHorizontalIcon />
          </motion.button>
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
