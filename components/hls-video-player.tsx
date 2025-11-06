"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface HLSVideoPlayerProps {
  src: string
  title: string
}

export default function HLSVideoPlayer({ src, title }: HLSVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const isTogglingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Load HLS.js dynamically
    const loadHLS = async () => {
      // @ts-ignore - HLS.js loaded from CDN
      if (typeof window !== "undefined" && window.Hls) {
        // @ts-ignore
        const Hls = window.Hls
        if (Hls.isSupported()) {
          const hls = new Hls()
          hls.loadSource(src)
          hls.attachMedia(video)
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src
        }
      }
    }

    // Load HLS.js script if not already loaded
    if (!document.querySelector('script[src*="hls.js"]')) {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@latest"
      script.onload = () => loadHLS()
      document.head.appendChild(script)
    } else {
      loadHLS()
    }
  }, [src])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video || isTogglingRef.current) return

    isTogglingRef.current = true

    try {
      if (video.paused) {
        await video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      // Handle play interruption gracefully
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Video playback error:", error)
      }
      // Update state to match actual video state
      setIsPlaying(!video.paused)
    } finally {
      isTogglingRef.current = false
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleContainerClick = () => {
    setShowControls(true)
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black cursor-pointer group"
      onClick={handleContainerClick}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
      />

      {/* Controls overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center gap-4 pointer-events-none transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(transparent, transparent, rgba(0,0,0,0.1))",
        }}
      >
        {/* Play/Pause button - center */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            togglePlay()
          }}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-brand-red" />
          ) : (
            <Play className="w-5 h-5 text-brand-red ml-0.5" />
          )}
        </button>

        {/* Mute/Unmute button - bottom right */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleMute()
          }}
          className="pointer-events-auto absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-brand-red" /> : <Volume2 className="w-4 h-4 text-brand-red" />}
        </button>
      </div>
    </div>
  )
}
