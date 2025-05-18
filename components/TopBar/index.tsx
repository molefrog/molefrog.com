"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

import { Container } from "../Grid";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <header className="top-bar">
      <Container placement="inner">
        <div className="top-bar__layout">
          <div className="top-bar__logo-wrapper">
            <Link
              className={clsx("top-bar__logo", { ["top-bar__logo--active"]: pathname === "/" })}
              aria-label="Home"
              href="/"
            />
          </div>

          <div className="top-bar__links">
            <Link
              className={clsx("top-bar__link top-bar__link--mobile-only", {
                ["top-bar__link--active"]: pathname === "/",
              })}
              href="/"
            >
              About
            </Link>

            <Link
              className={clsx("top-bar__link", {
                ["top-bar__link--active"]: /^\/speaking(?:\/|$)/.test(pathname),
              })}
              href="/speaking"
            >
              Speaking
            </Link>

            <Link
              className={clsx("top-bar__link", {
                ["top-bar__link--active"]: pathname === "/sketches",
              })}
              href="/sketches"
            >
              Sketches
            </Link>

            <Link
              className={clsx("top-bar__link", {
                ["top-bar__link--active"]: pathname === "/media",
              })}
              href="/media"
            >
              Mentions
            </Link>

            <Link
              className={clsx("top-bar__link", {
                ["top-bar__link--active"]: pathname === "/friends",
              })}
              href="/friends"
            >
              Friends
            </Link>

            <Link
              className="top-bar__link top-bar__link--external"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/molefrog"
            >
              GitHub
            </Link>

            <Link
              className="top-bar__link top-bar__link--external"
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
