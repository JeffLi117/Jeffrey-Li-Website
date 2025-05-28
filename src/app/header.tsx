"use client";
import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: <AiFillHome size={22} /> },
  { id: "about", label: "About", icon: <AiOutlineUser size={22} /> },
  { id: "contact", label: "Contact", icon: <AiOutlineMail size={22} /> },
];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offset = el.offsetTop - 80;
          if (scrollY >= offset) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 rounded-full bg-black/80 backdrop-blur-md shadow-lg border border-white/10">
      {/* Main nav buttons */}
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={
            (active === section.id ? "text-white" : "text-gray-400") +
            " hover:text-white transition-colors focus:outline-none"
          }
          title={section.label}
          aria-label={section.label}
        >
          {section.icon}
        </button>
      ))}
      {/* Divider */}
      <span className="w-px h-6 bg-white/20 mx-2" />
      {/* Social links */}
      <a href="https://github.com/JeffLi117" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
        <FaGithub size={22} />
      </a>
      <a href="https://www.linkedin.com/in/jeffrey-li-do/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
        <FaLinkedin size={22} />
      </a>
    </nav>
  );
}
