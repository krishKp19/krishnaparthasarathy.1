export default function Work() {
  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Work Experience
        </h1>

        <div className="space-y-10">
          {/* ROLE 1 */}
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Software Support Engineer – II, Amazon India Pvt Ltd.
              </h2>
              <span className="text-sm font-bold text-slate-500 mt-3 md:mt-0 whitespace-nowrap bg-white/60 px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                October 2022 - April 2025
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed text-base font-medium mb-8">
              Worked in the Books Detail Pages platform, a high-traffic, customer-facing system at global scale. I operated close to the product, owning reliability, release health, and operational outcomes while partnering with engineering, QA, and business teams. Over time, my role evolved from execution to ownership - driving improvements in monitoring, cost efficiency, and system resilience, while translating operational signals into insights that informed product and engineering decisions.
            </p>

            <h3 className="font-bold mb-4 text-slate-900 tracking-wide uppercase text-sm">
              Key contributions
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-slate-700 font-medium leading-relaxed">
              <li>
                Owned 200+ end-to-end release processes, ensuring stable deployments across multiple pipelines with zero downtime.
              </li>
              <li>
                Built and consolidated feature-level metrics into a single dashboard, enabling faster detection of issues and clearer visibility for teams and leadership.
              </li>
              <li>
                Led infrastructure migrations and deprecations that reduced AWS operational costs by ~50% while simplifying system complexity.
              </li>
              <li>
                Reduced operational noise by auditing alarms and introducing automation, significantly lowering ticket volume and improving team focus.
              </li>
              <li>
                Generated Monthly Technical Reviews (MTRs), turning raw operational data into clear narratives for senior leadership.
              </li>
            </ul>
          </div>

          {/* ROLE 2 */}
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Device Associate, Amazon India Pvt Ltd.
              </h2>
              <span className="text-sm font-bold text-slate-500 mt-3 md:mt-0 whitespace-nowrap bg-white/60 px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                March 2021 - October 2022
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed text-base font-medium mb-8">
              Worked as part of the Amazon WebView (AWV) team, a core platform product powering web-based experiences across Fire tablets, Fire TV, Fire Stick, and Echo devices. AWV enabled critical use cases such as video playback, embedded web pages, and captive portal logins, making reliability and performance essential to the end-user experience. I contributed as both a manual and automation tester, ensuring product quality across diverse devices and release cycles.
            </p>

            <h3 className="font-bold mb-4 text-slate-900 tracking-wide uppercase text-sm">
              Key contributions
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-slate-700 font-medium leading-relaxed">
              <li>
                Executed 60–100 manual test cases per release to validate functionality, performance, and cross-device behaviour.
              </li>
              <li>
                Built 20+ automation scripts using Selenium and Python to reduce repetitive manual testing and improve release efficiency.
              </li>
              <li>
                Validated Amazon WebView behaviour across multiple Amazon device ecosystems, identifying edge cases early in the release cycle.
              </li>
              <li>
                Designed and proposed stress-testing scenarios for Echo devices to assess heat and audio thresholds under sustained load.
              </li>
              <li>
                Acted as a quality gate by collaborating closely with developers to surface defects before customer impact.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}