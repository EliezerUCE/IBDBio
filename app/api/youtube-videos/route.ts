import { NextResponse } from "next/server"

const CHANNEL_ID = "UCd1bRyFryZwiZV-mBy7JXQA"
const API_KEY = process.env.YOUTUBE_API_KEY

export async function GET() {
  try {
    if (!API_KEY) {
      return NextResponse.json({ error: "API key no configurada" }, { status: 500 })
    }

    // Search for recent uploads from the channel
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=2&key=${API_KEY}`

    const searchResponse = await fetch(searchUrl, {
      next: { revalidate: 3600 },
    })
    const searchData = await searchResponse.json()

    if (!searchData.items || searchData.items.length === 0) {
      return NextResponse.json({ videos: [] })
    }

    const videos = searchData.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      publishedAt: item.snippet.publishedAt,
    }))

    return NextResponse.json({ videos })
  } catch (error) {
    console.error("YouTube API error:", error)
    return NextResponse.json({ error: "Error al cargar los videos" }, { status: 500 })
  }
}
