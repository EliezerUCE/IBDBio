"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Loader2 } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
  url: string
  publishedAt: string
}

export default function YoutubeVideos() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/youtube-videos")
        const data = await response.json()

        if (data.error) {
          setError(data.error)
          return
        }

        setVideos(data.videos || [])
      } catch (err) {
        setError("Error al cargar los videos")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()

    // Refresh videos every 5 minutes
    const interval = setInterval(fetchVideos, 300000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-secondary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-border bg-card p-4 text-center text-sm text-foreground/60">{error}</div>
    )
  }

  if (videos.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center text-foreground/60">
        No hay videos disponibles
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-secondary/50 hover:shadow-lg"
        >
          {/* Thumbnail */}
          <div className="relative h-0 w-full pb-[56.25%] overflow-hidden bg-muted">
            <Image
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <ExternalLink className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-secondary transition-colors break-words">
              {decodeHTMLEntities(video.title)}
            </h3>
            <p className="mt-1 text-xs text-foreground/60">
              {new Date(video.publishedAt).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}

function decodeHTMLEntities(text: string): string {
  const textArea = document.createElement("textarea")
  textArea.innerHTML = text
  return textArea.value
}
