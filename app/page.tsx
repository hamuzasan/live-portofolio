import Image from "next/image";
import { MobileBottomNav } from "./mobile-bottom-nav";

const profileItems = [
  ["Nama", "Hamzah Fadillah"],
  ["Program Studi", "Sistem Informasi"],
  ["Fokus", "Web Development, AI Integration, Digitalisasi Proses Bisnis"],
  ["Area Magang", "Jabodetabek"],
  ["GitHub", "hamuzasan"],
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Tailwind CSS",
  "Next.js",
  "Supabase",
  "MySQL",
  "Git & GitHub",
  "Gemini API",
  "Prompt Engineering",
  "Stitch",
  "AI-assisted Development",
];

const projects = [
  {
    name: "SATOMI",
    link: "https://satomi-pi.vercel.app/",
    status: "Sedang dijalani",
    description:
      "Aplikasi AI untuk manajemen keuangan berbasis gamification dan chat, dengan fitur modern untuk membantu pengguna mengelola kebiasaan finansial secara lebih interaktif.",
    tags: ["Next.js", "Web App", "AI-ready", "Vercel"],
    accent: "cyan",
    image: "/projects/satomi.webp",
  },
  {
    name: "Absensi TK Bina Insan Kreatif",
    link: "http://tkbinainsankreatif.free.nf/",
    status: "Deployed",
    description:
      "Website absensi untuk kebutuhan guru dan admin, mencakup pencatatan kehadiran siswa/guru serta rekap data.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "Dashboard"],
    accent: "green",
    image: "/projects/absensi-tk-bina-insan-kreatif.webp",
  },
  {
    name: "Mountain Rose Leather",
    link: "https://mountainroseleather.com/",
    status: "Deployed",
    description:
      "Website katalog/toko online untuk brand tas kulit dengan tampilan elegan dan struktur produk.",
    tags: ["Next.js", "Ecommerce", "Product Catalog", "Vercel"],
    accent: "violet",
    image: "/projects/mountain-rose-leather.webp",
  },
];

const navItems = [
  ["Tentang", "#tentang"],
  ["Keahlian", "#keahlian"],
  ["Proyek", "#proyek"],
  ["Kontak", "#kontak"],
];

const email = "hamzahkiritokun@gmail.com";
const github = "https://github.com/hamuzasan";
const whatsapp = "https://wa.me/6282321181499";

