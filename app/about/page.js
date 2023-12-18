"use client";
import { LightAuth } from "@/components/LightMode";
import Nav from '@/components/Nav';

function aboutPage() {
    const { isLight } = LightAuth();
    return (
        <div className={`min-h-screen font-sans ${isLight ? "md:bg-[url('../public/white-pattern.jpg')]" : "md:bg-[url('../public/dark-pattern.jpg')]"} md:px-28 lg:px-48`}>
            <div className={`relative min-h-screen w-full animate-fadeIn h-[calc(100%-40px)] md:h-[calc(100%-55px)] pt-[50px] md:p-2 animate-fadeIn flex flex-col justify-start items-start gap-4 p-2 lg:px-20 lg:pb-2 ${isLight ? "bg-white text-cyan-900" : "bg-cyan-900 text-white"}`}>
                <Nav />
                {/* insert photo here? */}
                <div className="text-3xl text-slate-400 flex text-center text-bold px-8 pb-4 md:pt-12">ABOUT</div>
                <div className="pb-4 w-full px-8 flex flex-col justify-start items-start gap-4">
                    <h2 className="text-2xl font-bold">Hello, I'm Jeffrey Li!</h2>
                    <p>I'm a full-stack software developer with a background in medicine. I aim to use my combination of skills to bring about a better quality of life for people around the world. I've created front-end components optimizing user experiences at OptiChroniX, a React Native mobile application for patients with dementia and their caretakers.</p>
                    <p>I'm in the process of creating <a href="https://github.com/JeffLi117/Not-In-Vein" className="hover:text-red-200 transition ease-in-out underline">Not In Vein</a>, a centralized web application to remind blood donors when they can give back to others again, as well as aid in searching for nearby donation locations.</p>
                    <p>Outside of software, I enjoy eating all the pizza, reading fantasy novels (especially those with dragons!), cooking, and rock climbing.</p>
                </div>
            </div>
        </div>
    )
}

export default aboutPage