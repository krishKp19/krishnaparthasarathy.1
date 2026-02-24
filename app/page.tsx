export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDF4] text-black">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
        <img
          src="/profile.jpg"
          alt="Krishna"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mb-6 md:mb-8 shadow-md"
        />

        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
          Krishna Parthasarathy
        </h1>

        <p className="mt-4 text-base md:text-xl text-gray-700 max-w-3xl">
          Product & Analytics Professional | ex-Amazon (4+ yrs) | Owned metrics,
          releases & cost optimization | PGPM ’26 – Great Lakes Chennai
        </p>

        <div className="mt-8 md:mt-10 max-w-2xl bg-white p-6 md:p-8 rounded-xl shadow-sm border border-black">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            What has happened so far?
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Welcome to my page. This space highlights my professional journey so far,
            along with experiences that have shaped how I think and work.
          </p>
        </div>
      </section>

      <div className="border-t-2 border-black w-full"></div>

      {/* ABOUT */}
      <section className="px-6 py-12 md:py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
            About Me
          </h2>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
            I am a technically grounded professional with experience in large-scale
            systems, reliability engineering, and cross-functional collaboration.
          </p>
        </div>
      </section>

      <div className="border-t-2 border-black w-full"></div>

      {/* MY EXPERTISE */}
<section className="px-6 py-12 md:py-16">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
      My Expertise
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        {
          title: "Product & Strategy",
          skills: [
            "Product Lifecycle Management (PLM)",
            "Requirement Gathering",
            "Go-To-Market (GTM) Strategy",
            "Data-Driven Decision Making",
          ],
        },
        {
          title: "Infrastructure & Platform Engineering",
          skills: [
            "Cloud Infrastructure (AWS)",
            "Infrastructure Architecture & System Design",
            "DevOps & CI/CD Strategy",
            "Security & Risk Management (DevSecOps)",
          ],
        },
        {
          title: "Analytics & Optimization",
          skills: [
            "SQL",
            "Power BI",
            "A/B Testing",
            "Cloud Cost Optimization (FinOps)",
          ],
        },
        {
          title: "Collaboration & Modern Delivery",
          skills: [
            "Stakeholder Management",
            "Agile Methodologies",
            "User Experience (UX) Research",
            "Generative AI (GenAI)",
          ],
        },
      ].map((section, idx) => (
        <div key={idx}>
          <h3 className="text-base font-semibold mb-4">
            {section.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {section.skills.map((skill, index) => (
              <div
                key={index}
                className="border border-black px-3 h-[44px] flex items-center justify-center bg-white text-[12px] font-medium whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t-2 border-black py-6 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col gap-3 md:flex-row md:justify-between items-center text-sm font-medium">
          <div>Phone: +91-9962066719</div>
          <div>Email: krishnaparthasarathy.1@gmail.com</div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/krishnakp19/" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/krishKp19" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}