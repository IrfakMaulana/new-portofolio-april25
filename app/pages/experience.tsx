"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const experiences = [
  { company: "PT Sumber Wangi Masa", role: "Fullstack Developer", period: "Maret 2026 – Mei 2026", points: ["Membangun sistem absensi berbasis web untuk ±50 karyawan.", "Mengembangkan verifikasi FaceID, scan barcode berbasis radius kantor, dan GPS tracking untuk karyawan driver.", "Membangun platform e-commerce perusahaan dari pengembangan hingga deployment.", "Berkontribusi pada pengembangan modul ERP Internal, khususnya modul HR."] },
  { company: "PT Vipayment Digital Solution", role: "Backend Developer (Internship)", period: "Mei 2025 – Juli 2025", points: ["Membangun website finance menggunakan teknologi backend modern.", "Berkolaborasi dengan tim dalam merancang dan mengimplementasikan REST API."] },
  { company: "YEZZPAY", role: "Staff Customer Service (Part-time)", period: "April 2025 – Juni 2025", points: ["Melayani pelanggan toko game online yang berkolaborasi dengan mitra perusahaan internasional di Turki.", "Meningkatkan komunikasi profesional dalam lingkungan kerja multikultural.", "Melakukan pelaporan keluhan pelanggan dan hasil penjualan setiap hari."] },
  { company: "Freelance", role: "Web Developer", period: "Agustus 2023 – April 2025", points: ["Membangun sistem berbasis web dan panel administrasi sesuai kebutuhan pelanggan.", "Mengembangkan sistem top-up game online dan sistem e-commerce untuk mendukung aktivitas UMKM.", "Membangun Sistem Informasi Audit Mutu Internal (SIAMI) untuk Fakultas Teknik Universitas Darul 'Ulum Jombang.", "Melakukan analisis kebutuhan dan membantu menyelesaikan permasalahan teknis aplikasi."] }
];

export function Experience() {
  const data = experiences.map((item) => ({
    title: <span className="text-sm md:text-base">{item.company}</span>,
    smallScreenLogo: <span className="text-xs font-bold text-white">{item.company.slice(0, 2)}</span>,
    content: <article className="max-w-4xl mx-auto pb-4"><h3 className="font-bold text-xl md:text-2xl text-white">{item.role}</h3><p className="text-gray-400 text-sm mt-2 italic">{item.period}</p><ul className="mt-5 space-y-2 text-sm text-gray-400 list-disc pl-5">{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>
  }));
  return <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20" id="experience"><p className="text-sm font-medium tracking-[.18em] uppercase text-indigo-200">Karier</p><h2 className="mt-3 text-3xl md:text-4xl font-bold text-left pb-10 text-white">Pengalaman</h2><Timeline data={data} /></section>;
}
