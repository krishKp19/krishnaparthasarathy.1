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
      {/* We added 'flex flex-col' to the body so it handles vertical spacing, 
        allowing the footer to always be pushed to the bottom.
      */}
      <body className="relative bg-slate-50 text-slate-900 antialiased font-sans min-h-screen flex flex-col overflow-x-hidden">

        {/* AMBIENT MESH BACKGROUND ORBS */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/60 blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-slate-200/60 blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>

        {/* FROSTED GLASS HEADER */}
        <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-5 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
          {/* LEFT — LOGOS */}
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <img
              src="/amazon.png"
              alt="Amazon"
              className="h-6 md:h-7 w-auto object-contain"
            />
            <img
              src="/greatlakes.png"
              alt="Great Lakes"
              className="h-6 md:h-7 w-auto object-contain"
            />
          </div>

          {/* RIGHT — NAVIGATION */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-semibold text-slate-800">
            <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
              Home
            </Link>
            <Link href="/work" className="hover:text-blue-600 transition-colors duration-300">
              Work Experience
            </Link>
            <Link href="/education" className="hover:text-blue-600 transition-colors duration-300">
              Education
            </Link>
            <Link href="/projects-training" className="hover:text-blue-600 transition-colors duration-300">
              Projects
            </Link>
            <Link href="/extracurriculars" className="hover:text-blue-600 transition-colors duration-300">
              Extra-Curriculars
            </Link>
          </nav>
        </header>

        {/* MAIN CONTENT (flex-grow pushes the footer down) */}
        <main className="relative z-10 flex-grow">
          {children}
        </main>

        {/* GLOBAL UNIFIED FOOTER */}
        <footer className="relative z-20 py-8 px-6 bg-white/90 backdrop-blur-xl border-t border-slate-300 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between items-center text-sm font-medium text-slate-700">
            <div>Phone: +91-9962066719</div>
            <div>Email: krishnaparthasarathy.1@gmail.com</div>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/krishnakp19/" target="_blank" className="hover:text-blue-600 transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/krishKp19" target="_blank" className="hover:text-blue-600 transition-colors duration-300">
                GitHub
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}