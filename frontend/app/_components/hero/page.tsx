import Image from "next/image";

const stack = [
  ["N", "Next.js"],
  ["TS", "TypeScript"],
  ["Py", "Python"],
  ["API", "FastAPI"],
  ["DB", "PostgreSQL"],
  ["V", "Vue.js"],
  ["QA", "Testing"],
  ["Git", "GitHub"],
];

const process = [
  ["01", "Understand"],
  ["02", "Design"],
  ["03", "Build"],
  ["06", "Deploy"],
  ["05", "Test"],
  ["04", "Optimize"],
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="cosmic-hero relative overflow-hidden pb-10 pt-28 lg:pb-14 lg:pt-36"
    >
      <div className="stars stars-one" aria-hidden="true" />
      <div className="stars stars-two" aria-hidden="true" />
      <div className="black-hole" aria-hidden="true">
        <span />
      </div>
      <div className="planet planet-left" aria-hidden="true" />
      <div className="planet planet-right" aria-hidden="true" />

      <div className="page-shell relative z-10">
        <div className="grid min-h-152.5 items-center gap-12 lg:grid-cols-[1.03fr_.97fr] lg:gap-16">
          <div className="hero-copy pt-10 lg:pt-0">
            <div className="eyebrow">
              <span aria-hidden="true">✦</span> AI-assisted full stack developer{" "}
              <span className="status-dot" />
            </div>
            <h1 className="mt-7 text-5xl font-bold leading-[1.03] tracking-[-.05em] text-white sm:text-6xl xl:text-[4.7rem]">
              Hi there,
              <br />
              I&apos;m <span className="gradient-name">Jomar Cerrado</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              QA tester and full stack developer passionate about building
              intelligent, reliable web experiences with modern tools and a
              quality-first mindset.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#about" className="neon-button neon-button-primary">
                About me <span className="button-arrow">→</span>
              </a>
              <a href="#contact" className="neon-button">
                Contact me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/DevJomar2793"
                target="_blank"
                rel="noopener noreferrer"
                className="social-orb"
                aria-label="Jomar Cerrado on GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="mailto:jomarcerrado2793@gmail.com"
                className="social-orb"
                aria-label="Email Jomar Cerrado"
              >
                <span className="text-lg">@</span>
              </a>
              <a
                href="#projects"
                className="social-orb"
                aria-label="View projects"
              >
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>

          <div
            className="hero-portrait-wrap hero-panel"
            aria-label="Portrait of Jomar Cerrado"
          >
            <div className="orbit orbit-one">
              <i />
              <i />
            </div>
            <div className="orbit orbit-two">
              <i />
            </div>
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <Image
                src="https://github.com/DevJomar2793.png"
                alt="Portrait of Jomar Cerrado"
                fill
                sizes="(max-width: 768px) 310px, 430px"
                className="object-cover"
                priority
              />
              <div className="portrait-shade" aria-hidden="true" />
            </div>
            <div className="availability">
              <span className="status-dot" />
              <span>
                <strong>Available for work</strong>
                <small>Philippines · GMT+8</small>
              </span>
            </div>
          </div>
        </div>

        <div className="overview-grid mt-6 grid gap-5 lg:grid-cols-[.92fr_.95fr_1.13fr]">
          <article className="glass-card" data-reveal>
            <h2>
              <span className="card-icon">♟</span> About me
            </h2>
            <p>
              I&apos;m a developer and QA tester who loves turning ideas into
              scalable, thoughtful applications. I use AI tools to move faster
              while keeping quality and usability at the center.
            </p>
            <a href="#about" className="mini-button">
              Know more <span>→</span>
            </a>
          </article>

          <article className="glass-card" data-reveal>
            <h2>
              <span className="card-icon">✦</span> What I do
            </h2>
            <ol className="process-grid">
              {process.map(([number, label], index) => (
                <li key={label}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                  {index < process.length - 1 && <i aria-hidden="true">→</i>}
                </li>
              ))}
            </ol>
          </article>

          <article className="glass-card" data-reveal>
            <h2>
              <span className="card-icon">&lt;/&gt;</span> Tech stack
            </h2>
            <ul className="stack-grid">
              {stack.map(([short, name]) => (
                <li key={name}>
                  <span>{short}</span>
                  <small>{name}</small>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <blockquote className="hero-quote mt-5">
          <span aria-hidden="true">“</span>
          <p>
            I believe technology works best when <em>quality</em>,{" "}
            <em>curiosity</em>, and people come first.
          </p>
          <a href="#about" aria-label="Continue to about section">
            ↓
          </a>
        </blockquote>
      </div>
    </section>
  );
}
