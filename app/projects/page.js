import React from 'react';
import Image from 'next/image';
import Finding_Friends_SS from "../../public/Finding_Friends_SS.png";
import Memora_SS from "../../public/Memora_SS.png";
import Not_In_Vein_SS from "../../public/Not_In_Vein_SS.png";

const ProjectInfo = [
    {
        title: "Memora",
        description: "Note-taking app designed for those who need help remembering important information by using built-in reminders.",
        link: "https://memora-jeffli117.vercel.app/",
        ImgSrc: Memora_SS,
    },
    {
        title: "Not In Vein",
        description: "Centralized reminder application for blood donation donors to track their past donations and remind them of upcoming ones via notifications, email, and text.",
        link: "https://github.com/JeffLi117/Not-In-Vein",
        ImgSrc: Not_In_Vein_SS,
    },
    {
        title: "Finding Friends",
        description: `A "Where's Waldo" game that gives you the opportunity to get on the leaderboard!`,
        link: "https://jeffli117.github.io/Finding-Friends/",
        ImgSrc: Finding_Friends_SS,
    },
]

function page() {
  return (
    <div className="animate-fadeIn flex flex-col justify-start items-start gap-4 pt-2 px-2">
      <div className="text-3xl text-slate-400 flex text-center text-bold">PROJECTS</div>
      {ProjectInfo.map((item) => {
        return (
            <div className="pb-4">
                <a href={`${item.link}`}>
                    <div className="flex justify-center items-center">
                        <Image
                            src={item.ImgSrc}
                            className="rounded-lg shadow-lg shadow-slate-500"
                            height={250}
                            width="100%"
                            alt="project item image"
                        />
                    </div>
                    <h2 className="text-2xl text-left text-bold pt-2">{item.title}</h2>
                    <p>{item.description}</p>
                </a>
            </div>
            
        )
      })}
        {/* <a href="https://jeffli117.github.io/Finding-Friends/" className="div-inside">
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
            <li className="mx-3 mb-1"><span>Full-stack note-taking app designed for those who need help remembering important information by using built-in reminders.</span></li>
            <li className="mx-3 mb-1"><span>Synchronization with Firebase for data storage and user authentication.</span></li>
            <li className="mx-3 mb-1"><span>Stack: Sveltekit, Firebase, CSS </span></li>
          </div>
        </a> */}
    </div>
  )
}

export default page