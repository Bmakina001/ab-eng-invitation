import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { engagement } from '../data/engagement'
import { Divider } from './Art'
import Reveal from './Reveal'

const files = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const photos = engagement.gallery.flatMap((g) => {
  const url = Object.entries(files).find(([k]) => k.endsWith(`/${g.file}`))?.[1]
  return url ? [{ src: url, alt: g.alt }] : []
})

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const step = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [])

  const isOpen = idx !== null
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIdx(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      lastFocus.current?.focus()
    }
  }, [isOpen, step])

  if (photos.length === 0) return null

  return (
    <section className="px-5 py-20 sm:py-28" aria-labelledby="photos-h">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p lang="te" className="te text-lg text-maroon-soft">మా క్షణాలు</p>
        <h2 id="photos-h" className="display text-4xl text-maroon sm:text-5xl">Moments</h2>
        <Divider className="my-6" />
        <ul className="mt-8 columns-2 gap-3 text-left sm:columns-3 sm:gap-5">
          {photos.map((p, i) => (
            <li key={p.src} className="mb-3 break-inside-avoid sm:mb-5">
              <button
                type="button"
                className="frame block w-full cursor-zoom-in overflow-hidden p-1.5 transition-transform hover:-translate-y-1"
                onClick={(e) => {
                  lastFocus.current = e.currentTarget
                  setIdx(i)
                }}
                aria-label={`View larger: ${p.alt}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="block h-auto w-full" />
              </button>
            </li>
          ))}
        </ul>
      </Reveal>
      <AnimatePresence>
        {idx !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-maroon/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIdx(null)}
          >
            <button ref={closeRef} type="button" aria-label="Close" className="absolute right-3 top-3 grid size-12 place-items-center text-ivory" onClick={() => setIdx(null)}>
              <X />
            </button>
            {photos.length > 1 && (
              <>
                <button type="button" aria-label="Previous photo" className="absolute left-1 grid size-12 place-items-center text-ivory sm:left-4" onClick={(e) => { e.stopPropagation(); step(-1) }}><ChevronLeft /></button>
                <button type="button" aria-label="Next photo" className="absolute right-1 grid size-12 place-items-center text-ivory sm:right-4" onClick={(e) => { e.stopPropagation(); step(1) }}><ChevronRight /></button>
              </>
            )}
            <motion.figure key={idx} className="max-h-full max-w-full" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}>
              <img src={photos[idx].src} alt={photos[idx].alt} className="max-h-[82vh] max-w-full border border-gold-soft object-contain" />
              <figcaption className="mt-2 text-center text-sm text-ivory/90">{photos[idx].alt}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
