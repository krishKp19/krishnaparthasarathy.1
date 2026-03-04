import "./globals.css";
// IMPORT YOUR NEW SMART HEADER
import Header from "../components/Header";
import type { Metadata } from 'next';
// 1. IMPORT THE ANALYTICS COMPONENT
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Krishna Parthasarathy | Product Professional",
  description: "Product Professional with a strong foundation in infrastructure and platform reliability. ex-Amazon. Focused on building reliable products and optimizing costs.",
  
  // This tells search engines it's a website and sets the main URL
  openGraph: {
    type: "website",
    url: "https://krishnaparthasarathy.com", // Replace with your actual deployed URL
    title: "Krishna Parthasarathy | Portfolio",
    description: "Explore my work experience, projects, and insights in product strategy and infrastructure engineering.",
    siteName: "Krishna Parthasarathy Portfolio",
    images: [
      {
        url: "/og-image.png", // This points to the image you put in the public folder
        width: 1200,
        height: 630,
        alt: "Krishna Parthasarathy - Product Professional",
      },
    ],
  },
  
  // Twitter requires its own specific tags to render large summary cards
  twitter: {
    card: "summary_large_image",
    title: "Krishna Parthasarathy | Product Professional",
    description: "Explore my work experience, projects, and insights in product strategy and infrastructure engineering.",
    images: ["/og-image.png"], // Updated to match the .png format used in openGraph
  },
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

        {/* 2. RENDER THE ANALYTICS COMPONENT HERE */}
        <Analytics />
      </body>
    </html>
  );
}