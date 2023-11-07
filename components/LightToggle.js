import { BsSun } from "react-icons/bs";
import React from 'react'

function LightToggle(outerLightHandler, isLight) {

  const innerLightHandler = () => {
    outerLightHandler(!isLight)
  }

  return (
    <div id="light-toggle" className={`${isLight ? "bg-white text-cyan-900" : "bg-cyan-900 text-white"}  p-2 rounded-full `} onClick={() => innerLightHandler()}>
        <BsSun 
            className="rounded-full"
        />
    </div>
  )
}

export default LightToggle