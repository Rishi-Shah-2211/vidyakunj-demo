import Link from "next/link";
import { FACULTY } from "@/lib/data";

export default function FacultyPage() {
  const featured = FACULTY.find((f) => f.featured)!;
  const rest = FACULTY.filter((f) => !f.featured);

  return (
    <main className="relative px-3 md:px-6 pt-24 md:pt-28 pb-12">
      {/* ========== HEADER ========== */}
      <section className="relative mx-auto max-w-7xl mb-8 md:mb-12 px-2">
        <span className="skeuo-pill">03 · Faculty</span>
        <h1 className="font-display mt-5 text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
          The people behind
          <br />
          every <span className="grad-text">result.</span>
        </h1>
        <p className="mt-5 max-w-xl text-ink-2 text-base md:text-lg leading-relaxed">
          Twenty-four full-time educators. Average tenure of twelve years.
          Most of them, names that students refer their juniors to long after
          passing out.
        </p>
      </section>

      {/* ========== FEATURED — DHIRAJ SIR ========== */}
      <section className="relative mx-auto max-w-7xl mb-12 md:mb-16">
        <div className="grid grid-cols-12 gap-3 md:gap-4 items-stretch">
          {/* Circular hero card */}
          <div
            className="skeuo-card-lifted col-span-12 md:col-span-7 p-8 md:p-12 relative overflow-hidden"
            style={{
              backgroundImage:
                "radial-gradient(120% 90% at 0% 0%, rgba(4,120,87,0.05) 0%, transparent 60%), radial-gradient(120% 90% at 100% 100%, rgba(2,132,199,0.05) 0%, transparent 60%), linear-gradient(180deg, #FFFFFFEF, #FBFAF6)",
            }}
          >
            <div className="flex items-start justify-between mb-8">
              <span className="skeuo-pill">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--grad-1)" }} />
                Featured faculty
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-4">
                01 / {FACULTY.length}
              </span>
            </div>

            {/* The circular portrait — initials disc with depth */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div
                  className="w-44 h-44 md:w-56 md:h-56 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, #FBFAF6 0%, #ECE7DC 50%, #DDD6C7 100%)",
                    boxShadow:
                      "inset 0 4px 12px rgba(255,255,255,0.9), inset 0 -8px 24px rgba(15,20,25,0.15), 0 12px 40px rgba(15,20,25,0.18)",
                  }}
                >
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: "var(--grad-1)",
                      boxShadow:
                        "inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -3px 8px rgba(0,0,0,0.18), 0 8px 24px rgba(4,120,87,0.35)",
                    }}
                  >
                    <span className="font-display text-5xl md:text-7xl">
                      {featured.initials}
                    </span>
                  </div>
                </div>
                {/* Floating year badge */}
                <div
                  className="absolute -bottom-2 -right-2 skeuo-card-lifted px-4 py-2 flex items-center gap-2"
                >
                  <span className="font-display text-2xl grad-text">{featured.years}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-3 leading-tight">
                    years<br />in the chair
                  </span>
                </div>
              </div>

              <h2 className="font-display mt-10 text-4xl md:text-5xl text-ink">
                {featured.name} Sir
              </h2>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-3">
                {featured.subject}
              </div>
              <p className="mt-6 max-w-md text-ink-2 leading-relaxed italic">
                "{featured.bio}"
              </p>
            </div>
          </div>

          {/* Side stack — achievement + subject + quote */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-4">
            <div className="skeuo-card p-6 md:p-7 flex-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
                Known for
              </div>
              <div className="font-display text-2xl md:text-3xl text-ink leading-tight">
                {featured.achievement}
              </div>
            </div>

            <div
              className="skeuo-card-lifted p-6 md:p-7 flex-1 relative overflow-hidden"
              style={{
                backgroundImage: "linear-gradient(135deg, rgba(4,120,87,0.04) 0%, rgba(2,132,199,0.04) 100%), linear-gradient(180deg, #FFFFFFEF, #FBFAF6)",
              }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
                A student remembers
              </div>
              <blockquote className="font-display text-lg md:text-xl text-ink leading-snug">
                "Calculus made sense for the first time in Dhiraj Sir's class.
                I still hear him explaining limits whenever I solve one."
              </blockquote>
              <div className="mt-4 flex items-center gap-2">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
                  style={{ background: "var(--grad-2)" }}
                >
                  R
                </span>
                <div className="text-sm">
                  <span className="text-ink font-medium">Rishi Shah</span>
                  <span className="text-ink-3"> · KHS Batch 2020</span>
                </div>
              </div>
            </div>

            <div className="skeuo-pressed p-5 md:p-6 text-center">
              <Link
                href="/admissions"
                className="font-display text-lg md:text-xl text-ink hover:grad-text transition"
              >
                Sit in on a Dhiraj Sir class →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== REST OF FACULTY ========== */}
      <section className="relative mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8 px-2">
          <h3 className="font-display text-3xl md:text-4xl text-ink">
            And the rest of the team
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3">
            {String(rest.length).padStart(2, "0")} more
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {rest.map((f, i) => (
            <FacultyCard key={f.name} f={f} index={i + 2} />
          ))}
        </div>
      </section>
    </main>
  );
}

function FacultyCard({ f, index }: { f: (typeof FACULTY)[number]; index: number }) {
  return (
    <article className="skeuo-card p-6 md:p-7 relative">
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-4">
          {String(index).padStart(2, "0")}
        </span>
        <span className="skeuo-pill text-[10px]">{f.years} yrs</span>
      </div>
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-white"
        style={{
          background: "var(--grad-1)",
          boxShadow:
            "inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.15), 0 6px 16px rgba(4,120,87,0.22)",
        }}
      >
        <span className="font-display text-2xl">{f.initials}</span>
      </div>
      <h4 className="font-display text-2xl text-ink mt-5">{f.name}</h4>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 mt-1">
        {f.role}
      </div>
      <p className="mt-4 text-sm text-ink-2 leading-relaxed">{f.bio}</p>
      <div className="mt-5 pt-4 border-t border-line">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-4 mb-1">
          Known for
        </div>
        <div className="text-sm text-ink">{f.achievement}</div>
      </div>
    </article>
  );
}
