"use client"

import { useState, useEffect } from "react"
import { X, Music, ExternalLink, Loader2 } from "lucide-react"

interface Playlist {
  id: string
  title: string
  thumbnail: string
  url: string
  videoCount: number
}

interface PlaylistsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PlaylistsModal({ isOpen, onClose }: PlaylistsModalProps) {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isOpen) return

    const fetchPlaylists = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/youtube-playlists")
        const data = await response.json()

        if (data.error) {
          setError(data.error)
          return
        }

        setPlaylists(data.playlists || [])
      } catch (err) {
        setError("Error al cargar las playlists")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlaylists()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-lg bg-card p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 hover:bg-border transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="pr-8 text-xl font-semibold text-foreground">Playlists</h2>

        {/* Content */}
        <div className="mt-6">
          {loading && (
            <div className="flex justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-secondary" />
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-border bg-card p-4 text-center text-sm text-foreground/60">
              {error}
            </div>
          )}

          {!loading && !error && playlists.length === 0 && (
            <div className="rounded-lg border border-border bg-card p-8 text-center text-foreground/60">
              No hay playlists disponibles
            </div>
          )}

          {!loading && !error && playlists.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {playlists.map((playlist) => (
                <a
                  key={playlist.id}
                  href={playlist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all hover:border-secondary/50 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-secondary transition-colors">
                        {decodeHTMLEntities(playlist.title)}
                      </h3>
                      <p className="mt-1 text-xs text-foreground/60">{playlist.videoCount} videos</p>
                    </div>
                    <div className="flex gap-2">
                      <Music className="h-5 w-5 text-secondary flex-shrink-0" />
                      <ExternalLink className="h-5 w-5 text-secondary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-secondary px-4 py-2 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

function decodeHTMLEntities(text: string): string {
  const textArea = document.createElement("textarea")
  textArea.innerHTML = text
  return textArea.value
}
