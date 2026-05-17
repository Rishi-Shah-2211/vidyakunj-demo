"use client";

import { useState } from "react";
import { INSTITUTE, COURSES } from "@/lib/data";
import { PHOTOS } from "@/lib/photos";

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [course, setCourse] = useState(COURSES[0].id);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative px-3 md:px-6 pt-24 md:pt-28 pb-12">
      <section className="relative mx-auto max-w-7xl mb-10 md:mb-12 px-2">
        <span className="skeuo-pill">05 · Admissions</span>
        <h1 className="font-display mt-5 text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
          A short form.
          <br />
          A <span className="grad-text italic">life-changing</span> two years.
        </h1>
        <p className="mt-5 max-w-xl text-ink-2 text-base md:text-lg leading-relaxed">
          Tell us a little about the student. We'll call within 24 hours to set
          up a free counseling visit — no obligation, no pressure.
        </p>
      </section>

      <section className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-3 md:gap-4 items-start">
          <div
            className="skeuo-card-lifted skeuo-card-photo col-span-12 md:col-span-8 p-6 md:p-10"
            style={PHOTOS.bg(PHOTOS.studentWriting)}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="mx-auto skeuo-icon-tile w-16 h-16 mb-6"
                  style={{ background: "var(--grad-1)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-ink">
                  Thank you — we'll call within 24 hours.
                </h2>
                <p className="mt-3 text-ink-2 max-w-md mx-auto">
                  In the meantime, feel free to visit us at our campus near
                  Elecon Garden. We'd love to show you around.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 skeuo-button-ghost text-sm py-2 px-5"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <Label num="01">Student's full name</Label>
                  <input required type="text" placeholder="As on Aadhaar / school records" className="skeuo-input" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label num="02">Current class</Label>
                    <select required className="skeuo-input appearance-none">
                      <option value="">Select…</option>
                      <option>Class 9</option>
                      <option>Class 10</option>
                      <option>Class 11</option>
                      <option>Class 12</option>
                      <option>Repeater</option>
                    </select>
                  </div>
                  <div>
                    <Label num="03">School</Label>
                    <input required type="text" placeholder="School name" className="skeuo-input" />
                  </div>
                </div>

                <div>
                  <Label num="04">Track interested in</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {COURSES.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setCourse(c.id)}
                        className={`px-3 py-3 rounded-xl text-sm transition ${
                          course === c.id
                            ? "skeuo-pressed text-ink font-medium"
                            : "skeuo-card text-ink-2 hover:text-ink"
                        }`}
                      >
                        {c.badge.replace(" Track", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label num="05">Parent's name</Label>
                    <input required type="text" placeholder="Mother / father" className="skeuo-input" />
                  </div>
                  <div>
                    <Label num="06">Phone (WhatsApp)</Label>
                    <input required type="tel" placeholder="+91" className="skeuo-input" />
                  </div>
                </div>

                <div>
                  <Label num="07">Anything you'd like us to know?</Label>
                  <textarea
                    placeholder="Optional — academic goals, concerns, scheduling"
                    rows={3}
                    className="skeuo-input resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-ink-3 max-w-sm">
                    We respect your privacy. Your details are used only to call
                    you back regarding admissions.
                  </p>
                  <button type="submit" className="skeuo-button">
                    Submit inquiry
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 md:gap-4">
            <div
              className="skeuo-card-lifted skeuo-card-photo p-6 md:p-7"
              style={PHOTOS.bg(PHOTOS.handshake)}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-2">
                Prefer to call?
              </div>
              <a
                href={`tel:${INSTITUTE.phone.replace(/\s/g, "")}`}
                className="font-display text-3xl md:text-4xl grad-text italic leading-tight block hover:opacity-80"
              >
                {INSTITUTE.phone}
              </a>
              <p className="mt-2 text-sm text-ink-3">
                Reach us between {INSTITUTE.hours.weekday}, Mon–Sat.
              </p>
            </div>

            <div className="skeuo-card skeuo-card-photo p-6 md:p-7" style={PHOTOS.bg(PHOTOS.family)}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
                What happens next
              </div>
              <ol className="space-y-3.5">
                {[
                  "We call you within 24 hrs",
                  "Counseling session — in person or video",
                  "Sit in on a sample class (optional)",
                  "Diagnostic test (free)",
                  "Enrollment if it's a good fit",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium"
                      style={{ background: "var(--grad-1)" }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink-2 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="skeuo-card skeuo-card-photo p-6 md:p-7" style={PHOTOS.bg(PHOTOS.campus)}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3 mb-3">
                Visit us
              </div>
              <p className="text-ink-2 text-sm leading-relaxed">
                {INSTITUTE.fullAddress}
              </p>
              <a
                href={INSTITUTE.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-ink border-b border-ink/30 pb-0.5 hover:border-ink"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Label({ children, num }: { children: React.ReactNode; num: string }) {
  return (
    <label className="flex items-baseline gap-2 mb-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-4">
        {num}
      </span>
      <span className="text-sm font-medium text-ink-2">{children}</span>
    </label>
  );
}
