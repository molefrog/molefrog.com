import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/Container";
import Link from "next/link";
import { Metadata } from "next";
import { clsx } from "clsx";

import Showcase from "@/components/Showcase";
import { RecentBlogPosts } from "@/components/RecentBlogPosts";

import domikImg from "@/public/images/domik-highlight.webp";
import wouterImg from "@/public/images/wouter-highlight.webp";
import speakingVideo from "@/public/showcase/speaking-use-state.mp4";
import resumeBuilderVideo from "@/public/showcase/resume-io-builder.mp4";
import domikLtdVideo from "@/public/showcase/domik-ltd.mp4";

import MINI_MAP_ITEMS, { getImageUrl } from "@/content/mini-map";
import ExpandInline from "@/components/ExpandInline";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page(): JSX.Element {
  return (
    <Container placement="inner" className="pt-2 md:pt-8">
      <section className="mb-12 md:mb-17.5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl/12 font-ds-serif mb-4 md:mb-6 text-pretty">
          Hi, I&apos;m Alexey.
          <br />
          I&nbsp;design and code web things.
        </h1>

        <div className="text-ds-gray-800 text-base/relaxed md:text-ds-base/relaxed mb-14 md:mb-16">
          <div className="[&_p]:my-5">
            <p>
              I am a founder,{" "}
              <Showcase media={{ video: speakingVideo, aspectRatio: 2.2 }} prefer="below">
                <Link className="solid-link" href="/speaking">
                  conference speaker
                </Link>
              </Showcase>
              ,{" "}
              <Showcase
                media={{ image: "/screenshot/github", aspectRatio: 1400 / 860 }}
                prefer="below"
              >
                <Link
                  className="solid-link"
                  href="https://github.com/molefrog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open-source
                </Link>
              </Showcase>{" "}
              maintainer and full-stack engineer. I&nbsp;love designing UIs, playing around with
              animations, and writing small yet expressive programs. The tools I use to get the job
              done are:{" "}
              <ExpandInline
                items={[
                  "Figma",
                  "React",
                  "Svelte",
                  "Ruby on Rails",
                  "Node.js",
                  "Deno",
                  "framer-motion",
                  "TypeScript",
                  "Tailwind",
                  "Remix",
                  "Next.js",
                  "Postgres",
                  "Redis",
                  "Cloudflare Workers",
                ]}
                withAnd
                expandBy={3}
                displayFirst={6}
              />
            </p>
            <p>
              Now that{" "}
              <Showcase media={{ video: resumeBuilderVideo, aspectRatio: 1200 / 768 }}>
                <Link className="solid-link" href="https://resume.io">
                  resume.io
                </Link>
              </Showcase>
              , where I was a technical co-founder and head of engineering, has been acquired,
              I&apos;m focusing on my own projects and exploring fresh ideas. I&apos;m particularly
              interested in local-first web, multiplayer apps and{" "}
              <Showcase media={{ video: domikLtdVideo, aspectRatio: 1460 / 1080 }}>
                <Link className="solid-link" href="https://domik.ltd/story">
                  interactive storytelling
                </Link>
              </Showcase>
              .
            </p>

            <p>
              Currently, I am building{" "}
              <Showcase media={{ image: "/screenshot/fira", aspectRatio: 1400 / 860 }}>
                <Link href="https://firaresearch.com" className="solid-link">
                  Fira (YC W25)
                </Link>
              </Showcase>
              , an AI-powered financial research assistant. We&apos;re on a mission to help analysts
              at M&A and investment firms accelerate their research and due diligence work. Drop me
              a line if you&apos;re interested in joining us.
            </p>
          </div>
        </div>

        {/* Selected Projects */}
        <div className="mb-14 md:mb-18 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-4">
          <ProjectCard
            href="https://domik.ltd"
            image={domikImg}
            alt="Domik Limited. Interactive story."
            description="As a side-project, I've written, designed and programmed an illustrated web-story with puzzles, animations and mini-games."
          >
            <ProjectLink href="https://domik.ltd" primary>
              Read
            </ProjectLink>
            <ProjectLink href="https://youtu.be/rA4dgn4rt5E?si=1Gv_nncJrY6zcU9B">
              <PlayIcon />
              Behind the scenes
            </ProjectLink>
          </ProjectCard>

          <ProjectCard
            href="https://github.com/molefrog/wouter"
            image={wouterImg}
            alt="wouter, open-source React.js router"
            description="Minimalistic React and Preact router library with 5k+ stars on GitHub and an API similar to classic react-router."
          >
            <ProjectLink href="https://github.com/molefrog/wouter">GitHub</ProjectLink>
          </ProjectCard>
        </div>

        {/* Mini Map */}
        <div className="mb-14 md:mb-20">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-[7px]">
            {MINI_MAP_ITEMS.map((item, idx) => {
              const shouldPrefetch = !/molefrog\.com\/etc\//.test(item.url);

              return (
                <Showcase key={String(idx) + item.url} media={item}>
                  <Link
                    prefetch={shouldPrefetch}
                    className="block aspect-square min-w-20 min-h-20 max-w-24 max-h-24 bg-cover bg-center bg-no-repeat cursor-pointer bg-ds-gray-200 rounded-md relative overflow-hidden shadow-[inset_-1px_-1px_0_1px_rgba(0,0,0,0.07),inset_1px_1px_0px_1px_rgba(128,128,128,0.2),inset_2px_2px_0px_1px_rgba(255,255,255,0.2)] before:content-[''] before:block before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3)_0%,transparent_35%,transparent_70%,rgba(0,0,0,0.05))] before:rounded-md before:transition-shadow before:shadow-[inset_0px_0px_0px_2px_transparent] hover:before:shadow-[inset_0px_0px_0px_2px_var(--color-ds-accent)]"
                    aria-label={`Read more on ${item.url}`}
                    style={{ backgroundImage: `url(${getImageUrl(item.thumb)})` }}
                    href={item.url}
                  />
                </Showcase>
              );
            })}
          </div>
        </div>

        {/* Blog */}
        <div>
          <RecentBlogPosts />
        </div>
      </section>
    </Container>
  );
}

