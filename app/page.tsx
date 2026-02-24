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
          Infrastructure Strategy & Cloud Product Leader | ex-Amazon | Driving reliability, cost optimization & cross-functional outcomes
        </p>

        <div className="mt-8 md:mt-10 max-w-2xl bg-white p-6 md:p-8 rounded-xl shadow-sm border border-black">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            What has happened so far?
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Welcome to my page. This space highlights my professional journey so far, along with experiences that have shaped how I think and work. Explore to learn more about the path I’ve taken.
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
            I am a technically grounded professional with experience working close to large-scale consumer products at Amazon, focusing on reliability, quality, and operational excellence. My background spans application engineering, product support, and QA, where I worked cross-functionally to improve systems, processes, and user-facing experiences. Through metrics, dashboards, and release ownership, I learned how product decisions impact customers, teams, and long-term outcomes. I am now transitioning into product management, aiming to build thoughtful, data-informed products that solve real user problems at scale.
          </p>
        </div>
      </section>

      <div className="border-t-2 border-black w-full"></div>

      {/* EXPERTISE SECTION */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {expertise.map((section) => (
              <div key={section.title}>
                <h3 className="text-base font-semibold mb-4">
                  {section.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.skills.map((skill) => (
                    <div key={skill.name} className="relative">
                      <div
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === skill.name ? null : skill.name
                          )
                        }
                        className="border border-black px-3 h-[44px] flex items-center justify-center bg-white text-[12px] font-medium whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:bg-gray-100 transition"
                      >
                        {skill.name}
                      </div>

                      {activeSkill === skill.name && (
                        <div className="absolute z-10 mt-2 p-4 bg-white border border-black text-sm shadow-md w-full">
                          {skill.desc}
                        </div>
                      )}
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