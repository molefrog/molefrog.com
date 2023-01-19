import clsx from "clsx";
import { ComponentProps } from "react";

export interface SolidLinkProps extends ComponentProps<"a"> {
  external?: boolean;
}

export const SolidLink = ({ external, className, ...props }: SolidLinkProps) => {
  const relProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return <a {...relProps} {...props} className={clsx(className, "solid-link")} />;
};
