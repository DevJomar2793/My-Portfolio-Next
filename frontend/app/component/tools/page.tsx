const tools = [
  { command: "test", title: "IDE & Testing", items: ["AntiGravity", "Postman"], color: "text-emerald-300" },
  { command: "assist", title: "AI Workflow", items: ["Claude", "Codex", "GitHub Copilot", "Gemini"], color: "text-violet-300" },
  { command: "deploy", title: "Deployment", items: ["Vercel", "Render"], color: "text-cyan-300" },
  { command: "commit", title: "Version Control", items: ["Git", "GitHub"], color: "text-amber-300" },
];

export default function Tools() {
  return (
    <section id="tools" className="border-b border-slate-800/50 py-24 md:py-32">
      <div data-reveal className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <span className="section-label">03 / Workflow</span>
          <h2 className="max-w-md text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">Tools that help me ship.</h2>
          <p className="mt-6 max-w-sm leading-7 text-slate-500">A focused toolkit for designing, testing, collaborating, and deploying modern software.</p>
        </div>
        <div className="panel overflow-hidden rounded-xl">
          <div className="flex items-center gap-3 border-b border-slate-700/40 bg-[#10151f] px-5 py-4">
            <span className="font-mono text-xs text-cyan-300">⌘</span><span className="font-mono text-xs text-slate-500">Search commands and tools...</span><span className="ml-auto rounded border border-slate-700 px-2 py-1 font-mono text-[9px] text-slate-600">ESC</span>
          </div>
          <div className="divide-y divide-slate-800/70 p-2">
            {tools.map((group, index) => (
              <article data-reveal-item key={group.title} className="group grid gap-3 rounded-lg px-4 py-4 hover:bg-slate-800/40 sm:grid-cols-[2rem_1fr_1fr] sm:items-center">
                <span className="hidden font-mono text-[10px] text-slate-700 sm:block">0{index + 1}</span>
                <div><h3 className="text-sm font-medium text-slate-200">{group.title}</h3><p className={`mt-1 font-mono text-[10px] ${group.color}`}>$ workflow --{group.command}</p></div>
                <ul className="flex flex-wrap gap-2 sm:justify-end">{group.items.map((item) => <li key={item} className="tech-pill">{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="border-t border-slate-700/40 bg-[#0a0e15] px-5 py-3 font-mono text-[9px] text-slate-600">4 workflows &nbsp;·&nbsp; all systems ready</div>
        </div>
      </div>
    </section>
  );
}
