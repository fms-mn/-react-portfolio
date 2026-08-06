import { Award, BadgeCheck, ExternalLink, FileText } from 'lucide-react'
import SectionTitle from './SectionTitle'

const certifications = [
  {
    title: 'Mastering Claude Code: From Setup to Real Projects',
    issuer: 'SkillsBooster Academy',
    platform: 'Coursera',
    date: 'July 15, 2026',
    credentialId: '9BPF9CH411O9',
    credentialUrl: 'https://coursera.org/verify/9BPF9CH411O9',
    pdfUrl: 'certificates/mastering-claude-code.pdf',
  },
  {
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'July 18, 2026',
    credentialId: 'AQPN4PX2E0TN',
    credentialUrl: 'https://coursera.org/verify/AQPN4PX2E0TN',
    pdfUrl: 'certificates/generative-ai-prompt-engineering.pdf',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad border-b-2 border-ink bg-[#dfe9e5] dark:border-white/60 dark:bg-[#132025]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <SectionTitle eyebrow="03 / Credentials" title="Certifications & learning" description="Verified coursework in AI-assisted development, prompt engineering, and practical software workflows." />
          <div className="flex items-center gap-4 border-l-2 border-electric pl-5 lg:justify-self-end"><Award className="text-electric dark:text-cyanbright" size={30} /><div><p className="font-display text-lg font-bold uppercase">Verified record</p><p className="mt-1 text-xs text-ink/55 dark:text-white/55">Coursera credentials · 2026</p></div></div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {certifications.map(({ title, issuer, platform, date, credentialId, credentialUrl, pdfUrl }, index) => (
            <article key={credentialId} className="group relative flex min-h-80 flex-col overflow-hidden border-2 border-ink/70 bg-[#f6f3eb] p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_#172126] dark:border-white/45 dark:bg-panel dark:hover:border-cyanbright dark:hover:shadow-[6px_6px_0_#8edfd0] sm:p-7">
              <div className="absolute right-0 top-0 grid size-20 place-items-center bg-cyanbright text-ink [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%,0_28%)]"><Award size={27} /></div>
              <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-electric dark:text-cyanbright"><BadgeCheck size={14} /> Verified certificate</div>
              <p className="mt-8 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-ink/45 dark:text-white/45">0{index + 1} / {platform}</p>
              <h3 className="mt-3 max-w-[85%] font-display text-2xl font-extrabold uppercase leading-[1.05] sm:text-3xl">{title}</h3>
              <div className="mt-auto pt-8">
                <div className="grid gap-3 border-y border-ink/20 py-4 text-xs dark:border-white/20 sm:grid-cols-2"><p><span className="font-mono text-[8px] font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">Issuer</span><br/><span className="mt-1 inline-block font-semibold">{issuer}</span></p><p><span className="font-mono text-[8px] font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">Completed</span><br/><span className="mt-1 inline-block font-semibold">{date}</span></p></div>
                <p className="mt-4 font-mono text-[8px] font-bold uppercase tracking-[.12em] text-ink/45 dark:text-white/45">Credential ID · {credentialId}</p>
                <div className="mt-5 flex flex-wrap gap-3"><a href={`${import.meta.env.BASE_URL}${pdfUrl}`} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2.5">View certificate <FileText size={14} /></a><a href={credentialUrl} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2.5">Verify online <ExternalLink size={14} /></a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
