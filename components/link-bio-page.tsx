"use client"

import { useState } from "react"
import { Play, Music, Info } from "lucide-react"
import Image from "next/image"
import YoutubeVideos from "./youtube-videos"
import LiveButton from "./live-button"
import InfoModal from "./info-modal"
import PlaylistsModal from "./playlists-modal"
import SocialLinks from "./social-links"
import SocialIcons from "./social-icons"

export default function LinkBioPage() {
  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [playlistsModalOpen, setPlaylistsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header with Logo */}
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-10">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-4 sm:p-6">
                <Image
                  src="/images/logo.png"
                  alt="Logo Iglesia Bautista Dominicana"
                  width={280}
                  height={180}
                  className="h-auto w-full max-w-xs sm:max-w-sm"
                  priority
                />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Iglesia Bautista Dominicana
            </h1>
            <p className="mt-3 text-base sm:text-lg text-foreground/70">Bienvenido</p>
            <p className="mt-2 text-sm sm:text-base text-foreground/60">Conecta con nuestra comunidad</p>

            <div className="mt-4 rounded-lg border border-red-200 bg-red-50/50 p-4 sm:p-6">
              <p className="mb-4 text-sm sm:text-base text-foreground/60">Conecta con nuestra comunidad</p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-4 py-8 sm:py-12 sm:px-6">
        <div className="space-y-8">
          {/* Live Button */}
          <div className="flex justify-center">
            <LiveButton />
          </div>

          {/* Latest Videos */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Play className="h-5 w-5 text-secondary" />
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">Últimos Videos</h2>
            </div>
            <YoutubeVideos />
          </section>

          {/* Buttons Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Información */}
            <button
              onClick={() => setInfoModalOpen(true)}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all hover:border-secondary/50 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <Info className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="font-semibold text-foreground">Informaciones</span>
              </div>
            </button>

            <button
              onClick={() => setPlaylistsModalOpen(true)}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all hover:border-secondary/50 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <Music className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="font-semibold text-foreground">Playlists</span>
              </div>
            </button>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </main>

      {/* Info Modal */}
      <InfoModal isOpen={infoModalOpen} onClose={() => setInfoModalOpen(false)} />

      <PlaylistsModal isOpen={playlistsModalOpen} onClose={() => setPlaylistsModalOpen(false)} />
    </div>
  )
}
