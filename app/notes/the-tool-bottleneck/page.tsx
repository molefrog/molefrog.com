import { Metadata } from "next";
import { Container } from "@/components/Container";
import Body from "./body.mdx";

import "@/components/MDX/mdx.css";

export const metadata: Metadata = {
  title: "If LLMs Were Free → Alexey Taktarov",
  description:
    "A thought experiment about where the time really goes in an agent loop, and why the model isn't the slow part.",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
};

export default function Page() {
  return (
    <article className="pt-10 pb-24">
      <Container className="pb-8 md:pb-12 border-b border-ds-gray-150" placement="inner">
        <div className="text-ds-xs font-medium text-ds-accent-500 uppercase tracking-[2px] mb-4 inline-block">
          Field notes · interactive
        </div>

        <h1 className="font-ds-serif font-medium tracking-tight text-[44px]/[46px] md:text-[56px]/[58px] text-ds-gray-900 max-w-[560px] mb-3 md:mb-5 text-balance">
          If LLMs Were Free
        </h1>

        <p className="text-ds-md/relaxed md:text-[19px]/relaxed text-ds-gray-700 max-w-[600px] text-pretty">
          A thought experiment about where the time really goes in an agent loop — and why the
          model is almost never the slow part.
        </p>

        <div className="flex items-center gap-3 text-ds-gray-500 text-sm font-ds-mono mt-6 md:mt-8">
          <span>@molefrog</span>
          <span aria-hidden>·</span>
          <span>May 9, 2026</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-ds-accent" />
            unlisted
          </span>
        </div>
      </Container>

      <Container placement="inner" className="pt-8 md:pt-12">
        <div className="article-body">
          <Body />
        </div>
      </Container>
    </article>
  );
}
