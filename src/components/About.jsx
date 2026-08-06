import { ArrowUpRight, Boxes, FlaskConical, Focus } from 'lucide-react'

const principles = [
  { number: '01', icon: Focus, title: 'Find the signal', text: 'Identify the real need and remove distractions before adding features.', tag: 'Clarity' },
  { number: '02', icon: Boxes, title: 'Build the system', text: 'Turn repeated decisions into patterns that are easier to grow and maintain.', tag: 'Structure' },
  { number: '03', icon: FlaskConical, title: 'Test and refine', text: 'Use feedback and iteration to shape a dependable final experience.', tag: 'Progress' },
]

export default function About() {
  return (
    <section className="border-b-2 border-ink bg-[#e8e3d8] py-20 text-ink dark:border-white/60 dark:bg-[#111a1d] dark:text-white sm:py-24">
      <div className="container-shell">
        <p className="eyebrow">01 / Working method</p>
        <div className="mt-5 grid gap-5 border-b-2 border-ink/60 pb-8 dark:border-white/45 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <h2 className="max-w-2xl font-display text-[clamp(2.4rem,3.8vw,4rem)] font-extrabold uppercase leading-[.94] tracking-[-.045em]">How I turn problems<br/><span className="text-electric dark:text-cyanbright">into useful products.</span></h2>
          <p className="max-w-lg text-sm font-medium leading-7 text-ink/70 dark:text-white/70 lg:justify-self-end">A focused, repeatable process keeps the work grounded—from understanding the problem to refining the final experience.</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {principles.map(({ number, icon: Icon, title, text, tag }) => (
            <article key={number} className="group flex min-h-52 flex-col border-2 border-ink/70 bg-[#f6f3eb] p-5 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[5px_5px_0_#172126] dark:border-white/45 dark:bg-panel dark:hover:border-cyanbright dark:hover:shadow-[5px_5px_0_#8edfd0]">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold text-electric dark:text-cyanbright">/{number}</span><span className="grid size-9 place-items-center border border-ink/40 text-ink/70 dark:border-white/40 dark:text-white/70"><Icon size={16} /></span></div>
              <div className="mt-auto pt-8"><p className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-ink/50 dark:text-white/50">{tag}</p><h3 className="mt-2 font-display text-xl font-extrabold uppercase">{title}</h3><p className="mt-2 text-sm font-medium leading-6 text-ink/75 dark:text-white/75">{text}</p></div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col border-2 border-ink/70 bg-[#f6f3eb] dark:border-white/45 dark:bg-panel md:flex-row md:items-center">
          <div className="border-b border-ink/20 px-5 py-4 dark:border-white/20 md:border-b-0 md:border-r"><p className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-ink/45 dark:text-white/45">Current toolkit</p><p className="mt-1 font-display text-lg font-bold uppercase">Ready to build</p></div>
          <div className="flex flex-1 flex-wrap gap-2 px-5 py-4">{['React', 'JavaScript', 'Tailwind', 'Git'].map(skill => <span key={skill} className="border border-ink/30 px-3 py-1.5 font-mono text-[8px] font-bold uppercase tracking-wider dark:border-white/30">{skill}</span>)}</div>
          <a href="#contact" className="flex items-center justify-center gap-2 border-t border-ink/20 bg-electric px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-wider text-white transition hover:bg-ink dark:border-white/20 md:border-l md:border-t-0">Work with me <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  )
}
