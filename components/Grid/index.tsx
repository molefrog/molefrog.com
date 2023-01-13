import { ComponentProps } from "react";
import clsx from "clsx";

export interface GridProps extends ComponentProps<"div"> {
  padding?: boolean;
}

export const Grid = ({ padding = true, className, ...props }: GridProps) => {
  return (
    <div
      className={clsx(className, "grid-layout", { "grid-layout--with-padding": padding })}
      {...props}
    />
  );
};

Grid.Block = (props: ComponentProps<"div">) => {
  return <div className="grid-layout__block" {...props} />;
};

export interface ContainerProps extends ComponentProps<"div"> {
  placement: "inner" | "outer" | "wide";
}

const placementColumnCSS = {
  inner: "inner-grid 1 / inner-grid 5",
  outer: "outer-grid 1 / outer-grid 2",
  wide: "start / end",
} as const;

export const Container = ({ placement, children, ...props }: ContainerProps) => {
  return (
    <Grid {...props}>
      <Grid.Block style={{ gridColumn: placementColumnCSS[placement] }}>{children}</Grid.Block>
    </Grid>
  );
};
