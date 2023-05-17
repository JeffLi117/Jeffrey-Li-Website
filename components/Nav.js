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
    <div className="absolute top-2 flex justify-center items-center gap-2 md:gap-4 md:justify-left navbar-main" >
        <Link href='/' onClick={() => {handlerClick("home")}}>
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.home ? "aqua" : "aquamarine"}`, opacity: `${clicked.home ? "1" : "0.75"}`, textDecoration: `${clicked.home ? "underline" : "none"}`}}>Home</div>
        </Link>
        <Link href='/about' onClick={() => {handlerClick("about")}}>
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.about ? "aqua" : "aquamarine"}`, opacity: `${clicked.about ? "1" : "0.75"}`, textDecoration: `${clicked.about ? "underline" : "none"}`}}>About</div>
        </Link>
        <Link href='/resume' onClick={() => {handlerClick("resume")}}>
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.resume ? "aqua" : "aquamarine"}`, opacity: `${clicked.resume ? "1" : "0.75"}`, textDecoration: `${clicked.resume ? "underline" : "none"}`}}>Resume</div>
        </Link>
        <Link href='/portfolio' onClick={() => {handlerClick("portfolio")}}>
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.portfolio ? "aqua" : "aquamarine"}`, opacity: `${clicked.portfolio ? "1" : "0.75"}`, textDecoration: `${clicked.portfolio ? "underline" : "none"}`}}>Portfolio</div>
        </Link>
        <Link href='/contact' onClick={() => {handlerClick("contact")}}>
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100" style={{ color: `${clicked.contact ? "aqua" : "aquamarine"}`, opacity: `${clicked.contact ? "1" : "0.75"}`, textDecoration: `${clicked.contact ? "underline" : "none"}`}}>Contact</div>
        </Link>
    </div>
  )
}

export default Nav