function accentClasses(accent: string) {
  if (accent === "green") {
    return "border-green/30 bg-green/10 text-green";
  }

  if (accent === "violet") {
    return "border-violet/30 bg-violet/10 text-violet";
  }

  return "border-cyan/30 bg-cyan/10 text-primary";
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden pb-24 md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
          aria-label="Navigasi utama"
        >
          <a href="#beranda" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl border border-primary/30 bg-primary/10 font-display text-lg font-extrabold text-primary shadow-glow">
              HF
            </span>
            <span className="hidden font-display text-sm font-bold text-white sm:inline">
              Hamzah Fadillah
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted transition hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/10"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section
        id="beranda"
        className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green/30 bg-green/10 px-4 py-2 font-mono text-sm text-green">
            <span className="size-2 rounded-full bg-green shadow-[0_0_18px_rgba(104,245,184,0.85)]" />
            Portfolio Web Developer Intern
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Membangun web yang rapi, adaptif, dan berorientasi solusi.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Saya mahasiswa Sistem Informasi yang berfokus pada pengembangan
            website, integrasi AI, dan digitalisasi proses bisnis.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyek"
              className="rounded-2xl bg-primary px-7 py-4 text-center font-semibold text-[#00363e] shadow-[0_0_32px_rgba(47,217,244,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(47,217,244,0.42)]"
            >
              Lihat Proyek
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 text-center font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <aside className="glass-card specular-border rounded-[2rem] p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-5">
            <div className="grid size-20 shrink-0 place-items-center rounded-[1.75rem] border border-primary/40 bg-primary/10 font-display text-3xl font-extrabold text-primary shadow-glow">
              HF
            </div>
            <div>
              <p className="font-mono text-sm text-green">
                Open for Intern
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white">
                Hamzah Fadillah
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-mono text-xs uppercase text-primary">
                Program Studi
              </p>
              <p className="mt-2 font-semibold text-white">Sistem Informasi</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-mono text-xs uppercase text-primary">
                Fokus
              </p>
              <p className="mt-2 font-semibold text-white">Web & AI</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-mono text-xs uppercase text-primary">
                Area
              </p>
              <p className="mt-2 font-semibold text-white">Jabodetabek</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-mono text-xs uppercase text-primary">
                GitHub
              </p>
              <p className="mt-2 font-semibold text-white">hamuzasan</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="tentang" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-sm uppercase text-primary">
              Tentang
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Profil singkat
            </h2>
          </div>
          <div className="glass-card specular-border rounded-[2rem] p-6 sm:p-8">
            <p className="text-lg leading-8 text-muted">
              Mahasiswa Sistem Informasi yang berfokus pada pengembangan
              website, integrasi AI, dan digitalisasi proses bisnis. Terbiasa
              membangun proyek menggunakan PHP, JavaScript, Tailwind CSS,
              Next.js, Supabase, MySQL, GitHub, Gemini API, dan AI-assisted
              development dengan fundamental kuat pada logika pemrograman,
              debugging, struktur proyek, dan Git. Siap mempelajari tools,
              framework, atau bahasa pemrograman lain bila dibutuhkan.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {profileItems.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <dt className="font-mono text-xs uppercase text-primary">
                    {label}
                  </dt>
                  <dd className="mt-2 font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="keahlian" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="font-mono text-sm uppercase text-green">
          Keahlian
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Tools dan teknologi
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`rounded-2xl border px-4 py-3 font-mono text-sm transition hover:-translate-y-0.5 ${
                index % 3 === 0
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : index % 3 === 1
                    ? "border-violet/30 bg-violet/10 text-violet"
                    : "border-green/30 bg-green/10 text-green"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="proyek" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-sm uppercase text-primary">
              Proyek
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Portfolio pilihan
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Tiga karya yang menunjukkan eksplorasi web app, dashboard, dan
            katalog produk modern.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card specular-border group flex flex-col overflow-hidden rounded-[2rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold leading-snug text-white">
                  {project.name}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 font-mono text-xs ${accentClasses(
                    project.accent,
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-background/40">
                <Image
                  src={project.image}
                  alt={`Tampilan proyek ${project.name}`}
                  width={640}
                  height={360}
                  className="h-32 w-full object-cover object-top brightness-110 saturate-125 transition duration-300 group-hover:scale-[1.03] sm:h-36"
                />
              </div>

              <p className="leading-7 text-muted">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-white/10 bg-background/60 px-3 py-2 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex font-semibold text-primary transition group-hover:translate-x-1">
                Buka proyek
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="kontak" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="glass-card specular-border rounded-[2rem] p-8 text-center sm:p-12">
          <p className="font-mono text-sm uppercase text-green">
            Kontak
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-5xl">
            Tertarik berdiskusi untuk internship?
          </h2>
          <div className="mt-6 space-y-2 text-muted">
            <p>{email}</p>
            <p>WhatsApp: +62 823-2118-1499</p>
            <p>github.com/hamuzasan</p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${email}`}
              className="rounded-2xl bg-primary px-7 py-4 font-semibold text-[#00363e] shadow-[0_0_32px_rgba(47,217,244,0.24)] transition hover:-translate-y-0.5"
            >
              Email Saya
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green/30 bg-green/10 px-7 py-4 font-semibold text-green transition hover:-translate-y-0.5 hover:bg-green/15"
            >
              WhatsApp
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <span className="font-display text-lg font-extrabold text-primary">
            HF
          </span>
          <p>Copyright 2026 Hamzah Fadillah. Built with Next.js and Tailwind CSS.</p>
          <div className="flex gap-5">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-primary"
            >
              GitHub
            </a>
            <a href={`mailto:${email}`} className="transition hover:text-primary">
              Email
            </a>
          </div>
        </div>
      </footer>

      <MobileBottomNav />
    </main>
  );
}
