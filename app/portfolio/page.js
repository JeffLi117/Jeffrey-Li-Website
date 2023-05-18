"use client";

import { useState, useEffect } from "react";

function portfolioPage() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, [])
  return (
    <div className="bg-gray-500/75 p-3 rounded-xl md:p-4 lg:w-3/4 fade-test" style={{ opacity:`${fade ? "0" : "1"}` }}>
        <div className="flex relative justify-left items-center ">
          <div className="text-5xl lineafter">Portfolio</div>&nbsp;
        </div>
        <div className="pt-4 text-2xl mb-4 font-bold w-4/5 md:text-3xl">My Projects</div>

        <a href="https://jeffli117.github.io/Finding-Friends/" className="div-inside">
          <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full">
            <li className="text-xl portfolio-header m-2 font-bold md:text-2xl"><span className="span-inside">Finding Friends</span></li>
            <li className="mx-3 mb-1"><span>A "Where's Waldo" game that gives you the opportunity to get on the leaderboard!</span></li>
            <li className="mx-3 mb-1"><span>Stack: React, JS, Webpack, Firebase, CSS </span></li>
          </div>
        </a>

        <a href="https://jeffli117.github.io/Shop-Till-You-Drop/" className="div-inside">
          <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full">
            <li className="text-xl portfolio-header m-2 font-bold w-4/5 md:text-2xl"><span className="span-inside">Movie Poster Madness</span></li>
            <li className="mx-3 mb-1"><span>Fully functional front-end shopping cart app developed with React Hooks.</span></li>
            <li className="mx-3 mb-1"><span>Stack: React, JS, Webpack, CSS </span></li>
          </div>
        </a>  
        
        <a href="https://github.com/JeffLi117/Memora" className="div-inside">
          <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full">
            <li className="text-xl portfolio-header m-2 font-bold w-4/5 md:text-2xl"><span className="span-inside">Memora</span></li>
            <li className="mx-3 mb-1"><span>Full-stack note-taking app designed for those who need help remembering important information by using
  built-in reminders.</span></li>
            <li className="mx-3 mb-1"><span>Synchronization with Firebase for data storage and user authentication.</span></li>
            <li className="mx-3 mb-1"><span>Stack: Sveltekit, Firebase, CSS </span></li>
          </div>
        </a>
        
        <a href="https://jeffli117.github.io/cv-hooks/" className="div-inside">
          <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full">
            <li className="text-xl portfolio-header m-2 font-bold w-4/5 md:text-2xl"><span className="span-inside">CV Generator</span></li>
            <li className="mx-3 mb-1"><span>Web app that can generate a curriculum vitae based on the information you input.</span></li>
            <li className="mx-3 mb-1"><span>Stack: React, JS, Webpack, CSS </span></li>
          </div>
        </a>
        
    </div>
  )
}

export default portfolioPage