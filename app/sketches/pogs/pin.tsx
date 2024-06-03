import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export function Pin({ size = 20, delay = 0 }) {
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
    <svg
      className={clsx(styles.pin, { [styles.pin_visible]: isVisible })}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_381_2)">
        <g filter="url(#filter0_d_381_2)">
          <circle cx="12" cy="12" r="10" fill="#DD0000" />
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_381_2"
          x="0.2"
          y="0.2"
          width="23.6"
          height="23.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.9" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_381_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_381_2" result="shape" />
        </filter>
        <clipPath id="clip0_381_2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
