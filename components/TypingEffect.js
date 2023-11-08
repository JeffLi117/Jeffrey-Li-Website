"use client";

import React, { useState, useEffect } from "react";
import { Roboto_Mono } from "next/font/google";
 
const rm = Roboto_Mono({ subsets: ['latin'], weight: '400', })

export default function TypingEffect() {
  const titles = ["SOFTWARE ENGINEER", "FULL STACK DEVELOPER", "PIZZA LOVER", "DOCTOR TO DEV"];
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [givenIndex, setGivenIndex] = useState(0);
  let text;

  useEffect(() => {
    text = titles[givenIndex];
    let currentIndex = 0;
    let intervalId;

    const typeText = () => {
      if (isTyping) {
        setDisplayText((prevText) => {
          if (currentIndex === text.length) {
            clearInterval(intervalId);
            setIsTyping(false);
            setTimeout(() => {
              intervalId = setInterval(eraseText, 50); // Start erasing (adjust as needed)
            }, 1000); // Delay before erasing (1 second)
            return prevText;
          } else {
            return prevText + text.charAt(currentIndex++);
          }
        });
      }
    };

    const eraseText = () => {
      setDisplayText((prevText) => {
        if (prevText.length === 0) {
          clearInterval(intervalId);
          setIsTyping(true);
          setTimeout(() => {
            currentIndex = 0;
            intervalId = setInterval(() => {
              setGivenIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }, 50); // Switch titles every 50ms
          }, 2000); // Delay before typing again (2 seconds)
          return prevText;
        } else {
          return prevText.slice(0, prevText.length - 1);
        }
      });
    };

    intervalId = setInterval(typeText, 80); // Start typing (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, [givenIndex]);

  return <h3 className={`md:min-h-[80px] text-2xl font-light flex justify-left items-center text-slate-400 ${rm.className}`}>
    {displayText}
  </h3>;
}
