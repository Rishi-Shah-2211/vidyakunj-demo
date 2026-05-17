import { INSTITUTE } from "@/lib/data";
import { PHOTOS } from "@/lib/photos";

export default function ContactPage() {
  return (
    <main className="relative px-3 md:px-6 pt-24 md:pt-28 pb-12">
      <section className="relative mx-auto max-w-7xl mb-10 md:mb-14 px-2">
        <span className="skeuo-pill">06 · Contact</span>
        <h1 className="font-display mt-5 text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
          Come visit.
          <br />
          <span className="grad-text">Tea on us.</span>
        </h1>
        <p className="mt-5 max-w-xl text-ink-2 text-base md:text-lg leading-relaxed">
          We're near Elecon Garden — easy to find, easier to walk into.
          Drop in any time between {INSTITUTE.hours.weekday}.
        </p>
      </section>

      {/* COMPACT BENTO */}
      <section className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Map placeholder */}
          <div className="skeuo-card-lifted col-span-12 md:col-span-8 row-span-2 p-2 md:p-3 relative overflow-hidden min-h-[360px] md:min-h-[480px]">
            <div
              className="absolute inset-2 md:inset-3 rounded-xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #DDD6C7 0%, #C4BBA8 50%, #DDD6C7 100%)",
                boxShadow: "var(--shadow-pressed)",
              }}
            >
              {/* Faux map grid */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
              >
                {Array.from({ length: 14 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 30}
                    y1={0}
                    x2={i * 30}
                    y2={300}
                    stroke="#5C6670"
                    strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1={0}
                    y1={i * 30}
                    x2={400}
                    y2={i * 30}
                    stroke="#5C6670"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Diagonal roads */}
                <path d="M50 50 L350 250" stroke="#5C6670" strokeWidth="2" opacity="0.6" />
                <path d="M0 200 L250 100" stroke="#5C6670" strokeWidth="2" opacity="0.6" />
              </svg>

              {/* Faux landmarks */}
              <div className="absolute top-[28%] left-[18%] text-[10px] font-mono uppercase tracking-[0.15em] text-ink-3">
                Elecon Garden
              </div>
              <div className="absolute bottom-[22%] right-[22%] text-[10px] font-mono uppercase tracking-[0.15em] text-ink-3">
                V.V. Nagar
              </div>

              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div
                  className="skeuo-card-lifted px-3 py-1.5 mb-2 whitespace-nowrap"
                  style={{ background: "var(--card-2)" }}
                >
                  <span className="font-display text-sm text-ink">Vidyakunj</span>
                </div>
                <div
                  className="w-7 h-7 rounded-full border-4 border-white"
                  style={{
                    background: "var(--grad-1)",
                    boxShadow: "0 6px 16px rgba(4,120,87,0.4)",
                  }}
                />
                <div
                  className="w-1 h-3"
                  style={{ background: "var(--grad-1)" }}
                />
              </div>
            </div>

            <a
              href={INSTITUTE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-5 md:bottom-7 right-5 md:right-7 skeuo-button text-sm py-2.5 px-5"
            >
              Open in Maps →
            </a>
          </div>

          {/* Phone tile */}
          <a
            href={`tel:${INSTITUTE.phone.replace(/\s/g, "")}`}
            className="skeuo-card skeuo-card-photo col-span-6 md:col-span-4 p-6 md:p-7 group"
            style={PHOTOS.bg(PHOTOS.handshake)}
          >
            <div className="skeuo-icon-tile mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.07 15.07 0 01-6.59-6.59l2.2-2.2a1 1 0 00.24-1.02A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
              </svg>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-1">
              Call us
            </div>
            <div className="font-display text-xl md:text-2xl text-ink leading-tight">
              {INSTITUTE.phone}
            </div>
          </a>

          {/* Hours tile */}
          <div
            className="skeuo-card skeuo-card-photo col-span-6 md:col-span-4 p-6 md:p-7"
            style={PHOTOS.bg(PHOTOS.studyDesk)}
          >
            <div className="skeuo-icon-tile mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-1">
              Open hours
            </div>
            <div className="font-display text-xl text-ink leading-tight">
              {INSTITUTE.hours.weekday}
            </div>
            <div className="text-xs text-ink-3 mt-2">
              Sunday · {INSTITUTE.hours.sunday}
            </div>
          </div>

          {/* WhatsApp tile */}
          <a
            href={`https://wa.me/${INSTITUTE.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
            className="skeuo-card skeuo-card-photo col-span-6 md:col-span-4 p-6 md:p-7"
            style={PHOTOS.bg(PHOTOS.family)}
          >
            <div className="skeuo-icon-tile mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.93 11.93 0 0012.05 0C5.5 0 .2 5.3.2 11.85a11.8 11.8 0 001.6 5.92L0 24l6.4-1.68a11.83 11.83 0 005.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.24-6.15-3.39-8.43z" />
              </svg>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-1">
              WhatsApp
            </div>
            <div className="font-display text-xl text-ink leading-tight">
              Quick reply
            </div>
            <div className="text-xs text-ink-3 mt-2">Usually within an hour</div>
          </a>

          {/* Email tile */}
          <a
            href={`mailto:${INSTITUTE.email}`}
            className="skeuo-card skeuo-card-photo col-span-6 md:col-span-4 p-6 md:p-7"
            style={PHOTOS.bg(PHOTOS.notesAndBook)}
          >
            <div className="skeuo-icon-tile mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-1">
              Email
            </div>
            <div className="font-display text-lg text-ink leading-tight break-all">
              {INSTITUTE.email}
            </div>
          </a>

          {/* Address — wide */}
          <div
            className="skeuo-card-lifted skeuo-card-photo col-span-12 md:col-span-8 p-6 md:p-7"
            style={PHOTOS.bg(PHOTOS.campus)}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
              Address
            </div>
            <div className="font-display text-2xl md:text-3xl text-ink leading-tight text-balance">
              {INSTITUTE.fullAddress}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
