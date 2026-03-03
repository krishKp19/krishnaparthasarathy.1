import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Krishna Parthasarathy",
  description: "Product & Analytics Professional Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body className="relative bg-slate-50 text-slate-900 antialiased font-sans min-h-screen flex flex-col overflow-x-hidden">

        {/* SUBTLE AMBIENT ORBS */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-slate-200/50 blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>

        {/* OPTIMAL HEADER */}
        <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 md:py-5 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
          
          {/* LEFT — LOGOS */}
          <div className="flex items-center justify-center gap-4 md:gap-5 mb-4 md:mb-0 w-full md:w-auto shrink-0">
            <img
              src="/amazon.png"
              alt="Amazon"
              className="h-6 md:h-7 w-auto object-contain"
            />
            <div className="h-6 w-px bg-slate-300 hidden md:block"></div>
            <img
              src="/greatlakes.png"
              alt="Great Lakes"
              className="h-6 md:h-7 w-auto object-contain"
            />
          </div>

          {/* RIGHT — NAVIGATION & RESUME DOWNLOAD */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-3 md:gap-6 text-xs md:text-sm font-bold text-slate-700 w-full md:w-auto">
            <Link href="/" className="relative group hover:text-blue-600 transition-colors duration-300 py-1">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/work" className="relative group hover:text-blue-600 transition-colors duration-300 py-1">
              Work Experience
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/education" className="relative group hover:text-blue-600 transition-colors duration-300 py-1">
              Education
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/projects-training" className="relative group hover:text-blue-600 transition-colors duration-300 py-1">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/extracurriculars" className="relative group hover:text-blue-600 transition-colors duration-300 py-1">
              Extra-Curriculars
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* SEPARATOR (Desktop Only) */}
            <div className="hidden md:block w-px h-4 bg-slate-300 ml-1"></div>

            {/* RESUME DOWNLOAD BUTTON */}
            <a 
              href="/resume.pdf" 
              download="Krishna_Parthasarathy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm"
              aria-label="Download Resume"
            >
              {/* SVG Download Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>

              {/* Hover Tooltip */}
              <span className="absolute top-full mt-3 -translate-x-1/2 left-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50">
                Download Resume
                {/* Tooltip little triangle pointer */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900"></span>
              </span>
            </a>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="relative z-10 flex-grow">
          {children}
        </main>

        {/* OPTIMAL FOOTER */}
        <footer className="relative z-20 py-8 px-6 bg-white border-t border-slate-200 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between items-center text-sm font-bold text-slate-600 text-center md:text-left">
            <div>Phone: +91-9962066719</div>
            <div>Email: krishnaparthasarathy.1@gmail.com</div>
            <div className="flex gap-6 md:gap-8">
              <a href="https://www.linkedin.com/in/krishnakp19/" target="_blank" className="relative group hover:text-blue-600 transition-colors duration-300 py-1">
                LinkedIn
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="https://github.com/krishKp19" target="_blank" className="relative group hover:text-blue-600 transition-colors duration-300 py-1">
                GitHub
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}