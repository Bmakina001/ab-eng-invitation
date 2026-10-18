import type { SVGProps } from 'react'

const G = '#B08D57'
const GS = '#D8BD83'
const M = '#641E2B'
const GR = '#4E624B'

type P = SVGProps<SVGSVGElement>

export function Jasmine({ size = 28, ...p }: P & { size?: number }) {
  return (
    <svg viewBox="-12 -12 24 24" width={size} height={size} aria-hidden="true" {...p}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-6" rx="3.2" ry="6" fill="#FFFDF7" stroke={GS} strokeWidth=".6" transform={`rotate(${a})`} />
      ))}
      <circle r="2" fill={GS} />
    </svg>
  )
}

export function JasmineGarland({ className = '', count = 7 }: { className?: string; count?: number }) {
  return (
    <svg viewBox={`0 0 ${count * 22} 30`} className={className} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <path d={`M0 15 Q${count * 11} 28 ${count * 22} 15`} fill="none" stroke={GR} strokeWidth="1.2" />
      {Array.from({ length: count }).map((_, i) => {
        const t = (i + 0.5) / count
        const y = 15 + 13 * 2 * t * (1 - t) * 1
        return (
          <g key={i} transform={`translate(${t * count * 22} ${y})`}>
            <Jasmine x={-9} y={-9} width={18} height={18} />
          </g>
        )
      })}
    </svg>
  )
}

export function Toranam({ className = '' }: { className?: string }) {
  const leaves = Array.from({ length: 11 })
  return (
    <svg viewBox="0 0 440 90" className={className} aria-hidden="true">
      <path d="M0 6 Q220 30 440 6" fill="none" stroke={G} strokeWidth="1.5" />
      {leaves.map((_, i) => {
        const t = i / (leaves.length - 1)
        const x = t * 440
        const y = 6 + 24 * 2 * t * (1 - t) * 1
        return (
          <g key={i} transform={`translate(${x} ${y})`} className="sway" style={{ animationDelay: `${i * 0.3}s` }}>
            <path d="M0 0 C-12 14 -10 40 0 56 C10 40 12 14 0 0Z" fill={GR} opacity=".92" />
            <path d="M0 4 V50" stroke={GS} strokeWidth=".8" />
            {i % 2 === 0 && <circle cx="0" cy="62" r="4" fill="#FFF9F0" stroke={G} strokeWidth=".8" />}
          </g>
        )
      })}
    </svg>
  )
}

export function Lamp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} aria-hidden="true">
      <g className="lamp-flame">
        <path d="M30 6 C22 18 22 26 30 32 C38 26 38 18 30 6Z" fill={GS} stroke={G} strokeWidth=".8" />
        <path d="M30 16 C27 22 27 26 30 28 C33 26 33 22 30 16Z" fill="#FFF9F0" />
      </g>
      <path d="M8 38 Q30 52 52 38 L46 50 Q30 58 14 50Z" fill={G} />
      <path d="M26 54 H34 L36 66 H24Z" fill={G} />
      <path d="M14 70 H46 Q46 76 30 76 Q14 76 14 70Z" fill={G} />
      <path d="M8 38 Q30 52 52 38" fill="none" stroke={M} strokeWidth=".8" />
    </svg>
  )
}

export function Kolam({ className = '' }: { className?: string }) {
  const dots: [number, number][] = []
  for (let r = 0; r < 5; r++) {
    const n = r < 3 ? 2 * r + 1 : 2 * (4 - r) + 1
    for (let c = 0; c < n; c++) dots.push([100 - (n - 1) * 15 + c * 30, 15 + r * 20])
  }
  return (
    <svg viewBox="0 0 200 100" className={className} aria-hidden="true">
      <g fill={G} opacity=".8">{dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2" />)}</g>
      <path d="M100 8 C130 20 150 40 100 55 C50 40 70 20 100 8Z M100 95 C130 80 150 62 100 47 C50 62 70 80 100 95Z M40 50 C60 30 85 40 100 50 C85 60 60 70 40 50Z M160 50 C140 30 115 40 100 50 C115 60 140 70 160 50Z" fill="none" stroke={G} strokeWidth="1.2" />
      <circle cx="100" cy="51" r="4" fill="none" stroke={M} strokeWidth="1" />
    </svg>
  )
}

export function Lotus({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" className={className} aria-hidden="true">
      <g fill="none" stroke={G} strokeWidth="1.2">
        <path d="M50 46 C38 34 38 14 50 4 C62 14 62 34 50 46Z" />
        <path d="M50 46 C34 42 22 28 22 14 C36 16 46 30 50 46Z" />
        <path d="M50 46 C66 42 78 28 78 14 C64 16 54 30 50 46Z" />
        <path d="M50 46 C30 48 12 40 6 28 C22 26 40 34 50 46Z" />
        <path d="M50 46 C70 48 88 40 94 28 C78 26 60 34 50 46Z" />
      </g>
      <path d="M50 46 C42 36 42 18 50 8 C58 18 58 36 50 46Z" fill={GS} opacity=".45" />
    </svg>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-24" />
      <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 2 L15 12 L12 22 L9 12Z M2 12 L12 9 L22 12 L12 15Z" fill="none" stroke={G} strokeWidth="1.1" /></svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-24" />
    </div>
  )
}

/** Temple-inspired arch (gopuram-like tiers + decorative finial). Sized by parent. */
export function TempleArch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 420" className={className} aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <g fill="none" stroke={G} strokeWidth="1.4" strokeLinecap="round">
        <path d="M30 420 V190 C30 110 110 90 150 30 C190 90 270 110 270 190 V420" />
        <path d="M46 420 V196 C46 124 118 104 150 52 C182 104 254 124 254 196 V420" stroke={GS} />
        <path d="M62 420 V200 C62 140 124 120 150 76 C176 120 238 140 238 200 V420" strokeWidth=".8" />
        <circle cx="150" cy="12" r="5" fill={G} />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <g key={i}>
            <circle cx={36} cy={200 + i * 27} r="1.8" fill={G} />
            <circle cx={264} cy={200 + i * 27} r="1.8" fill={G} />
          </g>
        ))}
      </g>
    </svg>
  )
}

export function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <g fill="none" stroke={G} strokeWidth="1.2">
        <path d="M2 78 V2 H78" />
        <path d="M10 70 V10 H70" stroke={GS} />
        <path d="M2 2 C20 8 30 20 34 40 C20 34 8 24 2 2Z" fill={GS} opacity=".35" />
        <circle cx="18" cy="18" r="3" fill={M} stroke="none" />
      </g>
    </svg>
  )
}
