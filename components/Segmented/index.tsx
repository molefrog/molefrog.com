import React from "react";

export const Segmented = ({
  children,
  cellColor = "var(--color-gray-200)",
}: {
  children: string;
  cellColor?: string;
}) => {
  if (typeof children !== "string") return null;
  const cellsTxt = Array.from({ length: children.length })
    .map((_) => "8")
    .join("");

  return (
    <span
      className="segmented__text"
      style={
        {
          "--cell-color": cellColor,
        } as React.CSSProperties
      }
      data-cells={cellsTxt}
      data-text={children}
    />
  );
};

export default Segmented;
