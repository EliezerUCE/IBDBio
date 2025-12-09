import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Facebook, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@IglesiaBautistaDominicana",
    icon: Youtube,
    color: "hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-950/50",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/iglesiabautistadominicana",
    icon: Instagram,
    color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 dark:hover:bg-pink-950/50",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/iglesiabautistadominicana",
    icon: Facebook,
    color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-950/50",
  },
  {
    name: "Correo",
    url: "mailto:iglesiabautistadom@gmail.com",
    icon: Mail,
    color: "hover:bg-green-50 hover:text-green-600 hover:border-green-200 dark:hover:bg-green-950/50",
  },
]

export function SocialLinks() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Síguenos</h2>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            <Button variant="outline" className={`w-full h-14 transition-all ${link.color}`}>
              <link.icon className="mr-2 h-5 w-5" />
              {link.name}
            </Button>
          </a>
        ))}
      </div>
    </section>
  )
}
