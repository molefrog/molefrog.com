import { clsx } from "clsx";
import { ComponentProps } from "react";

export interface ContainerProps extends ComponentProps<"div"> {
  placement: "inner" | "outer" | "wide";
}

const placementClasses = {
  inner: "max-w-ds-inner",
  outer: "max-w-ds-outer",
  wide: "max-w-none",
} as const;

export const Container = ({
  placement,
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto px-ds-page-mobile md:px-ds-page",
        placementClasses[placement],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
