const metrics = [
  ["5+", "years in IT support"],
  ["1", "year in QA testing"],
  ["∞", "curiosity to build"],
];

export default function About() {
  return (
    <section id="about" className="border-y border-white/5 bg-[#0b0e14]/80 py-20 md:py-28">
      <div data-reveal className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[.65fr_1.35fr] md:px-6">
        <div>
          <span className="section-label">About me</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">A practical, quality-first approach.</h2>
        </div>
        <div>
          <div className="rounded-2xl border border-white/10 bg-[#121214] p-6 md:p-8">
            <p className="text-lg leading-8 text-gray-300 md:text-xl">
              I&apos;m a self-taught developer with a foundation in IT support and quality assurance. That background shapes how I build: with curiosity, attention to detail, and respect for the people using the product.
            </p>
            <p className="mt-5 leading-7 text-gray-400">
              I&apos;m focused on scalable, secure, and thoughtful web applications using <span className="text-violet-300">Next.js</span> and <span className="text-violet-300">FastAPI</span>.
            </p>
          </div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div data-reveal-item key={label} className="rounded-xl border border-white/10 bg-white/[.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
                <dt className="text-sm text-gray-500">{label}</dt>
                <dd className="mt-2 text-3xl font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
