export default function Education() {
  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Education Details
        </h1>

        <div className="space-y-10">
          {/* PGPM */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 md:max-w-[70%]">
                PGPM, Great Lakes Institute of Management, Chennai.
              </h2>
              <span className="text-sm font-bold text-slate-700 mt-3 md:mt-0 whitespace-nowrap bg-zinc-50 px-4 py-1.5 rounded-full border border-zinc-200 shadow-sm">
                May 2025 - April 2026
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed text-base font-medium mb-10">
              Pursuing a one-year, full-time management program majoring in <strong>Finance and Strategy Consulting</strong> with a <strong>CGPA of 3.20/4.00 (In-Progress)</strong> after stepping away from four years of industry experience to deepen my understanding of how businesses operate end to end. The program has strengthened my foundation across core areas such as operations, statistics, finance, and marketing, while sharpening structured thinking and decision-making under constraints. Alongside academics, I actively collaborate with peers on hands-on projects and experiments, building and exploring ideas beyond the classroom. 
            </p>

            {/* FINANCE SECTION */}
            <h3 className="font-bold mb-4 text-slate-900 tracking-wide uppercase text-sm border-b border-zinc-100 pb-2">
              Finance
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 font-medium leading-relaxed mb-10">
              <li>
                Applied financial modeling frameworks including <strong className="text-slate-900">DCF valuation, CAPM-based cost of capital estimation</strong>, and integrated <strong className="text-slate-900">3-statement modeling</strong> to evaluate investment and expansion decisions.
              </li>
              <li>
                Built structured valuation and risk models covering <strong className="text-slate-900">portfolio optimization, credit risk assessment</strong>, and capital allocation trade-offs using real-world datasets.
              </li>
              <li>
                Developed working knowledge of <strong className="text-slate-900">derivatives, options, futures, fixed-income instruments</strong>, and bond pricing to understand risk exposure and hedging strategies.
              </li>
              <li>
                Practiced scenario-based capital planning and liquidity assessment through <strong className="text-slate-900">credit risk modeling</strong> and sensitivity analysis.
              </li>
            </ul>

            {/* STRATEGY SECTION */}
            <h3 className="font-bold mb-4 text-slate-900 tracking-wide uppercase text-sm border-b border-zinc-100 pb-2">
              Strategy & Consulting
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 font-medium leading-relaxed">
              <li>
                Applied structured strategy frameworks such as <strong className="text-slate-900">Strategy Diamond, Three Horizons (3-Box Framework), and Business Model Canvas</strong> to evaluate growth, diversification, and scaling decisions.
              </li>
              <li>
                Conducted unstructured problem-solving exercises using <strong className="text-slate-900">hypothesis-driven approaches</strong> to break down ambiguous business challenges.
              </li>
              <li>
                Developed business proposals and <strong className="text-slate-900">go-to-market plans</strong> through case-based simulations and peer-led strategy workshops.
              </li>
              <li>
                Studied digital transformation and <strong className="text-slate-900">change management principles</strong> to understand how organizations scale operations while maintaining execution discipline.
              </li>
            </ul>
          </div>

          {/* B.E */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 md:max-w-[70%]">
                Bachelors of Engineering, <br className="hidden md:block" />
                Velammal Engineering College, Chennai.
              </h2>
              <span className="text-sm font-bold text-slate-700 mt-3 md:mt-0 whitespace-nowrap bg-zinc-50 px-4 py-1.5 rounded-full border border-zinc-200 shadow-sm">
                July 2016 - November 2020
              </span>
            </div>

            <p className="font-bold text-slate-500 mb-6 text-sm">
              (Affiliated to Anna University R.2013)
            </p>

            <p className="text-slate-700 leading-relaxed text-base font-medium">
              Completed a four-year undergraduate program in Computer Science and Engineering with a strong foundation in core engineering and computer science principles <strong className="text-slate-900">(CGPA: 7.85/10.00)</strong>. The curriculum combined analytical rigor with structured problem-solving, covering Engineering Mathematics, Probability and Queuing Theory, and engineering graphics, alongside core computer science subjects such as compiler design, theory of computation, and discrete mathematics. This academic grounding shaped how I approach complex systems, think logically, and break down problems - skills that continue to influence my work across engineering, product, and business contexts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}