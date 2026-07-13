"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

const ExternalLinkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    {
      title: "887 Cafe Project",
      tech: ["Next.js", "FastAPI", "PostgreSQL"],
      desc: "887 Cafe Landing Page",
      link: "https://887-cafe-next.vercel.app/",
      color: "from-amber-500/20 to-orange-500/20",
    },
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

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-6 relative z-10"
    >
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
          Featured Projects
        </h3>
        <p className="text-gray-400 max-w-2xl text-lg font-light">
          A selection of my recent work showcasing frontend and fullstack
          capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="glass-card rounded-4xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)] hover:border-violet-500/30"
          >
            {/* Live Capture Overlay with Gradient */}
            <div
              className={`h-40 md:h-48 w-full bg-linear-to-br ${proj.color} relative overflow-hidden flex items-center justify-center`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              {proj.link ? (
                <>
                  <iframe
                    src={proj.link}
                    title={`${proj.title} interactive preview`}
                    className="absolute inset-0 h-full w-full border-0 bg-white opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    loading="lazy"
                    allowFullScreen
                  />
                  <span className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-md">
                    Interactive preview
                  </span>
                </>
              ) : (
                <span className="text-white/30 font-bold tracking-widest text-2xl uppercase mix-blend-overlay group-hover:scale-110 transition-transform duration-700 relative z-0">
                  Project Demo
                </span>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                  {proj.title}
                </h4>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors bg-white/5 p-3 rounded-full cursor-pointer z-20 hover:scale-110 hover:bg-violet-600 shadow-sm"
                    aria-label={`Open ${proj.title} in a new tab`}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
              <p className="text-gray-300 font-light mb-6">{proj.desc}</p>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/5 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Games CTA */}
      <div className="glass-card rounded-4xl p-8 md:p-12 relative overflow-hidden group border border-violet-500/20 bg-linear-to-br from-violet-500/10 to-fuchsia-500/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 mt-12 hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)] transition-all duration-500">
        <div className="absolute inset-0 bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors duration-500"></div>
        <div className="relative z-10 max-w-2xl">
          <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
            Want to take a break?
          </h4>
          <p className="text-gray-300 font-light text-lg">
            Check out my interactive games! Test your skills and have some fun.
          </p>
          <p className="text-gray-300 font-light text-lg">
            These projects are built using{" "}
            <span className="text-violet-400 font-medium">Next.js</span>,{" "}
            <span className="text-violet-400 font-medium">React</span>, and{" "}
            <span className="text-violet-400 font-medium">Tailwind CSS</span>.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative z-10 shrink-0 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-90 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center gap-3 cursor-pointer"
          aria-label="Play Games"
        >
          Play Games
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Games Modal */}
      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            style={{
              animation: isClosing
                ? "fadeOut 0.3s ease-in forwards"
                : "fadeIn 0.3s ease-out",
            }}
          >
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
              }
              @keyframes scaleIn {
                from { transform: scale(0.95) translateY(10px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
              }
              @keyframes scaleOut {
                from { transform: scale(1) translateY(0); opacity: 1; }
                to { transform: scale(0.95) translateY(10px); opacity: 0; }
              }
            `}</style>
            <div
              className="relative w-full max-w-md p-8 bg-gray-900/90 backdrop-blur-md border border-violet-500/30 rounded-3xl shadow-[0_0_40px_rgba(124,58,237,0.2)]"
              style={{
                animation: isClosing
                  ? "scaleOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                  : "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Select a Game
              </h3>

              <div className="flex flex-col gap-4">
                <a
                  href="https://quiz-game-project-six.vercel.app"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-violet-600/20 hover:border-violet-500/50 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                      Quiz Game
                    </h4>
                    <p className="text-sm text-gray-400">Test your knowledge</p>
                  </div>
                  <ExternalLinkIcon />
                </a>

                <a
                  href="https://rps-app-nine.vercel.app"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-violet-600/20 hover:border-violet-500/50 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                      Rock, Paper, Scissors
                    </h4>
                    <p className="text-sm text-gray-400">Classic hand game</p>
                  </div>
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>

            {/* Click outside to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={handleCloseModal}
            ></div>
          </div>,
          document.body,
        )}
    </section>
  );
}
