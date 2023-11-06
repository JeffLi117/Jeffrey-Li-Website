"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdMore } from "react-icons/io";
import Link from "next/link";

function Nav() {

  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="bg-transparent relative z-20">
      <div id="burgerHolder" >
        < IoMdMore 
          className="md:hidden"
          onClick={()=> setOpenBurger(!openBurger)}
        />
        {openBurger && 
          <div className="font-mono text-sm">
            <Link href="/"><div>HOME</div></Link>
            <Link href="/about"><div>ABOUT</div></Link>
            <Link href="/projects"><div>PROJECTS</div></Link>
          </div>
        }
      </div>
      <div id="iconHolders" className="flex justify-center items-center md:gap-1">
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
      
    </div>
  )
}

export default Nav