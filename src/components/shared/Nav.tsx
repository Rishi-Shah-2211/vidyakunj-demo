"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS, INSTITUTE } from "@/lib/data";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-3 md:top-5 inset-x-3 md:inset-x-6 z-40 transition-all duration-300 ${
          scrolled ? "scale-[0.98]" : "scale-100"
        }`}
      >
        <div className="skeuo-glass mx-auto max-w-6xl flex items-center justify-between px-4 md:px-6 py-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="skeuo-icon-tile w-9 h-9 rounded-xl text-base">
              <Logo />
            </span>
            <span className="font-display text-lg md:text-xl text-ink">
              Vidyakunj
              <span className="text-ink-3 font-sans text-xs ml-1 align-middle hidden sm:inline">
                · Anand
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 mx-4">
            {NAV_LINKS.map((l) => {
              const active = l.href === pathname;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-3.5 py-2 text-sm rounded-full transition ${
                    active
                      ? "text-ink"
                      : "text-ink-3 hover:text-ink"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-paper-2 shadow-[var(--shadow-pressed)]" />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/admissions"
              className="hidden md:inline-flex skeuo-button text-sm py-2 px-5"
            >
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden skeuo-button-ghost w-10 h-10 p-0 text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/30 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-3 right-3 left-3 skeuo-card-lifted p-6 flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <span className="skeuo-icon-tile w-10 h-10">
                <Logo />
              </span>
              <span className="font-display text-xl text-ink">Vidyakunj</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="skeuo-button-ghost w-10 h-10 p-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const active = l.href === pathname;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-baseline gap-4 py-4 px-4 rounded-xl ${
                    active ? "skeuo-pressed" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-ink-4">{l.num}</span>
                  <span className="font-display text-3xl text-ink">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link href="/admissions" className="skeuo-button w-full">
              Apply for admission
            </Link>
            <a
              href={`tel:${INSTITUTE.phone.replace(/\s/g, "")}`}
              className="skeuo-button-ghost w-full"
            >
              Call {INSTITUTE.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L2 8.5l10 5.5 10-5.5L12 3zm0 13.5L2 11v6l10 5.5 10-5.5v-6l-10 5.5z"
        fill="currentColor"
      />
    </svg>
  );
}
