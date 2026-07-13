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
    <section id="contact" className="border-t border-white/5 bg-[#0b0e14]/80 py-20 md:py-28">
      <div data-reveal className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[.8fr_1.2fr] md:px-6">
        <div data-reveal-item>
          <span className="section-label">Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Let&apos;s build something useful.</h2>
          <p className="mt-5 max-w-md leading-7 text-gray-400">I&apos;m currently open to new opportunities and collaborations. Send a note and your email app will prepare the message.</p>
          <a href={`mailto:${emailAddress}`} className="mt-7 inline-flex break-all text-sm font-medium text-violet-400 transition hover:text-violet-300">{emailAddress} ↗</a>
        </div>
        <form data-reveal-item onSubmit={handleSubmit} noValidate className="rounded-2xl border border-white/10 bg-[#121214] p-6 md:p-8">
          <h3 className="mb-7 text-xl font-semibold text-white">Send a message</h3>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-300">Your email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required aria-invalid={attempted && !emailIsValid} aria-describedby={attempted && !emailIsValid ? "email-error" : undefined} value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" className="w-full rounded-lg border border-white/10 bg-black/25 p-4 text-white placeholder:text-gray-600 focus:border-violet-400 focus:outline-none" />
            {attempted && !emailIsValid && <p id="email-error" role="alert" className="mt-2 text-sm text-red-300">Enter a valid email address.</p>}
          </div>
          <div className="mt-6">
            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-300">Message</label>
            <textarea id="contact-message" name="message" rows={5} required aria-invalid={attempted && !formData.message.trim()} aria-describedby={attempted && !formData.message.trim() ? "message-error" : undefined} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me about your idea..." className="w-full resize-y rounded-lg border border-white/10 bg-black/25 p-4 text-white placeholder:text-gray-600 focus:border-violet-400 focus:outline-none" />
            {attempted && !formData.message.trim() && <p id="message-error" role="alert" className="mt-2 text-sm text-red-300">Write a short message.</p>}
          </div>
          <button type="submit" className="interactive-button mt-7 min-h-12 w-full rounded-lg bg-violet-500 px-6 text-sm font-semibold text-white hover:bg-violet-400">Send message <span className="button-arrow inline-block">→</span></button>
          <p className="mt-4 text-center text-xs text-gray-500">This opens your default email application. No data is stored here.</p>
        </form>
      </div>
    </section>
  );
}
