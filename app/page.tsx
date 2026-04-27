"use client";

import FadeIn from "../components/FadeIn";

export default function Home() {
  const expertise = [
    {
      title: "Program & Delivery Management",
      skills: [
        "Release Management",
        "Cross-functional Delivery",
        "Risk & Compliance Management",
        "Agile/Scrum",
        "Jira & Confluence",
        "Stakeholder Management",
      ],
    },
    {
      title: "Analytics & Data",
      skills: [
        "Python (Pandas, Seaborn, Statsmodels)",
        "SQL",
        "Power BI",
        "Hypothesis Testing & Regression",
        "EDA & Statistical Analysis",
        "KPI Definition & Dashboarding",
      ],
    },
    {
      title: "Strategy & Business",
      skills: [
        "Structured Problem Solving",
        "Business Case Development",
        "Go-to-Market Strategy",
        "Financial Modelling",
        "Root Cause Analysis",
        "Process Optimization",
      ],
    },
    {
      title: "Product & Technology",
      skills: [
        "Product Lifecycle Management",
        "User Research & UX",
        "AWS Cloud Infrastructure",
        "CI/CD & Pipeline Automation",
        "Generative AI & LLM Integration",
        "A/B Testing",
        "Selenium & Test Automation",
        "Python & TypeScript",
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col text-slate-900">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">

        <FadeIn delay={0.1}>
          <img
            src="/profile.jpg"
            alt="Krishna"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mb-8 shadow-md border-4 border-white"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Krishna Parthasarathy
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-base md:text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Amazon · Great Lakes PGPM · Program Management · Analytics · Product · Strategy · Quality Engineering · Open to Opportunities
          </p>
        </FadeIn>
      </section>

      {/* ABOUT SECTION — comes first, recruiter-facing */}
      <section className="px-6 py-16 text-center relative border-t border-zinc-200 bg-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-zinc-50 p-10 md:p-14 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              About Me
            </h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium text-justify">
              I am a technology and operations professional with <strong>4+ years at Amazon</strong> and a <strong>Great Lakes PGPM in Finance</strong>, open to roles at the intersection of technical execution and business thinking.
              <br /><br />
              My experience covers release program management, data analytics, quality engineering, and infrastructure operations - all at production scale at Amazon. I have owned end-to-end release programs, built executive reporting pipelines, automated operational workflows using AI, mitigated 600+ compliance risks, and conducted statistical analysis on datasets exceeding 1.6 million rows.
              <br /><br />
              My MBA adds the business layer - financial modelling, go-to-market strategy, structured problem solving, and the ability to translate technical findings into decisions for senior leadership.
              <br /><br />
              I am actively looking for roles in <strong>Technical Program Management, Business & Data Analytics, Product Management, Strategy & Consulting, and Quality Engineering</strong> - across any industry where engineering depth and business acumen together create value.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* JOURNEY SECTION — comes second, human story */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 border-t border-zinc-200">
        <FadeIn delay={0.4} direction="up">
          <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              My Journey
            </h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
              I did not plan to end up at this intersection of technology, data, and business. It happened because I kept finding problems worth solving.
              <br /><br />
              I started as a Device Associate at Amazon, testing the WebView APK across Echo, Fire TV, and Tablet devices. Early on I noticed that a significant portion of manual test cases were redundant - so I automated them, reduced the release cycle time by 12%, and helped build a thermal benchmarking framework that became the launch-readiness standard for hardware validation.
              <br /><br />
              Moving into Software Support Engineer II on Books Detail Page, I found myself well beyond the scope of my title. I was running release programs across four engineering teams, investigating why 70% of weekly alerts were false positives, building dashboards for L8 leadership, driving infrastructure migrations, and deploying AI automation to eliminate operational waste. The work was part engineering, part analytics, part program management - and I thrived in that ambiguity.
              <br /><br />
              I pursued the PGPM at Great Lakes to put a business framework around everything I had built operationally. Portfolio optimisation, market research, financial modelling, consulting case work - it filled the gaps I knew I had and opened up how I think about problems.
              <br /><br />
              The result is someone who can own complex delivery, analyse data rigorously, think strategically, and communicate clearly across technical and business audiences. That is the kind of professional I am - and the kind of role I am looking for next.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="px-6 py-16 relative border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">
              My Expertise
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 w-full mb-4">
            {expertise.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.15}>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-lg font-bold mb-5 text-slate-900 tracking-wide border-b border-zinc-100 pb-3">
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {section.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="w-full text-left px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm hover:bg-zinc-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-slate-800">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="w-full flex justify-start pl-2 mt-8">
              <p className="text-sm md:text-base text-slate-500 italic font-medium">
                Refer Work Experience and Projects for more details regarding this.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

    </main>
  );
}