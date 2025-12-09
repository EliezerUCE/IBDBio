import { type NextRequest, NextResponse } from "next/server"

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const channelId = searchParams.get("channelId")

  if (!YOUTUBE_API_KEY) {
    return NextResponse.json({ error: "YouTube API key not configured", isLive: false }, { status: 200 })
  }

  if (!channelId) {
    return NextResponse.json({ error: "Channel ID is required", isLive: false }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${YOUTUBE_API_KEY}`,
    )

    const data = await response.json()

    if (data.items && data.items.length > 0) {
      return NextResponse.json({
        isLive: true,
        videoId: data.items[0].id.videoId,
        title: data.items[0].snippet.title,
      })
    }

    return NextResponse.json({ isLive: false })
  } catch (error) {
    console.error("[v0] Error fetching live status:", error)
    return NextResponse.json({ error: "Failed to check live status", isLive: false }, { status: 500 })
  }
}
