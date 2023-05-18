"use client";
 
import { useState, useEffect } from "react";
import Link from "next/link";
import Pathname from "@/app/pathname";

function Nav() {
  let pathname = Pathname().props.children;

  const [clicked, setClicked] = useState({
    home: false,
    about: false,
    resume: false,
    portfolio: false,
    contact: false,
  });
  const handlerClick = (str) => {
    const newObj = {};
    Object.keys(clicked).forEach((key) => {
        if (key === str) {
            newObj[key] = true;
        } else {
            newObj[key] = false;
        }
    })
    setClicked(newObj);
  }
  useEffect(() => {
    if (pathname === "/") {
      pathname = "home"
    } else {
      pathname = pathname.slice(1);
    }
    handlerClick(pathname);
  }, [])
  return (
    <div className="absolute top-2 flex gap-2 justify-center items-center text-sm md:text-base md:gap-4 md:justify-left navbar-main" >
        <Link href='/' onClick={() => {handlerClick("home")}}>
            <div className="opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.home ? "orange" : "aquamarine"}`, opacity: `${clicked.home ? "1" : "0.75"}`, borderBottom: `${clicked.home ? "2px solid orange" : "2px solid transparent"}`}}>Home</div>
        </Link>
        <Link href='/about' onClick={() => {handlerClick("about")}}>
            <div className="opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.about ? "orange" : "aquamarine"}`, opacity: `${clicked.about ? "1" : "0.75"}`, borderBottom: `${clicked.about ? "2px solid orange" : "2px solid transparent"}`}}>About</div>
        </Link>
        <Link href='/resume' onClick={() => {handlerClick("resume")}}>
            <div className="opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.resume ? "orange" : "aquamarine"}`, opacity: `${clicked.resume ? "1" : "0.75"}`, borderBottom: `${clicked.resume ? "2px solid orange" : "2px solid transparent"}`}}>Resume</div>
        </Link>
        <Link href='/portfolio' onClick={() => {handlerClick("portfolio")}}>
            <div className="opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.portfolio ? "orange" : "aquamarine"}`, opacity: `${clicked.portfolio ? "1" : "0.75"}`, borderBottom: `${clicked.portfolio ? "2px solid orange" : "2px solid transparent"}`}}>Portfolio</div>
        </Link>
        <Link href='/contact' onClick={() => {handlerClick("contact")}}>
            <div className="opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.contact ? "orange" : "aquamarine"}`, opacity: `${clicked.contact ? "1" : "0.75"}`, borderBottom: `${clicked.contact ? "2px solid orange" : "2px solid transparent"}`}}>Contact</div>
        </Link>
    </div>
  )
}

export default Nav