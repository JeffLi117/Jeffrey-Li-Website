"use client";
import { LightAuth } from "./LightMode";
import { BsSun, BsMoon } from "react-icons/bs";

export default function LightToggler() {
  const { isLight, outerLightHandler } = LightAuth();

  return (
        <div id="light-toggle" className={`${isLight ? "bg-cyan-900 text-white" : "bg-white text-cyan-900"} p-2 rounded-full`} onClick={outerLightHandler}>
            {isLight ? 
            <BsMoon className="rounded-full"/> 
            : 
            <BsSun className="rounded-full"/>
            }
        </div>
  )
}


