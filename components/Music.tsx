"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MusicVideo = {
  id: string;
  title: string;
  publishedAt?: string | null;
};

const Music = () => {
  const [videos, setVideos] = useState<MusicVideo[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/music-videos");
        const data = (await response.json()) as MusicVideo[];
        setVideos(data.slice(0, 10));
      } catch (error) {
        console.error("Failed to fetch music videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const repeatedVideos = videos.length > 0 ? [...videos, ...videos] : [];

  const musicDescription =
    "I am a professional drummer and co-founder of Underground Authority, building a sound that balances precision, emotion, and forward motion. My work spans live performance, studio recordings, independent projects, and experimental collaborations, with an emphasis on musicality, texture, and presence. I’m available for travel gigs, session work, and creative partnerships, while continuing to shape a future-facing sound rooted in authenticity and artistic evolution.";

  return (
    <section
      id="music"
      className="relative mx-auto mt-24 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.38em] text-fuchsia-300/80">
            Music
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Underground Authority
          </h2>
        </div>

        <a
          href="https://www.youtube.com/@UndergroundAuthority/videos"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition duration-300 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:text-white"
        >
          View channel
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b17]/90 p-4 shadow-[0_0_80px_rgba(168,85,247,0.12)] backdrop-blur-sm sm:p-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070b17] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070b17] to-transparent" />

        <div className="mb-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          {musicDescription}
        </div>

        <div className="group overflow-hidden">
          <div className="animate-music-scroll group-hover:[animation-play-state:paused] flex w-max items-center gap-5 sm:gap-6">
            {repeatedVideos.map((video, index) => {
              const isActive = activeId === video.id;

              return (
                <div
                  key={`${video.id}-${index}`}
                  onMouseEnter={() => setActiveId(video.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className="group/card relative block w-[260px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950/80 shadow-[0_18px_40px_rgba(15,23,42,0.75)] transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:shadow-[0_28px_80px_rgba(168,85,247,0.22)] sm:w-[310px]"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                  {isActive ? (
                    <iframe
                      className="h-[200px] w-full object-cover sm:h-[240px]"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&loop=1&playlist=${video.id}&controls=0&rel=0&modestbranding=1&playsinline=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title || "Underground Authority video"}
                      width={1280}
                      height={720}
                      unoptimized
                      className="h-[200px] w-full object-cover transition duration-500 group-hover/card:scale-110 group-hover/card:brightness-110 sm:h-[240px]"
                    />
                  )}

                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
                        {isActive ? "Playing" : "Live"}
                      </span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white shadow-lg backdrop-blur-sm transition duration-300 group-hover/card:scale-105 group-hover/card:bg-fuchsia-500/30"
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`Open ${video.title} on YouTube`}
                      >
                        ▶
                      </a>
                    </div>

                    <div>
                      <p className="line-clamp-2 text-lg font-semibold text-white sm:text-xl">
                        {video.title || "Underground Authority"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
