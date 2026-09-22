import Image from "next/image";
import { GithubIcon } from "../icons";
import { emailAddress, githubProfileUrl } from "../site";

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
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-orb"
                aria-label="Jomar Cerrado on GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={`mailto:${emailAddress}`}
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
