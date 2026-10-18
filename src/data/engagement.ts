/**
 * Single source of truth for the invitation.
 * Edit this file only. Leave optional fields empty ('' / null / []) to hide them.
 */
import musicFile from '../assets/music/Sita kalyanaaa music.mp3'
export interface EngagementConfig {
  person1: { en: string; te: string; short: string; teShort: string }
  person2: { en: string; te: string; short: string; teShort: string }
  event: {
    titleEn: string
    titleTe: string
    /** ISO date (YYYY-MM-DD) */
    date: string
    /** 24h "HH:mm" local event time, or '' if not yet decided (date-based countdown to 00:00 is used). */
    time: string
    /** Display text for the time, e.g. "11:00 AM". Leave '' to hide. */
    timeLabel: string
    /** IANA time zone used for calendar events and labels. */
    timeZone: string
    /** Fixed UTC offset matching timeZone on the event date (India has no DST). */
    utcOffset: string
    /** Approximate duration used for the calendar entry, in hours. */
    durationHours: number
  }
  venue: { name: string; address: string; mapUrl: string }
  messages: {
    openingBlessing: string
    tagline: string
    announceIntro: string
    announceOutro: string
    announceIntroTe: string
    announceOutroTe: string
    familyHeading: string
    familyHeadingTe: string
    familyGeneral: string
    familyGeneralTe: string
    closing1: string
    closing2: string
    closingWith: string
    closingTe: string
    afterEvent: string
    onEventDay: string
    onEventDayTe: string
  }
  /** Optional family details. Shown only when provided. */
  families: { label: string; names: string }[]
  /** Photos live in src/assets/gallery. List the file name and a description. */
  gallery: { file: string; alt: string }[]
  /** Optional social-sharing image path relative to site root (e.g. "/og.jpg"). */
  shareImage: string
  /** Optional audio path (never autoplays). */
  music: string
  theme: Record<string, string>
  seo: { title: string; description: string }
}

export const engagement: EngagementConfig = {
  person1: { en: 'Bhargav Makina', te: 'వెంకట భర్గవ్', short: 'Bhargav', teShort: 'భర్గవ్' },
  person2: { en: 'Abhizna Lankoji', te: 'అభిజ్ఞ', short: 'Abhizna', teShort: 'అభిజ్ఞ' },
  event: {
    titleEn: 'Engagement Ceremony',
    titleTe: 'నిశ్చితార్థ వేడుక',
    date: '2026-10-30',
    time: '19:30',
    timeLabel: '7:30 PM',
    timeZone: 'Asia/Kolkata',
    utcOffset: '+05:30',
    durationHours: 3,
  },
  venue: {
    name: 'Pallem Maneswari Nilayam',
    address: '41-1/3-44, 2nd Line, Dwarakanagar, Krishna Lanka, Vijayawada, Andhra Pradesh 520013',
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Pallem Maneswari Nilayam, 41-1/3-44, 2nd Line, Dwarakanagar, Krishna Lanka, Vijayawada, Andhra Pradesh 520013')}`
  },
  messages: {
    openingBlessing: 'కుటుంబ ఆశీర్వాదాలతో',
    tagline: 'రెండు కుటుంబాలు, ఒక సుందరమైన ప్రారంభం',
    announceIntro:
      'ఆనందంతో కూడిన మన హృదయాలతో, మీ సందర్శనకు ఆహ్వానిస్తున్నాము మా నిశ్చితార్థ వేడుకను ఆచరించమని. మీ ఉపస్థితి మరియు ఆశీర్వాదాలు ఈ ప్రత్యేక సందర్భాన్ని మరింత జ్ఞాపకీయంగా చేస్తాయి.',
    announceOutro:
      'మా కుటుంబాల ఆశీర్వాదాలతో, మీ ఎందరినీ సాదరంగా ఆహ్వానిస్తున్నాము మా నిశ్చితార్థ వేడుకను ఆచరించమని మరియు ఈ ప్రత్యేక ప్రారంభానికి సంబంధించిన ఆనందంలో భాగస్వామ్యమయ్యేందుకు.',
    announceIntroTe:
      'ఆనందంతో కూడిన మన హృదయాలతో, మీ సందర్శనకు ఆహ్వానిస్తున్నాము',
    announceOutroTe:
      'ప్రేమ, ఆనందం, ఆత్మీయతలతో నిండిన ఈ కొత్త ప్రారంభంలో మాతో కలిసి పాలుపంచుకోండి.',
    familyHeading: 'మా కుటుంబాల ప్రేమ ఆశీర్వాదాలతో',
    familyHeadingTe: 'కుటుంబ ఆశీర్వాదం',
    familyGeneral:
      'మా కుటుంబాలే ఈ శుభారంభానికి పునాది. ఈ అడుగులో మీ ఆత్మీయ శుభాకాంక్షలు మాకు కావాలి.',
    familyGeneralTe:
      'ఈ జీవన సఫరంలో మీ దీవెనలతో మాకు కూడా కంపెనీ ఉండాలని కోరుకుంటున్నాము.',
    closing1: 'ఈ విశేష క్షణాన్ని మీతో కలిసి ఆచరించటానికి ఎంతగా ఆశ్వాస్తున్నాము.',
    closing2: 'మీ రాక మరియు ఆశీర్వాదాలు మా వేడుకను మరింత జ్ఞాపకీయంగా చేస్తాయి.',
    closingWith: 'ప్రేమతో,',
    closingTe: 'మీ రాక, మీ ఆశీస్సులు మా నిశ్చితార్థ వేడుకకు మరింత శోభను చేకూరుస్తాయి.',
    afterEvent: 'సుందరమైన ప్రారంభం జరిగింది.',
    onEventDay: 'ఈ రోజే మా నిశ్చితార్థం. మీ ఆశీస్సులకు ధన్యవాదాలు!',
    onEventDayTe: 'ఈ రోజే మా నిశ్చితార్థం. మీ ఆశీస్సులకు ధన్యవాదాలు!',
  },
  families: [],
  gallery: [],
  shareImage: '',
  music: musicFile,
  theme: {
    ivory: '#FFF9F0',
    paper: '#F5EBDD',
    gold: '#B08D57',
    maroon: '#641E2B',
    maroonSoft: '#873C49',
    goldSoft: '#D8BD83',
    green: '#4E624B',
  },
  seo: {
    title: 'భర్గవ్ & అభిజ్ఞ | నిశ్చితార్థ ఆహ్వానం',
    description:
      '2026 అక్టోబర్ 30న భర్గవ్ మకినా మరియు అభిజ్ఞ లంకోజి నిశ్చితార్థ వేడుకకు ఆహ్వానం.',
  },
}

export const eventStart = (): Date => {
  const { date, time, utcOffset } = engagement.event
  return new Date(`${date}T${time || '00:00'}:00${utcOffset}`)
}

export const formattedDate = (): string =>
  new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: engagement.event.timeZone,
  }).format(eventStart())

export const formattedDateTe = (): string =>
  new Intl.DateTimeFormat('te-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: engagement.event.timeZone,
  }).format(eventStart())

export const hasVenue = (): boolean => Boolean(engagement.venue.name.trim() && engagement.venue.address.trim())
