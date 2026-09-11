"use client";

import React from "react";

const skillGroups = [
  ["Backend", "PHP · Laravel · NestJS · Node.js"],
  ["Frontend", "JavaScript · TypeScript · React.js · Next.js"],
  ["Database", "MySQL · PostgreSQL · Prisma ORM"],
  ["DevOps", "Docker · Git · GitHub"],
  ["Kemampuan Profesional", "Web Development · Database Design · Analisis Data · Pengembangan Sistem"],
  ["Kemampuan Pendukung", "Microsoft Office · Problem Solving · Presentasi · Komunikasi · Customer Service · Analisa Kebutuhan Pengguna · Kerja Sama Tim · Manajemen Tanggung Jawab"]
];

const Networking = () => (
  <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20" id="skills">
    <p className="text-sm font-medium tracking-[.18em] uppercase text-indigo-200">Kompetensi</p><h2 className="mt-3 text-3xl md:text-4xl font-bold text-left pb-6 text-white">Keahlian</h2>
    <p className="md:text-xl text-sm lg:text-xl font-medium text-gray-400 pb-8">Kemampuan teknis dan profesional yang saya kembangkan melalui pendidikan, pengalaman kerja, dan proyek pengembangan sistem.</p>
    <div className="relative overflow-hidden rounded-md p-[1px]"><div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /><div className="relative z-10 bg-black rounded-md p-6"><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{skillGroups.map(([title, skills]) => <div key={title} className="bg-black p-5 rounded-md"><h3 className="text-white font-semibold mb-2">{title}</h3><p className="text-sm leading-relaxed text-gray-300">{skills}</p></div>)}</div></div></div>
  </section>
);

export default Networking;
