export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-between">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <img
          src="/profile.jpg"
          alt="Krishna"
          className="w-48 h-48 rounded-full object-cover mb-8"
        />

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Krishna Parthasarathy
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Technical Product Manager | DevOps Engineer | MBA
        </p>

        <p className="mt-6 max-w-2xl text-gray-700">
          Building scalable, data-driven products by bridging technology,
          business strategy, and user experience.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-16 border-t">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a technically grounded professional with experience in large-scale
            systems, reliability engineering, and cross-functional collaboration.
            Through metrics, dashboards, and operational ownership, I developed
            strong product intuition. I am now focused on building thoughtful,
            scalable products that create measurable business impact.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          
          <div>
            Phone: +91-XXXXXXXXXX
          </div>

          <div className="my-4 md:my-0">
            Email: your@email.com
          </div>

          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://github.com" target="_blank">GitHub</a>
          </div>

        </div>
      </footer>

    </main>
  )
}