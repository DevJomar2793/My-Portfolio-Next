"use client";

import { useState } from "react";

const emailAddress = "jomarcerrado2793@gmail.com";

function GithubIcon() {
  return <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>;
}

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
    <section id="contact" className="cosmic-section contact-section py-24 md:py-32">
      <div className="section-stars" aria-hidden="true" />
      <div data-reveal className="page-shell relative z-10">
        <article className="contact-shell cosmic-card">
          <div className="contact-orb" aria-hidden="true" />
          <div data-reveal-item className="contact-copy">
            <span className="section-kicker"><i />05 · Contact</span>
            <h2>Let&apos;s build something<br /><span>useful together.</span></h2>
            <p>I&apos;m currently open to new opportunities and collaborations. Tell me what you&apos;re working on and your email app will prepare the message.</p>
            <a href={`mailto:${emailAddress}`} className="contact-email"><span>@</span>{emailAddress}<i>↗</i></a>
            <div className="contact-socials">
              <a href="https://github.com/DevJomar2793" target="_blank" rel="noopener noreferrer"><GithubIcon /><span><strong>GitHub</strong><small>View my profile</small></span><i>↗</i></a>
              <a href="#projects"><span className="contact-at">◇</span><span><strong>Projects</strong><small>Explore my work</small></span><i>↑</i></a>
            </div>
          </div>

          <form data-reveal-item onSubmit={handleSubmit} noValidate className="contact-form">
            <div className="form-heading"><div><span className="status-dot" /><strong>Start a conversation</strong></div><small>Usually replies by email</small></div>
            <label htmlFor="contact-email">Your email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required aria-invalid={attempted && !emailIsValid} aria-describedby={attempted && !emailIsValid ? "email-error" : undefined} value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" />
            {attempted && !emailIsValid && <p id="email-error" role="alert" className="form-error">Enter a valid email address.</p>}
            <label htmlFor="contact-message">How can I help?</label>
            <textarea id="contact-message" name="message" rows={5} required aria-invalid={attempted && !formData.message.trim()} aria-describedby={attempted && !formData.message.trim() ? "message-error" : undefined} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me about your idea..." />
            {attempted && !formData.message.trim() && <p id="message-error" role="alert" className="form-error">Write a short message.</p>}
            <button type="submit" className="neon-button neon-button-primary">Prepare message <span className="button-arrow">→</span></button>
            <small className="form-note">Opens your default email app · no data stored</small>
          </form>
        </article>
      </div>
    </section>
  );
}
