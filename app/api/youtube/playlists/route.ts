import { type NextRequest, NextResponse } from "next/server"

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const channelId = searchParams.get("channelId")

  if (!YOUTUBE_API_KEY) {
    return NextResponse.json({ error: "YouTube API key not configured", playlists: [] }, { status: 200 })
  }

  if (!channelId) {
    return NextResponse.json({ error: "Channel ID is required" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=10&key=${YOUTUBE_API_KEY}`,
    )

    const data = await response.json()

    if (data.items) {
      const playlists = data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        videoCount: item.contentDetails.itemCount,
      }))

      return NextResponse.json({ playlists })
    }

    return NextResponse.json({ playlists: [] })
  } catch (error) {
    console.error("[v0] Error fetching playlists:", error)
    return NextResponse.json({ error: "Failed to fetch playlists", playlists: [] }, { status: 500 })
  }
}
