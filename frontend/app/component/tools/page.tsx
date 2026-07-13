const tools = [
  { title: "IDE & Testing", items: ["AntiGravity", "Postman"] },
  { title: "AI Workflow", items: ["Claude", "Codex", "GitHub Copilot", "Gemini"] },
  { title: "Deployment", items: ["Vercel", "Render"] },
  { title: "Version Control", items: ["Git", "GitHub"] },
];

export default function Tools() {
  return (
    <section id="tools" className="border-y border-white/5 bg-[#0b0e14]/80 py-20 md:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-5 md:px-6">
        <span className="section-label">Tools</span>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl">Tools that help me ship.</h2>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((group) => (
            <article data-reveal-item key={group.title} className="bg-[#121214] p-6 transition-colors duration-300 hover:bg-[#18181b]">
              <div className="mb-6 grid size-10 place-items-center rounded-lg bg-violet-500/10 text-violet-400" aria-hidden="true">+</div>
              <h3 className="mb-4 font-semibold text-white">{group.title}</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
