import { useEffect, useState } from 'react'
import { engagement, eventStart } from '../data/engagement'

const dayKey = (d: Date) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: engagement.event.timeZone }).format(d)

export default function Countdown() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const { messages, event } = engagement
  const target = eventStart().getTime()
  const diff = target - now.getTime()

  if (dayKey(now) === event.date && (diff <= 0 || !event.time)) {
    return (
      <div className="text-center" role="status">
        <p className="display text-3xl text-maroon sm:text-4xl">{messages.onEventDay}</p>
        <p lang="te" className="te mt-3 text-maroon-soft">{messages.onEventDayTe}</p>
      </div>
    )
  }
  if (diff <= 0) {
    return <p className="display text-center text-3xl italic text-maroon sm:text-4xl" role="status">{messages.afterEvent}</p>
  }

  const s = Math.floor(diff / 1000)
  const units = [
    { label: 'Days', te: 'రోజులు', v: Math.floor(s / 86400) },
    { label: 'Hours', te: 'గంటలు', v: Math.floor((s % 86400) / 3600) },
    { label: 'Minutes', te: 'నిమిషాలు', v: Math.floor((s % 3600) / 60) },
    { label: 'Seconds', te: 'సెకన్లు', v: s % 60 },
  ]
  return (
    <div>
      <p className="sr-only" role="timer">
        {units[0].v} days, {units[1].v} hours and {units[2].v} minutes until the engagement
      </p>
      <dl className="mx-auto grid max-w-xl grid-cols-4 gap-1.5 sm:gap-4" aria-hidden="true">
        {units.map((u) => (
          <div key={u.label} className="frame flex flex-col items-center px-1 py-4 sm:py-6">
            <dd className="display text-3xl font-semibold tabular-nums text-gold-deep sm:text-5xl">{String(u.v).padStart(2, '0')}</dd>
            <dt className="mt-1 text-[0.6rem] uppercase tracking-[0.14em] text-maroon sm:text-xs">{u.label}</dt>
            <span lang="te" className="te text-[0.65rem] leading-tight text-maroon-soft sm:text-xs">{u.te}</span>
          </div>
        ))}
      </dl>
    </div>
  )
}
