"use client";

import { useState } from "react";

export default function Work() {
  const [activeRole, setActiveRole] = useState("All");

  const roles = [
    "All",
    "TPM / Program Manager",
    "Data & Analytics",
    "Product Manager",
    "Strategy & Consulting",
    "QA / SDET",
  ];

  const sseContributions = [
    {
      text: <>Owned end-to-end release governance across 5+ production pipelines - doubling release frequency from 1 to 2 per week by identifying pipeline gaps, contributing integration tests, and building a pipeline API integration that auto-documented releases into Atlassian Wiki, executing <strong>200+ zero-downtime deployments</strong>.</>,
      tags: ["TPM / Program Manager", "QA / SDET"],
    },
    {
      text: <><strong>Mitigated 500+ operational and security risks</strong> across Books Detail Page and eliminated recurring vulnerabilities across 7 host classes by implementing automated OS patching mechanisms - permanently eliminating 48+ recurring compliance risks at scale.</>,
      tags: ["TPM / Program Manager", "Strategy & Consulting", "QA / SDET"],
    },
    {
      text: <>Led infrastructure optimisation and pipeline deprecations that <strong>reduced AWS operational costs by ~50% ($600 → $300 monthly)</strong> while simplifying system complexity - built the business case for leadership and drove consolidation with zero disruption to ongoing operations.</>,
      tags: ["TPM / Program Manager", "Strategy & Consulting"],
    },
    {
      text: <><strong>Reduced alarm-driven ticket inflow by ~60%</strong> by investigating incoming ticket data, identifying that 70% of weekly alerts were false positives through pattern analysis, and driving a cross-functional alarm redesign across 50+ monitors.</>,
      tags: ["Data & Analytics", "Strategy & Consulting", "TPM / Program Manager"],
    },
    {
      text: <>Built and owned <strong>15+ feature-level performance metrics</strong> and consolidated fragmented monitoring into a unified product health dashboard - enabling faster anomaly detection and reducing per-issue investigation time by ~10 minutes across 10 to 15 monthly anomalies for senior leadership.</>,
      tags: ["Data & Analytics", "Product Manager", "TPM / Program Manager"],
    },
    {
      text: <>Owned Monthly Technical Reviews (MTRs) across Books and Content Demand orgs - <strong>synthesizing release, vulnerability and risk metrics into executive-ready reports</strong> to support prioritization and OKR tracking.</>,
      tags: ["Data & Analytics", "Strategy & Consulting", "TPM / Program Manager"],
    },
    {
      text: <>Executed large-scale system migrations including load balancer transition (Netscaler → Tardigrade) and monitoring migration (PMET → CloudWatch), <strong>delivering zero-disruption cutovers</strong> with full stakeholder alignment across Dev, QA, and Security teams.</>,
      tags: ["TPM / Program Manager", "QA / SDET"],
    },
    {
      text: <>Improved pipeline stability by resolving test failures and upgrading compliance testing (CT 1.0 → 2.0), <strong>reducing test failure rate by 40%</strong> and accelerating production deployment by 1 day per release.</>,
      tags: ["QA / SDET", "TPM / Program Manager"],
    },
    {
      text: <>Identified a UX inconsistency in the Books Detail Page format selection layout, proposed and drove the migration of the media matrix swatch to a dedicated right-side zone - resulting in a <strong>15% increase in format selection click-through rates</strong>.</>,
      tags: ["Product Manager"],
    },
    {
      text: <>Integrated an AI-driven bot system (SmartTTBots) to automate alarm ticket analysis - <strong>cutting manual review time by 5 minutes per ticket</strong> compounding across thousands of monthly tickets, reducing overall operational workload by 60%.</>,
      tags: ["QA / SDET", "Data & Analytics", "TPM / Program Manager"],
    },
  ];

  const deviceContributions = [
    {
      text: <>Executed <strong>60–100 manual test cases per release</strong> to validate functionality, performance, and cross-device behaviour across Amazon Echo, Fire TV, Fire Stick, and Tablet devices.</>,
      tags: ["QA / SDET"],
    },
    {
      text: <>Built <strong>50+ automation scripts</strong> using Selenium and Python to reduce repetitive manual testing - reducing release cycle time by <strong>12%</strong> and improving delivery consistency across device launches.</>,
      tags: ["QA / SDET", "TPM / Program Manager"],
    },
    {
      text: <>Analysed user experience data to design <strong>30+ targeted test scenarios</strong>, reducing pre-release defects by <strong>~25%</strong> across Amazon Echo, Fire TV, and Tablet launches - directly improving product quality at customer delivery.</>,
      tags: ["QA / SDET", "Product Manager", "Data & Analytics"],
    },
    {
      text: <>Designed and proposed stress-testing scenarios for Echo devices to assess heat and audio thresholds under heavy load, <strong>enabling benchmarking and identifying regression points for future releases</strong>.</>,
      tags: ["QA / SDET"],
    },
    {
      text: <><strong>Acted as quality gate and primary POC by collaborating closely with developers</strong> to surface defects before customer impact - standardising release workflows and reducing pre-release defects by ~15%.</>,
      tags: ["QA / SDET", "TPM / Program Manager", "Strategy & Consulting"]
    },
  ];

  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Work Experience
        </h1>

        {/* ROLE FILTER */}
        <div className="mb-12">
          <p className="text-center text-sm text-slate-500 font-medium mb-4">
            Filter by role to see the most relevant contributions
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 border ${
                  activeRole === role
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {/* ROLE 1 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Software Support Engineer – II, Amazon India Pvt. Ltd.
              </h2>
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

            <ul className="space-y-3">
              {sseContributions.map((item, index) => {
                const isHighlighted = activeRole === "All" || item.tags.includes(activeRole);
                return (
                  <li
                    key={index}
                    className={`flex gap-3 text-slate-700 font-medium leading-relaxed transition-all duration-300 ${
                      isHighlighted ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                      isHighlighted && activeRole !== "All" ? "bg-blue-500" : "bg-slate-400"
                    }`} />
                    <span className={`transition-all duration-300 ${
                      isHighlighted && activeRole !== "All" ? "border-l-2 border-blue-400 pl-3" : ""
                    }`}>
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ROLE 2 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Device Associate, Amazon India Pvt Ltd.
              </h2>
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

            <ul className="space-y-3">
              {deviceContributions.map((item, index) => {
                const isHighlighted = activeRole === "All" || item.tags.includes(activeRole);
                return (
                  <li
                    key={index}
                    className={`flex gap-3 text-slate-700 font-medium leading-relaxed transition-all duration-300 ${
                      isHighlighted ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                      isHighlighted && activeRole !== "All" ? "bg-blue-500" : "bg-slate-400"
                    }`} />
                    <span className={`transition-all duration-300 ${
                      isHighlighted && activeRole !== "All" ? "border-l-2 border-blue-400 pl-3" : ""
                    }`}>
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}