import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#f8f9fc] dark:bg-midnight">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="container-shell section-pad relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Selected work · 04 projects"
            title={<>Systems made <span className="text-brand">simpler.</span></>}
            description="A collection of workplace products designed to replace friction with clear, dependable digital workflows."
          />
          <a href="https://github.com/fms-mn" target="_blank" rel="noreferrer" className="btn-secondary">
            <Github size={17} /> View GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-400">
          <span className="mt-1 size-2 shrink-0 rounded-full bg-acid ring-4 ring-acid/20" />
          Screenshots have been privacy-redacted to protect company and personal information. Select any project for a closer look.
        </div>
      </div>
    </section>
  )
}
