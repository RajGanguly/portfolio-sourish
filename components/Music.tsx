const musicVideos = [
  "7ZQR3GXXkes",
  "7_DKbhAGRq0",
  "7jf40i3U1SI",
  "9eFySB2-Qpo",
  "Alrh_ZR_X0Y",
  "ECOg2Un9cFw",
  "InF_mjdhKSc",
  "J1ZF8vp1sO0",
  "MfRXgVID8oE",
  "Pf6AiL5h4J4",
];

const Music = () => {
  const repeatedVideos = [...musicVideos, ...musicVideos];

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

        <div className="group overflow-hidden">
          <div className="animate-music-scroll group-hover:[animation-play-state:paused] flex w-max items-center gap-5 sm:gap-6">
            {repeatedVideos.map((videoId, index) => (
              <a
                key={`${videoId}-${index}`}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
                className="group/card relative block w-[260px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950/80 shadow-[0_18px_40px_rgba(15,23,42,0.75)] transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:shadow-[0_28px_80px_rgba(168,85,247,0.22)] sm:w-[310px]"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={`Underground Authority video ${index + 1}`}
                  className="h-[200px] w-full object-cover transition duration-500 group-hover/card:scale-110 group-hover/card:brightness-110 sm:h-[240px]"
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
                      Live
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white shadow-lg backdrop-blur-sm transition duration-300 group-hover/card:scale-105 group-hover/card:bg-fuchsia-500/30">
                      ▶
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      Underground Authority
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white/65">
                      Session {index + 1}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
