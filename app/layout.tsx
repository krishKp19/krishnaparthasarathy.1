import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Krishna Parthasarathy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFFDF4] text-black">

        {/* GLOBAL HEADER */}
        <header className="flex justify-between items-center px-10 py-6 border-b-2 border-black bg-[#FFFDF4]">
          
          {/* LEFT: Navigation */}
          <nav className="flex space-x-8 text-sm font-semibold">
            <Link href="/" className="text-black hover:text-gray-700 transition">
              Home
            </Link>
            <Link href="/work" className="text-black hover:text-gray-700 transition">
              Work Experience & Education
            </Link>
            <Link href="/projects" className="text-black hover:text-gray-700 transition">
              Projects
            </Link>
            <Link href="/extracurriculars" className="text-black hover:text-gray-700 transition">
              Extra-Curriculars
            </Link>
          </nav>

          {/* RIGHT: Logos */}
          <div className="flex items-center space-x-6">
            <img
              src="/amazon.png"
              alt="Amazon"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/greatlakes.png"
              alt="Great Lakes"
              className="h-8 w-auto object-contain"
            />
          </div>

        </header>

        {children}

      </body>
    </html>
  );
}