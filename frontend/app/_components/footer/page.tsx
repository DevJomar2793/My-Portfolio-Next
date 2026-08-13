export default function Footer() {
  return (
    <footer className="cosmic-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="page-shell relative flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-white"><span className="brand-mark"><span>J</span></span>Jomar Cerrado</a>
        <p>© {new Date().getFullYear()} · Built with Next.js and a quality-first mindset.</p>
        <div className="flex items-center gap-4"><span className="footer-status"><i className="status-dot" />Available for work</span><a href="https://github.com/DevJomar2793" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={`mailto:${"jomarcerrado2793@gmail.com"}`}>Email ↗</a></div>
      </div>
    </footer>
  );
}
