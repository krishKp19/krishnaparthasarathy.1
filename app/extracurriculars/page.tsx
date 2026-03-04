export default function Extracurriculars() {
  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Extra-Curriculars & Interests
        </h1>

        <div className="space-y-10">
          
          {/* CATEGORY 1: LEADERSHIP */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-zinc-100 pb-4">
              Leadership & Initiatives
            </h2>
            
            <ul className="list-disc pl-6 space-y-5 text-slate-700 font-medium leading-relaxed">
              <li>
                <strong className="text-slate-900">School Pupil Leader (2015–2016)</strong> - Student representative in Grade 12, coordinating student activities and serving as a liaison between faculty and students.
              </li>
              <li>
                <strong className="text-slate-900">Entrepreneurship Committee - Application Division Lead (UG)</strong> – Led the mobile application vertical, supported product ideation, and organized campus entrepreneurial events and stalls to promote student-led initiatives.
              </li>
            </ul>
          </div>

          {/* CATEGORY 2: PURSUITS */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-zinc-100 pb-4">
              Passions & Pursuits
            </h2>
            
            <ul className="list-disc pl-6 space-y-5 text-slate-700 font-medium leading-relaxed">
              <li>
                <strong className="text-slate-900">Creative Writing</strong> - Original writings and personal reflections on a dedicated Instagram page (
                <a 
                  href="https://www.instagram.com/itsallabtthem/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors duration-200"
                >
                  @itsallabtthem
                </a>
                ), exploring creative expression and storytelling whenever I get the time.
              </li>
              <li>
                <strong className="text-slate-900"> Travel & Exploration</strong> - Solo traveler, bike rider and adventure lover having covered almost ~70% of South India (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh) and some other key destinations including Rishikesh, Haridwar, Varanasi, Amritsar, and Sikkim where I actively engage with local communities to understand cultural, economic, and social perspectives.
              </li>
              <li>
                <strong className="text-slate-900">Competitive Badminton Player</strong> - Regular zonal-level participant at School Level and still anactive player over the weekends. Big admirer of Lee Chong Wei’s resilience and professionalism.
              </li>
              <li>
                <strong className="text-slate-900">Product Building & Automation Enthusiast</strong> - Built personal-use applications (expense tracking, investment automation tools, splitwise) to simplify decision-making and improve financial discipline.
              </li>
              <li>
                <strong className="text-slate-900">Active Equity Investor</strong> - Long-term market investor and currently exploring systematic investing approaches and AI-assisted decision models.
              </li>
            </ul>
          </div>

          {/* CATEGORY 3: MINDSET */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-full shadow-sm border border-zinc-200 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                I'm always curious and open to new experiences
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Whatever you learn in life will be useful somewhere at some point so I consistently seek out new challenges, technologies, and environments to expand perspective and continuously learn beyond formal roles.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}