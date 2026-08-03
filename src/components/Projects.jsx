import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import EmptyProjectsState from './EmptyProjectsState'

export default function Projects() {
  return <section id="projects" className="section-pad"><div className="container-shell"><SectionTitle eyebrow="My work" title="Projects" description="Selected projects and case studies will be added here." />{projects.length ? <div className="mt-12 grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div> : <EmptyProjectsState />}</div></section>
}
