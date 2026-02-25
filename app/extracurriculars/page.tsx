export default function Extracurriculars() {
  return (
    <main className="min-h-screen flex flex-col text-slate-900 pb-20">
      
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-slate-900 text-center">
          Extra-Curriculars
        </h1>

        {/* FROSTED GLASS PLACEHOLDER CARD */}
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
            Coming Soon
          </h2>
          
          <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
            Leadership activities and initiatives will be added here.
          </p>
          
        </div>
      </section>

    </main>
  );
}