import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const CHANNEL_HANDLE = "UndergroundAuthority";
const CHANNEL_URL = `https://www.youtube.com/@${CHANNEL_HANDLE}/videos`;

const decodeHtml = (value: string) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'");

const getChannelId = async (): Promise<string | null> => {
  try {
    const response = await fetch(CHANNEL_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const patterns = [
      /"channelId":"(UC[A-Za-z0-9_-]{22})"/,
      /"externalId":"(UC[A-Za-z0-9_-]{22})"/,
      /"ownerId":"(UC[A-Za-z0-9_-]{22})"/,
      /"channel_id":"(UC[0-9A-Za-z_-]{22})"/,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        return match[1];
      }
    }

    return null;
  } catch {
    return null;
  }
};

const getFeedUrl = async () => {
  const channelId = await getChannelId();
  return channelId
    ? `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    : `https://www.youtube.com/feeds/videos.xml?user=${CHANNEL_HANDLE}`;
};

export async function GET() {
  try {
    const feedUrl = await getFeedUrl();

    const response = await fetch(feedUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        Accept: "application/xml, text/xml, */*",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`YouTube feed request failed with status ${response.status}`);
    }

    const xml = await response.text();
    const entries = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g));

    const videos = entries
      .slice(0, 10)
      .map((entryMatch) => {
        const entry = entryMatch[1];
        const idMatch = entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
        const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
        const publishedMatch = entry.match(/<published>([\s\S]*?)<\/published>/);

        return {
          id: idMatch ? idMatch[1].trim() : "",
          title: titleMatch ? decodeHtml(titleMatch[1].trim()) : CHANNEL_HANDLE,
          publishedAt: publishedMatch ? publishedMatch[1].trim() : null,
        };
      })
      .filter((video) => video.id)
      .slice(0, 10);

    if (videos.length === 0) {
      throw new Error("No videos were returned from the YouTube channel feed.");
    }

    return NextResponse.json(videos);
  } catch (error) {
    console.error("music-videos fetch failed:", error);
    return NextResponse.json([], { status: 200 });
  }
}
