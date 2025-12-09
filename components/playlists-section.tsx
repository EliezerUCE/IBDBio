"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ListVideo, ChevronDown, ChevronUp } from "lucide-react"
import useSWR from "swr"
import { YOUTUBE_CHANNEL_ID } from "@/lib/youtube-config"

interface Playlist {
  id: string
  title: string
  thumbnail: string
  videoCount: number
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function PlaylistsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const { data, error, isLoading } = useSWR(`/api/youtube/playlists?channelId=${YOUTUBE_CHANNEL_ID}`, fetcher)

  if (isLoading || error || !data?.playlists?.length) {
    return null
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Playlists</h2>
        <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="text-muted-foreground">
          {isExpanded ? (
            <>
              Ocultar <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Ver todas <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <div className={`grid gap-3 transition-all ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="space-y-3">
            {data.playlists.map((playlist: Playlist) => (
              <a
                key={playlist.id}
                href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-3 flex items-center gap-3 transition-all hover:shadow-md hover:scale-[1.01]">
                  <div className="relative w-24 h-16 rounded overflow-hidden flex-shrink-0 bg-muted">
                    <img
                      src={playlist.thumbnail || "/placeholder.svg"}
                      alt={playlist.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <ListVideo className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium line-clamp-2 text-sm group-hover:text-primary transition-colors">
                      {playlist.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{playlist.videoCount} videos</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
