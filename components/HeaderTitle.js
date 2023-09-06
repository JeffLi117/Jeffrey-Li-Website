"use client";
import React, { useState, useEffect } from "react";

export default function HeaderTitle() {
  const titles = ["software engineer", "full-stack developer", "doctor to dev"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    let currentIndex = 0;

    const typeTitle = () => {
      if (currentIndex <= title.length && isTyping) {
        setCurrentTitle(title.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeTitle, 200); // Adjust typing speed here (e.g., 200ms per letter)
      } else if (!isTyping) {
        setTimeout(eraseTitle, 5000); // Delay before erasing (5 seconds)
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentTitle("");
          setCurrentTitleIndex((prevIndex) =>
            prevIndex === titles.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Delay before switching to the next title (2 seconds)
      }
    };

    const eraseTitle = () => {
      if (currentIndex >= 0 && !isTyping) {
        setCurrentTitle(title.slice(0, currentIndex));
        currentIndex--;
        setTimeout(eraseTitle, 200); // Adjust erasing speed here (e.g., 200ms per letter)
      } else if (!isTyping) {
        setIsTyping(true);
        setTimeout(typeTitle, 1000); // Start typing the next title after erasing (1 second)
      }
    };

    setTimeout(typeTitle, 1000); // Start typing the first title when the component mounts (1 second)

    return () => {
      // Clean up the timeouts when the component unmounts
      clearTimeout(typeTitle);
      clearTimeout(eraseTitle);
    };
  }, []);

  return (
    <div className="font-mono text-xl">
      <span>{currentTitle}</span>
    </div>
  );
}