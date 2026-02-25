"use client";

import { useState } from "react";

export default function Home() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const expertise = [
    {
      title: "Product & Strategy",
      skills: [
        {
          name: "Product Lifecycle Management (PLM)",
          desc: "Owned end-to-end release lifecycle for 5+ production pipelines, successfully executing 200+ zero-downtime releases and saving 39+ SDE weeks.",
        },
        {
          name: "Requirement Gathering",
          desc: "Translated stakeholder inputs across Dev, QA, and Leadership into execution plans for resolving 2,000+ tickets, resolving 70% of queue backlog.",
        },
        {
          name: "Go-To-Market (GTM) Strategy",
          desc: "Designed a white paper study focussing on youth hybrid healthcare GTM model targeting 40M+ Indian college students through Apollo 24/7 integration strategy.",
        },
        {
          name: "Data-Driven Decision Making",
          desc: "Built composite satisfaction indices and comparative student-segment analysis using 150+ survey responses and app review data to drive strategic recommendations for Apollo 24/7 App.",
        },
      ],
    },
    {
      title: "Infrastructure & Platform Engineering",
      skills: [
        {
          name: "Cloud Infrastructure (AWS)",
          desc: "Led infra deprecations and pipeline consolidation reducing AWS costs by 50% while eliminating 100+ security risks.",
        },
        {
          name: "Infrastructure Architecture & System Design",
          desc: "Architected hybrid AI financial terminal with 7-phase forensic framework reducing equity analysis time by 60% and achieving 100% service uptime.",
        },
        {
          name: "DevOps & CI/CD Strategy",
          desc: "Executed 91+ MCMs and automated multi-stage promotion workflows improving deployment velocity and eliminating recurring manual merge risks.",
        },
        {
          name: "Security & Risk Management (DevSecOps)",
          desc: "Mitigated 500+ infrastructure risks and reduced NodeJS, Java and Software vulnerabilities by 56% across production pipelines.",
        },
      ],
    },
    {
      title: "Analytics & Optimization",
      skills: [
        {
          name: "SQL",
          desc: "Built financial and portfolio modeling engines integrating 9-year datasets, enabling optimized portfolio strategies delivering 176% realized return in test phase.",
        },
        {
          name: "Power BI",
          desc: "Consolidated fragmented monitoring systems into a single performance dashboard integrating 15+ features improving anomaly detection and saving 4+ SDE weeks annually.",
        },
        {
          name: "A/B Testing",
          desc: "Implemented quantitative signal scoring and risk-weighted frameworks replacing evaluation of 20+ metrics with a unified Stock Readiness Score, improving screening speed 5x.",
        },
        {
          name: "Cloud Cost Optimization (FinOps)",
          desc: "Executed infrastructure rationalization and stale pipeline deprecations achieving sustained 50% cloud cost reduction and improved infra ROI.",
        },
      ],
    },
    {
      title: "Collaboration & Modern Delivery",
      skills: [
        {
          name: "Stakeholder Management",
          desc: "Coordinated resolution of 50+ release blockers across multiple teams ensuring 100% on-schedule deployments.",
        },
        {
          name: "Agile Methodologies",
          desc: "Delivered 3 production releases per week while maintaining zero major post-release failures, designed schedules and release cadence for cross-functional teams ensuring inputs from multiple stakeholders.",
        },
        {
          name: "User Experience (UX) Research",
          desc: "Analyzed operational dissatisfaction themes from Google Play reviews to improve service delivery strategy for Apollo 24/7 App.",
        },
        {
          name: "Generative AI (GenAI)",
          desc: "Engineered AI-driven forensic equity terminal leveraging Gemini LLM to automate 100% of preliminary due diligence audits.",
        },
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
          className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover mb-8 shadow-md border-4 border-white"
        />

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Krishna Parthasarathy
        </h1>

        <p className="text-base md:text-xl text-slate-700 max-w-2xl font-medium leading-relaxed">
          Infrastructure Strategy & Cloud Product Leader | ex-Amazon <br className="hidden md:block" /> Driving reliability, cost optimization & cross-functional outcomes.
        </p>

        {/* WIDER, MORE ATTRACTIVE CARD */}
        <div className="mt-12 max-w-4xl w-full bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
            What has happened so far?
          </h2>

          <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
            Welcome to my page. This space highlights my professional journey so far, along with experiences that have shaped how I think and work. Explore to learn more about the path I’ve taken.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Solid Line Divider */}
      <section className="px-6 py-16 text-center relative border-t border-slate-300">
        {/* WIDER, MORE ATTRACTIVE CARD */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
            About Me
          </h2>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
            I am a technically grounded professional with experience working close to large-scale consumer products at Amazon, focusing on reliability, quality, and operational excellence. My background spans application engineering, product support, and QA, where I worked cross-functionally to improve systems, processes, and user-facing experiences. Through metrics, dashboards, and release ownership, I learned how product decisions impact customers, teams, and long-term outcomes. I am now transitioning into product management, aiming to build thoughtful, data-informed products that solve real user problems at scale.
          </p>
        </div>
      </section>

      {/* EXPERTISE SECTION - Solid Line Divider */}
      <section className="px-6 py-16 relative border-t border-slate-300">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
            {expertise.map((section) => (
              <div key={section.title} className="bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-5 text-slate-900 tracking-wide">
                  {section.title}
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {section.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col">
                      {/* ADDED cursor-pointer */}
                      <button
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === skill.name ? null : skill.name
                          )
                        }
                        className={`cursor-pointer flex justify-between items-center w-full text-left px-5 py-4 rounded-xl transition-all duration-300 border ${
                          activeSkill === skill.name 
                            ? "bg-white border-blue-200 shadow-sm" 
                            : "bg-white/90 border-slate-200 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                        <span className={`text-slate-500 font-bold ml-4 transition-transform duration-300 ${activeSkill === skill.name ? "rotate-180 text-blue-500" : "rotate-0"}`}>
                          +
                        </span>
                      </button>

                      {/* Expanding Content */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeSkill === skill.name ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 py-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl text-sm text-slate-700 font-medium leading-relaxed shadow-inner">
                          {skill.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}