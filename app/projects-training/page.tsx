"use client";

import { useState } from "react";

export default function ProjectsTraining() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Equity Research Terminal",
      tagline:
        "Automated structured equity analysis system reducing research complexity into a decision-support framework.",
      overview:
        "This project was built to address a common gap in retail investing and junior equity research — the massive time sink and complexity involved in conducting structured equity analysis. A full financial audit of a stock typically requires cross-referencing multiple financial statements, calculating custom ratios, verifying technical indicators, and interpreting risk factors. The objective was to eliminate this bottleneck by building a highly resilient, automated decision-support system that standardizes forensic accounting.",
      whatIDid:
        "I designed a seven-phase evaluation framework covering safety, profitability, valuation, sector context, technical indicators, management quality, and risk synthesis. To simplify interpretation, I converted over 20 financial metrics into a weighted scoring system that produces a single 'Stock Readiness Score'. To solve stringent API rate-limiting issues without relying on simulated data, I engineered a highly resilient 'Split-Hybrid Architecture'. This features a custom DOM-parsing web scraper to extract deep fundamentals (like Operating Cash Flow) directly from Screener.in, paired with a triple-redundant waterfall engine (TradingView/Yahoo) for live technical charting. Finally, I integrated an LLM layer to synthesize these quantitative outputs and instantly identify hidden inconsistencies, such as speculative price spikes lacking fundamental operating leverage.",
      impact: [
        "Reduced end-to-end manual stock analysis time from 15+ minutes to approximately 3 to 4 minutes (a 60%+ efficiency gain)",
        "Achieved near 100% data uptime and bypassed cloud IP bans by replacing fragile single-source APIs with a fault-tolerant, multi-layered scraping architecture.",
        "Standardized the early-stage detection of accounting red flags and 'value traps' via automated CFO vs. EBITDA divergence checks.",
        "Accelerated screening velocity by replacing raw metric overload with a structured, mathematically grounded scoring system.",
      ],
      skills: [
        "Product Design",
        "API Handling",
        "Web Scraping",
        "UI/UX Design",
        "Quantitative Modeling",
        "Risk Evaluation",
        "System Architecture",
        "Financial Analysis",
        "Decision Framework Design",
      ],
      link: "https://stockanalyserkp19.streamlit.app/",
      linkText: "View Live Application",
      linkNote: "(Revive to use)"
    },
    {
      title: "Apollo 24/7 – Youth Adoption Strategy Whitepaper Study",
      tagline:
        "Data-driven youth adoption strategy targeting 40M+ Indian college students.",
      overview:
        "This whitepaper analyzed the adoption gap of Apollo 24/7 among India’s 18–25 demographic. While digital health awareness was high, repeat engagement and behavioral integration were limited. The objective was to identify structural friction and propose a scalable growth strategy.",
      whatIDid:
        "I conducted primary research using 150+ structured survey responses from college students and analyzed qualitative dissatisfaction themes from app reviews. Using this data, I created a composite satisfaction index to quantify user sentiment across trust, accessibility, navigation, and repeat intent. I then designed a youth-focused growth strategy built around campus partnerships, preventive subscription models, mental health prioritization, and simplified onboarding journeys.",
      impact: [
        "Identified key structural friction points affecting engagement and retention.",
        "Proposed a scalable model targeting 40M+ college students in India.",
        "Converted qualitative dissatisfaction signals into quantifiable strategic inputs.",
        "Delivered a GTM roadmap aligned with long-term retention rather than one-time consultation spikes.",
      ],
      skills: [
        "Market Research",
        "Product Strategy",
        "Go-To-Market Design",
        "User Segmentation",
        "Data Synthesis",
        "Strategic Framework Development",
      ],
      link: "https://docs.google.com/document/d/1luK221vCcn_ep7PmIIlhvbl2Df37F5e4/edit?usp=sharing&ouid=109255237526964657886&rtpof=true&sd=true",
      linkText: "Read Whitepaper"
    },
    {
      title: "Markowitz-Optimized Portfolio Modeling",
      tagline:
        "Mean-variance optimization framework delivering 176% realized return in test phase.",
      overview:
        "This project applied the Markowitz Mean-Variance framework to construct and validate an optimized portfolio of 20 high-growth Indian equities. The objective was to evaluate whether mathematical optimization could outperform equal-weight diversification under real market conditions.",
      whatIDid:
        "I constructed an efficient frontier model targeting specific daily return thresholds while minimizing variance. Three strategies were tested: Equal Weight, Optimal Return, and High Return. To stress test the portfolio, I executed 1,000+ Monte Carlo simulations and calculated 99% Value at Risk. The model incorporated corporate action adjustments to ensure real-world capital accuracy.",
      impact: [
        "Strategy 2 delivered a 57.93% realized return with controlled volatility (1.18% daily standard deviation).",
        "Strategy 3 achieved 176.31% realized return during the test phase.",
        "Generated 52.88% alpha above the risk-free benchmark.",
        "Demonstrated variance minimization as a viable institutional-grade capital preservation strategy.",
      ],
      skills: [
        "Portfolio Optimization",
        "Risk Modeling",
        "Monte Carlo Simulation",
        "Backtesting",
        "Capital Allocation",
        "Statistical Analysis",
      ],
    },
    {
      title: "Advanced Financial Modeling & Algorithmic Trading",
      tagline:
        "Integrated 9-year financial model and algorithmic trading simulation.",

      overview: (
        <>
          <span className="font-bold text-slate-900">Phase 1: Retail Expansion Financial Model:</span>  This project involved building a fully integrated 9-year financial model to support bank financing and a 30% equity investment proposal. 
          <br /><br />
          <span className="font-bold text-slate-900">Phase 2: Algorithmic Trading Simulation:</span> This phase involved designing and backtesting two systematic trading strategies - Momentum and Mean Reversion - using a 9-year SENSEX dataset.
        </>
      ),

      whatIDid: (
        <>
          <span className="font-bold text-slate-900">Phase 1:</span> I engineered a 108-month rolling projection that transitioned into an annual 3-statement model (Income Statement, Balance Sheet, Cash Flow). The model incorporated a mid-cycle capital injection of ₹1,200 Lakhs and accounted for overlapping depreciation schedules. I calculated WACC using CAPM (8.74%) and applied DCF valuation with a 2% terminal growth assumption. Debt Service Coverage Ratio (DSCR) was modeled across the loan lifecycle to assess lender safety. 
          <br /><br />
          <span className="font-bold text-slate-900">Phase 2:</span> I programmed real-world exchange constraints (eliminating fractional share assumptions) and built a dual P&L tracking system applying Lower of Cost or Market accounting principles. The model tracked daily mark-to-market and calculated maximum capital drawdown to determine liquidity requirements. Sensitivity analysis was conducted using parameterized trigger adjustments.
        </>
      ),
      impact: [
        "Valued 30% equity stake at ₹18,649 Lakhs.",
        "Demonstrated DSCR improvement to 5.18x by Year 5.",
        "Built an investor-ready model aligning equity upside with debt protection.",
        "Momentum strategy delivered 13.17% XIRR baseline return.",
        "Identified liquidity requirements of ₹2.34 Cr vs ₹1.05 Cr across strategies.",
        "Quantified capital risk exposure prior to deployment.",
      ],
      skills: [
        "Financial Modeling",
        "DCF Valuation",
        "CAPM",
        "WACC Structuring",
        "Capital Planning",
        "Integrated 3-Statement Modeling",
        "Algorithmic Strategy Design",
        "Liquidity Modeling",
        "Risk Management",
        "Financial Engineering",
        "Sensitivity Analysis",
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Projects & Training
        </h1>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              
              {/* Clickable Header */}
              <button
                onClick={() =>
                  setActiveProject(activeProject === index ? null : index)
                }
                className="cursor-pointer flex flex-col md:flex-row md:justify-between items-start md:items-center w-full text-left px-6 md:px-10 py-6 md:py-8 rounded-3xl transition-all duration-300"
              >
                <div className="pr-4">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {project.title}
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 font-medium mt-2">
                    {project.tagline}
                  </p>
                </div>
                <span className={`hidden md:block text-slate-500 font-bold ml-4 transition-transform duration-300 ${activeProject === index ? "rotate-180 text-blue-500" : "rotate-0"}`}>
                  +
                </span>
                <span className={`md:hidden text-slate-500 font-bold mt-4 transition-transform duration-300 ${activeProject === index ? "rotate-180 text-blue-500" : "rotate-0"}`}>
                  +
                </span>
              </button>

              {/* Expanding Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeProject === index ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-10 pb-8 pt-2">
                  <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-6 md:p-8 text-sm md:text-base text-slate-700 font-medium leading-relaxed shadow-inner space-y-8">
                    
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">
                        Project Overview:
                      </h3>
                      <p>{project.overview}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">
                        What I Did:
                      </h3>
                      <p>{project.whatIDid}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 mb-3 uppercase tracking-wide text-xs">
                        Impact:
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 mb-3 uppercase tracking-wide text-xs">
                        Skills Demonstrated:
                      </h3>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* DYNAMIC Live App / Document Button */}
                    {project.link && (
                      <div className="pt-4 flex items-center gap-4 border-t border-slate-200/60 mt-6">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-slate-900 text-white font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                        >
                          {project.linkText || "View Project"}
                        </a>
                        {project.linkNote && (
                          <span className="text-slate-500 text-xs italic font-medium">
                            {project.linkNote}
                          </span>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}