import { ArrowUpRight, Braces, Layers3, MousePointer2, Workflow } from 'lucide-react'

const skills = [
  { category: 'Languages', items: ['JavaScript', 'HTML', 'CSS'], icon: Braces },
  { category: 'Frameworks', items: ['React', 'Tailwind CSS'], icon: Layers3 },
  { category: 'Workflow', items: ['Git', 'VS Code', 'Figma'], icon: Workflow },
]

const values = [
  ['01', 'Clarity first', 'Interfaces should explain themselves.'],
  ['02', 'Built to last', 'Clean code makes good products easier to grow.'],
  ['03', 'People over pixels', 'Every decision should help the person using it.'],
]

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#eef1ff] text-ink dark:bg-slate-950 dark:text-white">
      <div className="absolute -right-40 -top-40 size-[32rem] rounded-full bg-brand/10 blur-[120px] dark:bg-brand/20" />
      <div className="absolute -bottom-48 -left-36 size-[30rem] rounded-full bg-acid/20 blur-[120px] dark:bg-acid/10" />
      <div className="container-shell section-pad relative">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-brand dark:text-acid">More than code</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              I bridge logic and experience.
            </h2>
            <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              I build workplace tools and internal systems that simplify essential processes—from payroll and attendance to leave management and employee evaluations.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
              <div className="bg-white/80 p-5 dark:bg-slate-950/70">
                <p className="font-display text-3xl font-extrabold text-brand dark:text-acid">04</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">Featured systems</p>
              </div>
              <div className="bg-white/80 p-5 dark:bg-slate-950/70">
                <p className="font-display text-3xl font-extrabold text-brand dark:text-acid">02</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">Verified courses</p>
              </div>
              <div className="bg-white/80 p-5 dark:bg-slate-950/70">
                <p className="font-display text-3xl font-extrabold text-brand dark:text-acid">01</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">Clear goal</p>
              </div>
            </div>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold text-ink transition hover:text-brand dark:text-white dark:hover:text-acid">
              Let&apos;s build something useful <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="space-y-4">
            {values.map(([number, title, copy]) => (
              <article key={number} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white sm:p-6 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-brand/60 dark:hover:bg-white/[0.075]">
                <span className="font-mono text-xs font-bold text-brand">{number}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{copy}</p>
                </div>
                <MousePointer2 size={18} className="text-slate-300 transition group-hover:text-brand dark:text-slate-600 dark:group-hover:text-acid" />
              </article>
            ))}

            <div className="rounded-2xl bg-gradient-to-br from-brand to-[#7b45df] p-[1px]">
              <div className="rounded-[0.95rem] bg-white p-5 dark:bg-slate-950/90 sm:p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-brand dark:text-indigo-300">Toolkit</p>
                <div className="mt-5 space-y-5">
                  {skills.map(({ category, items, icon: Icon }) => (
                    <div key={category} className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:items-start">
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400"><Icon size={14} /> {category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map(skill => (
                          <span key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
