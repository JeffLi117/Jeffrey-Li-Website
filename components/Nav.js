"use client";
import { useState, useEffect } from "react";
import { LightAuth } from "./LightMode";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdMoreVert, MdMoreHoriz } from "react-icons/md";
import Link from "next/link";
import { Frank_Ruhl_Libre } from 'next/font/google'
 
const frl = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '400', })

function Nav() {
  const { isLight } = LightAuth();
  const [openBurger, setOpenBurger] = useState(false);
  const [pathName, setPathName] = useState(null)
  
  useEffect(() => {
    setPathName(window.location.pathname);
  }, [])

  return (
    <div className={`bg-transparent text-xl absolute top-0 left-0 w-full z-20 animate-fadeIn flex justify-between items-center p-1 h-[40px] md:h-[55px]`}>
      <div id="iconHolders" className="flex justify-center items-center gap-1">
        <Link href="/"><div className={`z-20 p-1 md:p-2 border border-transparent rounded-full ${frl.className}`}>JL</div></Link>
      <div id="githubIcon" className={`z-20 p-1 md:p-2 border border-transparent rounded-full transition bg-transparent hover:bg-yellow-300 ${isLight ? null : "hover:text-cyan-900"} ease-in-out`}>
          <a href="https://github.com/JeffLi117">
            < FaGithub/>
          </a>
          </div>
          <div id="linkedInIcon" className={`z-20 p-1 md:p-2 border border-transparent rounded-full transition bg-transparent hover:bg-yellow-300 ${isLight ? null : "hover:text-cyan-900"} ease-in-out`}>
            <a href="https://www.linkedin.com/in/jeffrey-li-do/">
              < FaLinkedinIn/>
            </a>
          </div>
          <div id="mailIcon" className={`z-20 p-1 md:p-2 border border-transparent rounded-full transition bg-transparent hover:bg-yellow-300 ${isLight ? null : "hover:text-cyan-900"} ease-in-out`}>
            <a href="mailto:jeffrey.t.li.work@gmail.com">
              < HiOutlineMail/>
            </a>
        </div>
      </div>
      <div id="burgerHolder" className="relative text-right flex flex-col justify-end items-end md:hidden" >
        {openBurger ? 
          < MdMoreHoriz 
            className={`md:hidden text-2xl w-fit`}
            onClick={()=> setOpenBurger(false)}
          />
          : 
          < MdMoreVert 
            className={`md:hidden text-2xl w-fit`}
            onClick={()=> setOpenBurger(true)}
          />
        }
        {openBurger && 
          <div className="text-sm animate-fadeIn fixed top-8 right-1">
            <Link 
              onClick={()=> {setPathName("/"); setOpenBurger(false)}} href="/"
              className={`${pathName === "/" ? "pointer-events-none" : ""}`} 
              aria-disabled={`${pathName === "/" ? "true" : ""}`} 
            >
              <div className={`${pathName === "/" ? "text-slate-400" : ""}`}>HOME</div>
            </Link>
            <Link 
              onClick={()=> {setPathName("/about"); setOpenBurger(false)}}  href="/about"
              className={`${pathName === "/about" ? "pointer-events-none" : ""}`} 
              aria-disabled={`${pathName === "/about" ? "true" : ""}`} 
            >
              <div className={`${pathName === "/about" ? "text-slate-400" : ""}`}>ABOUT</div>
            </Link>
            <Link 
              onClick={()=> {setPathName("/projects"); setOpenBurger(false)}}  href="/projects"
              className={`${pathName === "/projects" ? "pointer-events-none" : ""}`} 
              aria-disabled={`${pathName === "/projects" ? "true" : ""}`} 
            >
              <div className={`${pathName === "/projects" ? "text-slate-400" : ""}`}>PROJECTS</div>
            </Link>
          </div>
        }
      </div>
      <div className="animate-fadeIn text-right flex justify-end items-center gap-[7px] p-1 hidden md:flex">
          <Link 
            onClick={()=> setPathName("/")} href="/"
            className={`${pathName === "/" ? "pointer-events-none" : ""} p-1 border border-transparent rounded-full`} 
            aria-disabled={`${pathName === "/" ? "true" : ""}`} 
          >
            <div className={`transition bg-transparent hover:bg-yellow-300 ease-in-out rounded-md px-2 py-1 ${pathName === "/" ? "text-slate-400" : ""} ${isLight ? null : "hover:text-cyan-900"}`}>HOME</div>
          </Link>
          <Link 
            onClick={()=> setPathName("/about")} href="/about"
            className={`${pathName === "/about" ? "pointer-events-none" : ""} p-1 border border-transparent rounded-full`} 
            aria-disabled={`${pathName === "/about" ? "true" : ""}`} 
          >
            <div className={`transition bg-transparent hover:bg-yellow-300 ease-in-out rounded-md px-2 py-1 ${pathName === "/about" ? "text-slate-400" : ""} ${isLight ? null : "hover:text-cyan-900"}`}>ABOUT</div>
          </Link>
          <Link 
            onClick={()=> setPathName("/projects")} href="/projects"
            className={`${pathName === "/projects" ? "pointer-events-none" : ""} p-1 border border-transparent rounded-full`} 
            aria-disabled={`${pathName === "/projects" ? "true" : ""}`} 
          >
            <div className={`transition bg-transparent hover:bg-yellow-300 ease-in-out rounded-md px-2 py-1 ${pathName === "/projects" ? "text-slate-400" : ""} ${isLight ? null : "hover:text-cyan-900"}`}>PROJECTS</div>
          </Link>
        </div>
    </div>
  )
}

export default Nav