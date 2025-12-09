import { type NextRequest, NextResponse } from "next/server"

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const channelId = searchParams.get("channelId")
  const maxResults = searchParams.get("maxResults") || "2"

  if (!YOUTUBE_API_KEY) {
    return NextResponse.json({ error: "YouTube API key not configured", videos: [] }, { status: 200 })
  }

  if (!channelId) {
    return NextResponse.json({ error: "Channel ID is required" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`,
    )

    const data = await response.json()

    if (data.items) {
      const videos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium.url,
        publishedAt: item.snippet.publishedAt,
      }))

      return NextResponse.json({ videos })
    }

    return NextResponse.json({ videos: [] })
  } catch (error) {
    console.error("[v0] Error fetching latest videos:", error)
    return NextResponse.json({ error: "Failed to fetch videos", videos: [] }, { status: 500 })
  }
}
