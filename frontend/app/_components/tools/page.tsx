const stages = [
  {
    number: "01",
    title: "Understand",
    body: "Clarify the problem, user, and constraints before choosing the solution.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Build",
    body: "Use modern frameworks and AI assistance to turn ideas into working software.",
    icon: "</>",
  },
  {
    number: "03",
    title: "Validate",
    body: "Test behavior, APIs, edge cases, and usability with a quality-first mindset.",
    icon: "✓",
  },
  {
    number: "04",
    title: "Ship",
    body: "Deploy, observe, and keep improving the experience after launch.",
    icon: "↗",
  },
];

const tools = [
  {
    title: "IDE, Terminal & Testing Tools",
    items: ["AntiGravity", "Postman", "Warp Terminal"],
    color: "cyan",
  },
  {
    title: "AI Workflow",
    items: ["Claude", "Codex", "GitHub Copilot", "Gemini"],
    color: "violet",
  },
  { title: "Deployment", items: ["Vercel", "Render", "Docker"], color: "blue" },
  { title: "Version Control", items: ["GitHub"], color: "cyan" },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="cosmic-section cosmic-section-left py-24 md:py-32"
    >
      <div className="section-stars" aria-hidden="true" />
      <div data-reveal className="page-shell relative z-10">
        <div className="section-heading">
          <span className="section-kicker">
            <i />
            03 · AI-assisted development
          </span>
          <div className="grid gap-5 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <h2>
              AI accelerates the work.
              <br />
              <span>Judgment shapes the outcome.</span>
            </h2>
            <p>
              I pair AI tools with hands-on development and testing to explore
              faster, solve complex problems, and deliver better user
              experiences.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <article className="cosmic-card workflow-card p-6 md:p-8">
            <div className="card-topline">
              <span>
                <i className="status-dot" /> Product workflow
              </span>
              <small>Human-led · AI-assisted</small>
            </div>
            <ol className="workflow-list">
              {stages.map((stage, index) => (
                <li key={stage.title} data-reveal-item>
                  <span className="workflow-number">{stage.number}</span>
                  <span className="workflow-icon">{stage.icon}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.body}</p>
                  </div>
                  {index < stages.length - 1 && (
                    <i className="workflow-line" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {tools.map((group) => (
              <article
                data-reveal-item
                key={group.title}
                className={`cosmic-card tool-row tool-${group.color}`}
              >
                <div>
                  <span className="tool-spark">✦</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
