"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Project = { title: string; tech: string[]; desc: string; link?: string; accent: string };

const projects: Project[] = [
  { title: "SupahBowl", tech: ["Next.js"], desc: "A modern food website with a bold, customer-friendly experience.", link: "https://supah-bowl-project.vercel.app/", accent: "from-violet-400/20 to-violet-500/5" },
  { title: "Adamos Fresh Eggs", tech: ["Next.js"], desc: "A focused landing page for a local fresh-egg business.", link: "https://afe-web-app.vercel.app/", accent: "from-violet-300/20 to-violet-500/5" },
  { title: "887 Cafe", tech: ["Next.js", "FastAPI", "PostgreSQL"], desc: "A modern landing page designed for a local cafe.", link: "https://887-cafe-next.vercel.app/", accent: "from-amber-400/20 to-orange-500/5" },
  { title: "Photobooth System", tech: ["Vue.js", "FastAPI"], desc: "An interactive web-based photo booth experience.", link: "https://photobooth-app-omega.vercel.app/", accent: "from-violet-400/20 to-violet-500/5" },
  { title: "SCA Sitemap", tech: ["Vue.js", "FastAPI"], desc: "A dynamic sitemap generator for streamlined site management.", link: "https://sca-sitemap-vue.vercel.app/", accent: "from-violet-400/25 to-fuchsia-500/5" },
  { title: "SCA Hardware Inventory", tech: ["Vue.js", "FastAPI"], desc: "An inventory system for tracking and managing hardware assets.", link: "https://sca-hardware-inventory-vue.vercel.app/", accent: "from-violet-300/20 to-violet-500/5" },
  { title: "Lawfirm App", tech: ["Next.js"], desc: "A client portal designed for a modern legal practice.", link: "https://lawfirm-app-olive.vercel.app", accent: "from-violet-400/15 to-violet-500/5" },
  { title: "Project Management System", tech: ["Next.js", "FastAPI", "PostgreSQL"], desc: "A full-stack workspace for coordinating projects and teams.", accent: "from-purple-400/25 to-violet-500/5" },
];

const games = [
  { name: "Quiz Game", note: "Test your knowledge", link: "https://quiz-game-project-six.vercel.app" },
  { name: "Rock, Paper, Scissors", note: "Play the classic hand game", link: "https://rps-app-nine.vercel.app" },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("button, a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && dialog) {
        const focusable = [...dialog.querySelectorAll<HTMLElement>("button, a")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [open]);
=======
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 280);
  };

  const projects = [
    {
      title: "SupahBowl Project",
      tech: ["Next.js"],
      desc: "Food Website",
      link: "https://supah-bowl-project.vercel.app/",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Adamos Fresh Eggs Project",
      tech: ["Next.js"],
      desc: "Adamos Fresh Eggs Landing Page",
      link: "https://afe-web-app.vercel.app/",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    // {
    //   title: "887 Cafe Project",
    //   tech: ["Next.js", "FastAPI", "PostgreSQL"],
    //   desc: "887 Cafe Landing Page",
    //   link: "https://887-cafe-next.vercel.app/",
    //   color: "from-amber-500/20 to-orange-500/20",
    // },
    {
      title: "Photobooth System",
      tech: ["Vue.js", "FastAPI"],
      desc: "Interactive Photo Booth",
      link: "https://photobooth-app-omega.vercel.app/",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "SCA Sitemap",
      tech: ["Vue.js", "FastAPI"],
      desc: "Dynamic Sitemap Generator",
      link: "https://sca-sitemap-vue.vercel.app/",
      color: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      title: "SCA Hardware Inventory",
      tech: ["Vue.js", "FastAPI"],
      desc: "Comprehensive Inventory Management",
      link: "https://sca-hardware-inventory-vue.vercel.app/",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Lawfirm App",
      tech: ["Next.js"],
      desc: "Lawfirm Client Portal",
      link: "https://lawfirm-app-olive.vercel.app",
      color: "from-gray-500/20 to-teal-500/20",
    },
    {
      title: "Project Management System",
      tech: ["Next.js", "FastAPI", "PostgreSQL"],
      desc: "Project Is Under Development",
      // link: "https://project-management-system-next-six.vercel.app/",
      color: "from-purple-500/20 to-violet-500/20",
    },
  ];
>>>>>>> dev

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div data-reveal>
        <span className="section-label">Selected work</span>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">Things I&apos;ve designed, tested, and built.</h2>
          <p className="max-w-sm text-gray-400">A growing collection of frontend and full-stack web applications.</p>
        </div>
        </div>
        <div data-reveal className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article data-reveal-item key={project.title} className="project-card group overflow-hidden rounded-2xl border border-white/10 bg-[#121214] transition-[transform,border-color,box-shadow] duration-300 hover:border-violet-400/30">
              <div className={`project-preview relative flex items-end overflow-hidden bg-linear-to-br ${project.accent} p-6 ${index < 4 ? "h-44" : "h-28"}`}>
                <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:24px_24px]" />
                <span className="relative text-5xl font-bold tracking-[-.06em] text-white/15">{String(index + 1).padStart(2, "0")}</span>
                <div className="relative ml-auto rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-300">{project.link ? "Live" : "In development"}</div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} project`} className="interactive-button grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 text-gray-400 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"><span className="button-arrow">↗</span></a>}
                </div>
                <p className="mt-4 min-h-12 leading-6 text-gray-400">{project.desc}</p>
                <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">{project.tech.map((item) => <li key={item} className="rounded-full bg-white/[.06] px-3 py-1.5 text-xs text-gray-300">{item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <div data-reveal className="mt-5 flex flex-col items-start justify-between gap-7 rounded-2xl border border-white/10 bg-[#121214] p-7 md:flex-row md:items-center md:p-9">
          <div><h3 className="text-2xl font-semibold text-white">Need a quick break?</h3><p className="mt-2 text-gray-400">Explore two small interactive games built with React and Next.js.</p></div>
          <button type="button" onClick={() => setOpen(true)} className="interactive-button min-h-12 shrink-0 rounded-lg bg-violet-500 px-6 text-sm font-semibold text-white hover:bg-violet-400">View games</button>
        </div>
      </div>
      {open && createPortal(
        <div className="modal-backdrop fixed inset-0 z-[100] grid place-items-center bg-black/75 p-5 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="games-title" className="modal-dialog w-full max-w-md rounded-2xl border border-white/10 bg-[#18181b] p-6 shadow-2xl md:p-8">
            <div className="mb-7 flex items-center justify-between"><h2 id="games-title" className="text-2xl font-semibold text-white">Choose a game</h2><button type="button" onClick={() => setOpen(false)} aria-label="Close games dialog" className="grid size-10 place-items-center rounded-lg border border-white/10 text-xl text-gray-400 hover:text-white">×</button></div>
            <div className="space-y-3">{games.map((game) => <a key={game.name} href={game.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[.025] p-4 transition hover:border-violet-400/40 hover:bg-violet-500/10"><span><strong className="block font-medium text-white">{game.name}</strong><span className="mt-1 block text-sm text-gray-500">{game.note}</span></span><span aria-hidden="true">↗</span></a>)}</div>
          </div>
        </div>, document.body)}
    </section>
  );
}
