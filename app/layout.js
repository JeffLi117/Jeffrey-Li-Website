"use client";
import { createContext, useContext, useState } from 'react';
import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Nav from '@/components/Nav';
import { BsSun, BsMoon } from "react-icons/bs";
config.autoAddCss = false;

export const metadata = {
  title: "Jeffrey's Personal Portfolio Website",
  description: "Jeffrey's Personal Portfolio Website",
}

export const LightContext = createContext();

export default function RootLayout({ children }) {
  const [isLight, setIsLight] = useState(false);

  const outerLightHandler = () => {
    setIsLight(!isLight)
  }

  return (
    <html lang="en">
      <head>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6Lev8DEpAAAAAMT9asmfhtnL1PpcsLlTf2UjNQzh"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body className={`min-h-screen relative font-sans md:px-24 ${isLight ? "md:bg-[url('../public/white-pattern.jpg')]" : "md:bg-[url('../public/dark-pattern.jpg')]"}  lg:px-36`}>
        <LightContext.Provider
            value={{ isLight, outerLightHandler }}
          >
          <div className={`min-h-screen w-full ${isLight ? "bg-white text-cyan-900" : "bg-cyan-900 text-white"}`}>
            <Nav />
            {children}
            <div id="light-toggle" className={`${isLight ? "bg-cyan-900 text-white" : "bg-white text-cyan-900"} p-2 rounded-full `} onClick={() => outerLightHandler()}>
              {isLight ? 
                <BsMoon className="rounded-full"/> 
                : 
                <BsSun className="rounded-full"/>
              }
            </div>
          </div>
        </LightContext.Provider>
      </body>
    </html>
  )
}
