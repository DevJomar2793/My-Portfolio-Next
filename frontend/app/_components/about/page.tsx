const metrics = [
  { value: "05+", label: "Years in IT support", icon: "⌁" },
  { value: "01", label: "Year in QA testing", icon: "✓" },
  { value: "∞", label: "Curiosity to build", icon: "✦" },
];

const principles = [
  ["01", "Think clearly", "Understand the people, constraints, and purpose before writing code."],
  ["02", "Build thoughtfully", "Create interfaces and systems that feel reliable, useful, and considered."],
  ["03", "Test the details", "Treat quality as part of development—not a final checkbox."],
];

export default function About() {
  return (
    <section id="about" className="cosmic-section cosmic-section-left py-24 md:py-32">
      <div className="section-stars" aria-hidden="true" />
      <div data-reveal className="page-shell relative z-10">
        <div className="section-heading">
          <span className="section-kicker"><i />01 · About me</span>
          <div className="grid gap-5 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <h2>Quality-first thinking,<br /><span>built into every layer.</span></h2>
            <p>My support and testing background shapes how I approach software: stay curious, notice the details, and build for the people who will use it.</p>
          </div>
        </div>

        <article className="cosmic-card about-card mt-12 overflow-hidden">
          <div className="card-shine" aria-hidden="true" />
          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:p-12">
            <div>
              <span className="icon-badge">✦</span>
              <p className="mt-7 text-xl leading-9 text-slate-200 md:text-2xl md:leading-10">I&apos;m a self-taught developer with a foundation in <span className="gradient-text">IT support and quality assurance.</span></p>
              <p className="mt-5 max-w-2xl leading-8 text-slate-400">That experience taught me to investigate patiently, communicate clearly, and care about the small details that make a product dependable. Today I build scalable, secure, and thoughtful applications using Next.js and FastAPI.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Problem solving', 'Quality assurance', 'Full stack development'].map((item) => <span key={item} className="cosmic-pill">{item}</span>)}
              </div>
            </div>
            <ol className="space-y-3">
              {principles.map(([number, title, body]) => (
                <li key={title} data-reveal-item className="principle-card">
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <dl className="grid border-t border-violet-400/15 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <span className="metric-icon">{metric.icon}</span>
                <div><dd>{metric.value}</dd><dt>{metric.label}</dt></div>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
