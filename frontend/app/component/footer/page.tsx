export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0b] py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <p>© {new Date().getFullYear()} Jomar Cerrado. Built with Next.js.</p>
        <a href="https://github.com/DevJomar2793" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-white" aria-label="View Jomar Cerrado on GitHub">GitHub ↗</a>
      </div>
    </footer>
  );
}
