import { useEffect, useState } from "react";
import clsx from "clsx";

import { motion } from "motion/react";

import pogOverlay from "./pog-overlay.png";

export function Pin({ active = false, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const tm = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(tm);
    };
  }, [delay]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={clsx(
        "rounded-full inline-block will-change-transform",
        active
          ? "w-8 h-8 border border-white shadow-[0_0px_2px_1px_rgba(0,0,0,0.6)] bg-white bg-center bg-cover"
          : "w-4 h-4 border-2 border-white shadow-[0_0px_2px_0px_rgba(0,0,0,0.25)] bg-[#cb2b1d]"
      )}
      style={active ? { backgroundImage: `url(${pogOverlay.src})` } : undefined}
    />
  );
}
