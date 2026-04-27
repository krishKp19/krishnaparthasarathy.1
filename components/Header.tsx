"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Added type here just in case TypeScript gets strict about the ref too!

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    // FIX APPLIED HERE: Added 'MouseEvent' type and 'as Node' casting
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const resumes = [
   {
      label: "Business & Data Analyst",
      file: "/Krishna_Parthasarathy_DA.pdf",
      filename: "Krishna_Parthasarathy_DA.pdf",
    },
    {
      label: "Strategy & Consulting",
      file: "/Krishna_Parthasarathy_Consulting.pdf",
      filename: "Krishna_Parthasarathy_Consulting.pdf",
    },
    {
      label: "Program / Technical Program Manager",
      file: "/Krishna_Parthasarathy_TPM.pdf",
      filename: "Krishna_Parthasarathy_TPM.pdf",
    },
    {
      label: "Product Manager",
      file: "/Krishna_Parthasarathy_PM.pdf",
      filename: "Krishna_Parthasarathy_PM.pdf",
    },
    {
      label: "QA & SDET Engineering",
      file: "/Krishna_Parthasarathy_QA.pdf",
      filename: "Krishna_Parthasarathy_QA.pdf",
    },
  ];

  return (
    <header
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

        {/* RESUME DOWNLOAD BUTTON WITH DROPDOWN */}
        <div className="relative ml-1" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative group flex items-center justify-center p-2 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-700 transition-all duration-300 shadow-sm"
            aria-label="Download Resume"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            {!dropdownOpen && (
              <span className="absolute top-full mt-3 -translate-x-1/2 left-1/2 whitespace-nowrap bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50">
                Download Resume
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-white"></span>
              </span>
            )}
          </button>

          {/* DROPDOWN MENU */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-3 w-64 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl shadow-slate-900/50 overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-slate-700">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Resume</p>
              </div>
              {resumes.map((resume, index) => (
                <a
                  key={index}
                  href={resume.file}
                  download={resume.filename}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-b border-slate-700/50 last:border-b-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-400 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <span className="font-medium">{resume.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}