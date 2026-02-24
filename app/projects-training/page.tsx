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
        "This project was built to address a common gap in retail investing — the time and complexity involved in conducting structured equity analysis. A full financial audit of a stock typically requires reviewing financial statements, calculating ratios, checking technical indicators, and interpreting risk factors. The objective was to reduce this process into a structured, automated decision-support system.",
      whatIDid:
        "I designed a seven-phase evaluation framework covering safety, profitability, valuation, sector context, technical indicators, management quality, and risk synthesis. To simplify interpretation, I converted over 20 financial metrics into a weighted scoring system that produces a single “Stock Readiness Score.” I also engineered a hybrid data system capable of switching to simulation mode during API rate limits, ensuring uninterrupted functionality. Additionally, I integrated an LLM layer to synthesize quantitative outputs and identify inconsistencies such as weak operating leverage despite high earnings growth.",
      impact: [
        "Reduced manual stock analysis time from 2+ hours to approximately 30 seconds (≈60%+ efficiency gain).",
        "Eliminated downtime caused by API failures through a fault-tolerant architecture.",
        "Standardized early-stage detection of accounting red flags such as CFO vs EBITDA divergence.",
        "Improved screening velocity by replacing metric overload with structured scoring.",
      ],
      skills: [
        "Product Design",
        "Quantitative Modeling",
        "Risk Evaluation",
        "System Architecture",
        "Financial Analysis",
        "Decision Framework Design",
      ],
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
      overview:
        "Phase 1: Retail Expansion Financial Model — This project involved building a fully integrated 9-year financial model to support bank financing and a 30% equity investment proposal. Phase 2: Algorithmic Trading Simulation — This phase involved designing and backtesting two systematic trading strategies — Momentum and Mean Reversion — using a 9-year SENSEX dataset.",
      whatIDid:
        "Phase 1: I engineered a 108-month rolling projection that transitioned into an annual 3-statement model (Income Statement, Balance Sheet, Cash Flow). The model incorporated a mid-cycle capital injection of ₹1,200 Lakhs and accounted for overlapping depreciation schedules. I calculated WACC using CAPM (8.74%) and applied DCF valuation with a 2% terminal growth assumption. Debt Service Coverage Ratio (DSCR) was modeled across the loan lifecycle to assess lender safety. Phase 2: I programmed real-world exchange constraints (eliminating fractional share assumptions) and built a dual P&L tracking system applying Lower of Cost or Market accounting principles. The model tracked daily mark-to-market and calculated maximum capital drawdown to determine liquidity requirements. Sensitivity analysis was conducted using parameterized trigger adjustments.",
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
    <main className="min-h-screen px-6 md:px-10 py-12 md:py-16 bg-[#FFFDF4] text-black">
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Projects & Training
      </h1>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-black p-6 bg-white">
            <div
              onClick={() =>
                setActiveProject(activeProject === index ? null : index)
              }
              className="cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-700 mt-1">
                {project.tagline}
              </p>
            </div>

            {activeProject === index && (
              <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed">

                <div>
                  <h3 className="font-semibold mb-1">
                    Project Overview:
                  </h3>
                  <p>{project.overview}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">
                    What I Did:
                  </h3>
                  <p>{project.whatIDid}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">
                    Impact:
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {project.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">
                    Skills Demonstrated:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="border border-black px-3 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}