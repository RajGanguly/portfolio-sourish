const Contact = () => {
  const email = "sourish11kumar@gmail.com";
  const subject = encodeURIComponent("Portfolio Visit - General enquiry");
  const body = encodeURIComponent(
    "Hello Sourish,\n\nI came across your portfolio and would like to get in touch regarding a collaboration, project, or enquiry.\n\nBest regards,"
  );

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="relative mx-auto mt-28 w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(168,85,247,0.12),rgba(15,23,42,0.7),rgba(34,211,238,0.08))] p-6 shadow-[0_0_60px_rgba(168,85,247,0.08)] sm:p-8 lg:p-12">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-fuchsia-200/80">
              Contact
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build the next idea, session, or collaboration.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Whether you&apos;re looking for live performance, studio work, creative partnerships,
              or a conversation around the next project, I&apos;d be glad to connect.
            </p>
          </div>

          <a
            href={mailtoLink}
            className="inline-flex items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-500/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-fuchsia-200 hover:bg-fuchsia-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.24)]"
          >
            Email for enquiries
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
