// "use client";
// import { useState, useEffect } from "react";
import Link from "next/link";
import LightToggler from '@/components/LightToggler';

export default function Navbar() {

//   const [pathName, setPathName] = useState(null)
  
//   useEffect(() => {
//     // Split the pathname into an array of segments
//     var pathSegments = window.location.pathname.split("/");

//     // Get the root folder (the first segment)
//     var rootFolder = pathSegments[1]; // Index 0 is an empty string due to the leading slash
//     setPathName("/"+rootFolder);
//   }, [])
  
//   useEffect(() => {
//     console.log("pathName is ", pathName);
//   }, [pathName])

  return (
    <section className="mb-4 pt-4">
        {/* <LightToggler /> */}
        <div className="flex justify-start items-center gap-2">
            <Link 
                // onClick={()=> setPathName("/")} 
                href="/"
                // className={`${pathName === "/" ? "pointer-events-none" : ""}`} 
                // aria-disabled={`${pathName === "/" ? "true" : ""}`} 
            >
                <img
                    src="/Headshot_Mononoke_Square.jpg"
                    className="rounded-full"
                    height={100}
                    width={100}
                    alt="Personal headshot"
                />
            </Link>
            <div className="flex flex-col justify-start items-start gap-2">
                <Link 
                    // onClick={()=> setPathName("/")} 
                    href="/"
                    // className={`${pathName === "/" ? "pointer-events-none" : ""}`} 
                    // aria-disabled={`${pathName === "/" ? "true" : ""}`} 
                >
                    <div className="text-xl md:text-2xl">
                        <h1>Jeffrey Li</h1>
                        <hr className="w-[37px] border-b-4 border-solid rounded-full border-purple-700"/>
                    </div>
                </Link>
                <ul className="flex justify-start items-start gap-2 md:gap-4 text-xs md:text-base">
                    <li className={`transition bg-transparent hover:bg-purple-200 ease-in-out rounded-md p-1`}>
                        <Link 
                            // onClick={()=> setPathName("/experience")} 
                            href="/experience"
                            // className={`${(pathName === "/experience" || pathName === "/experience/") ? "pointer-events-none" : ""}`} 
                            // aria-disabled={`${(pathName === "/experience" || pathName === "/experience/") ? "true" : ""}`} 
                        >
                            Experience
                        </Link>
                    </li>
                
                    <li className={`transition bg-transparent hover:bg-purple-200 ease-in-out rounded-md p-1`}>
                        <Link 
                            // onClick={()=> setPathName("/projects")} 
                            href="/projects"
                            // className={`${(pathName === "/projects" || pathName === "/projects/") ? "pointer-events-none" : ""}`} 
                            // aria-disabled={`${(pathName === "/projects" || pathName === "/projects/") ? "true" : ""}`} 
                        >
                            Projects
                        </Link>
                    </li>
                
                    <li className={`transition bg-transparent hover:bg-purple-200 ease-in-out rounded-md p-1`}>
                        <Link 
                            // onClick={()=> setPathName("/contact")} 
                            href="/contact"
                            // className={`${(pathName === "/contact" || pathName === "/contact/") ? "pointer-events-none" : ""}`} 
                            // aria-disabled={`${(pathName === "/contact" || pathName === "/contact/") ? "true" : ""}`} 
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
