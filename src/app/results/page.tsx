import Link from "next/link";
import { TOPPERS, INSTITUTE } from "@/lib/data";
import { PHOTOS } from "@/lib/photos";

const TOPPER_PHOTOS = [
  PHOTOS.graduation,
  PHOTOS.celebrate,
  PHOTOS.awardCeremony,
  PHOTOS.studentsStudying,
  PHOTOS.studyDesk,
  PHOTOS.groupStudy,
];

export default function ResultsPage() {
  return (
    <main className="relative px-3 md:px-6 pt-24 md:pt-28 pb-12">
      <section className="relative mx-auto max-w-7xl mb-10 md:mb-14 px-2">
        <span className="skeuo-pill">04 · Results</span>
        <h1 className="font-display mt-5 text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
          The names we
          <br />
          <span className="grad-text italic">remember.</span>
        </h1>
        <p className="mt-5 max-w-xl text-ink-2 text-base md:text-lg leading-relaxed">
          Every batch leaves Vidyakunj with stories. Here are some recent ones —
          the kind that brings parents to our door each February.
        </p>
      </section>

      <section className="relative mx-auto max-w-7xl mb-12 md:mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <BigStat label="Total selections" value="142" sub="Since 2018" photo={PHOTOS.graduation} />
          <BigStat label="IIT seats" value="38" sub="JEE Advanced" highlight photo={PHOTOS.lectureHall} />
          <BigStat label="NEET MBBS" value="74" sub="Govt + Private" photo={PHOTOS.scienceLab} />
          <BigStat label="100%ile-ers" value="6" sub="JEE Main" photo={PHOTOS.celebrate} />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8 px-2">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Recent toppers
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3">
            2023 — 2024
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {TOPPERS.map((t, i) => (
            <TopperCard key={t.name} t={t} index={i} photo={TOPPER_PHOTOS[i % TOPPER_PHOTOS.length]} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl mt-24 md:mt-32">
        <div
          className="skeuo-card-lifted skeuo-card-photo p-10 md:p-14 text-center relative overflow-hidden"
          style={PHOTOS.bg(PHOTOS.celebrate)}
        >
          <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
            Be the next name on this page.
          </h2>
          <p className="mt-4 max-w-md mx-auto text-ink-2">
            Admissions for the 2026 batch are open. The earlier you join, the
            longer we have to build the foundation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="skeuo-button">
              Apply now
            </Link>
            <a
              href={`tel:${INSTITUTE.phone.replace(/\s/g, "")}`}
              className="skeuo-button-ghost"
            >
              Call us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function BigStat({
  label, value, sub, highlight, photo,
}: { label: string; value: string; sub: string; highlight?: boolean; photo: string }) {
  return (
    <div
      className={`${highlight ? "skeuo-card-lifted" : "skeuo-card"} skeuo-card-photo p-6 md:p-7 relative overflow-hidden`}
      style={PHOTOS.bg(photo)}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-2">
        {label}
      </div>
      <div className={`font-display text-5xl md:text-6xl leading-none ${highlight ? "grad-text italic" : "text-ink"}`}>
        {value}
      </div>
      <div className="text-xs text-ink-3 mt-2">{sub}</div>
    </div>
  );
}

function TopperCard({
  t, index, photo,
}: { t: (typeof TOPPERS)[number]; index: number; photo: string }) {
  return (
    <article className="skeuo-card skeuo-card-photo p-7 md:p-8 relative" style={PHOTOS.bg(photo)}>
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-4">
          {String(index + 1).padStart(2, "0")} / {TOPPERS.length}
        </span>
        <span className="skeuo-pill text-[10px]">{t.year}</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-white"
          style={{
            background: "var(--grad-1)",
            boxShadow:
              "inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -3px 8px rgba(0,0,0,0.18), 0 8px 24px rgba(4,120,87,0.3)",
          }}
        >
          <span className="font-display text-2xl">
            {t.name.split(" ").map((s) => s[0]).join("")}
          </span>
        </div>

        <h3 className="font-display text-2xl text-ink mt-5">{t.name}</h3>

        <div className="mt-4 skeuo-pressed px-5 py-3 inline-flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3">
            Rank
          </span>
          <span className="font-display text-xl grad-text italic leading-none">{t.rank}</span>
        </div>

        <div className="mt-5 text-sm text-ink-2">{t.exam}</div>
        <div className="mt-1 text-xs text-ink-3">{t.college}</div>
      </div>
    </article>
  );
}
