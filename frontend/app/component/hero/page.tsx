import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-stage relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 overflow-hidden px-5 pb-20 pt-28 md:grid-cols-[1.2fr_.8fr] md:px-6">
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />
      <div className="hero-copy relative z-10">
        <div className="mb-7 flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-emerald-300"><span className="status-dot" />Available for opportunities</div>
        <p className="mb-4 text-sm font-semibold text-violet-400">Hello, I&apos;m Jomar Cerrado</p>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">QA tester and <span className="hero-accent">full stack developer.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">I combine quality assurance experience with modern web development to build reliable, thoughtful digital products.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="interactive-button inline-flex min-h-12 items-center justify-center rounded-lg bg-violet-500 px-6 text-sm font-semibold text-white hover:bg-violet-400">View projects <span className="button-arrow ml-2">→</span></a>
          <a href="#contact" className="interactive-button inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 text-sm font-semibold text-gray-200 hover:bg-white/5">Contact me</a>
        </div>
      </div>
      <div className="hero-portrait relative z-10 mx-auto aspect-square w-full max-w-sm rounded-3xl">
        <div className="portrait-float relative size-full overflow-hidden rounded-3xl border border-white/10 bg-[#121214] p-3 shadow-2xl">
          <div className="relative size-full overflow-hidden rounded-2xl"><Image src="https://github.com/DevJomar2793.png" alt="Portrait of Jomar Cerrado" fill sizes="(max-width: 768px) 90vw, 384px" className="object-cover transition-transform duration-700 hover:scale-[1.025]" priority /></div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About section" className="scroll-cue absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-gray-500 transition-colors hover:text-violet-300"><span aria-hidden="true">↓</span></a>
    </section>
  );
}
