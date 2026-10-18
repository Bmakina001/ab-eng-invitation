import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { engagement, formattedDate } from '../data/engagement'
import { CornerOrnament, JasmineGarland, Kolam, Lamp, TempleArch, Toranam } from './Art'

export default function Opening({ onOpened }: { onOpened: () => void }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const btnRef = useRef<HTMLButtonElement>(null)
  useEffect(() => btnRef.current?.focus(), [])
  const { person1, person2, messages } = engagement

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const dur = reduce ? 0.01 : 0.9
  const start = (skip: boolean) => {
    if (skip || reduce) onOpened()
    else setOpen(true)
  }

  return (
    <>
      <motion.div
        key="opening"
        className="paper fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Invitation opening"
        initial={{ opacity: 1 }}
        animate={open ? { opacity: 0, scale: 1.06 } : { opacity: 1 }}
        transition={{ duration: dur, delay: open ? 0.35 : 0, ease: 'easeInOut' }}
        onAnimationComplete={() => open && onOpened()}
      >
        <div className="pointer-events-none absolute inset-3 border border-gold sm:inset-5" />
        <div className="pointer-events-none absolute inset-[18px] border border-maroon/40 sm:inset-[30px]" />
        <CornerOrnament className="absolute left-3 top-3 w-14 sm:left-5 sm:top-5 sm:w-20" />
        <CornerOrnament className="absolute right-3 top-3 w-14 -scale-x-100 sm:right-5 sm:top-5 sm:w-20" />
        <CornerOrnament className="absolute bottom-3 left-3 w-14 -scale-y-100 sm:bottom-5 sm:left-5 sm:w-20" />
        <CornerOrnament className="absolute bottom-3 right-3 w-14 -scale-100 sm:bottom-5 sm:right-5 sm:w-20" />

        <motion.div className="absolute inset-x-0 top-6 flex justify-center px-6 sm:top-9" animate={open ? { y: -80 } : { y: 0 }} transition={{ duration: dur }}>
          <Toranam className="w-full max-w-md" />
        </motion.div>
        <JasmineGarland className="absolute left-0 top-24 w-24 -rotate-12 sm:w-40" count={5} />
        <JasmineGarland className="absolute right-0 top-24 w-24 rotate-12 sm:w-40" count={5} />

        <motion.div
          className="absolute inset-y-0 left-1/2 w-[min(88vw,420px)] -translate-x-1/2 opacity-70"
          animate={open ? { scale: 1.2, opacity: 0 } : { scale: 1 }}
          transition={{ duration: dur }}
        >
          <TempleArch className="h-full w-full" />
        </motion.div>

        <div className="relative z-10 flex max-h-full flex-col items-center overflow-y-auto px-8 py-24 text-center">
          <p lang="te" className="te text-3xl font-semibold text-maroon sm:text-4xl">శుభమస్తు</p>
          <p lang="te" className="te display mt-3 text-base italic text-maroon-soft sm:text-lg">{messages.openingBlessing}</p>
          <p className="eyebrow mt-5">{engagement.event.titleEn}</p>
          <h1 lang="te" className="te display mt-4 text-[2.6rem] font-medium leading-[1.05] text-maroon sm:text-6xl">
            {person1.te}
            <span className="my-1 block text-3xl italic text-gold sm:text-4xl" aria-label="and">&amp;</span>
            {person2.te}
          </h1>
          <p lang="te" className="te mt-4 text-sm text-maroon-soft sm:text-base">నిశ్చితార్థ వేడుకకు సాదర ఆహ్వానం</p>
          <p className="display mt-3 text-base italic text-maroon-soft">{messages.tagline}</p>
          <p className="eyebrow mt-4 !text-maroon">{formattedDate()}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <motion.button
              ref={btnRef}
              type="button"
              className="btn btn-primary"
              onClick={() => start(false)}
              animate={reduce ? undefined : { boxShadow: ['0 0 0 0 rgba(176,141,87,.5)', '0 0 0 12px rgba(176,141,87,0)'] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              Open Invitation
            </motion.button>
            <button type="button" className="text-xs uppercase tracking-[0.2em] text-maroon-soft underline-offset-4 hover:underline min-h-11 px-3" onClick={() => start(true)}>
              Skip
            </button>
          </div>
        </div>
        <Lamp className="absolute bottom-10 left-8 w-8 sm:left-20 sm:w-12" />
        <Lamp className="absolute bottom-10 right-8 w-8 sm:right-20 sm:w-12" />
        <Kolam className="absolute inset-x-0 bottom-4 mx-auto w-28 opacity-80 sm:w-40" />
      </motion.div>
    </>
  )
}
