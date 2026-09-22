import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";

const navigation = [
  ["Tentang", "#about"], ["Pengalaman", "#experience"], ["Keahlian", "#skills"], ["Proyek", "#projects"], ["Kontak", "#contact"]
];

export default function HomeScreen() {
  return <section className="relative min-h-screen overflow-hidden bg-black" id="home">
    <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#home" className="text-sm font-bold tracking-wide text-white">IM<span className="text-indigo-300">.</span></a>
      <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex" aria-label="Navigasi utama">{navigation.map(([label, href]) => <a key={href} href={href} className="transition hover:text-white">{label}</a>)}</nav>
      <a href="#contact" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-indigo-300 hover:bg-white/5">Hubungi Saya</a>
    </header>
    <div className="relative z-20 mx-auto flex min-h-[calc(100vh-76px)] max-w-4xl flex-col items-center justify-center px-5 pb-24 text-center sm:px-8">
      <p className="mb-5 text-sm font-medium tracking-[.2em] text-indigo-200 uppercase">PORTOFOLIO 2026</p>
      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"><span className="block text-zinc-300"><FlipWords duration={3000} words={["Halo, saya"]} /></span><span className="mt-2 block"><FlipWords duration={3000} words={["Muhammad Irfa' Maulana"]} /></span></h1>
      <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Lulusan <strong className="font-medium text-white">S1 Teknik Informatika</strong> dengan pengalaman pengembangan aplikasi web. Terbuka untuk berbagai kesempatan kerja, siap belajar, beradaptasi, dan bekerja sama dalam tim.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3"><a href="#projects" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-indigo-100">Lihat Proyek</a><a href="/assets/file/CV-Muhammad_Irfa'_Maulana-2026%20(2).pdf" download className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300 hover:bg-white/5">Unduh CV</a><a href="https://www.linkedin.com/in/muhammad-irfa-maulana-430a86276" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300 hover:bg-white/5">LinkedIn</a></div>
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64"><SparklesCore background="transparent" minSize={0.1} maxSize={1} particleDensity={900} className="h-full w-full" particleColor="#c7d2fe" /><div className="absolute inset-0 bg-black [mask-image:radial-gradient(500px_180px_at_bottom,transparent_15%,black)]" /></div>
  </section>;
}
