import "./globals.css";
// IMPORT YOUR NEW SMART HEADER
import Header from "../components/Header";

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
    <html lang="en">
      <body className="relative bg-zinc-50 text-slate-900 antialiased font-sans min-h-screen flex flex-col overflow-x-hidden">

        {/* SUBTLE AMBIENT ORBS */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-slate-200/50 blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>

        {/* YOUR NEW SMART HEADER COMPONENT */}
        <Header />

        {/* MAIN CONTENT - Added pt-[100px] to push content below the fixed header */}
        <main className="relative z-10 flex-grow pt-[130px] md:pt-[80px]">
          {children}
        </main>

        {/* DARK FOOTER */}
        <footer className="relative z-20 py-8 px-6 bg-slate-800 border-t border-slate-900 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between items-center text-sm font-semibold tracking-wide text-slate-300 text-center md:text-left">
            <div>Phone: +91-9962066719</div>
            <div>Email: krishnaparthasarathy.1@gmail.com</div>
            <div className="flex gap-6 md:gap-8 font-bold tracking-normal">
              <a href="https://www.linkedin.com/in/krishnakp19/" target="_blank" className="relative group text-slate-200 hover:text-white transition-colors duration-300 py-1">
                LinkedIn
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="https://github.com/krishKp19" target="_blank" className="relative group text-slate-200 hover:text-white transition-colors duration-300 py-1">
                GitHub
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}