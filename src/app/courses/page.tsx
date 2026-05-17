import Link from "next/link";
import { COURSES } from "@/lib/data";
import { PHOTOS } from "@/lib/photos";

const COURSE_PHOTOS = [
  PHOTOS.whiteboardMath,
  PHOTOS.scienceLab,
  PHOTOS.notesAndBook,
  PHOTOS.groupStudy,
];

export default function CoursesPage() {
  return (
    <main className="relative px-3 md:px-6 pt-24 md:pt-28 pb-12">
      <section className="relative mx-auto max-w-7xl mb-10 md:mb-14 px-2">
        <span className="skeuo-pill">02 · Courses</span>
        <h1 className="font-display mt-5 text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
          Four programmes.
          <br />
          One <span className="grad-text italic">teaching standard.</span>
        </h1>
        <p className="mt-5 max-w-xl text-ink-2 text-base md:text-lg leading-relaxed">
          From class 9 foundation to JEE Advanced, every track is taught by
          full-time senior faculty — not visiting tutors.
        </p>
      </section>

      <section className="relative mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {COURSES.slice(0, 3).map((c, i) => (
            <CourseCard key={c.id} c={c} index={i} photo={COURSE_PHOTOS[i]} />
          ))}
        </div>
        <div className="mt-4 md:mt-5">
          <WideCourseCard c={COURSES[3]} photo={COURSE_PHOTOS[3]} />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl mt-20 md:mt-28">
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          <div className="skeuo-card skeuo-card-photo p-6 md:p-7" style={PHOTOS.bg(PHOTOS.lectureHall)}>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
              Weekday classes
            </div>
            <div className="font-display text-3xl text-ink leading-tight">7 AM – 9 PM</div>
            <p className="mt-2 text-sm text-ink-3">
              Multiple batches throughout the day. Choose what fits your school timing.
            </p>
          </div>
          <div
            className="skeuo-card-lifted skeuo-card-photo p-6 md:p-7"
            style={PHOTOS.bg(PHOTOS.studentWriting)}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
              Weekly tests
            </div>
            <div className="font-display text-3xl grad-text italic leading-tight">Every Sunday</div>
            <p className="mt-2 text-sm text-ink-3">
              Full-length and topic-wise, with detailed score analysis the same evening.
            </p>
          </div>
          <div className="skeuo-card skeuo-card-photo p-6 md:p-7" style={PHOTOS.bg(PHOTOS.studyDesk)}>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
              Doubt rooms
            </div>
            <div className="font-display text-3xl text-ink leading-tight">Open 6 days</div>
            <p className="mt-2 text-sm text-ink-3">
              Drop in any time. No appointment. Senior students mentor too.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl mt-20 md:mt-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
          Not sure which track fits? <span className="grad-text italic">We'll help.</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/admissions" className="skeuo-button">Free counseling</Link>
          <Link href="/contact" className="skeuo-button-ghost">Visit the campus</Link>
        </div>
      </section>
    </main>
  );
}

function CourseCard({ c, index, photo }: { c: (typeof COURSES)[number]; index: number; photo: string }) {
  const lifted = c.highlight;
  return (
    <article
      className={`${lifted ? "skeuo-card-lifted" : "skeuo-card"} skeuo-card-photo p-7 md:p-8 relative overflow-hidden flex flex-col`}
      style={PHOTOS.bg(photo)}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="skeuo-pill">{c.badge}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-4">
          0{index + 1}
        </span>
      </div>

      <div
        className="skeuo-pressed mx-auto w-full aspect-[4/5] max-w-[260px] flex flex-col items-center justify-center p-6 mb-6"
        style={{
          background: "linear-gradient(180deg, var(--paper-2), var(--paper))",
        }}
      >
        <div className={`font-display text-6xl ${lifted ? "grad-text italic" : "text-ink"} leading-none`}>
          {c.badge.split(" ")[0]}
        </div>
        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3">
          {c.forWho}
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
          {c.subjects.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-full bg-card border border-line text-[10px] text-ink-2 shadow-[var(--shadow-soft)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <h3 className="font-display text-2xl text-ink leading-tight">{c.title}</h3>
      <p className="mt-3 text-sm text-ink-2 leading-relaxed flex-1">{c.description}</p>

      <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-sm">
        <span className="text-ink-3">{c.duration}</span>
        <Link
          href="/admissions"
          className={`font-medium ${lifted ? "grad-text italic" : "text-ink"} hover:underline underline-offset-4`}
        >
          Apply →
        </Link>
      </div>
    </article>
  );
}

function WideCourseCard({ c, photo }: { c: (typeof COURSES)[number]; photo: string }) {
  return (
    <article
      className="skeuo-card skeuo-card-photo grid md:grid-cols-12 gap-6 p-7 md:p-10 items-center"
      style={PHOTOS.bg(photo)}
    >
      <div className="md:col-span-2 flex md:block items-center gap-4 md:gap-0">
        <div
          className="skeuo-pressed w-20 h-20 md:w-full md:aspect-square flex items-center justify-center"
          style={{ background: "linear-gradient(180deg, var(--paper-2), var(--paper))" }}
        >
          <div className="font-display text-3xl md:text-5xl grad-text italic leading-none">F</div>
        </div>
        <div className="md:hidden">
          <span className="skeuo-pill">{c.badge}</span>
          <h3 className="font-display text-2xl text-ink mt-2">{c.title}</h3>
        </div>
      </div>
      <div className="md:col-span-7">
        <span className="skeuo-pill hidden md:inline-flex">{c.badge}</span>
        <h3 className="font-display text-3xl text-ink mt-3 hidden md:block">{c.title}</h3>
        <p className="text-ink-2 leading-relaxed md:mt-3">{c.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.subjects.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-card border border-line text-xs text-ink-2 shadow-[var(--shadow-soft)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between gap-3">
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3">For</div>
          <div className="font-display text-xl text-ink">{c.forWho}</div>
        </div>
        <Link href="/admissions" className="skeuo-button text-sm py-2 px-5">
          Apply →
        </Link>
      </div>
    </article>
  );
}
