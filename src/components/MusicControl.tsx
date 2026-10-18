import { Music, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { engagement } from '../data/engagement'

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const hasAudio = engagement.music.trim() !== ''

  useEffect(() => {
    if (!audioRef.current || !hasAudio) return

    audioRef.current.addEventListener('play', () => setIsPlaying(true))
    audioRef.current.addEventListener('pause', () => setIsPlaying(false))
    audioRef.current.addEventListener('error', () => setHasError(true))

    // Autoplay music when component mounts
    audioRef.current.play().catch(() => {
      // Browser blocked autoplay - user needs to click play button
      console.log('Autoplay blocked by browser policy')
    })

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', () => setIsPlaying(true))
        audioRef.current.removeEventListener('pause', () => setIsPlaying(false))
        audioRef.current.removeEventListener('error', () => setHasError(true))
      }
    }
  }, [hasAudio])

  const toggle = () => {
    if (!hasAudio || !audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => setHasError(true))
    }
  }

  return (
    <>
      {hasAudio && <audio ref={audioRef} src={engagement.music} loop autoPlay />}
      <button
        type="button"
        className="btn btn-ghost"
        onClick={toggle}
        disabled={!hasAudio || hasError}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={!hasAudio ? 'Music not configured' : hasError ? 'Music file not found' : ''}
      >
        {!hasAudio ? (
          <Music size={16} className="opacity-50" />
        ) : hasError ? (
          <Music size={16} className="opacity-50" />
        ) : isPlaying ? (
          <Pause size={16} />
        ) : (
          <Play size={16} />
        )}
        {!hasAudio ? 'Music' : hasError ? 'Music unavailable' : isPlaying ? 'Pause' : 'Play'} Music
      </button>
    </>
  )
}
