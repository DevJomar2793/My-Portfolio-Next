"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Project = {
  title: string;
  number: string;
  tech: string[];
  desc: string;
  link?: string;
  codeLink?: string;
  image: string;
  imageAlt: string;
  accent: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "SupahBowl",
    number: "01",
    tech: ["Next.js", "Tailwind CSS"],
    desc: "A modern food website with a bold, customer-friendly experience.",
    link: "https://supah-bowl-project.vercel.app/",
    codeLink: "https://github.com/DevJomar2793/Supahbowl-System-Next",
    image: "/project-supahbowl.png",
    imageAlt: "SupahBowl website preview",
    accent: "cyan",
  },
  {
    title: "Adamos Fresh Eggs",
    number: "02",
    tech: ["Next.js", "TypeScript"],
    desc: "A focused landing page for a local fresh-egg business.",
    link: "https://adamosfresheggs.vercel.app/",
    codeLink: "https://github.com/DevJomar2793/AFE-Web-App",
    image: "/project-adamos.svg",
    imageAlt: "Adamos Fresh Eggs website preview",
    accent: "violet",
  },
  {
    title: "887 Cafe",
    number: "03",
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    desc: "A full-stack coffee shop application for managing orders and inventory.",
    link: "https://887-cafe-next.vercel.app",
    image: "/project-887-cafe.png",
    imageAlt: "887 Cafe application preview",
    accent: "blue",
  },
  {
    title: "Photobooth System",
    number: "04",
    tech: ["Vue.js", "FastAPI"],
    desc: "An interactive web-based photo booth experience.",
    link: "https://photobooth-app-omega.vercel.app/",
    codeLink: "https://github.com/DevJomar2793/Photobooth-System-Next",
    image: "/project-photobooth.png",
    imageAlt: "Photobooth System website preview",
    accent: "violet",
  },
];

const games = [
  {
    name: "Quiz Game",
    note: "Test your knowledge across quick interactive questions.",
    link: "https://quiz-game-project-six.vercel.app",
    icon: "?",
  },
  {
    name: "Rock, Paper, Scissors",
    note: "Play a polished version of the classic hand game.",
    link: "https://rps-app-nine.vercel.app",
    icon: "✦",
  },
];

export default function Projects() {
  const [gamesOpen, setGamesOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gamesOpen) return;

    document.body.style.overflow = "hidden";
    const previousFocus = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("button, a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGamesOpen(false);
      if (event.key !== "Tab" || !dialog) return;

      const focusable = [...dialog.querySelectorAll<HTMLElement>("button, a")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [gamesOpen]);

  return (
    <section
      id="projects"
      className="cosmic-section cosmic-section-right py-24 md:py-32"
    >
      <div className="section-stars" aria-hidden="true" />
      <div className="page-shell relative z-10">
        <div data-reveal className="section-heading section-heading-centered">
          <span className="section-kicker">
            <i />
            04 · Selected projects
          </span>
          <h2>
            Ideas transformed into
            <br />
            <span>working digital products.</span>
          </h2>
          <p>
            Four selected applications that reflect my approach to interface
            design, full-stack development, and quality.
          </p>
        </div>

        <div data-reveal className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              data-reveal-item
              key={project.title}
              className={`project-product-card project-${project.accent}`}
            >
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                  className="object-cover object-top transition-transform duration-700"
                />
                <div className="project-image-overlay" />
                <span className="project-number">{project.number}</span>
                <span className="project-status">
                  <i
                    className={project.link ? "status-dot" : "project-code-dot"}
                  />
                  {project.status ?? "Live product"}
                </span>
              </div>
              <div className="project-content">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="project-label">Featured build</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
                <p>{project.desc}</p>
                <ul aria-label="Technologies used">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button neon-button-primary"
                    >
                      Live demo <span>↗</span>
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button"
                    >
                      View code <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <article data-reveal className="game-launcher cosmic-card mt-6">
          <div className="game-launcher-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="game-launcher-copy">
            <span className="game-eyebrow"><i />Bonus playground</span>
            <h3>Need a quick break? <span>Enter the mini-game arcade.</span></h3>
            <p>Two small interactive games built with React and Next.js.</p>
          </div>
          <div className="game-launcher-preview" aria-hidden="true">
            <span>?</span><span>✦</span>
          </div>
          <button type="button" onClick={() => setGamesOpen(true)} className="neon-button neon-button-primary">
            Play mini games <span className="button-arrow">→</span>
          </button>
        </article>
      </div>

      {gamesOpen && createPortal(
        <div className="modal-backdrop game-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setGamesOpen(false)}>
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="games-title" className="modal-dialog game-modal cosmic-card">
            <div className="game-modal-stars" aria-hidden="true" />
            <div className="game-modal-header">
              <div>
                <span className="game-eyebrow"><i />Mini-game arcade</span>
                <h2 id="games-title">Choose your game</h2>
                <p>Pick a challenge and play in a new tab.</p>
              </div>
              <button type="button" onClick={() => setGamesOpen(false)} aria-label="Close games dialog" className="game-modal-close">×</button>
            </div>
            <div className="game-list">
              {games.map((game, index) => (
                <a key={game.name} href={game.link} target="_blank" rel="noopener noreferrer" className="game-option">
                  <span className="game-option-number">0{index + 1}</span>
                  <span className="game-option-icon">{game.icon}</span>
                  <span className="game-option-copy"><strong>{game.name}</strong><small>{game.note}</small></span>
                  <span className="game-option-arrow">↗</span>
                </a>
              ))}
            </div>
            <div className="game-modal-footer"><span className="status-dot" />Both games are ready to launch</div>
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}
