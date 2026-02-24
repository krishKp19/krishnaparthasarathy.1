export default function Education() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-12 md:py-16 bg-[#FFFDF4] text-black">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Education
      </h1>

      {/* PGPM */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h2 className="text-lg md:text-xl font-semibold">
            PGPM, Great Lakes Institute of Management, Chennai.
          </h2>
          <span className="text-sm font-medium mt-1 md:mt-0">
            May 2025 - April 2026
          </span>
        </div>

        <p className="text-sm md:text-base leading-relaxed mb-4">
          Pursuing a rigorous one-year, full-time management program after stepping away from four years of industry experience to deepen my understanding of how businesses operate end to end. The program has strengthened my foundation across core areas such as operations, statistics, finance, and marketing, while sharpening structured thinking and decision-making under constraints. Alongside academics, I actively collaborate with peers on hands-on projects and experiments, building and exploring ideas beyond the classroom.
        </p>

        <h3 className="font-semibold text-sm md:text-base mb-2">
          Focus areas:
        </h3>

        <ul className="list-disc pl-5 md:pl-6 space-y-2 text-sm md:text-base leading-relaxed">
          <li>
            Majoring in <span className="font-semibold">Finance and Consulting</span> with CGPA of 3.22/4.00 (Pursuing)
          </li>
          <li>
            Applying business concepts through case discussions, projects, and peer-led initiatives.
          </li>
          <li>
            Combining technical experience with business judgment to approach problems more holistically.
          </li>
        </ul>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-black w-full mb-12"></div>

      {/* B.E */}
      <section>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h2 className="text-lg md:text-xl font-semibold">
            Bachelors of Engineering, <br className="md:hidden" />
            Velammal Engineering College, Chennai.
          </h2>
          <span className="text-sm font-medium mt-1 md:mt-0">
            July 2016 - November 2020
          </span>
        </div>

        <p className="italic text-sm md:text-base mb-2">
          (Affiliated to Anna University R.2013)
        </p>

        <p className="text-sm md:text-base leading-relaxed">
          Completed a four-year undergraduate program in Computer Science and Engineering with a strong foundation in core engineering and computer science principles <span className="font-semibold italic">(CGPA: 7.85/10.00)</span>. The curriculum combined analytical rigor with structured problem-solving, covering Engineering Mathematics, Probability and Queuing Theory, and engineering graphics, alongside core computer science subjects such as compiler design, theory of computation, and discrete mathematics. This academic grounding shaped how I approach complex systems, think logically, and break down problems - skills that continue to influence my work across engineering, product, and business contexts.
        </p>
      </section>

    </main>
  );
}