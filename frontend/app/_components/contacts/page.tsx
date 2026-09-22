"use client";

import { useState } from "react";
import { GithubIcon } from "../icons";
import { emailAddress, githubProfileUrl } from "../site";

interface ContactFormData {
  email: string;
  message: string;
}

export default function Contacts() {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    message: "",
  });
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
              <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer"><GithubIcon /><span><strong>GitHub</strong><small>View my profile</small></span><i>↗</i></a>
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
