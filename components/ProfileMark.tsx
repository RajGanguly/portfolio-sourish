const ProfileMark = () => {
  return (
    <div className="fixed left-4 top-4 z-50 md:left-6 md:top-6">
      <div className="absolute -inset-3 rounded-full bg-fuchsia-500/20 blur-2xl" />

      <div className="relative">
        <div className="absolute inset-0 rounded-[32%_32%_42%_42%/30%_30%_55%_55%] border border-white/20 bg-white/5 backdrop-blur-sm shadow-[0_0_32px_rgba(168,85,247,0.28)]" />

        <div className="relative h-16 w-16 overflow-visible rounded-[32%_32%_42%_42%/30%_30%_55%_55%] border border-white/10 bg-slate-900/70 p-[3px] shadow-[0_20px_40px_rgba(15,23,42,0.7)] transition duration-300 hover:scale-[1.03] md:h-20 md:w-20">
          <div className="relative h-full w-full overflow-hidden rounded-[30%_30%_40%_40%/28%_28%_52%_52%] bg-slate-950">
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/portfolio_icon.jpg')" }}
            />
          </div>

          <div className="absolute -bottom-1.5 right-1.5 h-4 w-4 rounded-full border-[4px] border-slate-200/80 bg-slate-800/80 shadow-[0_0_16px_rgba(255,255,255,0.45)] md:h-5 md:w-5" />
        </div>
      </div>
    </div>
  );
};

export default ProfileMark;
