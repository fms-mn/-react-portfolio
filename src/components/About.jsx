import { Code2, Lightbulb, ShieldCheck } from 'lucide-react'
import SectionTitle from './SectionTitle'

const values = [
  { icon: Code2, title: 'Practical by design', text: 'I build solutions around real needs, with simple flows and maintainable foundations.' },
  { icon: Lightbulb, title: 'Curious by nature', text: 'I enjoy learning new tools, asking better questions, and finding clarity in complex problems.' },
  { icon: ShieldCheck, title: 'Reliable in execution', text: 'I care about thoughtful details, accessible experiences, and software people can trust.' },
]

export default function About() {
  return <section className="section-pad border-y bg-blue-50/50 dark:bg-slate-900/35"><div className="container-shell"><SectionTitle eyebrow="About me" title="Thoughtful software, built for people" description="My work sits at the intersection of logical problem-solving and considerate user experience. I’m developing my skills across the full stack while keeping usability, quality, and purpose at the center." /><div className="mt-12 grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <article className="card p-6 hover:-translate-y-1 hover:shadow-xl" key={title}><div className="grid size-11 place-items-center rounded-xl bg-blue-50 text-electric dark:bg-cyan-950 dark:text-cyan-300"><Icon size={21} /></div><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p></article>)}</div></div></section>
}
