"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EmailIcon, GithubIcon } from "../icons";
import { emailAddress, githubProfileUrl, navItems } from "../site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-28% 0px -62%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-violet-400/10 bg-[#03030f]/70 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="page-shell grid h-20 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]"
      >
        <a
          href="#home"
          className="group flex w-fit items-center gap-3"
          aria-label="Jomar Cerrado, back to top"
        >
          <Image
            src="/dev-jomar-logo.png"
            alt=""
            width={1596}
            height={985}
            className="brand-logo"
          />
        </a>

        <ul className="nav-pill hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-current={active === id ? "location" : undefined}
                  className={active === id ? "is-active" : ""}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end gap-2.5">
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hidden sm:grid"
            aria-label="View Jomar on GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="social-link hidden sm:grid"
            aria-label="Email Jomar"
          >
            <EmailIcon />
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="social-link lg:hidden"
          >
            <span className="text-xl leading-none" aria-hidden="true">
              {isOpen ? "×" : "≡"}
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full border-b border-violet-400/15 bg-[#070716]/95 px-5 py-4 backdrop-blur-xl transition-all duration-300 lg:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
      >
        <ul className="mx-auto grid max-w-7xl gap-1">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-4 text-sm text-slate-300 hover:bg-violet-400/10 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
