"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface HabitatVideoProps {
  src: string
  title: string
}

export default function HabitatVideo({ src, title }: HabitatVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    return () => video.removeEventListener("loadeddata", handleLoadedData)
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div
      className="relative w-full aspect-[9/16] md:aspect-video bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        loading="lazy"
        preload="metadata"
        className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Your browser doesn't support embedded videos.
      </video>

      {/* Controls overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Play/Pause button - centered */}
        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-brand-red/90 backdrop-blur-sm flex items-center justify-center hover:bg-brand-red transition-all hover:scale-110 shadow-lg"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-8 h-8 text-[#f9f5ef]" /> : <Play className="w-8 h-8 text-[#f9f5ef] ml-1" />}
        </button>
      </div>

      {/* Mute/Unmute button - bottom right */}
      <button
        onClick={toggleMute}
        className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-red/90 backdrop-blur-sm flex items-center justify-center hover:bg-brand-red transition-all hover:scale-110 shadow-lg ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-5 h-5 text-[#f9f5ef]" /> : <Volume2 className="w-5 h-5 text-[#f9f5ef]" />}
      </button>

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-brand-red/30 border-t-brand-red rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
