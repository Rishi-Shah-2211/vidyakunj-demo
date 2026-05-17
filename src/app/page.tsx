import Link from "next/link";
import { INSTITUTE, WHY_PILLARS, TESTIMONIALS } from "@/lib/data";
import { PHOTOS } from "@/lib/photos";

export default function HomePage() {
  return (
    <main className="relative px-3 md:px-6 pt-24 md:pt-28 pb-12">
      {/* ============ HERO BENTO ============ */}
      <section className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div
            className="skeuo-card-lifted skeuo-card-photo col-span-12 md:col-span-8 row-span-2 p-8 md:p-12 lg:p-16 relative overflow-hidden"
            style={PHOTOS.bg(PHOTOS.classroomWide)}
          >
            <div
              className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-30 pointer-events-none"
              style={{ background: "var(--grad-soft)", filter: "blur(40px)" }}
            />
            <div className="relative">
              <span className="skeuo-pill">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--grad-1)" }}
                />
                Anand · Since {INSTITUTE.founded}
              </span>
              <h1 className="font-display mt-7 md:mt-10 text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance text-ink">
                Where Anand
                <br />
                <span className="grad-text italic">learns.</span> For a
                <br />
                generation, and counting.
              </h1>
              <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-ink-2 leading-relaxed">
                A coaching institute, yes — but really, a quiet corner of Anand
                where serious students show up, do the work, and walk out into
                IITs, NITs and medical colleges across the country.
              </p>
              <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
                <Link href="/admissions" className="skeuo-button">
                  Apply for admission
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/courses" className="skeuo-button-ghost">
                  Explore courses
                </Link>
              </div>
            </div>
          </div>

          <StatTile big="23+" small="years of teaching" sub="Since 2002" colSpan="col-span-6 md:col-span-4" photo={PHOTOS.library} />
          <StatTile big="8,400" small="students mentored" sub="From class 9 to JEE" highlight colSpan="col-span-6 md:col-span-4" photo={PHOTOS.studentsStudying} />

          <div
            className="skeuo-card skeuo-card-photo col-span-12 md:col-span-4 p-6 md:p-7"
            style={PHOTOS.bg(PHOTOS.notesAndBook)}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 mb-3">We coach for</div>
            <div className="space-y-2.5">
              {[
                { tag: "JEE", note: "Engineering" },
                { tag: "NEET", note: "Medical" },
                { tag: "Boards", note: "GSEB · CBSE" },
                { tag: "Foundation", note: "Class 9 · 10" },
              ].map((c) => (
                <div key={c.tag} className="flex items-center justify-between">
                  <span className="font-display text-2xl text-ink">{c.tag}</span>
                  <span className="text-sm text-ink-3">{c.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="skeuo-card skeuo-card-photo col-span-12 md:col-span-4 p-6 md:p-7 relative overflow-hidden"
            style={PHOTOS.bg(PHOTOS.teacherWriting)}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 mb-3">Teachers you'll remember</div>
            <div className="font-display text-3xl text-ink leading-tight">24 educators,<br />12+ years avg.</div>
            <p className="mt-3 text-sm text-ink-3 leading-relaxed">
              Many of our faculty taught at schools you went to. Some, your parents went to.
            </p>
            <Link href="/faculty" className="mt-5 inline-flex items-center gap-1 text-sm text-ink border-b border-ink/30 pb-0.5 hover:border-ink">
              Meet the faculty →
            </Link>
          </div>

          <div
            className="skeuo-card skeuo-card-photo col-span-12 md:col-span-4 p-6 md:p-7"
            style={PHOTOS.bg(PHOTOS.campus)}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 mb-3">Find us</div>
            <div className="font-display text-2xl text-ink leading-tight">Near Elecon<br />Garden,<br /><span className="grad-text italic">Anand</span></div>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-sm text-ink border-b border-ink/30 pb-0.5 hover:border-ink">
              Get directions →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY PILLARS ============ */}
      <section className="relative mx-auto max-w-7xl mt-24 md:mt-32">
        <div className="flex items-end justify-between mb-10 md:mb-14 px-2">
          <div>
            <span className="skeuo-pill">02 · Why us</span>
            <h2 className="font-display mt-5 text-4xl md:text-6xl text-ink text-balance">
              Three reasons parents<br />trust <span className="grad-text italic">Vidyakunj.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {WHY_PILLARS.map((p, i) => {
            const photos = [PHOTOS.graduation, PHOTOS.professor, PHOTOS.celebrate];
            return (
              <div
                key={i}
                className="skeuo-card skeuo-card-photo p-7 md:p-8 relative overflow-hidden"
                style={PHOTOS.bg(photos[i] || PHOTOS.studentsStudying)}
              >
                <div className="text-5xl mb-5 select-none">{p.icon}</div>
                <h3 className="font-display text-2xl text-ink leading-tight">{p.title}</h3>
                <p className="mt-3 text-ink-2 leading-relaxed">{p.description}</p>
                <span className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-4">0{i + 1}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="relative mx-auto max-w-7xl mt-24 md:mt-32">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className={`skeuo-card skeuo-card-photo p-8 md:p-10 ${i === 0 ? "md:translate-y-6" : ""}`}
              style={PHOTOS.bg(i === 0 ? PHOTOS.studyDesk : PHOTOS.celebrate)}
            >
              <div className="text-5xl font-display leading-none grad-text">"</div>
              <blockquote className="mt-2 text-xl md:text-2xl text-ink leading-snug font-display italic">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{ background: "var(--grad-1)" }}>
                  {t.author.split(" ").map((s) => s[0]).join("")}
                </span>
                <div>
                  <div className="font-medium text-ink">{t.author}</div>
                  <div className="text-xs text-ink-3">{t.detail}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============ CTA STRIP ============ */}
      <section className="relative mx-auto max-w-7xl mt-24 md:mt-32">
        <div
          className="skeuo-card-lifted skeuo-card-photo p-10 md:p-16 relative overflow-hidden text-center"
          style={PHOTOS.bg(PHOTOS.graduation)}
        >
          <span className="skeuo-pill">Admissions open · 2026 batch</span>
          <h2 className="font-display mt-6 text-4xl md:text-6xl text-ink text-balance">
            Your child's next two years can<br />change <span className="grad-text italic">everything.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-ink-2">
            Book a free counseling visit. Meet the faculty. See the classroom. Decide for yourself.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="skeuo-button">Book a visit</Link>
            <a href={`tel:${INSTITUTE.phone.replace(/\s/g, "")}`} className="skeuo-button-ghost">
              Call {INSTITUTE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatTile({
  big, small, sub, highlight, colSpan, photo,
}: {
  big: string; small: string; sub: string; highlight?: boolean; colSpan: string; photo: string;
}) {
  return (
    <div
      className={`${highlight ? "skeuo-card-lifted" : "skeuo-card"} skeuo-card-photo ${colSpan} p-6 md:p-7 relative overflow-hidden`}
      style={PHOTOS.bg(photo)}
    >
      <div className={`font-display text-5xl md:text-6xl leading-none ${highlight ? "grad-text" : "text-ink"}`}>{big}</div>
      <div className="mt-3 text-ink-2 font-medium">{small}</div>
      <div className="text-xs text-ink-3 mt-1">{sub}</div>
    </div>
  );
}
