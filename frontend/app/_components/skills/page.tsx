const groups = [
  {
    title: "Frontend",
    note: "Interfaces",
    icon: "◇",
    accent: "cyan",
    skills: [
      ["H5", "HTML5"],
      ["CSS", "CSS / Tailwind"],
      ["JS", "JavaScript"],
      ["TS", "TypeScript"],
      ["N", "Next.js"],
      ["V", "Vue.js"],
    ],
  },
  {
    title: "Backend & Data",
    note: "Systems",
    icon: "⌘",
    accent: "violet",
    skills: [
      ["API", "FastAPI"],
      ["MY", "MySQL"],
      ["SQ", "SQLite"],
      ["PG", "PostgreSQL"],
      ["REST", "RestAPI"],
    ],
  },
  {
    title: "Quality",
    note: "Confidence",
    icon: "✓",
    accent: "blue",
    skills: [
      ["QA", "QA Testing"],
      ["↔", "API Testing"],
      ["DB", "Debugging"],
      ["UX", "Reliable UX"],
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="cosmic-section cosmic-section-right py-24 md:py-32"
    >
      <div className="section-stars" aria-hidden="true" />
      <div data-reveal className="page-shell relative z-10">
        <div className="section-heading section-heading-centered">
          <span className="section-kicker">
            <i />
            02 · Skills &amp; tech stack
          </span>
          <h2>
            A practical stack for
            <br />
            <span>reliable digital products.</span>
          </h2>
          <p>
            Technologies I use across the product lifecycle—from building an
            interface to testing the API behind it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <article
              data-reveal-item
              key={group.title}
              className={`cosmic-card skill-group skill-${group.accent}`}
            >
              <div className="skill-header">
                <span className="icon-badge">{group.icon}</span>
                <div>
                  <span>
                    0{groupIndex + 1} / {group.note}
                  </span>
                  <h3>{group.title}</h3>
                </div>
              </div>
              <ul className="tech-card-grid">
                {group.skills.map(([short, name]) => (
                  <li key={name} className="tech-card">
                    <span aria-hidden="true">{short}</span>
                    <strong>{name}</strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
