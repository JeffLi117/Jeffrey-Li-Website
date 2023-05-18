"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [fade, setFade] = useState(true);
  const [fade2, setFade2] = useState(true);
  const [welcome, setWelcome] = useState(true);
  const [welcome2, setWelcome2] = useState(true);

  useEffect(() => {
    setFade(false);
    setTimeout(() => {
      setWelcome(false)
    }, 1200);
  }, [])

  useEffect(() => {
    setFade2(false);
    setTimeout(() => {
      setWelcome2(false)
    }, 2200);
  }, [])
  return (
    <div>
      <div className="lg:absolute lg:top-2 lg:left-3 fade-test" style={{ opacity:`${fade ? "0" : "1"}` }} >
        <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Jeffrey Li</h1>
        <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">From <span className="italic">doctor</span> to <span className="italic">developer</span></h3>
      </div>
      <div className="absolute top-1/2">
        <div className="welcome-text text-2xl md:text-3xl italic font-medium fade-test" style={{ opacity:`${welcome ? "0" : "1"}` }}>Welcome.</div>
        <div className="welcome-text text-1xl md:text-2xl italic font-medium fade-test" style={{ opacity:`${welcome2 ? "0" : "1"}` }}>I hope you enjoy browsing my website.</div>
      </div>
    </div>
    
  )
}
