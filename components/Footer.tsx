import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1HFcmvHaJy/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@sourishkumar_11?si=gFuYGhm5aZBjFgUX",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sourishkumar_11?stkn=MWVoNnpxZnZsaTg2Nw%3D%3D&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sourishkumar11",
    icon: FaLinkedinIn,
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/20 py-6 text-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:px-6 md:flex-row md:px-8">
        <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-white/80 sm:text-base">
          <FaRegCopyright className="h-4 w-4 text-white/70" />
          <span>{new Date().getFullYear()} Sourish Kumar</span>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
