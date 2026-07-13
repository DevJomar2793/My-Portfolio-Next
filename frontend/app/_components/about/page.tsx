const metrics = [
  ["05+", "years in IT support", "experience.log"],
  ["01", "year in QA testing", "quality.test"],
  ["∞", "curiosity to build", "always.running"],
];

export default function About() {
  return (
    <section id="about" className="border-b border-slate-800/50 py-24 md:py-32">
      <div data-reveal className="page-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <span className="section-label">01 / About</span>
          <h2 className="max-w-md text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">Built with a quality-first mindset.</h2>
          <p className="mt-5 max-w-sm font-mono text-xs leading-6 text-slate-600">{"// The best products work well before they look impressive. I care about both."}</p>
        </div>

        <div>
          <div className="panel overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-slate-700/40 bg-[#10151f] px-5 py-3 font-mono text-[10px] text-slate-500"><span className="text-violet-400">MD</span> README.md</div>
            <div className="p-6 md:p-8">
              <p className="text-lg leading-8 text-slate-300 md:text-xl">I&apos;m a self-taught developer with a foundation in IT support and quality assurance. That background shapes how I build: with curiosity, attention to detail, and respect for the people using the product.</p>
              <p className="mt-5 leading-7 text-slate-500">I&apos;m focused on scalable, secure, and thoughtful web applications using <span className="font-mono text-cyan-300">Next.js</span> and <span className="font-mono text-violet-300">FastAPI</span>.</p>
            </div>
          </div>

          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {metrics.map(([value, label, file]) => (
              <div data-reveal-item key={label} className="group rounded-lg border border-slate-700/40 bg-[#0d1119]/80 p-5 hover:border-cyan-400/25 hover:bg-[#111722]">
                <dt className="font-mono text-[9px] uppercase tracking-wider text-slate-600 group-hover:text-cyan-500">{file}</dt>
                <dd className="mt-5 text-3xl font-semibold tracking-tight text-white">{value}</dd>
                <dt className="mt-1 text-xs text-slate-500">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
