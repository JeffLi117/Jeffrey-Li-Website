"use client";
import { createContext, useContext, useState } from 'react';

const LightContext = createContext();

export const LightContextProvider = ({children}) => {
  const [isLight, setIsLight] = useState(false);

  const outerLightHandler = () => {
    setIsLight(!isLight);
  };

  return (
    <LightContext.Provider value={{ isLight, outerLightHandler }}>
        {children}
    </LightContext.Provider>
  )
};

export const LightAuth = () => {
    return useContext(LightContext)
}