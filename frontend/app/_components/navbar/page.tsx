"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI Development", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SocialIcon({ type }: { type: "github" | "mail" }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 6.5h16v11H4z" /><path d="m4.7 7.2 7.3 5.6 7.3-5.6" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-28% 0px -62%" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-violet-400/10 bg-[#03030f]/70 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="page-shell grid h-20 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <a href="#home" className="group flex w-fit items-center gap-3" aria-label="Jomar Cerrado, back to top">
          <span className="brand-mark"><span>J</span></span>
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">Jomar Cerrado</span>
        </a>

        <ul className="nav-pill hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <li key={label}>
                <a href={href} aria-current={active === id ? "location" : undefined} className={active === id ? "is-active" : ""}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end gap-2.5">
          <a href="https://github.com/DevJomar2793" target="_blank" rel="noopener noreferrer" className="social-link hidden sm:grid" aria-label="View Jomar on GitHub"><SocialIcon type="github" /></a>
          <a href="mailto:jomarcerrado2793@gmail.com" className="social-link hidden sm:grid" aria-label="Email Jomar"><SocialIcon type="mail" /></a>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)} className="social-link lg:hidden">
            <span className="text-xl leading-none" aria-hidden="true">{isOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`absolute inset-x-0 top-full border-b border-violet-400/15 bg-[#070716]/95 px-5 py-4 backdrop-blur-xl transition-all duration-300 lg:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
        <ul className="mx-auto grid max-w-7xl gap-1">
          {navItems.map(({ label, href }) => (
            <li key={label}><a href={href} onClick={() => setIsOpen(false)} className="flex min-h-12 items-center rounded-xl px-4 text-sm text-slate-300 hover:bg-violet-400/10 hover:text-white">{label}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
}
