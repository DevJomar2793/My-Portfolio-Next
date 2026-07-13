"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Project = {
  title: string;
  tech: string[];
  desc: string;
  link?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "SupahBowl",
    tech: ["Next.js"],
    desc: "A modern food website with a bold, customer-friendly experience.",
    link: "https://supah-bowl-project.vercel.app/",
    accent: "from-cyan-400/15 to-cyan-500/[.02]",
  },
  {
    title: "Adamos Fresh Eggs",
    tech: ["Next.js"],
    desc: "A focused landing page for a local fresh-egg business.",
    link: "https://afe-web-app.vercel.app/",
    accent: "from-emerald-400/15 to-emerald-500/[.02]",
  },
  {
    title: "887 Cafe",
    tech: ["Next.js", "PostgreSQL", "FastAPI"],
    desc: "A full-stack coffee shop application for managing orders and inventory.",
    link: "https://887-cafe-next.vercel.app",
    accent: "from-violet-400/15 to-violet-500/[.02]",
  },
  {
    title: "Photobooth System",
    tech: ["Vue.js", "FastAPI"],
    desc: "An interactive web-based photo booth experience.",
    link: "https://photobooth-app-omega.vercel.app/",
    accent: "from-cyan-400/15 to-blue-500/[.02]",
  },
  {
    title: "SCA Sitemap",
    tech: ["Vue.js", "FastAPI"],
    desc: "A dynamic sitemap generator for streamlined site management.",
    link: "https://sca-sitemap-vue.vercel.app/",
    accent: "from-fuchsia-400/15 to-violet-500/[.02]",
  },
  {
    title: "SCA Hardware Inventory",
    tech: ["Vue.js", "FastAPI"],
    desc: "An inventory system for tracking and managing hardware assets.",
    link: "https://sca-hardware-inventory-vue.vercel.app/",
    accent: "from-amber-400/15 to-orange-500/[.02]",
  },
  {
    title: "Lawfirm App",
    tech: ["Next.js"],
    desc: "A client portal designed for a modern legal practice.",
    link: "https://lawfirm-app-next.vercel.app",
    accent: "from-blue-400/15 to-cyan-500/[.02]",
  },
  {
    title: "Project Management System",
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    desc: "A full-stack workspace for coordinating projects and teams.",
    accent: "from-violet-400/15 to-cyan-500/[.02]",
  },
];

const games = [
  {
    name: "Quiz Game",
    note: "Test your knowledge",
    link: "https://quiz-game-project-six.vercel.app",
  },
  {
    name: "Rock, Paper, Scissors",
    note: "Play the classic hand game",
    link: "https://rps-app-nine.vercel.app",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("button, a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && dialog) {
        const focusable = [
          ...dialog.querySelectorAll<HTMLElement>("button, a"),
        ];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [open]);

  return (
    <section id="projects" className="border-b border-slate-800/50 bg-[#090c12]/60 py-24 md:py-32">
      <div className="page-shell">
        <div data-reveal>
          <span className="section-label">04 / Selected work</span>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              Things I&apos;ve designed, tested, and built.
            </h2>
            <p className="max-w-sm leading-7 text-slate-500">
              A growing collection of frontend and full-stack web applications.
            </p>
          </div>
        </div>
        <div data-reveal className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              data-reveal-item
              key={project.title}
              className="project-card panel group relative overflow-hidden rounded-xl"
            >
              <div className="flex items-center justify-between border-b border-slate-700/40 bg-[#10151f] px-4 py-3 font-mono text-[9px] text-slate-600">
                <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-slate-600" />project_{String(index + 1).padStart(2, "0")}.tsx</span>
                <span>{project.link ? "DEPLOYED" : "LOCAL"}</span>
              </div>
              <div
                className={`project-preview relative flex h-32 items-end overflow-hidden bg-linear-to-br ${project.accent} p-5 sm:h-36`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.06)_1px,transparent_1px)] [background-size:20px_20px]"
                />
                <span className="relative font-mono text-4xl font-semibold tracking-[-.06em] text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative ml-auto flex items-center gap-2 rounded border border-slate-700/60 bg-[#07090e]/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                  <span className={project.link ? "status-dot" : "size-1.5 rounded-full bg-amber-300"} />{project.link ? "Live" : "In development"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} project`}
                      className="interactive-button grid size-10 shrink-0 place-items-center rounded-md border border-slate-700/60 font-mono text-slate-500 hover:border-cyan-400/40 hover:bg-cyan-400/[.06] hover:text-cyan-300"
                    >
                      <span className="button-arrow">↗</span>
                    </a>
                  )}
                </div>
                <p className="mt-4 min-h-12 text-sm leading-6 text-slate-500">
                  {project.desc}
                </p>
                <ul
                  aria-label="Technologies used"
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="tech-pill"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div
          data-reveal
          className="panel mt-5 flex flex-col items-start justify-between gap-7 rounded-xl p-7 md:flex-row md:items-center md:p-8"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-violet-300">Bonus directory</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Need a quick break? Run a mini game.
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Explore two small interactive games built with React and Next.js.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="interactive-button min-h-12 shrink-0 rounded-md border border-violet-400/30 bg-violet-400/[.07] px-6 font-mono text-xs font-semibold text-violet-200 hover:bg-violet-400/15"
          >
            npm run play →
          </button>
        </div>
      </div>
      {open &&
        createPortal(
          <div
            className="modal-backdrop fixed inset-0 z-[100] grid place-items-center bg-black/80 p-5 backdrop-blur-sm"
            onMouseDown={(event) =>
              event.target === event.currentTarget && setOpen(false)
            }
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="games-title"
              className="modal-dialog panel w-full max-w-md overflow-hidden rounded-xl shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-700/40 bg-[#10151f] px-6 py-4">
                <h2
                  id="games-title"
                  className="font-mono text-sm font-semibold text-white"
                >
                  Choose a game
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close games dialog"
                  className="grid size-9 place-items-center rounded-md border border-slate-700/60 text-lg text-slate-500 hover:text-white"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3 p-6">
                {games.map((game) => (
                  <a
                    key={game.name}
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-900/40 p-4 transition hover:border-violet-400/40 hover:bg-violet-400/[.07]"
                  >
                    <span>
                      <strong className="block font-medium text-white">
                        {game.name}
                      </strong>
                      <span className="mt-1 block text-sm text-slate-500">
                        {game.note}
                      </span>
                    </span>
                    <span className="font-mono text-violet-300" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
