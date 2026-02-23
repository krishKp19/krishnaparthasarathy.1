export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDF4] text-black">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <img
          src="/profile.jpg"
          alt="Krishna"
          className="w-48 h-48 rounded-full object-cover mb-8 shadow-md"
        />

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Krishna Parthasarathy
        </h1>

        <p className="mt-4 text-xl text-gray-700 max-w-3xl">
          Product & Analytics Professional | ex-Amazon (4+ yrs) | Owned metrics,
          releases & cost optimization | PGPM ’26 – Great Lakes Chennai
        </p>

        <div className="mt-10 max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-black">
          <h2 className="text-2xl font-bold mb-4">
            What has happened so far?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Welcome to my page. This space highlights my professional journey so far,
            along with experiences that have shaped how I think and work. Explore to
            learn more about the path I’ve taken.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t-2 border-black w-full"></div>

      {/* ABOUT SECTION */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-800 leading-relaxed">
            I am a technically grounded professional with experience in large-scale
            systems, reliability engineering, and cross-functional collaboration.
            Through metrics, dashboards, and operational ownership, I developed
            strong product intuition. I am now focused on building thoughtful,
            scalable products that create measurable business impact.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t-2 border-black w-full"></div>

      {/* MY EXPERTISE */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">My Expertise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Product Lifecycle Management (PLM)",
              "Requirement Gathering",
              "Agile Methodologies",
              "Stakeholder Management",
              "Generative AI (GenAI)",
              "Data-Driven Decision Making",
              "Cloud Infrastructure (AWS)",
              "Go-To-Market (GTM) Strategy",
              "User Experience (UX) Research",
              "A/B Testing",
              "SQL",
              "Power BI",
            ].map((skill, index) => (
              <div
                key={index}
                className="border border-black px-6 py-4 text-sm font-medium bg-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-black py-10 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          
          <div>
            Phone: +91-9962066719
          </div>

          <div className="my-4 md:my-0">
            Email: krishnaparthasarathy.1@gmail.com
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/krishnakp19/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/krishKp19"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}