"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [fade, setFade] = useState(true);
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setFade(false);
    setTimeout(() => {
      setWelcome(false)
    }, 1200);
  }, [])
  return (
    <div className="lg:absolute lg:top-2 lg:left-3 fade-test" style={{ opacity:`${fade ? "0" : "1"}` }} >
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Jeffrey Li</h1>
      <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">From <span className="italic">doctor</span> to <span className="italic">developer</span></h3>
      <div>
        <div className="text-xl italic fade-test" style={{ opacity:`${welcome ? "0" : "1"}` }}>Welcome.</div>
      </div>
    </div>
  )
}
