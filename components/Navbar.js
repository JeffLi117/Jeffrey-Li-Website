"use client";
import { useState, useEffect } from "react";
import Headshot_Mononoke_Square from "../public/Headshot_Mononoke_Square.jpg";
import Image from "next/image";
import Link from "next/link";
import LightToggler from '@/components/LightToggler';

export default function Navbar() {

  const [pathName, setPathName] = useState(null)
  
  useEffect(() => {
    setPathName(window.location.pathname);
  }, [])
  
  useEffect(() => {
    console.log("pathName is ", pathName);
  }, [pathName])

  return (
    <section className="mb-4 pt-4">
        {/* <LightToggler /> */}
        <div className="flex justify-start items-center gap-2">
            <Link 
                onClick={()=> setPathName("/")} href="/"
                className={`${pathName === "/" ? "pointer-events-none" : ""}`} 
                aria-disabled={`${pathName === "/" ? "true" : ""}`} 
            >
                <Image
                    src={Headshot_Mononoke_Square}
                    className="rounded-full"
                    height={100}
                    width={100}
                    alt="Personal headshot"
                />
            </Link>
            <div className="flex flex-col justify-start items-start gap-2">
                <Link 
                    onClick={()=> setPathName("/")} href="/"
                    className={`${pathName === "/" ? "pointer-events-none" : ""}`} 
                    aria-disabled={`${pathName === "/" ? "true" : ""}`} 
                >
                    <div className="text-2xl">
                        <h1>Jeffrey Li</h1>
                        <hr className="w-[37px] border-b-4 border-solid rounded-full border-purple-700"/>
                    </div>
                </Link>
                <ul className="flex justify-start items-start gap-4">
                        <li className={`transition bg-transparent hover:bg-purple-200 ease-in-out rounded-md p-1 ${pathName === "/resume" ? "text-slate-400" : ""}`}>
                            <Link 
                                onClick={()=> setPathName("/resume")} href="/resume"
                                className={`${pathName === "/resume" ? "pointer-events-none" : ""}`} 
                                aria-disabled={`${pathName === "/resume" ? "true" : ""}`} 
                            >
                                Resume
                            </Link>
                        </li>
                    
                        <li className={`transition bg-transparent hover:bg-purple-200 ease-in-out rounded-md p-1 ${pathName === "/projects" ? "text-slate-400" : ""}`}>
                            <Link 
                                onClick={()=> setPathName("/projects")} href="/projects"
                                className={`${pathName === "/projects" ? "pointer-events-none" : ""}`} 
                                aria-disabled={`${pathName === "/projects" ? "true" : ""}`} 
                            >
                                Projects
                            </Link>
                        </li>
                    
                        <li className={`transition bg-transparent hover:bg-purple-200 ease-in-out rounded-md p-1 ${pathName === "/contact" ? "text-slate-400" : ""}`}>
                            <Link 
                                onClick={()=> setPathName("/contact")} href="/contact"
                                className={`${pathName === "/contact" ? "pointer-events-none" : ""}`} 
                                aria-disabled={`${pathName === "/contact" ? "true" : ""}`} 
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
