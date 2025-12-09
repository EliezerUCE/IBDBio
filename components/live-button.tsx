"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Radio } from "lucide-react"
import { YOUTUBE_CHANNEL_ID } from "@/lib/youtube-config"

const CHANNEL_ID = "UCxBvNxxxxxxxxxxx" // Reemplaza con tu ID de canal real

export function LiveButton() {
  const [isLive, setIsLive] = useState(false)
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkLiveStatus()
    // Chequear cada 2 minutos
    const interval = setInterval(checkLiveStatus, 120000)
    return () => clearInterval(interval)
  }, [])

  async function checkLiveStatus() {
    try {
      const response = await fetch(`/api/youtube/live-status?channelId=${YOUTUBE_CHANNEL_ID}`)
      const data = await response.json()

      console.log("[v0] Live status check:", data)

      setIsLive(data.isLive)
      setLiveVideoId(data.videoId)
    } catch (error) {
      console.error("[v0] Error checking live status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClick = () => {
    if (isLive && liveVideoId) {
      window.open(`https://www.youtube.com/watch?v=${liveVideoId}`, "_blank")
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={!isLive || isLoading}
      size="lg"
      className="w-full h-14 text-lg font-semibold relative overflow-hidden disabled:opacity-50"
      style={{
        backgroundColor: isLive ? "var(--color-live)" : "var(--color-muted)",
        color: isLive ? "white" : "var(--color-muted-foreground)",
      }}
    >
      {isLive && <span className="absolute inset-0 animate-pulse bg-white/20" />}
      <Radio className={`mr-2 h-5 w-5 ${isLive ? "animate-pulse" : ""}`} />
      {isLoading ? "Verificando..." : isLive ? "🔴 EN VIVO - Ver Ahora" : "En Vivo"}
    </Button>
  )
}
