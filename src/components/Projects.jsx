import { Github } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-y-2 border-ink dark:border-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <SectionTitle eyebrow="02 / Selected work" title="The project index" description="Workplace systems designed to simplify essential processes, improve record management, and support better day-to-day operations." />
          <div className="lg:text-right"><a href="https://github.com/fms-mn" target="_blank" rel="noreferrer" className="btn-secondary">Open GitHub <Github size={16} /></a></div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
        <p className="mt-6 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-ink/45 dark:text-white/45">Project screenshots have been privacy-redacted to protect company and personal information.</p>
      </div>
    </section>
  )
}
