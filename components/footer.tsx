import { FaGithub, FaLinkedinIn, FaMailBulk, FaWhatsapp } from "react-icons/fa";

const links = [
  { href: "https://github.com/IrfakMaulana", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/muhammad-irfa-maulana-430a86276", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://wa.me/6285850703910", label: "WhatsApp", Icon: FaWhatsapp },
  { href: "mailto:irfakmaulana05@gmail.com", label: "Email", Icon: FaMailBulk }
];

export default function Footer() {
  return <footer className="flex bg-black w-full items-center px-4 pt-6"><nav className="w-full flex justify-center gap-6 items-center" aria-label="Profil profesional">{links.map(({ href, label, Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label}><Icon className="text-white hover:text-gray-300 transition-colors text-xl" /></a>)}</nav></footer>;
}
