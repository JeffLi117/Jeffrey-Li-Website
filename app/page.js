"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  
  return (
    <div className="relative h-screen bg-orange-200">
      <div>
        <Nav />
        <div className="absolute inset-0 grid-rows-2 items-center justify-center p-12">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-2xl font-bold">Jeffrey Li</div>
            <div>Houston, TX</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <TypingEffect />
          </div>
        </div>
      </div>
      
    </div>
    
  )
}
