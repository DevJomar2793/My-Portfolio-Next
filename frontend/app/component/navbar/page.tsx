"use client";

import { useEffect, useState } from "react";

const navItems = ["About", "Skills", "Tools", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean) as HTMLElement[];
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
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/90 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-6">
        <a href="#" className="text-lg font-bold tracking-tight text-white transition-transform duration-300 hover:scale-[1.03]">Jomar<span className="text-violet-400">.</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => { const id = item.toLowerCase(); return (
            <li key={item}><a href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`rounded-lg px-4 py-2 text-sm transition ${active === id ? "bg-white/[.07] text-white" : "text-gray-400 hover:text-white"}`}>{item}</a></li>
          ); })}
        </ul>
        <button type="button" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)} className="interactive-button grid size-10 place-items-center rounded-lg border border-white/10 text-gray-300 md:hidden"><span className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} aria-hidden="true">{isOpen ? "×" : "☰"}</span></button>
      </nav>
      <div id="mobile-menu" className={`absolute inset-x-0 top-full origin-top border-b border-white/10 bg-[#121214] transition-all duration-300 md:hidden ${isOpen ? "visible translate-y-0 scale-y-100 opacity-100" : "invisible -translate-y-2 scale-y-95 opacity-0"}`}>
        <ul className="p-4">{navItems.map((item) => <li key={item}><a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="flex min-h-12 items-center rounded-lg px-4 text-gray-300 hover:bg-white/5 hover:text-white">{item}</a></li>)}</ul>
      </div>
    </header>
  );
}
