"use client";

export default function Home() {
  const expertise = [
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
  ];

  return (
    <main className="min-h-screen flex flex-col text-slate-900">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
        <img
          src="/profile.jpg"
          alt="Krishna"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mb-8 shadow-md border-4 border-white"
        />

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Krishna Parthasarathy
        </h1>

        <p className="text-base md:text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
          Product Professional with a strong foundation in infrastructure and platform reliability | ex-Amazon | Focused on building reliable products, optimizing costs, and working closely across teams.
        </p>

        {/* WIDER, MORE ATTRACTIVE CARD */}
        <div className="mt-12 max-w-4xl w-full bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
            What has happened so far?
          </h2>

          <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
            Welcome to my page. This space highlights my professional journey so far, along with experiences that have shaped how I think and work. Explore to learn more about the path I’ve taken.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Solid Line Divider */}
      <section className="px-6 py-16 text-center relative border-t border-zinc-200 bg-white">
        <div className="max-w-4xl mx-auto bg-zinc-50 p-10 md:p-14 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
            About Me
          </h2>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium text-justify">
            I am a technically grounded professional with experience working close to large-scale consumer products at Amazon, focusing on reliability, quality, and operational excellence. My background spans across application engineering, product support, and QA, where I worked cross-functionally to improve systems, processes, and user-facing experiences. Through metrics, dashboards, and release ownership, I learned how product decisions impact customers, teams, and long-term outcomes. I am now transitioning into product management, aiming to build thoughtful, data-informed products that solve real user problems at scale.
          </p>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="px-6 py-16 relative border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 w-full mb-4">
            {expertise.map((section) => (
              <div key={section.title} className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-5 text-slate-900 tracking-wide border-b border-zinc-100 pb-3">
                  {section.title}
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {section.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="w-full text-left px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm hover:bg-zinc-100 transition-colors"
                    >
                      <span className="text-sm font-semibold text-slate-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-start pl-2">
            <p className="text-sm md:text-base text-slate-500 italic font-medium">
              Refer Work Experience and Projects for more details regarding this.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}