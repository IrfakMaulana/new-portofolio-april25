"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const contactLinks = [
  { label: "Email", href: "mailto:irfakmaulana05@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/6285850703910", Icon: FaWhatsapp },
  { label: "GitHub", href: "https://github.com/IrfakMaulana", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-irfa-maulana-430a86276", Icon: FaLinkedinIn }
];

export default function ContactForm() {
  return <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20" id="contact"><div className="rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:p-10"><p className="text-sm font-medium tracking-[.18em] uppercase text-indigo-200">Kontak</p><h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Mari Terhubung</h2><p className="mt-5 max-w-3xl text-base sm:text-lg leading-7 font-medium text-zinc-400">Saya terbuka untuk berbagai kesempatan kerja, kolaborasi, dan diskusi mengenai pengembangan sistem. Silakan hubungi saya melalui kanal berikut.</p><div className="mt-8 flex flex-wrap gap-3">{contactLinks.map(({ label, href, Icon }) => <a key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white transition hover:border-indigo-300 hover:bg-white/5" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{Icon && <Icon />}{label}</a>)}</div></div><footer className="pt-14 pb-4 text-center text-sm text-zinc-500">© Muhammad Irfa&apos; Maulana</footer></section>;
}
