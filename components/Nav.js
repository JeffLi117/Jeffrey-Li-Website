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
    });
    setClicked(newObj);
  };
  useEffect(() => {
    if (pathname === "/") {
      pathname = "home";
    } else {
      pathname = pathname.slice(1);
    }
    handlerClick(pathname);
  }, []);
  return (
    <div className="absolute top-2 flex gap-2 justify-center items-center text-sm md:text-base md:gap-4 md:justify-left navbar-main">
      <Link
        href="/"
        onClick={() => {
          handlerClick("home");
        }}
      >
        <div
          className={`opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100 
          ${clicked.home ? "text-orange-300" : "text-[#7fffd4]"}
          ${
            clicked.home
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }
          `}
        >
          Home
        </div>
      </Link>
      <Link
        href="/about"
        onClick={() => {
          handlerClick("about");
        }}
      >
        <div
          className={`opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100 
          ${clicked.about ? "text-orange-300" : "text-[#7fffd4]"}
          ${
            clicked.about
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }
          `}
        >
          About
        </div>
      </Link>
      <Link
        href="/resume"
        onClick={() => {
          handlerClick("resume");
        }}
      >
        <div
          className={`opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100 
          ${clicked.resume ? "text-orange-300" : "text-[#7fffd4]"}
          ${
            clicked.resume
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }
          `}
        >
          Resume
        </div>
      </Link>
      <Link
        href="/portfolio"
        onClick={() => {
          handlerClick("portfolio");
        }}
      >
        <div
          className={`opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100 
          ${clicked.portfolio ? "text-orange-300" : "text-[#7fffd4]"}
          ${
            clicked.portfolio
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }
          `}
        >
          Portfolio
        </div>
      </Link>
      <Link
        href="/contact"
        onClick={() => {
          handlerClick("contact");
        }}
      >
        <div
          className={`opacity-75 pb-0.5 transition-all ease-in duration-150 hover:opacity-100 
          ${clicked.contact ? "text-orange-300" : "text-[#7fffd4]"}
          ${
            clicked.contact
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }
          `}
        >
          Contact
        </div>
      </Link>
    </div>
  );
}

export default Nav;
