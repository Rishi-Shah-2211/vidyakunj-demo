import Link from "next/link";
import { INSTITUTE, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative px-5 md:px-8 pb-8 pt-20">
      <div className="skeuo-card-lifted mx-auto max-w-7xl px-6 md:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="skeuo-icon-tile w-12 h-12">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L2 8.5l10 5.5 10-5.5L12 3zm0 13.5L2 11v6l10 5.5 10-5.5v-6l-10 5.5z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <div className="font-display text-2xl text-ink">Vidyakunj</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
                  Anand · Since {INSTITUTE.founded}
                </div>
              </div>
            </div>
            <p className="mt-6 text-ink-2 max-w-sm leading-relaxed">
              {INSTITUTE.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/admissions" className="skeuo-button text-sm py-2.5 px-5">
                Apply now
              </Link>
              <a
                href={`tel:${INSTITUTE.phone.replace(/\s/g, "")}`}
                className="skeuo-button-ghost text-sm py-2.5 px-5"
              >
                Call us
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 mb-4">
              Explore
            </div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-2 hover:text-ink hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 mb-4">
              Visit
            </div>
            <p className="text-ink-2 leading-relaxed">{INSTITUTE.fullAddress}</p>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex items-baseline gap-2">
                <span className="text-ink-4 w-16">Phone</span>
                <span className="text-ink">{INSTITUTE.phone}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-ink-4 w-16">Email</span>
                <span className="text-ink">{INSTITUTE.email}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-ink-4 w-16">Hours</span>
                <span className="text-ink">{INSTITUTE.hours.weekday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big watermark */}
        <div className="mt-12 pt-8 border-t border-line">
          <div className="font-display text-[18vw] md:text-[14vw] leading-none text-ink/5 select-none -mb-4 grad-text opacity-15">
            Vidyakunj
          </div>
        </div>

        <div className="mt-2 flex flex-col md:flex-row justify-between items-start md:items-end gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
          <span>© {new Date().getFullYear()} Vidyakunj Institute</span>
          <span>Crafted with care in Anand</span>
        </div>
      </div>
    </footer>
  );
}
