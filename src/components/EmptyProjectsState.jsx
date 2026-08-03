import { FolderCode } from 'lucide-react'

export default function EmptyProjectsState() {
  return <div className="card mt-12 grid min-h-72 place-items-center border-dashed p-8 text-center"><div><div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 text-electric dark:from-blue-950 dark:to-cyan-950 dark:text-cyan-300"><FolderCode size={30} /></div><h3 className="mt-5 text-xl font-bold">Projects coming soon</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">I’m preparing work that reflects my process and capabilities. Check back soon for project stories and outcomes.</p></div></div>
}
