"use client";
import { useState, useEffect } from "react";
import BackButton from "./BackButton";

export default function Footer() {
  
  const [pathName, setPathName] = useState(null)
  const [isMainFolder, setIsMainFolder] = useState()
  
  useEffect(() => {
    // Split the pathname into an array of segments
    var pathSegments = window.location.pathname.split("/");
    console.log("pathSegments is ", pathSegments);
    if (pathSegments.length === 3) {
      setIsMainFolder(true);
    }

    // Get the root folder (the first segment)
    var rootFolder = pathSegments[1]; // Index 0 is an empty string due to the leading slash
    setPathName("/"+rootFolder);
  }, [])
  
  useEffect(() => {
    console.log("pathName is ", pathName);
  }, [pathName])

  return (
    <section className="absolute w-full flex justify-between items-center bottom-1 pb-1">
      <div>
        <hr className="border-b-4 w-full border-solid rounded-full border-purple-100 mb-2 mx-2"/>
        <div className="flex justify-between items-center mx-2">
          <span className="w-full">©️ 2023 Jeffrey Li</span>
        </div>
      </div>
      
      {/* {isMainFolder ? 
        <div className="pr-2"></div> 
      : 
        <div className="pr-2">
          {(pathName === "/experience" || pathName === "/experience/") ? <BackButton destination="experience" /> : null}
          {(pathName === "/projects" || pathName === "/projects/") ? <BackButton destination="projects" /> : null}
        </div>
      } */}
      
    </section>
  )
}