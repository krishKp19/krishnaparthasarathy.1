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
        "This project was built to address a common gap in retail investing and junior equity research - the massive time sink and complexity involved in conducting structured equity analysis. A full financial audit of a stock typically requires cross-referencing multiple financial statements, calculating custom ratios, verifying technical indicators, and interpreting risk factors. The objective was to eliminate this bottleneck by building a highly resilient, automated decision-support system that standardizes forensic accounting.",
      whatIDid:
        "I designed a seven-phase evaluation framework covering safety, profitability, valuation, sector context, technical indicators, management quality, and risk synthesis. To simplify interpretation, I converted over 20 financial metrics into a weighted scoring system that produces a single 'Stock Readiness Score'. To solve stringent API rate-limiting issues without relying on simulated data, I engineered a highly resilient 'Split-Hybrid Architecture'. This features a custom DOM-parsing web scraper to extract deep fundamentals directly from Screener.in, paired with a triple-redundant waterfall engine for live technical charting. Finally, I integrated an LLM layer to synthesize these quantitative outputs and instantly identify hidden inconsistencies, such as speculative price spikes lacking fundamental operating leverage.",
      impact: [
        "Reduced end-to-end manual stock analysis time from 15+ minutes to approximately 3–4 minutes - a 60%+ efficiency gain.",
        "Achieved near 100% data uptime and bypassed cloud IP bans by replacing fragile single-source APIs with a fault-tolerant, multi-layered scraping architecture.",
        "Standardized early-stage detection of accounting red flags and value traps via automated CFO vs. EBITDA divergence checks.",
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
        "LLM Integration",
        "Python",
      ],
      link: "https://stockanalyserkp19.streamlit.app/",
      linkText: "View Live Application",
      linkNote: "(Revive to use)",
    },
    {
      title: "Apollo 24/7 – Youth Adoption Strategy Whitepaper Study",
      tagline:
        "Data-driven youth adoption strategy targeting 40M+ Indian college students.",
      overview:
        "This whitepaper analyzed the adoption gap of Apollo 24/7 among India's 18–25 demographic. While digital health awareness was high, repeat engagement and behavioral integration were limited. The objective was to identify structural friction and propose a scalable growth strategy.",
      whatIDid:
        "I conducted primary research using 150+ structured survey responses from college students and analyzed qualitative dissatisfaction themes from app reviews. Using this data, I created a composite satisfaction index to quantify user sentiment across trust, accessibility, navigation, and repeat intent. I then designed a youth-focused growth strategy built around campus partnerships, preventive subscription models, mental health prioritization, and simplified onboarding journeys.",
      impact: [
        "Identified key structural friction points affecting engagement and retention across India's college-going demographic.",
        "Proposed a scalable hybrid service model targeting 40M+ college students in India.",
        "Converted qualitative dissatisfaction signals into quantifiable strategic inputs using a composite satisfaction index.",
        "Delivered a go-to-market roadmap aligned with long-term retention rather than one-time consultation spikes.",
      ],
      skills: [
        "Market Research",
        "Product Strategy",
        "Go-To-Market Design",
        "User Segmentation",
        "Data Synthesis",
        "Strategic Framework Development",
        "Primary Research",
        "Survey Design",
      ],
      link: "https://docs.google.com/document/d/1luK221vCcn_ep7PmIIlhvbl2Df37F5e4/edit?usp=sharing&ouid=109255237526964657886&rtpof=true&sd=true",
      linkText: "Read Whitepaper",
    },
    {
      title: "Restaurant Success Analytics - Yelp Dataset",
      tagline:
        "End-to-end inferential analysis on a 1.6M+ review dataset identifying statistically significant drivers of restaurant ratings.",
      overview:
        "This project investigated what operational and contextual factors most significantly predict restaurant success - defined as achieving high customer ratings at scale. The dataset comprised over 1.6 million Yelp reviews across thousands of restaurants, spanning multiple cities, price categories, and cuisine types. The objective was to move beyond surface-level correlations and apply rigorous statistical methods to identify the true drivers of customer satisfaction.",
      whatIDid:
        "I performed end-to-end exploratory data analysis using Python, DuckDB, Pandas, and Seaborn to understand the distribution of ratings, review volume, and business characteristics. I then applied inferential statistical techniques - including hypothesis testing, OLS regression, and confidence interval estimation - to identify which variables had statistically significant impact on ratings. Factors analyzed included price range, location, review count, business category, and user engagement patterns. The analysis was structured to distinguish correlation from causation and to surface actionable business insights from the statistical findings.",
      impact: [
        "Identified statistically significant operational drivers of 5-star ratings across price, location, and user behaviour segments.",
        "Applied OLS regression and hypothesis testing on 1.6M+ rows - demonstrating production-scale data handling using DuckDB and Python.",
        "Quantified the relationship between review volume and rating stability, providing insight into how visibility affects perceived quality.",
        "Delivered a structured analytical report with reproducible methodology and published findings via Quarto.",
      ],
      skills: [
        "Python (Pandas, Seaborn)",
        "SQL & DuckDB",
        "Exploratory Data Analysis",
        "OLS Regression",
        "Hypothesis Testing",
        "Confidence Interval Estimation",
        "Statistical Inference",
        "Data Storytelling",
        "Quarto Publishing",
      ],
      link: "https://krspn.quarto.pub/sec-4-group-13/",
      linkText: "View Published Analysis",
    },
    {
      title: "Social Media & Productivity - Perception vs Reality",
      tagline:
        "Mixed-methods study quantifying the gap between perceived and actual productivity across demographic segments.",
      overview:
        "This study examined whether people accurately perceive the impact of social media on their own productivity - and whether that perception varies systematically across demographic groups. The motivation came from a published Economic Times article making claims about social media's productivity impact. The objective was to validate, challenge, or extend those claims using original survey data and rigorous statistical analysis.",
      whatIDid:
        "I designed and distributed a structured survey collecting 13,000+ responses across age, gender, occupation, and usage-pattern segments. The data was cleaned and processed using Python and Pandas, followed by exploratory analysis to understand distribution patterns and segment-level differences. I then applied correlation analysis, regression modelling, and demographic segmentation using Statsmodels to quantify the perception gap - the difference between how productive people believe they are versus behavioural indicators of actual productivity. Findings were tested for statistical significance before conclusions were drawn.",
      impact: [
        "Quantified a measurable and statistically significant productivity perception gap across demographic segments.",
        "Validated and extended claims from a published Economic Times article using original survey data and regression analysis.",
        "Identified demographic variables - including age group and occupation type - as significant moderators of the perception gap.",
        "Published findings as a reproducible analytical report via Quarto, demonstrating end-to-end research and communication capability.",
      ],
      skills: [
        "Python (Pandas, Statsmodels)",
        "Survey Design & Data Collection",
        "Exploratory Data Analysis",
        "Regression Modelling",
        "Correlation Analysis",
        "Demographic Segmentation",
        "Statistical Hypothesis Testing",
        "Data Storytelling",
        "Quarto Publishing",
      ],
      link: "https://krspn.quarto.pub/social-media-and-productivity---perception-vs-reality/",
      linkText: "View Published Analysis",
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
        "Financial Modelling",
        "Python",
      ],
    },
    {
      title: "Advanced Financial Modeling & Algorithmic Trading",
      tagline:
        "Integrated 9-year financial model and algorithmic trading simulation.",
      overview: (
        <>
          <span className="font-bold text-slate-900">
            Phase 1: Retail Expansion Financial Model:
          </span>{" "}
          This project involved building a fully integrated 9-year financial
          model to support bank financing and a 30% equity investment proposal.
          <br />
          <br />
          <span className="font-bold text-slate-900">
            Phase 2: Algorithmic Trading Simulation:
          </span>{" "}
          This phase involved designing and backtesting two systematic trading
          strategies - Momentum and Mean Reversion - using a 9-year SENSEX
          dataset.
        </>
      ),
      whatIDid: (
        <>
          <span className="font-bold text-slate-900">Phase 1:</span> I
          engineered a 108-month rolling projection that transitioned into an
          annual 3-statement model (Income Statement, Balance Sheet, Cash Flow).
          The model incorporated a mid-cycle capital injection of ₹1,200 Lakhs
          and accounted for overlapping depreciation schedules. I calculated
          WACC using CAPM (8.74%) and applied DCF valuation with a 2% terminal
          growth assumption. Debt Service Coverage Ratio (DSCR) was modeled
          across the loan lifecycle to assess lender safety.
          <br />
          <br />
          <span className="font-bold text-slate-900">Phase 2:</span> I
          programmed real-world exchange constraints (eliminating fractional
          share assumptions) and built a dual P&L tracking system applying
          Lower of Cost or Market accounting principles. The model tracked daily
          mark-to-market and calculated maximum capital drawdown to determine
          liquidity requirements. Sensitivity analysis was conducted using
          parameterized trigger adjustments.
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
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
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
                <span
                  className={`hidden md:block text-slate-500 font-bold ml-4 text-2xl transition-transform duration-300 ${
                    activeProject === index
                      ? "rotate-45 text-blue-500"
                      : "rotate-0"
                  }`}
                >
                  +
                </span>
                <span
                  className={`md:hidden text-slate-500 font-bold mt-4 text-2xl transition-transform duration-300 ${
                    activeProject === index
                      ? "rotate-45 text-blue-500"
                      : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Expanding Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeProject === index
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
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

                    {project.link && (
                      <div className="pt-4 flex items-center gap-4 border-t border-slate-200/60 mt-6">
                        {/* THE MISSING TAG HAS BEEN ADDED HERE */}
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