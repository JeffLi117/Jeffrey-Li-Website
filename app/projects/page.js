"use client";
import React from 'react';
import { LightAuth } from '@/components/LightMode';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Finding_Friends_SS from "../../public/Finding_Friends_SS.png";
import Memora_SS from "../../public/Memora_SS.png";
import NIV_SS from "../../public/NIV_SS.png";

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
        ImgSrc: NIV_SS,
    },
    {
        title: "Finding Friends",
        description: `A "Where's Waldo" game that gives you the opportunity to get on the leaderboard!`,
        link: "https://jeffli117.github.io/Finding-Friends/",
        ImgSrc: Finding_Friends_SS,
    },
]

function page() {
  const { isLight } = LightAuth();
  
  return (
    <div className={`min-h-screen font-sans ${isLight ? "md:bg-[url('../public/white-pattern.jpg')]" : "md:bg-[url('../public/dark-pattern.jpg')]"} md:px-28 lg:px-48`}>
      <div className={`relative min-h-screen w-full animate-fadeIn h-[calc(100%-40px)] md:h-[calc(100%-55px)] pt-[50px] md:p-2 animate-fadeIn flex flex-col justify-start items-start gap-4 p-2 lg:px-20 lg:pb-2 ${isLight ? "bg-white text-cyan-900" : "bg-cyan-900 text-white"}`}>
        <Nav />
        <div className="text-3xl text-slate-400 flex text-center text-bold px-8 pb-4 md:pt-12">PROJECTS</div>
        {ProjectInfo.map((item, index) => {
          return (
              <div className="pb-2 w-full px-8" key={index}>
                  <a href={`${item.link}`}>
                      <div className="flex justify-center items-center">
                          <Image
                              src={item.ImgSrc}
                              className="rounded-lg shadow-lg shadow-slate-500"
                              height="100%"
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
      </div>
    </div>
  )
}

export default page