/* ---------------------------------- Local Components ---------------------------------- */

interface ProjectCardProps {
  href: string;
  image: StaticImageData;
  alt: string;
  description: string;
  children: React.ReactNode;
}

const ProjectCard = ({ href, image, alt, description, children }: ProjectCardProps) => (
  <div>
    <a
      href={href}
      className="block relative aspect-video bg-ds-gray-50 border-2 border-ds-gray-200 rounded-md overflow-hidden cursor-pointer mb-4 transition-colors hover:border-ds-accent"
    >
      <Image
        src={image}
        fill
        placeholder="blur"
        priority
        className="object-cover object-bottom"
        alt={alt}
      />
    </a>
    <div className="text-base/relaxed">{description}</div>
    <div className="mt-5 flex flex-wrap gap-2">{children}</div>
  </div>
);

interface ProjectLinkProps {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}

const ProjectLink = ({ href, primary, children }: ProjectLinkProps) => (
  <a
    href={href}
    className={clsx(
      "inline-flex items-center gap-2 h-[38px] px-4 pb-px rounded-full font-medium no-underline cursor-pointer transition-shadow",
      primary
        ? "bg-ds-accent-500 text-white hover:shadow-[inset_0px_0px_0px_2px_var(--color-ds-accent-500),inset_0px_0px_0px_4px_white]"
        : "bg-ds-gray-50 text-ds-gray-600 shadow-[inset_0px_0px_0px_1px_var(--color-ds-gray-200)] hover:text-ds-accent hover:shadow-[inset_0px_0px_0px_2px_var(--color-ds-accent)] [&>svg]:text-ds-gray-800 [&>svg]:mt-px hover:[&>svg]:text-ds-accent",
    )}
  >
    {children}
  </a>
);

const PlayIcon = () => (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.32995 3.61615C8.0396 3.99172 8.0396 5.00828 7.32995 5.38385L1.46777 8.48634C0.801771 8.83881 -4.08964e-07 8.356 -3.76027e-07 7.60249L-1.04798e-07 1.39751C-7.18613e-08 0.643995 0.801772 0.161188 1.46777 0.513658L7.32995 3.61615Z"
      fill="currentColor"
    />
  </svg>
);
