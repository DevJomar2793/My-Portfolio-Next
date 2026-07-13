import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-slate-800/50 pb-16 pt-28">
      <div aria-hidden="true" className="absolute right-[-10rem] top-20 size-[30rem] rounded-full bg-cyan-400/[.035] blur-3xl" />
      <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div className="hero-copy">
          <div className="mb-7 flex w-fit items-center gap-2 rounded border border-emerald-400/20 bg-emerald-400/[.04] px-3 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300"><span className="status-dot" />Open to opportunities</div>
          <p className="font-mono text-sm text-slate-500"><span className="text-violet-400">const</span> developer = <span className="text-cyan-300">&quot;Jomar Cerrado&quot;</span>;</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-white sm:text-6xl xl:text-[4.75rem]">I test the details.<br /><span className="text-slate-500">I build the whole thing.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">QA tester and full stack developer building reliable, thoughtful web applications from interface to API.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="interactive-button inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 font-mono text-xs font-semibold text-slate-950 hover:bg-cyan-200">Explore my work <span className="button-arrow ml-2">→</span></a>
            <a href="#contact" className="interactive-button inline-flex min-h-12 items-center justify-center rounded-md border border-slate-700/70 bg-slate-900/30 px-6 font-mono text-xs font-semibold text-slate-300 hover:border-slate-500 hover:bg-slate-800/50">Start a conversation</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-800/60 pt-5 font-mono text-[10px] uppercase tracking-wider text-slate-600">
            <span><span className="mr-2 text-cyan-400">●</span>Next.js</span><span><span className="mr-2 text-violet-400">●</span>FastAPI</span><span><span className="mr-2 text-emerald-400">●</span>Quality assurance</span>
          </div>
        </div>

        <div className="hero-panel panel overflow-hidden rounded-xl">
          <div className="flex h-11 items-center border-b border-slate-700/40 bg-[#10151f] px-4">
            <div className="mr-4 flex gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-rose-400/70" /><span className="size-2.5 rounded-full bg-amber-300/70" /><span className="size-2.5 rounded-full bg-emerald-400/70" /></div>
            <div className="flex h-full items-center border-x border-slate-700/40 bg-[#0d1119] px-4 font-mono text-[10px] text-slate-400"><span className="mr-2 text-cyan-400">TS</span>profile.ts</div>
            <span className="ml-auto font-mono text-[9px] text-slate-600">UTF-8</span>
          </div>
          <div className="grid gap-6 p-5 sm:grid-cols-[9rem_1fr] sm:p-6">
            <div className="relative mx-auto aspect-square w-36 overflow-hidden rounded-lg border border-slate-700/60 bg-slate-900 sm:mx-0">
              <Image src="https://github.com/DevJomar2793.png" alt="Portrait of Jomar Cerrado" fill sizes="144px" className="object-cover grayscale-[20%] transition duration-500 hover:grayscale-0" priority />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-[#0d1119] to-transparent" />
            </div>
            <div className="min-w-0 font-mono text-[11px] leading-6 sm:text-xs">
              <p><span className="mr-3 select-none text-slate-700">01</span><span className="text-violet-400">export const</span> <span className="text-cyan-200">profile</span> = {`{`}</p>
              <p><span className="mr-3 select-none text-slate-700">02</span>&nbsp;&nbsp;role: <span className="text-emerald-300">&quot;QA + Developer&quot;</span>,</p>
              <p><span className="mr-3 select-none text-slate-700">03</span>&nbsp;&nbsp;location: <span className="text-emerald-300">&quot;Philippines&quot;</span>,</p>
              <p><span className="mr-3 select-none text-slate-700">04</span>&nbsp;&nbsp;focus: [</p>
              <p><span className="mr-3 select-none text-slate-700">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;quality&quot;</span>, <span className="text-emerald-300">&quot;usability&quot;</span>,</p>
              <p><span className="mr-3 select-none text-slate-700">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;clean code&quot;</span></p>
              <p><span className="mr-3 select-none text-slate-700">07</span>&nbsp;&nbsp;],</p>
              <p><span className="mr-3 select-none text-slate-700">08</span>&nbsp;&nbsp;available: <span className="text-amber-300">true</span></p>
              <p><span className="mr-3 select-none text-slate-700">09</span>{`}`};<span className="code-caret ml-1 inline-block h-4 w-px translate-y-1 bg-cyan-300" /></p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-slate-700/40 bg-cyan-400/[.025] px-5 py-3 font-mono text-[9px] uppercase tracking-wider text-slate-600">
            <span>main*</span><span className="text-emerald-400">● systems operational</span><span>Ln 9, Col 3</span>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About section" className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-slate-600 hover:text-cyan-300">↓</a>
    </section>
  );
}
