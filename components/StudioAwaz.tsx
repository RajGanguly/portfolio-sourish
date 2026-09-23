const StudioAwaz = () => {
  return (
    <section
      id="studio-awaz"
      className="relative mx-auto mt-24 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div
        className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d18] shadow-[0_0_80px_rgba(34,211,238,0.12)]"
        style={{
          backgroundImage: "url('/studio_awaz1.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.18),transparent_40%),linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.72),rgba(2,6,23,0.28))]" />

        <div className="relative z-10 grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-14">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200/80">
              Studio Awaz
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Private, professional recording for artists who want their sound to feel alive.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              Studio Awaz is an independent, private recording space built for musicians, singer-songwriters,
              producers, and creative teams who want focused sessions, modern workflow, and a high-end
              acoustic environment. From tracking to mix support, every detail is set up to help your art
              land with clarity, depth, and intention.
            </p>
          </div>

          <div className="flex items-end justify-start lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
                Equipped for serious sessions
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>• Modern tracking rigs and monitored signal chains</li>
                <li>• Professional mic selection and room treatment</li>
                <li>• Clean, focused private setup for creative work</li>
                <li>• Built for musicians, demos, and polished recordings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioAwaz;
