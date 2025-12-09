"use client"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import useSWR from "swr"
import { YOUTUBE_CHANNEL_ID } from "@/lib/youtube-config"

interface Video {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function LatestVideos() {
  const { data, error, isLoading } = useSWR(
    `/api/youtube/latest-videos?channelId=${YOUTUBE_CHANNEL_ID}&maxResults=2`,
    fetcher,
    { refreshInterval: 300000 }, // Refresh cada 5 minutos
  )

  if (isLoading) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-center">Últimos Videos</h2>
        <div className="grid gap-4">
          {[1, 2].map((i) => (
            <Card key={i} className="overflow-hidden animate-pulse">
              <div className="aspect-video bg-muted" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            </Card>
          ))}
        </div>
      </section>
    )
  }

  if (error || !data?.videos) {
    console.error("[v0] Error loading videos:", error)
    return null
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Últimos Videos</h2>
      <div className="grid gap-4">
        {data.videos.map((video: Video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]">
              <div className="relative aspect-video bg-muted">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium line-clamp-2 text-balance group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(video.publishedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
