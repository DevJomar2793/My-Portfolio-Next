const groups = [
  { number: "01", title: "Frontend", skills: ["HTML5", "CSS / Tailwind", "JavaScript", "TypeScript", "Next.js", "Vue.js"] },
  { number: "02", title: "Backend & Data", skills: ["FastAPI", "MySQL", "SQLite", "PostgreSQL"] },
  { number: "03", title: "Quality", skills: ["QA Testing", "API Testing", "Debugging", "Reliable UX"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-5 md:px-6">
        <span className="section-label">Skills</span>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">A practical stack for reliable products.</h2>
          <p className="max-w-md text-gray-400">Technologies I use across the product lifecycle, from testing an API to shipping the interface.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <article data-reveal-item key={group.title} className="rounded-2xl border border-white/10 bg-[#121214] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 md:p-7">
              <div className="mb-7 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <span className="text-sm font-medium text-violet-400">{group.number}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => <li key={skill} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-xs text-gray-300">{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
