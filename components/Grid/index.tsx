import clsx from "clsx";
import { ComponentProps } from "react";

export interface GridProps extends ComponentProps<"div"> {
  padding?: boolean;
}

export const Grid = ({ padding = true, className, ...props }: GridProps) => {
  return (
    <div
      className={clsx(className, "grid-layout", {
        "grid-layout--with-padding": padding,
      })}
      {...props}
    />
  );
};

export const Block = (props: ComponentProps<"div">) => {
  return <div className="grid-layout__block" {...props} />;
};

Grid.Block = Block;

export interface ContainerProps extends ComponentProps<"div">, GridProps {
  ignoreTopbarMargin?: boolean;
  placement: "inner" | "outer" | "wide" | "left-shift" | "right-shift";
}

const placementColumnCSS = {
  inner: "inner-grid 1 / inner-grid 5",
  outer: "outer-grid 1 / outer-grid 2",
  wide: "start / end",
  "left-shift": "outer-grid 1 / inner-grid 5",
  "right-shift": "inner-grid 1 / outer-grid 2",
} as const;

export const Container = ({
  ignoreTopbarMargin = false,
  placement,
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <Grid
      {...props}
      className={clsx(className, "container", {
        "container--ignore-topbar-margin": ignoreTopbarMargin,
      })}
    >
      <Grid.Block style={{ gridColumn: placementColumnCSS[placement] }}>{children}</Grid.Block>
    </Grid>
  );
};
