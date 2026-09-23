const journeyImages = [
  "/journey/IMG-20260904-WA0012.jpg",
  "/journey/IMG-20260904-WA0014.jpg",
  "/journey/IMG-20260904-WA0024.jpg",
  "/journey/IMG-20260904-WA0036.jpg",
  "/journey/IMG-20260904-WA0038.jpg",
  "/journey/IMG-20260904-WA0040.jpg",
];

const Journey = () => {
  return (
    <section id="journey" className="relative mx-auto mt-28 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_26%)]" />

      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1.2fr] lg:gap-12">
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.35em] text-fuchsia-200">
            The journey
          </div>

          <div className="relative">
            <span className="absolute -left-3 top-2 h-14 w-14 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <span className="absolute -right-4 bottom-5 h-16 w-16 rounded-full bg-cyan-500/20 blur-3xl" />

            <h2 className="relative text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              It has been an amazing journey so far, although I have a feeling I&apos;m
              just getting started.
            </h2>
          </div>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            <p>
              From early jam sessions to late-night studio sessions, every step has shaped
              the sound, the soul, and the ambition behind the music. What began as a
              love for rhythm and expression has grown into a deeper purpose: creating
              music that moves people and brings communities together.
            </p>
            <p>
              Every performance, every collaboration, and every challenge has taught me
              that this path is not just about talent—it&apos;s about discipline, resilience,
              and staying honest to the craft. I&apos;m still learning, still evolving, and
              still chasing the next unforgettable moment.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Live performance",
              "Studio sessions",
              "Artistic growth",
              "Future sound",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/15 via-transparent to-cyan-500/10 blur-2xl" />

          <div className="relative grid grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-slate-950/40 p-4 shadow-[0_30px_70px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:gap-5 sm:p-5">
            {journeyImages.map((image, index) => (
              <div
                key={image}
                className={[
                  "group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70",
                  index === 0 || index === 3 ? "col-span-1 row-span-2" : "",
                ].join(" ")}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80 transition duration-300 group-hover:opacity-90" />

                <img
                  src={image}
                  alt={`Journey memory ${index + 1}`}
                  className="journey-image h-full min-h-[160px] w-full object-cover transition duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                />

                <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/75">
                    Memory
                  </span>
                  <span className="text-xs text-fuchsia-200">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
