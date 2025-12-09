import { NextResponse } from "next/server"

const CHANNEL_ID = "UCd1bRyFryZwiZV-mBy7JXQA"
const API_KEY = process.env.YOUTUBE_API_KEY

export async function GET() {
  try {
    if (!API_KEY) {
      return NextResponse.json({ isLive: false, liveUrl: null }, { status: 200 })
    }

    // Search for live broadcasts
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`

    const searchResponse = await fetch(searchUrl, { next: { revalidate: 30 } })
    const searchData = await searchResponse.json()

    if (!searchData.items || searchData.items.length === 0) {
      return NextResponse.json({
        isLive: false,
        liveUrl: null,
      })
    }

    const liveVideo = searchData.items[0]
    const videoId = liveVideo.id.videoId

    return NextResponse.json({
      isLive: true,
      liveUrl: `https://www.youtube.com/watch?v=${videoId}`,
    })
  } catch (error) {
    console.error("YouTube Live API error:", error)
    return NextResponse.json({ isLive: false, liveUrl: null }, { status: 200 })
  }
}
