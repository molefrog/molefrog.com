import { isValidElement, cloneElement, useRef, useEffect, useState, memo } from "react";
import clsx from "clsx";
import Image from "next/image";
import useMouse from "@react-hook/mouse-position";
import { useLockBodyScroll } from "react-use";
import Marquee from "react-fast-marquee";

import WonderingEyes from "../WonderingEyes";

const PREVIEW_W = 480;
const MARGIN = 12;

const shouldUseModalDialog = () => {
  if (typeof window === "undefined") return false;

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  return isMobile || isTouch;
};

const Popover = ({ mousePosition, anchorElement, media, modal = false }) => {
  // "init" | "placeholder" | "loaded"
  const [loadingState, setLoadingState] = useState("init");

  const placeholderTimer = useRef(null);
  const loadedTimer = useRef(null);

  useEffect(() => {
    if (modal) {
      setLoadingState("placeholder");
    } else {
      placeholderTimer.current = setTimeout(() => setLoadingState("placeholder"), 150);
    }
    loadedTimer.current = setTimeout(() => setLoadingState("loaded"), 2000);

    return () => {
      clearTimeout(placeholderTimer.current);
      clearTimeout(loadedTimer.current);
    };
  }, [modal]);

  const handleResourceLoaded = () => {
    clearTimeout(placeholderTimer.current);
    clearTimeout(loadedTimer.current);
    setLoadingState("loaded");
  };

  const { aspectRatio = 1.5 } = media;

  const position = modal
    ? {} // static dialog
    : calculatePopoverPosition(
        anchorElement,
        mousePosition,
        PREVIEW_W,
        PREVIEW_W / aspectRatio,
        MARGIN
      );

  const tags = [media.tags ?? []].flat(); // ["a", "b"] or "b"

  return (
    <div
      className={clsx("showcase__popover", {
        "showcase__popover--hidden": loadingState === "init",
        "showcase__popover--modal": modal,
      })}
      style={{ ...position, "--aspect-ratio": aspectRatio }}
    >
      <div className="showcase__media">
        {media.image && (
          <Image
            src={media.image}
            alt={media.description}
            fill
            className="showcase__img"
            onLoadingComplete={handleResourceLoaded}
          />
        )}

        {media.video && (
          <video
            className="showcase__video"
            onCanPlayThrough={handleResourceLoaded}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={media.video} type={media.format ?? "video/mp4"} />
          </video>
        )}
      </div>

      {loadingState === "placeholder" && (
        <div className="showcase__placeholder">
          <WonderingEyes />
        </div>
      )}

      {media?.description && (
        <div className="showcase__description">
          <Marquee
            speed={loadingState === "loaded" ? 40 : 0}
            gradient
            gradientWidth={24}
            gradientColor={[14, 62, 250]}
          >
            <div className="showcase__marquee">
              {tags.map((tag) => (
                <span key={tag} className="showcase__tag">
                  {tag}
                </span>
              ))}
              {media.description}
            </div>
          </Marquee>
        </div>
      )}
    </div>
  );
};

const Showcase = ({ children, media, aspectRatio }) => {
  const ref = useRef(null);

  const [Wrap] = useState(() =>
    memo(function W() {
      return cloneElement(children, { ref });
    })
  );

  const pos = useMouse(ref, { enterDelay: 0, leaveDelay: 0, fps: 60 });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  /* Static modal dialog, on mobiles and small screens */
  const isStatic = shouldUseModalDialog();
  const [staticDialogOpen, setStaticDialogOpen] = useState(false);
  const backdropRef = useRef(null);

  const handleBackdropClick = (event) => {
    if (event.target === backdropRef.current) {
      setStaticDialogOpen(false);
    }
  };
  useLockBodyScroll(isHydrated && isStatic && staticDialogOpen);

  // when in static mode, open the dialog on click
  useEffect(() => {
    if (isStatic && ref.current) {
      const handleAnchorClick = (event) => {
        event.preventDefault();
        setStaticDialogOpen(true);
      };

      const el = ref.current;

      el.addEventListener("click", handleAnchorClick);
      return () => el.removeEventListener("click", handleAnchorClick);
    }
  }, [isStatic]);

  const url = children.props.href || media?.link;

  if (!isValidElement) return "Children must be a single element";

  return (
    <>
      {!isStatic && isHydrated && pos.isOver && (
        <Popover mousePosition={pos} anchorElement={ref.current} media={media} />
      )}
      {isStatic && isHydrated && staticDialogOpen && (
        <div className="showcase__static-backdrop" ref={backdropRef} onClick={handleBackdropClick}>
          <Popover modal media={media} />

          {url && (
            <a href={url} className="showcase__modal-button">
              {new URL(url).host} ↗
            </a>
          )}
        </div>
      )}
      <Wrap />
    </>
  );
};

const calculatePopoverPosition = (element, pos, popoverWidth, popoverHeight, margin) => {
  const { clientX, clientY, x, y } = pos;

  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const popoverLeft = clientX + elementWidth / 2 - popoverWidth / 2;
  const popoverTop = clientY - popoverHeight / 2;

  const popoverFitsAbove = clientY - popoverHeight - y - margin >= 0;
  const popoverFitsRight = clientX + (elementWidth - x) + margin + popoverWidth <= viewportWidth;
  const popoverFitsBelow = clientY + (elementHeight - y) + margin + popoverHeight <= viewportHeight;
  const popoverFitsLeft = clientX - popoverWidth - x - margin >= 0;

  if (popoverFitsRight) {
    return { top: popoverTop, left: clientX + (elementWidth - x) + margin };
  } else if (popoverFitsBelow) {
    return { top: clientY + (elementHeight - y) + margin, left: popoverLeft };
  } else if (popoverFitsLeft) {
    return { top: popoverTop, left: clientX - popoverWidth - x - margin };
  } else {
    return { top: clientY - popoverHeight - y - margin, left: popoverLeft };
  }
};

export default Showcase;

export const ShowcaseLink = ({ children, href, media = {}, ...props }) => {
  const link = media.link || href;

  return (
    <Showcase media={media}>
      <a {...props} className={clsx("solid-link", props.className)} href={link}>
        {children}
      </a>
    </Showcase>
  );
};
