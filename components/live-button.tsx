"use client"

import { useState, useEffect } from "react"
import { Radio } from "lucide-react"

export default function LiveButton() {
  const [isLive, setIsLive] = useState(false)
  const [liveUrl, setLiveUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const response = await fetch("/api/youtube-live")
        const data = await response.json()
        setIsLive(data.isLive)
        setLiveUrl(data.liveUrl)
      } catch (error) {
        console.error("Error checking live status:", error)
      } finally {
        setLoading(false)
      }
    }

    // Check immediately
    checkLiveStatus()

    // Poll every 30 seconds for live status
    const interval = setInterval(checkLiveStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    if (isLive && liveUrl) {
      window.open(liveUrl, "_blank")
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={!isLive || loading}
      className={`relative overflow-hidden rounded-lg px-8 py-4 font-bold transition-all ${
        isLive
          ? "cursor-pointer bg-accent text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105"
          : "cursor-not-allowed bg-muted text-muted-foreground opacity-50"
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <Radio className={`h-5 w-5 ${isLive ? "animate-pulse" : ""}`} />
        <span>EN VIVO</span>
      </div>
      {isLive && (
        <div className="absolute inset-0 -top-1 h-1 w-full bg-gradient-to-r from-transparent via-accent-foreground/50 to-transparent" />
      )}
    </button>
  )
}
