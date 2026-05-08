import type { MDXComponents } from "mdx/types";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className={clsx(
          "font-ds-serif font-medium tracking-tight text-[32px]/[38px] md:text-[42px]/[48px] mt-20 mb-4 first:mt-0",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className={clsx(
          "font-ds-serif font-medium tracking-tight text-[28px]/[34px] md:text-[34px]/[40px] mt-16 mb-3",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className={clsx(
          "font-ds-serif font-medium tracking-tight text-[22px]/[28px] md:text-[26px]/[32px] mt-12 mb-2",
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p className={clsx("text-ds-md/relaxed text-ds-gray-800 my-5", className)} {...props} />
    ),
    a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
      <a className={clsx("solid-link", className)} {...props} />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul className={clsx("text-ds-md/relaxed text-ds-gray-800 my-5 pl-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol className={clsx("text-ds-md/relaxed text-ds-gray-800 my-5 pl-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li className={clsx("my-1.5", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className={clsx(
          "border-l-2 border-ds-accent pl-5 my-6 text-ds-md/relaxed italic text-ds-gray-700",
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
      <code
        className={clsx(
          "font-ds-mono text-[0.92em] bg-ds-gray-100 px-1 py-0.5 rounded tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <pre
        className={clsx(
          "font-ds-mono text-sm/6 bg-[#211f20] text-[#f8f8f2] p-6 my-6 rounded-md overflow-x-auto",
          className,
        )}
        {...props}
      />
    ),
    hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
      <hr className={clsx("my-12 border-ds-gray-200", className)} {...props} />
    ),
    ...components,
  };
}
