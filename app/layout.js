"use client";
import { useState } from 'react';
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

export default function RootLayout({ children }) {
  const [isLight, setIsLight] = useState(false);

  const outerLightHandler = () => {
    setIsLight(!isLight)
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body className={`relative ${isLight ? "bg-white text-cyan-900" : "bg-cyan-900 text-white"}  font-sans`}>
        <div className="h-screen w-full">
          <Nav />
          {children}
          <div id="light-toggle" className={`${isLight ? "bg-cyan-900 text-white" : "bg-white text-cyan-900"}  p-2 rounded-full `} onClick={() => outerLightHandler()}>
            {isLight ? 
              <BsMoon 
                  className="rounded-full"
              /> 
              : 
              <BsSun 
                  className="rounded-full"
              />
            }
          </div>
        </div>
      </body>
    </html>
  )
}
