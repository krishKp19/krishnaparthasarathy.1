"use client";

import FadeIn from "../components/FadeIn";

export default function Home() {
 const expertise = [
  {
    title: "Data Engineering & Cloud Platforms",
    skills: [
      "AWS Data Ecosystem (S3, Redshift, Glue, Lambda, Athena, CloudWatch)",
      "Data Lake & Warehouse Architecture",
      "ETL / ELT Pipeline Automation",
      "Cloud Infrastructure & Security",
      "Data Modeling & Schema Design",
      "Distributed Computing (PySpark)", 
      "Workflow Orchestration (Apache Airflow, AWS Step Functions)",
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      "Python (Pandas, Seaborn, Matplotlib, NumPy)",
      "Advanced SQL (CTEs, Window Functions)", 
      "Power BI & Executive Dashboards",
      "Exploratory Data Analysis (EDA)",
      "Hypothesis Testing & Regression",
      "KPI Definition",
      "Advanced Excel",
    ],
  },
  {
    title: "Business Strategy & Domain",
    skills: [
      "BFSI (Banking & Financial Services) Domain",
      "Business-to-Tech Translation",
      "Structured Problem Solving",
      "Financial Modeling & Business Cases",
      "Process Optimization",
      "Root Cause Analysis (RCA)",
    ],
  },
  {
    title: "AI Solutions & Program Delivery",
    skills: [
      "GenAI & RAG Architectures (LangChain, Vector DBs)",
      "MLOps & AI Pipeline Integration",
      "Release Program Management",
      "CI/CD & Operational Automation",
      "Agile / Scrum Methodologies",
      "Stakeholder Management",
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
            Data Engineer & Cloud Consultant | AWS Data Platforms · Cloud Infrastructure | TCS · Ex-Amazon · Great Lakes PGPM
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
              I’m a <strong>Data Engineer and Cloud Consultant</strong> focussed on building reliable data platforms and cloud infrastructure that directly serve business goals.
              <br /><br />
              Currently at <strong>Tata Consultancy Services</strong>, I work within the BFSI unit designing <strong>AWS-based data platforms</strong> that help business leaders process insights faster. Before this, I spent 4 years at Amazon working across release program management, support engineering, DevOps, and infrastructure operations at largescale.
              <br /><br />
              My 1-year management program (PGPM) at Great Lakes specializing in <strong>Finance and Consulting</strong>taught me to understand how businesses and operations actually work behind the scenes. That context is what helps me know what to build rightly-starting with the root business problem, understanding client needs, and keeping solutions frugal. For me, data engineering isn't just about building pipelines-it's about creating that single source of truth every business relies on to make sharp decisions.
              <br /><br />
              Whether it’s cloud architecture, pipeline design, or applying modern data frameworks, I bring a balance of <strong>deep engineering execution</strong> and <strong>business domain understanding</strong>.
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
              I didn't plan to end up at this exact intersection of technology, data, and business. It happened simply because I kept finding problems worth solving.
              <br /><br />
              I started as a Device Associate at Amazon, testing the WebView APK across Echo, Fire TV, and Tablet devices. Early on, I noticed that a significant portion of manual test cases were redundant-so I automated them, reduced release cycle times by 12%, and helped build a thermal benchmarking framework that became a launch-readiness standard for hardware validation.
              <br /><br />
              Moving into Software Support Engineering II on the Books Detail Page team expanded my scope fast. I ended up running release programs across four engineering teams, investigating why 70% of weekly alerts were false positives, building dashboards for L8 leadership, driving infrastructure migrations, and deploying AI automation to eliminate operational waste. The work was part engineering, part analytics, and part program management-and I thrived in that ambiguity.
              <br /><br />
              I pursued the PGPM at Great Lakes to put structured business context around everything I had built operationally. Studying financial modeling, consulting frameworks, and business strategy gave me a clear understanding of how operations and client needs actually function behind the scenes. It taught me how to look at the bigger picture and know what to build rightly.
              <br /><br />
              That realization led me to my current role as a Data Engineer at Tata Consultancy Services. Working in the BFSI unit, I focus on building AWS Data Platforms that translate complex financial domain requirements into fast, reliable, and frugal systems-creating that single source of truth business leaders need to make sharp decisions.
              <br /><br />
              Today, I operate as a Data Engineer and Cloud Consultant. Whether it's cloud architecture, data pipeline engineering, or domain strategy, I focus on bridging deep technical execution with real-world business value.
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