"use client"

import { Mail, Youtube, Instagram, Facebook } from "lucide-react"

export default function SocialIcons() {
  const links = [
    {
      icon: Youtube,
      label: "YouTube",
      url: "https://www.youtube.com/@IglesiaBautistaDominicana",
      color: "text-red-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/iglesiabautistadominicana",
      color: "text-pink-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com/iglesiabautistadominicana",
      color: "text-blue-600",
    },
    {
      icon: Mail,
      label: "Contacto",
      url: "mailto:iglesiabautistadom@gmail.com",
      color: "text-secondary",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-full border border-border bg-white/80 p-3 transition-all hover:border-secondary/50 hover:bg-secondary/10 hover:scale-110"
            title={link.label}
          >
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors ${link.color}`} />
          </a>
        )
      })}
    </div>
  )
}
