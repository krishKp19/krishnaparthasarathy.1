"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If we scroll down AND we are past the first 50px (to prevent jitter at the very top)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // If we scroll up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      // The transition-transform and translate-y classes handle the smooth slide up/down animation
      className={`fixed w-full top-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 md:py-5 bg-slate-800 border-none shadow-xl shadow-slate-900/20 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* LEFT — LOGOS */}
      <div className="flex items-center justify-center gap-4 md:gap-5 mb-4 md:mb-0 w-full md:w-auto shrink-0">
        <img
          src="/amazon.png"
          alt="Amazon"
          className="h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-90"
        />
        <div className="h-6 w-px bg-slate-600 hidden md:block"></div>
        <img
          src="/greatlakes.png"
          alt="Great Lakes"
          className="h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-90"
        />
      </div>

      {/* RIGHT — NAVIGATION & RESUME DOWNLOAD */}
      <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-3 md:gap-6 text-xs md:text-sm font-bold text-slate-300 w-full md:w-auto">
        <Link href="/" className="relative group hover:text-white transition-colors duration-300 py-1">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/work" className="relative group hover:text-white transition-colors duration-300 py-1">
          Work Experience
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/education" className="relative group hover:text-white transition-colors duration-300 py-1">
          Education
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/projects-training" className="relative group hover:text-white transition-colors duration-300 py-1">
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/extracurriculars" className="relative group hover:text-white transition-colors duration-300 py-1">
          Extra-Curriculars
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* SEPARATOR */}
        <div className="hidden md:block w-px h-5 bg-slate-600 ml-1"></div>

        {/* RESUME DOWNLOAD BUTTON */}
        <a 
          href="/Krishna_Parthasarathy_Resume.pdf" 
          download="Krishna_Parthasarathy_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center p-2 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-700 transition-all duration-300 shadow-sm ml-1"
          aria-label="Download Resume"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span className="absolute top-full mt-3 -translate-x-1/2 left-1/2 whitespace-nowrap bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50">
            Download Resume
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-white"></span>
          </span>
        </a>
      </nav>
    </header>
  );
}