import { BannerCV } from "../BannerCV";
import { Container } from "../Container";

import Image from "next/image";
import logo from "./logo.svg";

const Footer = () => (
  <footer className="pb-20 mt-8">
    <Container placement="inner">
      <div className="mx-auto mb-16 md:mb-20">
        {/* Divider */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-ds-gray-100 to-transparent" />

        <div className="text-ds-gray-600 mb-8 pt-12 text-sm">
          You can reach out to me online via one of the links below
        </div>

        {/* Links grid */}
        <div className="font-medium grid grid-cols-2 gap-y-3 gap-x-16">
          {/* CV Banner spans 2 rows on desktop, full width on mobile */}
          <div className="col-span-2 sm:col-span-1 sm:row-span-2 place-self-start w-full pb-2.5 sm:pb-0">
            <BannerCV resumeSSID="vGP2z" />
          </div>

          <div>
            <a
              className="text-ds-gray-800 sm:text-base text-ds-sm no-underline hover:text-ds-accent"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/molefrog"
            >
              GitHub
            </a>
          </div>

          <div>
            <a
              className="text-ds-gray-800 sm:text-base text-ds-sm no-underline hover:text-ds-accent"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/molefrog"
            >
              Telegram
            </a>
          </div>

          <div>
            <a
              className="text-ds-gray-800 sm:text-base text-ds-sm no-underline hover:text-ds-accent"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/mlfrg"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              className="text-ds-gray-800 sm:text-base text-ds-sm no-underline hover:text-ds-accent"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.are.na/mole-frog"
            >
              Are.na
            </a>
          </div>

          <div>
            <a
              className="text-ds-gray-800 sm:text-base text-ds-sm no-underline hover:text-ds-accent"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/molefrog/"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              className="text-ds-gray-800 sm:text-base text-ds-sm no-underline hover:text-ds-accent"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/molefrog"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </Container>

    <Container placement="inner">
      <div className="text-ds-gray-600 text-ds-sm mx-auto text-center [&_a]:text-ds-accent-300 [&_a]:no-underline [&_a:hover]:text-ds-accent-500 [&_a:hover]:underline [&_p]:my-4">
        <Image width={32} className="w-8 opacity-15 mx-auto mb-6" src={logo} alt="molefrog.com" />

        <p className="text-balance">
          The source code of this website can be found on{" "}
          <a
            href="https://github.com/molefrog/molefrog.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . The website uses{" "}
          <a
            className="font-serif"
            href="https://store.naipefoundry.com/fonts/discordia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discórdia
          </a>
          ,{" "}
          <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">
            Inter
          </a>
          ,{" "}
          <a
            className="font-ds-mono tracking-tight"
            href="https://berkeleygraphics.com/typefaces/berkeley-mono/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Berkeley Mono
          </a>{" "}
          and{" "}
          <a
            className="font-ds-segm7 text-[0.8em] font-bold"
            href="https://www.keshikan.net/fonts-e.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            DSEG
          </a>{" "}
          typefaces. Hosted on{" "}
          <a href="https://pages.cloudflare.com/" target="_blank" rel="noopener noreferrer">
            Cloudflare Pages
          </a>
          .
        </p>

        <p className="text-balance">
          Bonus: I have been logging every single movie I have watched since 2010, feel free to
          follow my{" "}
          <a href="https://letterboxd.com/molefrog/" target="_blank" rel="noopener noreferrer">
            Letterboxd account
          </a>{" "}
          if you&apos;re into movies.
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
