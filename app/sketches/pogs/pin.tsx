import { useEffect, useState } from "react";
import clsx from "clsx";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

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
      className={clsx(styles.pin, active && styles.pin_current)}
    />
  );
}
