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
    <html lang="en">
      <body className="bg-[#FFFDF4] text-black">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 border-b-2 border-black bg-[#FFFDF4]">

          {/* NAVIGATION */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-base md:text-sm font-semibold text-black mb-3 md:mb-0">
            <Link
              href="/"
              className="text-black hover:text-gray-600 transition"
            >
              Home
            </Link>

            <Link
              href="/work"
              className="text-black hover:text-gray-600 transition"
            >
              Work
            </Link>

            <Link
              href="/projects"
              className="text-black hover:text-gray-600 transition"
            >
              Projects
            </Link>

            <Link
              href="/extracurriculars"
              className="text-black hover:text-gray-600 transition"
            >
              Extra
            </Link>
          </nav>

          {/* LOGOS */}
          <div className="flex items-center gap-4">
            <img
              src="/amazon.jpg"
              alt="Amazon"
              className="h-7 md:h-8 w-auto object-contain"
            />
            <img
              src="/greatlakes.jpg"
              alt="Great Lakes"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </div>

        </header>

        {children}

      </body>
    </html>
  );
}