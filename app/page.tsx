import { Suspense } from "react"
import LinkBioPage from "@/components/link-bio-page"

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen bg-background" />}>
      <LinkBioPage />
    </Suspense>
  )
}
