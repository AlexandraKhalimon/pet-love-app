"use client";

import Image from "next/image";
import css from "./Loader.module.css";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log("LOADER MOUNTED");

    let value = 0;

    const percent = setInterval(() => {
      value += Math.random() * 8;

      console.log(value);

      if (value >= 95) {
        value = 95;
        clearInterval(percent);
      }

      setProgress(Math.floor(value));
    }, 120);

    return () => clearInterval(percent);
  }, []);

  const radius = 136;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={css.loaderContainer}>
      <picture>
        <source media="(min-width: 1280px)" srcSet="/images/main-desktop.jpg" />
        <source media="(min-width: 768px)" srcSet="/images/main-tablet.jpg" />
        <Image
          src="/images/main-mobile.jpg"
          alt="Dog in the vet's office"
          width={375}
          height={812}
          sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, 100vw"
          priority
          className={css.loadingImage}
        />
      </picture>
      <div className={css.loadingOverlay}>
        <svg
          width={292}
          height={292}
          viewBox="0 0 292 292"
          className={css.loadingCircle}
        >
          <circle
            cx={146}
            cy={146}
            r={radius}
            className={css.circleBackground}
          />
          <circle
            cx={146}
            cy={146}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={css.circleProgress}
          />
        </svg>
        <p className={css.percent}>{progress}%</p>
      </div>
    </div>
  );
}
