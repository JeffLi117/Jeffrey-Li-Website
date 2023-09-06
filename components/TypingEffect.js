"use client";
import React, { useState, useEffect } from "react";

export default function TypingEffect() {

  const titles = ["SOFTWARE DEVELOPER", "FULL STACK DEVELOPER", "DOCTOR TO DEV"];
  let text = titles[0];
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
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
            intervalId = setInterval(typeText, 50); // Start typing again (adjust as needed)
          }, 1000); // Delay before typing again (1 second)
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
  }, []);

  return <h3 className="text-2xl font-light flex justify-left items-center" >{displayText}</h3>;
}
