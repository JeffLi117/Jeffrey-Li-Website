"use client"
import { createContext, useContext, useState } from "react";
import Script from "next/script";
import { LightContext } from "@/app/layout";

function EmailMeForm() {
  const { isLight } = useContext(LightContext);
  return (
    <div>
        <Script src="https://web3forms.com/client/script.js" async defer></Script>
        <form action="https://api.web3forms.com/submit" method="POST" className="flex px-10 md:px-20 flex-col gap-2 md:gap-4 justify-center items-center">
            <input type="hidden" name="access_key" value="7ba84f65-f451-43da-8ecb-b808b6c4164b"/>
            <input type="text" name="name" placeholder="Your name" className="border border-2 border-slate-400 bg-transparent w-full px-1 rounded-lg text-white" required/>
            <input type="email" name="email" placeholder="Your email" className="border border-2 border-slate-400 bg-transparent w-full px-1 rounded-lg text-white" required/>
            <textarea name="message" placeholder="Your message ..." className="border border-2 border-slate-400 bg-transparent w-full px-1 rounded-lg text-white" required></textarea>
            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}/>
            <button type="submit" className={`w-full border border-white border-2 ${isLight ? "bg-cyan-900 text-white" : "bg-white text-cyan-900"} rounded-lg`}>Send</button>
        </form>
    </div>
    
  )
}

export default EmailMeForm