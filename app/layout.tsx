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

        <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 border-b-2 border-black bg-[#FFFDF4]">

          {/* LEFT — LOGOS */}
          <div className="flex items-center gap-4 mb-3 md:mb-0">
            <img
              src="/amazon.png"
              alt="Amazon"
              className="h-7 md:h-8 w-auto object-contain"
            />
            <img
              src="/greatlakes.png"
              alt="Great Lakes"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </div>

          {/* RIGHT — NAVIGATION */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-base md:text-sm font-semibold text-black">
            <Link href="/" className="hover:text-gray-600 transition">
              Home
            </Link>

            <Link href="/work" className="hover:text-gray-600 transition">
              Work Experience
            </Link>

            <Link href="/education" className="hover:text-gray-600 transition">
              Education Details
            </Link>

            <Link href="/projects-training" className="hover:text-gray-600 transition">
              Projects & Training
            </Link>

            <Link href="/extracurriculars" className="hover:text-gray-600 transition">
              Extra-Curriculars
            </Link>
          </nav>

        </header>

        {children}

      </body>
    </html>
  );
}