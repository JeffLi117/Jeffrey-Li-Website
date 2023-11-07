"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdMoreVert, MdMoreHoriz } from "react-icons/md";
import Link from "next/link";
import { Frank_Ruhl_Libre } from 'next/font/google'
 
const frl = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '400', })

function Nav() {

  const [openBurger, setOpenBurger] = useState(false);
  let pathName = window.location.pathname;
  return (
    <div className="bg-transparent relative z-20 animate-fadeIn flex justify-between items-center p-1">
      <div id="iconHolders" className="flex justify-center items-center md:gap-1">
        <Link href="/"><div className={`z-20 p-1 md:p-2 border border-transparent rounded-full ${frl.className}`}>JL</div></Link>
        <div id="githubIcon" className="z-20 p-1 md:p-2 border border-transparent rounded-full">
          <a href="https://github.com/JeffLi117">
            < FaGithub/>
          </a>
          </div>
          <div id="linkedInIcon" className="z-20 p-1 md:p-2 border border-transparent rounded-full">
            <a href="https://www.linkedin.com/in/jeffrey-li-do/">
              < FaLinkedinIn/>
            </a>
          </div>
          <div id="mailIcon" className="z-20 p-1 md:p-2 border border-transparent rounded-full">
            <a href="mailto:jeffrey.t.li.work@gmail.com">
              < HiOutlineMail/>
            </a>
        </div>
      </div>
      <div id="burgerHolder" className="relative text-right flex flex-col justify-end items-end" >
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
              onClick={()=> setOpenBurger(false)} href="/"
              className={`${pathName === "/" ? "pointer-events-none" : ""}`} 
              aria-disabled={`${pathName === "/" ? "true" : ""}`} 
            >
              <div className={`${pathName === "/" ? "text-slate-400" : ""}`}>HOME</div>
            </Link>
            <Link 
              onClick={()=> setOpenBurger(false)}  href="/about"
              className={`${pathName === "/about" ? "pointer-events-none" : ""}`} 
              aria-disabled={`${pathName === "/about" ? "true" : ""}`} 
            >
              <div className={`${pathName === "/about" ? "text-slate-400" : ""}`}>ABOUT</div>
            </Link>
            <Link 
              onClick={()=> setOpenBurger(false)}  href="/projects"
              className={`${pathName === "/projects" ? "pointer-events-none" : ""}`} 
              aria-disabled={`${pathName === "/projects" ? "true" : ""}`} 
            >
              <div className={`${pathName === "/projects" ? "text-slate-400" : ""}`}>PROJECTS</div>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Nav