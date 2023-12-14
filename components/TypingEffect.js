"use client";

import React, { useState, useEffect } from "react";
import { Roboto_Mono } from "next/font/google";

const rm = Roboto_Mono({ subsets: ["latin"], weight: "400" });

const titles = ["SOFTWARE ENGINEER", "FULL STACK DEVELOPER", "PIZZA LOVER", "DOCTOR TO DEV"];

export default function FadingEffect() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500); // Switch titles every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`md:min-h-[80px] text-2xl font-light grid place-items-center text-slate-400 ${rm.className}`}>
      {titles.map((title, index) => (
        <span
          key={index}
          className={`inline-block whitespace-nowrap transition-opacity duration-1000 ${currentTitleIndex === index ? "opacity-100" : "opacity-0"}`}
          style={{ top: 0, left: 0 }}
        >
          {title}
        </span>
      ))}
    </div>
  );
}
