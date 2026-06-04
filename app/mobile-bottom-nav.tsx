"use client";

import { useEffect, useState } from "react";

const items = [
  {
    label: "Tentang",
    href: "#tentang",
    id: "tentang",
    icon: "M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
  },
  {
    label: "Keahlian",
    href: "#keahlian",
    id: "keahlian",
    icon: "m13 2-8 13h6l-2 7 9-14h-6l1-6Z",
  },
  {
    label: "Proyek",
    href: "#proyek",
    id: "proyek",
    icon: "M6 3h7v7H6V3Zm8 11h4v7h-7v-7h3Zm-8 0h4v7H3v-7h3Zm8-9h4v7h-4V5Z",
  },
  {
    label: "Kontak",
    href: "#kontak",
    id: "kontak",
    icon: "M4 6h16v12H4V6Zm0 0 8 7 8-7",
  },
];

export function MobileBottomNav() {
  const [activeId, setActiveId] = useState("tentang");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.05, 0.2, 0.4],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (items.some((item) => item.id === hash)) {
        setActiveId(hash);
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#060e20]/80 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_45px_rgba(0,0,0,0.48)] backdrop-blur-xl md:hidden"
      aria-label="Navigasi mobile"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-16 flex-col items-center justify-center gap-1 rounded-2xl px-2 text-[11px] font-semibold transition ${
                isActive
                  ? "bg-primary/12 text-primary shadow-[0_0_18px_rgba(47,217,244,0.14)]"
                  : "text-muted hover:bg-white/[0.06] hover:text-primary"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d={item.icon} />
              </svg>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
