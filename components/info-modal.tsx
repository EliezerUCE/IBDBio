"use client"
import Image from "next/image"
import { X } from "lucide-react"

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  const infoImageUrl = "/images/informaciones.jpg"

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-lg bg-card p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4 rounded-lg p-1 hover:bg-border transition-colors">
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="pr-8 text-xl font-semibold text-foreground">Informaciones</h2>

        {/* Image Display */}
        <div className="mt-6">
          <div className="relative rounded-lg overflow-hidden bg-muted">
            <Image
              src={infoImageUrl || "/placeholder.svg"}
              alt="Información de la iglesia"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
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
