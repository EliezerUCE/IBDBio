import { ChurchHeader } from "@/components/church-header"
import { LiveButton } from "@/components/live-button"
import { LatestVideos } from "@/components/latest-videos"
import { SocialLinks } from "@/components/social-links"
import { PlaylistsSection } from "@/components/playlists-section"
import { InfoButton } from "@/components/info-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <ChurchHeader />
        <LiveButton />
        <LatestVideos />
        <PlaylistsSection />
        <SocialLinks />
        <InfoButton />
      </div>
    </main>
  )
}
