export default function Work() {
  return (
    <main className="min-h-screen px-10 py-16 bg-[#FFFDF4] text-black">

      <h1 className="text-5xl font-bold mb-16">Work Experience</h1>

      {/* ROLE 1 */}
      <section className="mb-12">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">
            Software Support Engineer – II, Amazon India Pvt Ltd.
          </h2>
          <span className="text-sm font-medium">
            October 2022 - April 2023
          </span>
        </div>

        <p className="leading-relaxed mb-4">
          Worked in the Books Detail Pages platform, a high-traffic, customer-facing system at global scale. I operated close to the product, owning reliability, release health, and operational outcomes while partnering with engineering, QA, and business teams. Over time, my role evolved from execution to ownership - driving improvements in monitoring, cost efficiency, and system resilience, while translating operational signals into insights that informed product and engineering decisions.
        </p>

        <h3 className="font-semibold mb-2">Key contributions:</h3>

        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Owned 200+ end-to-end release processes, ensuring stable deployments across multiple pipelines with zero downtime.</li>
          <li>Built and consolidated feature-level metrics into a single dashboard, enabling faster detection of issues and clearer visibility for teams and leadership.</li>
          <li>Led infrastructure migrations and deprecations that reduced AWS operational costs by ~50% while simplifying system complexity.</li>
          <li>Reduced operational noise by auditing alarms and introducing automation, significantly lowering ticket volume and improving team focus.</li>
          <li>Generated Monthly Technical Reviews (MTRs), turning raw operational data into clear narratives for senior leadership.</li>
        </ul>
      </section>

      <div className="border-t border-black w-full mb-12"></div>

      {/* ROLE 2 */}
      <section>
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">
            Device Associate, Amazon India Pvt Ltd.
          </h2>
          <span className="text-sm font-medium">
            March 2021 - October 2022
          </span>
        </div>

        <p className="leading-relaxed mb-4">
          Worked as part of the Amazon WebView (AWV) team, a core platform product powering web-based experiences across Fire tablets, Fire TV, Fire Stick, and Echo devices. AWV enabled critical use cases such as video playback, embedded web pages, and captive portal logins, making reliability and performance essential to the end-user experience. I contributed as both a manual and automation tester, ensuring product quality across diverse devices and release cycles.
        </p>

        <h3 className="font-semibold mb-2">Key contributions:</h3>

        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Executed 60–100 manual test cases per release to validate functionality, performance, and cross-device behaviour.</li>
          <li>Built 20+ automation scripts using Selenium and Python to reduce repetitive manual testing and improve release efficiency.</li>
          <li>Validated Amazon WebView behaviour across multiple Amazon device ecosystems, identifying edge cases early in the release cycle.</li>
          <li>Designed and proposed stress-testing scenarios for Echo devices to assess heat and audio thresholds under sustained load.</li>
          <li>Acted as a quality gate by collaborating closely with developers to surface defects before customer impact.</li>
        </ul>
      </section>

    </main>
  );
}