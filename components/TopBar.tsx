import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { clsx } from "clsx";

const TopBar = () => {
  const router = useRouter();
  const pathname = new URL(router.asPath, "https://none.bar").pathname;

  return (
    <header className="top-bar">
      <div className="layout__container">
        <div className="top-bar__links">
          <Link
            className={clsx("top-bar__link", { ["top-bar__link--active"]: pathname === "/" })}
            href="/"
          >
            @
          </Link>

          {/* <Link
            className={clsx("top-bar__link", {
              ["top-bar__link--active"]: pathname === "/projects",
            })}
            href="/projects"
          >
            Projects
          </Link> */}

          <Link
            className={clsx("top-bar__link", {
              ["top-bar__link--active"]: pathname === "/media",
            })}
            href="/media"
          >
            Media Mentions
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
    </header>
  );
};

export default TopBar;
