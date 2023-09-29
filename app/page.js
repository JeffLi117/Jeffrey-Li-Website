"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";
import Headshot_Mononoke from "../public/Headshot_Mononoke.jpg";

export default function Home() {
  
  return (
    <div className="relative h-screen">
      <Nav />
      <div className="h-1/2 bg-orange-200 grid grid-cols-4">
        <div className="col-start-1 col-end-2 flex justify-end items-center">
          <Image
            src={Headshot_Mononoke}
            className="rounded-lg"
            height={150}
            width={150}
            alt="Personal headshot"
          />
        </div>
        <div className="grid grid-rows-4 col-start-2 col-end-5 p-4">
          <div className="flex flex-col items-center justify-center row-start-2 row-end-3">
            <div className="text-2xl font-bold">Jeffrey Li</div>
            <div>Houston, TX</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2  row-start-3 row-end-4">
            <TypingEffect />
          </div>
        </div>
      </div>
    </div>
  )
}
