"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

import { Container } from "../Container";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <header className="pt-8 mb-12 md:mb-16 relative z-50 font-[family-name:var(--font-inter)]">
      <Container placement="inner">
        <div className="flex items-center flex-wrap md:flex-nowrap md:-ml-[106px]">
          {/* Logo wrapper */}
          <div className="mr-0 ml-3 order-2 self-start md:order-none md:mr-10 md:ml-0">
            <Link
              className={clsx(
                "block rounded-sm size-8 md:size-14",
                "after:block after:w-full after:h-full after:bg-ds-gray-800 after:content-['']",
                "after:[mask:url('/components/TopBar/logo-mask.png')_no-repeat_center/100%]",
                "hover:after:bg-ds-accent",
                { "after:bg-ds-gray-500": pathname === "/" }
              )}
              aria-label="Home"
              href="/"
            />
          </div>

          {/* Links */}
          <div className="flex-1 gap-x-3 gap-y-2 flex flex-row flex-wrap items-center order-1 md:order-none">
            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "hover:bg-ds-gray-50 hover:text-ds-accent",
                "md:hidden",
                { "text-ds-gray-500 bg-ds-gray-100 hover:bg-ds-gray-100 hover:text-ds-gray-500": pathname === "/" }
              )}
              href="/"
            >
              About
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "hover:bg-ds-gray-50 hover:text-ds-accent",
                { "text-ds-gray-500 bg-ds-gray-100 hover:bg-ds-gray-100 hover:text-ds-gray-500": /^\/speaking(?:\/|$)/.test(pathname) }
              )}
              href="/speaking"
            >
              Speaking
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "hover:bg-ds-gray-50 hover:text-ds-accent",
                { "text-ds-gray-500 bg-ds-gray-100 hover:bg-ds-gray-100 hover:text-ds-gray-500": pathname === "/sketches" }
              )}
              href="/sketches"
            >
              Sketches
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "hover:bg-ds-gray-50 hover:text-ds-accent",
                { "text-ds-gray-500 bg-ds-gray-100 hover:bg-ds-gray-100 hover:text-ds-gray-500": pathname === "/media" }
              )}
              href="/media"
            >
              Mentions
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "hover:bg-ds-gray-50 hover:text-ds-accent",
                { "text-ds-gray-500 bg-ds-gray-100 hover:bg-ds-gray-100 hover:text-ds-gray-500": pathname === "/friends" }
              )}
              href="/friends"
            >
              Friends
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "hover:bg-ds-gray-50 hover:text-ds-accent",
                "after:inline-block after:content-[''] after:bg-ds-gray-300 after:size-1 after:rounded-full after:relative after:-top-1.5 after:ml-1",
                "hover:after:bg-ds-accent hover:after:opacity-80"
              )}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/molefrog"
            >
              GitHub
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "hover:bg-ds-gray-50 hover:text-ds-accent",
                "after:inline-block after:content-[''] after:bg-ds-gray-300 after:size-1 after:rounded-full after:relative after:-top-1.5 after:ml-1",
                "hover:after:bg-ds-accent hover:after:opacity-80"
              )}
              target="_blank"
              rel="noopener noreferrer"
              href="https://resume.io/r/vGP2z"
            >
              CV
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default TopBar;
