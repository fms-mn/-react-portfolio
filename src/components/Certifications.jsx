import { ArrowUpRight, Award, BadgeCheck, ExternalLink, FileText } from 'lucide-react'
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
    number: '01',
  },
  {
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'July 18, 2026',
    credentialId: 'AQPN4PX2E0TN',
    credentialUrl: 'https://coursera.org/verify/AQPN4PX2E0TN',
    pdfUrl: 'certificates/generative-ai-prompt-engineering.pdf',
    number: '02',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    platform: 'Cisco Networking Academy',
    date: 'August 25, 2026',
    credentialId: '564c1846-859a-4d24-b7fb-0426ca67cbf5',
    pdfUrl: 'certificates/introduction-to-cybersecurity.pdf',
    number: '03',
  },
  {
    title: 'Elements of AI',
    issuer: 'University of Helsinki & MinnaLearn',
    platform: 'MinnaLearn',
    date: 'October 10, 2026',
    credentialId: 'yg4ythx1oud',
    credentialUrl: 'https://certificates.mooc.fi/validate/yg4ythx1oud',
    pdfUrl: 'certificates/elements-of-ai.webp',
    number: '04',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden bg-[#e7ffad] text-slate-950 dark:bg-[#18210f] dark:text-white">
      <div className="absolute -right-20 top-1/2 size-80 -translate-y-1/2 rounded-full border-[40px] border-brand/10" />
      <div className="container-shell section-pad relative">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              eyebrow="Credentials"
              title={<>Always learning.<br /><span className="text-brand dark:text-acid">Always building.</span></>}
              description="Verified coursework that strengthens how I approach AI-assisted development and modern software workflows."
            />
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-xl dark:bg-acid dark:text-slate-950">
              <BadgeCheck size={20} />
              <div>
                <p className="text-xs font-bold">Verified credentials</p>
                <p className="text-[0.65rem] opacity-60">Coursera · Cisco · Helsinki · 2026</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {certifications.map(({ title, issuer, platform, date, credentialId, credentialUrl, pdfUrl, number }) => (
              <article key={credentialId} className="group relative overflow-hidden rounded-[1.5rem] border border-slate-950/10 bg-white/85 p-6 shadow-[0_18px_60px_rgba(45,55,20,0.10)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(45,55,20,0.16)] dark:border-white/10 dark:bg-white/[0.06] sm:p-8">
                <span className="absolute -right-3 -top-9 font-display text-[7rem] font-extrabold leading-none text-slate-950/[0.045] dark:text-white/[0.04]">{number}</span>
                <div className="relative flex items-start gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_25px_rgba(77,92,255,0.3)]">
                    <Award size={23} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand dark:text-indigo-300">{platform} · Certificate {number}</p>
                    <h3 className="mt-3 max-w-xl font-display text-xl font-extrabold leading-snug tracking-[-0.025em] sm:text-2xl">{title}</h3>
                  </div>
                </div>

                <div className="relative mt-7 grid gap-5 border-t border-slate-950/10 pt-5 sm:grid-cols-3 dark:border-white/10">
                  <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">Issuer</p><p className="mt-1 text-sm font-bold">{issuer}</p></div>
                  <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">Completed</p><p className="mt-1 text-sm font-bold">{date}</p></div>
                  <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">Credential ID</p><p className="mt-1 truncate font-mono text-xs font-bold">{credentialId}</p></div>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-3">
                  <a href={`${import.meta.env.BASE_URL}${pdfUrl}`} target="_blank" rel="noreferrer" className="btn-primary">
                    Certificate <FileText size={15} />
                  </a>
                  {credentialUrl && (
                    <a href={credentialUrl} target="_blank" rel="noreferrer" className="btn-secondary !border-slate-950/15 !bg-transparent !text-slate-800 hover:!border-brand hover:!text-brand dark:!border-white/15 dark:!text-white">
                      Verify online <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}

            <a href="#contact" className="group flex items-center justify-between rounded-2xl border border-slate-950/10 bg-slate-950 p-5 text-white transition hover:bg-brand dark:border-white/10 dark:bg-white dark:text-slate-950 dark:hover:bg-acid sm:p-6">
              <div><p className="font-display text-lg font-bold">Want to build something together?</p><p className="mt-1 text-sm opacity-60">I&apos;m ready for the next challenge.</p></div>
              <ArrowUpRight className="transition group-hover:rotate-45" size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
