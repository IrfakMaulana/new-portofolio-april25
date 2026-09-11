"use client";

import Link from "next/link";
import React from "react";

const About = () => (
  <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20" id="about">
    <p className="text-sm font-medium tracking-[.18em] uppercase text-indigo-200">Profil</p><h2 className="mt-3 text-3xl md:text-4xl font-bold text-left pb-8 text-white">Tentang Saya</h2>
    <div className="max-w-3xl text-base sm:text-lg leading-8 font-medium text-left text-zinc-400">
      <p>Saya Muhammad Irfa&apos; Maulana, lulusan S1 Teknik Informatika tahun 2026 dari Universitas Darul &apos;Ulum Jombang.</p>
      <p className="mt-6">Saya memiliki pengalaman di bidang teknologi dan pengembangan aplikasi web, baik secara mandiri maupun dalam tim.</p>
      <p className="mt-6">Terbiasa mempelajari hal baru dengan cepat, menganalisis kebutuhan pengguna, serta mengembangkan solusi yang mendukung kebutuhan organisasi maupun pelanggan.</p>
      <p className="mt-6">Saya terbuka untuk berbagai kesempatan kerja dan siap mengembangkan kemampuan sesuai kebutuhan perusahaan.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-9 text-sm leading-6">
        <div className="border border-white/20 rounded-xl p-5"><p className="text-white font-semibold">Universitas Darul &apos;Ulum Jombang</p><p>September 2022 – Agustus 2026</p><p>S1 Teknik Informatika · IPK 3.61</p></div>
        <div className="border border-white/20 rounded-xl p-5"><p className="text-white font-semibold">SMK Negeri 3 Jombang</p><p>Agustus 2019 – Juni 2022</p><p>Teknik Elektronika Industri · Nilai rata-rata 83.42</p></div>
      </div>
    </div>
    <Link href="#contact" className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300 hover:bg-white/5">Hubungi Saya</Link>
  </section>
);

export default About;
