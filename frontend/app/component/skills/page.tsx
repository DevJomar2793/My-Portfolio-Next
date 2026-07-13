const groups = [
  { number: "01", title: "Frontend", file: "interface.tsx", accent: "text-cyan-300", skills: ["HTML5", "CSS / Tailwind", "JavaScript", "TypeScript", "Next.js", "Vue.js"] },
  { number: "02", title: "Backend & Data", file: "server.py", accent: "text-violet-300", skills: ["FastAPI", "MySQL", "SQLite", "PostgreSQL"] },
  { number: "03", title: "Quality", file: "product.spec.ts", accent: "text-emerald-300", skills: ["QA Testing", "API Testing", "Debugging", "Reliable UX"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-slate-800/50 bg-[#090c12]/60 py-24 md:py-32">
      <div data-reveal className="page-shell">
        <span className="section-label">02 / Capabilities</span>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">A practical stack for reliable products.</h2>
          <p className="max-w-md leading-7 text-slate-500">From testing an API to shipping the interface, these are the technologies I use across the product lifecycle.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <article data-reveal-item key={group.title} className="panel group overflow-hidden rounded-xl hover:border-cyan-400/20">
              <div className="flex items-center justify-between border-b border-slate-700/40 bg-[#10151f] px-5 py-3 font-mono text-[10px] text-slate-500"><span>{group.file}</span><span>{group.number}</span></div>
              <div className="p-6 md:p-7">
                <div className="mb-7 flex items-center gap-3"><span className={`font-mono text-sm ${group.accent}`}>{`{ }`}</span><h3 className="text-lg font-semibold text-white">{group.title}</h3></div>
                <ul className="space-y-3 font-mono text-xs">
                  {group.skills.map((skill, index) => <li key={skill} className="flex items-center justify-between border-b border-slate-800/70 pb-3 text-slate-400 last:border-0 last:pb-0"><span><span className="mr-3 text-slate-700">{String(index + 1).padStart(2, "0")}</span>{skill}</span><span className="text-emerald-500/70">✓</span></li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
