"use client"

import { useState } from "react"
import { Play, Music, Info, Mail, Youtube, Instagram, Facebook, MapPin, X } from "lucide-react"
import Image from "next/image"
import YoutubeVideos from "./youtube-videos"
import LiveButton from "./live-button"
import InfoModal from "./info-modal"
import PlaylistsModal from "./playlists-modal"

// Location Modal Component
function LocationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-6">Ubicación</h2>

        <div className="mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
            <div className="text-gray-700 leading-relaxed">
              <p>Barrio La Habana, Esquina Q,</p>
              <p>Municipio Consuelo,</p>
              <p>San Pedro de Macorís, 21000</p>
              <p>República Dominicana</p>
            </div>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/place/Iglesia+Bautista+Dominicana+Consuelo+Inc./@18.5601035,-69.3040126,17z/data=!3m1!4b1!4m6!3m5!1s0x8eaf67eee021b76b:0xad73c567afe59419!8m2!3d18.5601035!4d-69.3040126!16s%2Fg%2F1hm4wzmjc?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition-colors"
        >
          Ver Mapa
        </a>

        <button
          onClick={onClose}
          className="mt-3 w-full text-center bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default function LinkBioPage() {
  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [playlistsModalOpen, setPlaylistsModalOpen] = useState(false)
  const [locationModalOpen, setLocationModalOpen] = useState(false)

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
              <button
                onClick={() => setLocationModalOpen(true)}
                className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <MapPin className="w-6 h-6 text-red-600" />
              </button>
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
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-0.5">YouTube</div>
                <div className="font-semibold text-gray-900 truncate">@IglesiaBautistaDominicana</div>
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
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-0.5">Facebook</div>
                <div className="font-semibold text-gray-900 truncate">@IglesiaBautistaDominicana</div>
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
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-0.5">Instagram</div>
                <div className="font-semibold text-gray-900 truncate">@IglesiaBautistaDominicana</div>
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
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-0.5">Instagram</div>
                <div className="font-semibold text-gray-900 truncate">@ConGeneracionIBD</div>
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
      <LocationModal isOpen={locationModalOpen} onClose={() => setLocationModalOpen(false)} />
    </div>
  )
}