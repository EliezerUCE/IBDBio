"use client"

import { Mail, Youtube, Instagram, Facebook } from "lucide-react"

export default function SocialLinks() {
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
    <section className="border-t border-border/50 pt-8">
      <h2 className="mb-6 text-center text-sm font-semibold text-foreground/60">Síguenos en nuestras redes</h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3 sm:p-4 transition-all hover:border-secondary/50 hover:bg-secondary/5"
            >
              <Icon className={`h-6 w-6 transition-colors ${link.color}`} />
              <span className="text-xs font-medium text-foreground text-center">{link.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
