"use client"

import { useState, useRef } from "react"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

interface VideoPlayerProps {
  src: string
  title?: string
}

export default function VideoPlayer({ src, title = "Video" }: VideoPlayerProps) {
  const [showControls, setShowControls] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleVideoClick = () => {
    setShowControls(true)
  }

  const togglePlayPause = () => {
    if (iframeRef.current) {
      // Send postMessage to control the video
      const message = isPlaying ? "pause" : "play"
      iframeRef.current.contentWindow?.postMessage({ method: message }, "*")
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (iframeRef.current) {
      const message = isMuted ? "unmute" : "mute"
      iframeRef.current.contentWindow?.postMessage({ method: message }, "*")
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group" onClick={handleVideoClick}>
      <iframe
        ref={iframeRef}
        src={`${src}?autoplay=false&muted=true&loop=true`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        title={title}
      />

      {/* Controls - only show when clicked */}
      {showControls && (
        <>
          {/* Play/Pause button in center */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              togglePlayPause()
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>

          {/* Mute/Unmute button in bottom right */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleMute()
            }}
            className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </>
      )}
    </div>
  )
}
