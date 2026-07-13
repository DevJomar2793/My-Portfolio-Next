"use client";

import { useEffect, useState } from "react";

const navItems = ["About", "Skills", "Tools", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-25% 0px -65%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-[#07090e]/85 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="page-shell flex h-16 items-center justify-between">
        <a href="#" className="group flex items-center gap-3" aria-label="Jomar Cerrado, back to top">
          <span className="grid size-8 place-items-center rounded-md border border-cyan-400/25 bg-cyan-400/[.06] font-mono text-xs font-bold text-cyan-300 transition group-hover:border-cyan-300/50">JC</span>
          <span className="hidden font-mono text-[11px] text-slate-500 sm:inline">~/portfolio</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => {
            const id = item.toLowerCase();
            return (
              <li key={item}>
                <a href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`rounded-md px-3 py-2 font-mono text-[11px] transition ${active === id ? "bg-slate-800/70 text-cyan-300" : "text-slate-500 hover:text-slate-200"}`}>
                  <span className="mr-1 text-slate-700">0{index + 1}.</span>{item.toLowerCase()}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-[10px] text-slate-500 lg:flex"><span className="status-dot" />available_for_work</span>
          <a href="https://github.com/DevJomar2793" target="_blank" rel="noopener noreferrer" className="interactive-button hidden rounded-md border border-slate-700/60 px-3 py-2 font-mono text-[10px] text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300 sm:block">GitHub ↗</a>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)} className="interactive-button grid size-10 place-items-center rounded-md border border-slate-700/60 font-mono text-slate-300 md:hidden">
            <span className="text-lg" aria-hidden="true">{isOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`absolute inset-x-0 top-full origin-top border-b border-slate-800 bg-[#0d1119] transition-all duration-300 md:hidden ${isOpen ? "visible translate-y-0 scale-y-100 opacity-100" : "invisible -translate-y-2 scale-y-95 opacity-0"}`}>
        <ul className="page-shell py-4">
          {navItems.map((item, index) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="flex min-h-12 items-center rounded-md px-4 font-mono text-sm text-slate-400 hover:bg-slate-800/50 hover:text-cyan-300"><span className="mr-3 text-slate-700">0{index + 1}</span>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
