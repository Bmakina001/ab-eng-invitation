import { engagement, eventStart, formattedDate } from './data/engagement'

const pad = (n: number) => String(n).padStart(2, '0')
const icsStamp = (d: Date) =>
  `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
const escapeIcs = (s: string) => s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/[,;]/g, (m) => `\\${m}`)

const fold = (line: string): string => {
  const enc = new TextEncoder()
  const parts: string[] = []
  let cur = ''
  let size = 0
  for (const ch of line) {
    const n = enc.encode(ch).length
    if (size + n > (parts.length ? 74 : 75)) {
      parts.push(cur)
      cur = ''
      size = 0
    }
    cur += ch
    size += n
  }
  parts.push(cur)
  return parts.join('\r\n ')
}

export const eventTitle = () =>
  `Engagement of ${engagement.person1.en} & ${engagement.person2.en}`

const eventDescription = () => {
  const { event, venue } = engagement
  return [
    `${event.titleEn} (${event.titleTe})`,
    formattedDate(),
    event.timeLabel,
    venue.name,
    venue.address,
    'With the blessings of our families.',
  ]
    .filter(Boolean)
    .join('\n')
}

export const buildIcs = (): string => {
  const { event, venue } = engagement
  const start = eventStart()
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Engagement Invitation//EN', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT']
  lines.push(`UID:engagement-${event.date}@invitation`, `DTSTAMP:${icsStamp(new Date())}`)
  if (event.time) {
    lines.push(`DTSTART:${icsStamp(start)}`, `DTEND:${icsStamp(new Date(start.getTime() + event.durationHours * 3600_000))}`)
  } else {
    const ymd = event.date.replace(/-/g, '')
    const next = new Date(`${event.date}T00:00:00Z`)
    next.setUTCDate(next.getUTCDate() + 1)
    lines.push(`DTSTART;VALUE=DATE:${ymd}`, `DTEND;VALUE=DATE:${next.toISOString().slice(0, 10).replace(/-/g, '')}`)
  }
  lines.push(`SUMMARY:${escapeIcs(eventTitle())}`, `DESCRIPTION:${escapeIcs(eventDescription())}`)
  if (venue.name || venue.address) lines.push(`LOCATION:${escapeIcs([venue.name, venue.address].filter(Boolean).join(', '))}`)
  if (venue.mapUrl) lines.push(`URL:${venue.mapUrl}`)
  lines.push('END:VEVENT', 'END:VCALENDAR')
  return lines.map(fold).join('\r\n') + '\r\n'
}

export const downloadIcs = () => {
  const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'engagement-invitation.ics'
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export type ShareResult = { ok: boolean; message: string }

export const copyLink = async (): Promise<ShareResult> => {
  const url = window.location.href
  try {
    await navigator.clipboard.writeText(url)
    return { ok: true, message: 'Invitation link copied.' }
  } catch {
    try {
      const ta = document.createElement('textarea')
      ta.value = url
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      ta.remove()
      return ok ? { ok: true, message: 'Invitation link copied.' } : { ok: false, message: 'Could not copy the link.' }
    } catch {
      return { ok: false, message: 'Could not copy the link.' }
    }
  }
}

export const nativeShare = async (): Promise<ShareResult> => {
  try {
    await navigator.share({ title: engagement.seo.title, text: engagement.seo.description, url: window.location.href })
    return { ok: true, message: 'Thank you for sharing!' }
  } catch (e) {
    if (e instanceof DOMException && e.name === 'AbortError') return { ok: true, message: '' }
    return { ok: false, message: 'Sharing failed. Try WhatsApp or copy the link.' }
  }
}

export const whatsappUrl = () =>
  `https://wa.me/?text=${encodeURIComponent(`${engagement.seo.title}\n${window.location.href}`)}`
