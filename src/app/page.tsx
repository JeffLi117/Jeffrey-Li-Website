"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Space_Mono } from "next/font/google";
import Image from 'next/image'
import EmailMeForm from './components/EmailMeForm';

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center py-24">
        <h1 className={`text-5xl font-bold mb-4 text-center ${spaceMono.className}`}>Jeffrey Li<br /><span className="text-2xl font-normal">Software engineer with:</span></h1>
        <TypeAnimation
          sequence={[
            'A knack for problem solving.',
            2000,
            'A desire to build exciting products.',
            2000,
            'A passion for lifelong learning.',
            2000,
            'A love for pizza.',
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center py-24 bg-black/60">
        <h2 className={`text-4xl font-bold mb-6 ${spaceMono.className}`}>About Me</h2>
        <div className="flex flex-row gap-4 justify-center items-center">
          <Image
            src="/headshot.jpeg"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-full"
          />
          <div className="max-w-2xl text-lg text-gray-300 text-center space-y-4">
            <p>With a background in healthcare as a doctor, I strived to create solutions for patients with problematic health issues. Now, I bring that same passion and problem-solving ability to tech as a full-stack software developer, where I focus on removing bugs with surgical precision, bandaging legacy code, and prescribing solutions for tech debt.</p>
            <p>My work at Colorfull includes building internal tools, streamlining logistics with third-party integrations, optimizing payment flows, and improving both frontend performance and backend reliability.</p>
            <p>In my spare time, I enjoy eating all the pizza, cooking, and indoor rock climbing.</p>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-24">
        <h2 className={`text-4xl font-bold mb-6 ${spaceMono.className}`}>Contact</h2>
        <EmailMeForm />
      </section>
    </div>
  );
}
