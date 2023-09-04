import { isValidElement, cloneElement, useRef, useEffect, useState, memo } from "react";
import clsx from "clsx";
import Image from "next/image";
import useMouse from "@react-hook/mouse-position";
import WonderingEyes from "../WonderingEyes";

const PREVIEW_W = 480;
const PREVIEW_H = 320;
const MARGIN = 12;

const Popover = ({ mousePosition, anchorElement, media }) => {
  // "init" | "placeholder" | "loaded"
  const [loadingState, setLoadingState] = useState("init");

  const placeholderTimer = useRef(null);
  const loadedTimer = useRef(null);

  useEffect(() => {
    if (placeholderTimer.current !== null) return;

    placeholderTimer.current = setTimeout(() => setLoadingState("placeholder"), 350);
    loadedTimer.current = setTimeout(() => setLoadingState("loaded"), 2000);
  }, []);

  const handleResourceLoaded = () => {
    clearTimeout(placeholderTimer.current);
    clearTimeout(loadedTimer.current);
    setLoadingState("loaded");
  };

  const position = calculatePopoverPosition(
    anchorElement,
    mousePosition,
    PREVIEW_W,
    PREVIEW_H,
    MARGIN
  );

  return (
    <div
      className={clsx("showcase__popover", {
        "showcase__popover--hidden": loadingState === "init",
      })}
      style={position}
    >
      <div className="showcase__media">
        {media?.image && (
          <Image
            src={media.image}
            alt={desc}
            fill
            className="showcase__img"
            onLoadingComplete={handleResourceLoaded}
          />
        )}

        {media?.video && (
          <video
            className="showcase__video"
            onCanPlayThrough={handleResourceLoaded}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={media.video} type={media?.format ?? "video/mp4"} />
          </video>
        )}
      </div>

      {loadingState === "placeholder" && (
        <div className="showcase__placeholder">
          <WonderingEyes />
        </div>
      )}
    </div>
  );
};

const Showcase = ({ children, media }) => {
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

  if (!isValidElement) return "Children must be a single element";

  return (
    <>
      {isHydrated && pos.isOver && (
        <Popover mousePosition={pos} anchorElement={ref.current} media={media} />
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
