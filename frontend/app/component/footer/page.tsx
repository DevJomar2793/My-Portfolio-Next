export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#07090e] py-6">
      <div className="page-shell flex flex-col gap-4 font-mono text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p><span className="text-slate-500">© {new Date().getFullYear()} Jomar Cerrado</span> &nbsp;·&nbsp; Built with Next.js</p>
        <div className="flex items-center gap-5"><span className="flex items-center gap-2"><span className="status-dot" />All systems operational</span><a href="https://github.com/DevJomar2793" target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-cyan-300" aria-label="View Jomar Cerrado on GitHub">GitHub ↗</a></div>
      </div>
    </footer>
  );
}
