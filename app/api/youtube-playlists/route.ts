import { NextResponse } from "next/server"

const CHANNEL_ID = "UCd1bRyFryZwiZV-mBy7JXQA"
const API_KEY = process.env.YOUTUBE_API_KEY

export async function GET() {
  try {
    if (!API_KEY) {
      return NextResponse.json({ error: "API key no configurada" }, { status: 500 })
    }

    // Get playlists from channel
    const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=20&key=${API_KEY}`

    const response = await fetch(playlistsUrl, { next: { revalidate: 3600 } })
    const data = await response.json()

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ playlists: [] })
    }

    const playlists = data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || "",
      url: `https://www.youtube.com/playlist?list=${item.id}`,
      videoCount: item.contentDetails?.itemCount || 0,
    }))

    return NextResponse.json({ playlists })
  } catch (error) {
    console.error("YouTube Playlists API error:", error)
    return NextResponse.json({ error: "Error al cargar las playlists" }, { status: 500 })
  }
}
