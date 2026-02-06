"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

import { Container } from "../Container";
import { MolefrogLogo } from "../MolefrogLogo";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <header className="pt-8 mb-12 md:mb-22 relative z-50">
      <Container placement="inner">
        <div className="flex items-center flex-wrap md:flex-nowrap md:-ml-0.5">
          {/* Logo wrapper */}
          <div className="mr-0 ml-3 order-2 self-start md:order-0 top-4 left-4 md:ml-0 md:mr-4">
            <Link href="/" aria-label="Home">
              <MolefrogLogo />
            </Link>
          </div>

          {/* Links */}
          <div className="flex-1 gap-x-3 gap-y-2 flex flex-row flex-wrap items-center order-1 md:order-0">
            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "select-none hover:bg-ds-gray-150 hover:text-ds-gray-600",
                "md:hidden",
                {
                  "text-ds-gray-500 bg-ds-gray-150 hover:bg-ds-gray-150 hover:text-ds-gray-500":
                    pathname === "/",
                },
              )}
              href="/"
            >
              About
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "select-none hover:bg-ds-gray-150 hover:text-ds-gray-600",
                {
                  "text-ds-gray-500 bg-ds-gray-150 hover:bg-ds-gray-150 hover:text-ds-gray-500":
                    /^\/speaking(?:\/|$)/.test(pathname),
                },
              )}
              href="/speaking"
            >
              Speaking
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "select-none hover:bg-ds-gray-150 hover:text-ds-gray-600",
                {
                  "text-ds-gray-500 bg-ds-gray-150 hover:bg-ds-gray-150 hover:text-ds-gray-500":
                    pathname === "/sketches",
                },
              )}
              href="/sketches"
            >
              Sketches
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "select-none hover:bg-ds-gray-150 hover:text-ds-gray-600",
                {
                  "text-ds-gray-500 bg-ds-gray-150 hover:bg-ds-gray-150 hover:text-ds-gray-500":
                    pathname === "/media",
                },
              )}
              href="/media"
            >
              Mentions
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "select-none hover:bg-ds-gray-150 hover:text-ds-gray-600",
                {
                  "text-ds-gray-500 bg-ds-gray-150 hover:bg-ds-gray-150 hover:text-ds-gray-500":
                    pathname === "/friends",
                },
              )}
              href="/friends"
            >
              Friends
            </Link>

            <Link
              className={clsx(
                "inline-flex h-9 px-3 rounded-sm items-center text-ds-gray-800 text-sm md:text-base font-medium no-underline cursor-pointer",
                "select-none hover:bg-ds-gray-150 hover:text-ds-gray-600",
                "after:inline-block after:content-[''] after:bg-ds-gray-300 after:size-1 after:rounded-full after:relative after:-top-1.5 after:ml-1",
                "hover:after:bg-ds-accent hover:after:opacity-80",
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
                "select-none hover:bg-ds-gray-150 hover:text-ds-gray-600",
                "after:inline-block after:content-[''] after:bg-ds-gray-300 after:size-1 after:rounded-full after:relative after:-top-1.5 after:ml-1",
                "hover:after:bg-ds-accent hover:after:opacity-80",
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
