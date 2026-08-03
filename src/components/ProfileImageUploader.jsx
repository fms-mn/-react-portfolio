import { useRef, useState } from 'react'
import { Camera, RefreshCw, Trash2 } from 'lucide-react'
import { useProfileImage } from '../hooks/useProfileImage'

const MAX_SIZE = 5 * 1024 * 1024
const VALID_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export default function ProfileImageUploader() {
  const { image: uploadedImage, setImage: setUploadedImage, ready } = useProfileImage()
  const [publicImageExists, setPublicImageExists] = useState(true)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  const handleFile = (event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (!VALID_TYPES.includes(file.type)) return setError('Please choose a JPG, PNG, or WebP image.')
    if (file.size > MAX_SIZE) return setError('That image is larger than 5 MB. Please choose a smaller file.')
    const reader = new FileReader()
    reader.onload = async () => {
      try { await setUploadedImage(reader.result); setError('') }
      catch { setError('The photo could not be saved in this browser. Please try a smaller image.') }
    }
    reader.onerror = () => setError('The image could not be read. Please try another file.')
    reader.readAsDataURL(file)
  }

  const source = uploadedImage || (publicImageExists ? '/profile.jpg' : null)

  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-200 via-cyan-100 to-rose-100 blur-2xl dark:from-blue-900/40 dark:via-cyan-900/30 dark:to-violet-900/30" />
      <div className="card p-4 sm:p-5">
        <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-800 dark:to-blue-950">
          {!ready ? <div className="grid h-full place-items-center" aria-label="Loading saved profile photo"><span className="size-10 animate-pulse rounded-full bg-blue-200 dark:bg-slate-700" /></div> : source ? <img src={source} alt="Portrait of Benedict Tanghal" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" onError={() => !uploadedImage && setPublicImageExists(false)} /> : <div className="grid h-full place-items-center" role="img" aria-label="Benedict Tanghal initials placeholder"><span className="text-7xl font-extrabold tracking-tight text-electric dark:text-cyan-300">BT</span></div>}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 pt-14"><p className="font-semibold text-white">Benedict Tanghal</p><p className="text-sm text-slate-200">Software Developer</p></div>
        </div>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={handleFile} aria-label="Choose a profile photo" />
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => inputRef.current?.click()} className="btn-secondary flex-1 !px-3 !py-2.5"><Camera size={17} aria-hidden="true" />{uploadedImage ? 'Replace Photo' : 'Upload Profile Photo'}</button>
          {uploadedImage && <button type="button" onClick={async () => { try { await setUploadedImage(null); setError('') } catch { setError('The saved photo could not be removed.') } }} className="grid size-10 place-items-center rounded-xl border text-slate-600 transition hover:border-rose-300 hover:text-rose-600 dark:text-slate-300" aria-label="Remove uploaded profile photo" title="Remove uploaded photo"><Trash2 size={17} /></button>}
          {!uploadedImage && !publicImageExists && <button type="button" onClick={() => setPublicImageExists(true)} className="sr-only"><RefreshCw />Retry public photo</button>}
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">JPG, PNG, or WebP · Maximum 5 MB · Saved in this browser only</p>
        {error && <p className="mt-2 text-sm font-medium text-rose-600 dark:text-rose-400" role="alert">{error}</p>}
      </div>
    </div>
  )
}
