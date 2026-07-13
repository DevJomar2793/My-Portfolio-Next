"use client";

import { useState } from "react";

const emailAddress = "jomarcerrado2793@gmail.com";

export default function Contacts() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [attempted, setAttempted] = useState(false);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    if (!emailIsValid || !formData.message.trim()) return;
    const subject = encodeURIComponent(`Portfolio contact from ${formData.email}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute -bottom-48 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/[.04] blur-3xl" />
      <div data-reveal className="page-shell relative grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <div data-reveal-item>
          <span className="section-label">05 / Contact</span>
          <h2 className="max-w-md text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">Let&apos;s build something useful.</h2>
          <p className="mt-6 max-w-md leading-7 text-slate-500">I&apos;m currently open to new opportunities and collaborations. Send a note and your email app will prepare the message.</p>
          <a href={`mailto:${emailAddress}`} className="mt-8 inline-flex break-all font-mono text-xs text-cyan-300 transition hover:text-cyan-200"><span className="mr-2 text-slate-600">$ mail</span>{emailAddress}<span className="ml-2">↗</span></a>
          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-slate-600"><span className="status-dot" />Response status: online</div>
        </div>

        <form data-reveal-item onSubmit={handleSubmit} noValidate className="panel overflow-hidden rounded-xl">
          <div className="flex items-center border-b border-slate-700/40 bg-[#10151f] px-5 py-3">
            <div className="mr-4 flex gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-rose-400/70" /><span className="size-2 rounded-full bg-amber-300/70" /><span className="size-2 rounded-full bg-emerald-400/70" /></div>
            <span className="font-mono text-[10px] text-slate-500">new-message.sh</span>
          </div>
          <div className="p-6 md:p-8">
            <div className="mb-7 font-mono text-xs leading-6"><span className="text-emerald-300">jomar@portfolio</span><span className="text-slate-600">:</span><span className="text-cyan-300">~/inbox</span><span className="text-slate-400">$ compose --new</span></div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-slate-500">Sender email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required aria-invalid={attempted && !emailIsValid} aria-describedby={attempted && !emailIsValid ? "email-error" : undefined} value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" className="w-full rounded-md border border-slate-700/60 bg-[#080b11] p-4 font-mono text-sm text-white placeholder:text-slate-700 focus:border-cyan-400/60 focus:outline-none" />
              {attempted && !emailIsValid && <p id="email-error" role="alert" className="mt-2 font-mono text-xs text-rose-300">Error: enter a valid email address.</p>}
            </div>
            <div className="mt-6">
              <label htmlFor="contact-message" className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-slate-500">Message body</label>
              <textarea id="contact-message" name="message" rows={5} required aria-invalid={attempted && !formData.message.trim()} aria-describedby={attempted && !formData.message.trim() ? "message-error" : undefined} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me about your idea..." className="w-full resize-y rounded-md border border-slate-700/60 bg-[#080b11] p-4 font-mono text-sm text-white placeholder:text-slate-700 focus:border-cyan-400/60 focus:outline-none" />
              {attempted && !formData.message.trim() && <p id="message-error" role="alert" className="mt-2 font-mono text-xs text-rose-300">Error: write a short message.</p>}
            </div>
            <button type="submit" className="interactive-button mt-7 min-h-12 w-full rounded-md bg-cyan-300 px-6 font-mono text-xs font-semibold text-slate-950 hover:bg-cyan-200">Execute send <span className="button-arrow inline-block">→</span></button>
            <p className="mt-4 text-center font-mono text-[9px] text-slate-600">Opens your default email application · no data stored</p>
          </div>
        </form>
      </div>
    </section>
  );
}
