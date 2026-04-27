export default function Extracurriculars() {
  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Extra-Curriculars & Interests
        </h1>

        <div className="space-y-10">

          {/* CATEGORY 1: POSITIONS OF RESPONSIBILITY */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-zinc-100 pb-4">
              Positions of Responsibility
            </h2>
            <ul className="list-disc pl-6 space-y-5 text-slate-700 font-medium leading-relaxed">
              <li>
                <strong className="text-slate-900">YoY Issue Reduction Initiative Lead - Amazon India (2024)</strong> - Led a cross-functional initiative to systematically identify and eliminate recurring operational issues for the Kindle Support Engineering Team, driving measurable year-on-year reduction in ticket volume and improving overall team efficiency.
              </li>
              <li>
                <strong className="text-slate-900">Release Management Lead - Amazon India (2022–2025)</strong> - Owned end-to-end release governance for Books Detail Page, coordinating across engineering, QA, and security teams to ensure consistent, defect-free deployments while maintaining operational continuity across 200+ releases.
              </li>
              <li>
                <strong className="text-slate-900">Entrepreneurship Committee - Application Division Lead (UG)</strong> - Led the mobile application vertical during undergrad, supporting product ideation and organising campus entrepreneurial events to promote student-led initiatives.
              </li>
            </ul>
          </div>

          {/* CATEGORY 2: COMMUNITY & SOCIAL */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-zinc-100 pb-4">
              Community & Social Impact
            </h2>
            <ul className="list-disc pl-6 space-y-5 text-slate-700 font-medium leading-relaxed">
              <li>
                <strong className="text-slate-900">Lead Translator - Karma Yoga Project, Great Lakes (2025)</strong> - Spearheaded community mobilisation across 4 villages to drive educational awareness and facilitate remedial learning for children from the Irula tribal community, serving as the primary language bridge between volunteers and the community.
              </li>
            </ul>
          </div>

          {/* CATEGORY 3: CERTIFICATIONS */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-zinc-100 pb-4">
              Certifications
            </h2>
            <ul className="list-disc pl-6 space-y-5 text-slate-700 font-medium leading-relaxed">
              <li>
                <strong className="text-slate-900">Google Project Management Certificate</strong> - Google / Coursera (2025). Covers end-to-end project management fundamentals including planning, execution, risk management, and stakeholder communication - with hands-on exposure to Agile and Scrum methodologies.
              </li>
              <li>
                <strong className="text-slate-900">Google Analytics Individual Certification</strong> - Google Skillshop (2025). Proficient in querying user data, defining success metrics, tracking friction points, and validating product features using Google Analytics.
              </li>
              <li>
                <strong className="text-slate-900">The Fundamentals of Digital Marketing</strong> - Google / IAB Europe (2020). Covers digital marketing fundamentals including SEO, SEM, content marketing, and analytics.
              </li>
            </ul>
          </div>

          {/* CATEGORY 4: PASSIONS */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-zinc-100 pb-4">
              Passions & Pursuits
            </h2>
            <ul className="list-disc pl-6 space-y-5 text-slate-700 font-medium leading-relaxed">
              <li>
                <strong className="text-slate-900">Product Building & Automation</strong> - Built a live AI-powered equity research terminal (deployed on Streamlit) that reduced stock analysis from 15+ minutes to under 4 minutes using a custom web scraper, triple-redundant data pipeline, and LLM synthesis layer. Also built personal-use tools for expense tracking, investment automation, and bill splitting to simplify financial decision-making.
              </li>
              <li>
                <strong className="text-slate-900">Active Equity Investor</strong> - Long-term market investor exploring systematic investing approaches and AI-assisted decision models. Applied Markowitz portfolio optimisation to a 20-asset Indian equity portfolio, outperforming the equal-weight benchmark by 39.14 percentage points over 13 months.
              </li>
              <li>
                <strong className="text-slate-900">Creative Writing</strong> - Original writings and personal reflections on a dedicated Instagram page (
                {/* THE MISSING TAG HAS BEEN ADDED HERE */}
                <a
                  href="https://www.instagram.com/itsallabtthem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors duration-200"
                >
                  @itsallabtthem
                </a>
                ) - exploring creative expression and storytelling as a counterbalance to analytical work.
              </li>
              <li>
                <strong className="text-slate-900">Travel & Exploration</strong> - Solo traveller and bike rider having covered ~70% of South India (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh) and destinations including Rishikesh, Haridwar, Varanasi, Amritsar, and Sikkim. I actively engage with local communities to understand cultural, economic, and social perspectives - a habit that has sharpened how I think about user behaviour and context.
              </li>
              <li>
                <strong className="text-slate-900">Competitive Badminton</strong> - Regular zonal-level participant at school level and still an active weekend player. Long-time admirer of Lee Chong Wei's resilience and composure under pressure - qualities I try to carry into professional contexts.
              </li>
            </ul>
          </div>

          {/* CLOSING MINDSET CARD */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-full shadow-sm border border-zinc-200 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                Always curious, always building
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Whether it's a new market, a new dataset, or a new trail - I consistently seek out environments that push me to think differently. Everything I have learned outside formal roles has found its way back into the work.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}