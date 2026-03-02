export default function Work() {
  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Work Experience
        </h1>

        <div className="space-y-10">
          {/* ROLE 1 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Software Support Engineer – II, Amazon India Pvt. Ltd.
              </h2>
              {/* CRISP DATE BADGE */}
              <span className="text-sm font-bold text-slate-700 mt-3 md:mt-0 whitespace-nowrap bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                Oct 2022 – Apr 2025
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed text-base font-medium mb-8">
              Worked on the Books Detail Pages platform - a high-traffic, customer-facing surface operating at global scale. <strong>Owned release governance, reliability, monitoring strategy, and infrastructure optimization</strong> while partnering with engineering, QA, and business stakeholders. Over time, transitioned from execution-focused delivery to driving operational strategy, cost discipline, and data-backed decision-making across the platform.
            </p>

            <h3 className="font-bold mb-4 text-slate-900 tracking-wide uppercase text-sm border-b border-slate-100 pb-2">
              Key contributions
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-slate-700 font-medium leading-relaxed">
              <li>
                Owned end-to-end release governance across 5+ production pipelines, executing 200+ zero-downtime releases and resolving 2,089+ support tickets, <strong>driving 70% resolution out of all the tickets handled</strong>.
              </li>
              <li>
                <strong>Mitigated 500+ operational and security risks (SAS, Shepherd, PE)</strong> and eliminated recurring vulnerabilities across 25+ host classes by implementing automated OS patching mechanisms.
              </li>
              <li>
                Led infrastructure optimization and pipeline deprecations that <strong>reduced AWS operational costs by ~50% ($600 → $300 monthly)</strong> while simplifying system complexity and removing 30+ redundant risks.
              </li>
              <li>
                <strong>Reduced alarm-driven ticket inflow by ~60%</strong> by auditing 50+ monitors and alarms, eliminating 6 redundant alarms, and introducing auto-logs reader bots which significantly improved engineering productivity.
              </li>
              <li>
                Built and owned 15+ feature-level performance metrics and consolidated fragmented monitoring into a unified product health dashboard, <strong>enabling faster anomaly detection and improved visibility</strong> for L6–L8 leadership.
              </li>
              <li>
                Owned Monthly Technical Reviews (MTRs) across Books and Content Demand orgs, <strong>synthesizing multiple release, vulnerabilities and risk metrics into executive-ready reports</strong> to support prioritization and OKR tracking.
              </li>
              <li>
                Executed large-scale system migrations including load balancer transition (Netscaler → Tardigrade) and monitoring migration (PMET → CloudWatch), <strong>delivering zero-disruption cutovers and saving 6+ SDE weeks</strong>.
              </li>
              <li>
                Improved pipeline stability by resolving test failures and upgrading compliance testing (CT 1.0 → 2.0), <strong>reducing test failure rate by 40% and saving 3+ SDE weeks</strong>.
              </li>
            </ul>
          </div>

          {/* ROLE 2 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Device Associate, Amazon India Pvt Ltd.
              </h2>
              {/* CRISP DATE BADGE */}
              <span className="text-sm font-bold text-slate-700 mt-3 md:mt-0 whitespace-nowrap bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                March 2021 - October 2022
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed text-base font-medium mb-8">
              Worked as part of the Amazon WebView (AWV) QA team, a core platform product powering web-based experiences across Fire tablets, Fire TV, Fire Stick, and Echo devices. AWV enabled critical use cases such as video playback, embedded web pages, and captive portal logins, making reliability and performance essential to the end-user experience. I contributed as both a <strong>manual and automation tester, ensuring product quality across diverse devices and release cycles</strong>.
            </p>

            <h3 className="font-bold mb-4 text-slate-900 tracking-wide uppercase text-sm border-b border-slate-100 pb-2">
              Key contributions
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-slate-700 font-medium leading-relaxed">
              <li>
                Executed <strong>60–100 manual test cases per release</strong> to validate functionality, performance, and cross-device behaviour.
              </li>
              <li>
                Built <strong>50+ automation scripts</strong> using Selenium and Python to reduce repetitive manual testing and improve release efficiency.
              </li>
              <li>
                <strong>Validated Amazon WebView behaviour across multiple Amazon device such as Fire Tablets, Echo Devices and Fire TV</strong>, identifying edge cases early in the release cycle.
              </li>
              <li>
                Designed and proposed stress-testing scenarios for Echo devices to assess heat and audio thresholds under heavy load, <strong>enabling setting benchmarks and identifying regression points for future releases</strong>.
              </li>
              <li>
                <strong>Acted as a quality gate and primary POC by collaborating closely with developers</strong> to surface defects before customer impact.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}