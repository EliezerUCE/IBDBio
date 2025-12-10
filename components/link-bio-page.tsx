"use client"

import { useState } from "react"
import { Play, Music, Info, Mail, Youtube, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import YoutubeVideos from "./youtube-videos"
import LiveButton from "./live-button"
import InfoModal from "./info-modal"
import PlaylistsModal from "./playlists-modal"

export default function LinkBioPage() {
  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [playlistsModalOpen, setPlaylistsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 via-white to-blue-50/30 flex items-center justify-center p-4">
      {/* Main Container with Border */}
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-gray-200/60 shadow-sm overflow-hidden">
        {/* Header Section */}
        <div className="px-6 py-10 border-b border-gray-200/60">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/logo.png"
                  alt="Logo IBD"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Iglesia Bautista Dominicana
            </h1>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Columna y Baluarte de la Verdad
            </p>
            <p className="text-lg text-gray-600">Bienvenido</p>
          </div>

          {/* Social Icons Card */}
          <div className="bg-pink-50/60 rounded-2xl p-6 border border-pink-100">
            <p className="text-center text-gray-600 text-sm mb-5">
              Conecta con nuestra comunidad
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.youtube.com/@IglesiaBautistaDominicana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <Youtube className="w-6 h-6 text-red-600" />
              </a>
              <a
                href="https://www.instagram.com/iglesiabautistadominicana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <Instagram className="w-6 h-6 text-pink-600" />
              </a>
              <a
                href="https://facebook.com/iglesiabautistadominicana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="mailto:iglesiabautistadom@gmail.com"
                className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <Mail className="w-6 h-6 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="px-6 py-8">
          {/* Service Times */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Domingos 9:00AM & 6:30 PM
            </h2>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
              En Vivo
            </p>
          </div>

          {/* Live Button */}
          <div className="flex justify-center mb-8">
            <LiveButton />
          </div>

          {/* Social Handles */}
          <div className="space-y-3 mb-8">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@IglesiaBautistaDominicana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <div className="p-2.5 bg-white rounded-xl border border-gray-200">
                <Youtube className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">YouTube</div>
                <div className="font-semibold text-gray-900">@IglesiaBautistaDominicana</div>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/iglesiabautistadominicana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <div className="p-2.5 bg-white rounded-xl border border-gray-200">
                <Facebook className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">Facebook</div>
                <div className="font-semibold text-gray-900">@IglesiaBautistaDominicana</div>
              </div>
            </a>

            {/* Instagram 1 */}
            <a
              href="https://www.instagram.com/iglesiabautistadominicana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <div className="p-2.5 bg-white rounded-xl border border-gray-200">
                <Instagram className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">Instagram</div>
                <div className="font-semibold text-gray-900">@IglesiaBautistaDominicana</div>
              </div>
            </a>

            {/* Instagram 2 - ConGeneracion */}
            <a
              href="https://www.instagram.com/congeneracionibd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <div className="p-2.5 bg-white rounded-xl border border-gray-200">
                <Instagram className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-0.5">Instagram</div>
                <div className="font-semibold text-gray-900">@ConGeneracionIBD</div>
              </div>
            </a>
          </div>

          {/* Action Buttons - Symmetric */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button
              onClick={() => setInfoModalOpen(true)}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <div className="w-6 h-6 rounded-full border-2 border-orange-400"></div>
              <span className="text-sm font-medium text-gray-700 text-center">
                Actividades de la semana
              </span>
            </button>
            <button
              onClick={() => setPlaylistsModalOpen(true)}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <Music className="w-6 h-6 text-orange-400" />
              <span className="text-sm font-medium text-gray-700 text-center">
                Playlists
              </span>
            </button>
          </div>

          {/* Videos Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-red-600 fill-red-600" />
              Últimos Videos
            </h3>
            <YoutubeVideos />
          </div>
        </div>
      </div>

      {/* Modals */}
      <InfoModal isOpen={infoModalOpen} onClose={() => setInfoModalOpen(false)} />
      <PlaylistsModal isOpen={playlistsModalOpen} onClose={() => setPlaylistsModalOpen(false)} />
    </div>
  )
}