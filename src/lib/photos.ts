// Curated Unsplash photos — education / students / classroom themed.
// All stable specific photo IDs (not random source URLs).
// Swap with real client photos by updating the URL — paths used across pages.

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PHOTOS = {
  // ====== Classrooms / studying ======
  classroomWide: u("photo-1497633762265-9d179a990aa6"),
  studentsStudying: u("photo-1523580494863-6f3031224c94"),
  notesAndBook: u("photo-1456513080510-7bf3a84b82f8"),
  groupStudy: u("photo-1522202176988-66273c2fd55f"),
  studentWriting: u("photo-1434030216411-0b793f4b4173"),
  lectureHall: u("photo-1571260899304-425eee4c7efc"),

  // ====== Teaching / faculty in action ======
  whiteboardMath: u("photo-1635070041078-e363dbe005cb"),
  teacherBoard: u("photo-1577896851231-70ef18881754"),

  // ====== Library / books ======
  library: u("photo-1481627834876-b7833e8f5570"),
  booksStack: u("photo-1507842217343-583bb7270b66"),
  studyDesk: u("photo-1503676260728-1c00da094a0b"),

  // ====== Lab / science ======
  scienceLab: u("photo-1532094349884-543bc11b234d"),
  microscope: u("photo-1582719471384-894fbb16e074"),
  chemistry: u("photo-1606761568499-6d2451b23c66"),

  // ====== Success / graduation / celebration ======
  graduation: u("photo-1523050854058-8df90110c9f1"),
  graduates: u("photo-1627556704290-2b1f5853ff78"),
  celebrate: u("photo-1546410531-bb4caa6b424d"),
  trophy: u("photo-1567427017947-545c5f8d16ad"),

  // ====== Campus / building ======
  campus: u("photo-1562774053-701939374585"),
  hallway: u("photo-1580582932707-520aed937b7b"),

  // ====== Family / parents (admissions context) ======
  family: u("photo-1517059224940-d4af9eec41b7"),
  handshake: u("photo-1521791136064-7986c2920216"),

  // ====== Student portraits (toppers, testimonials, results) ======
  // Mix of warm, confident young portraits — feel relatable for an Indian
  // coaching institute. Swap with real student photos as client provides.
  studentPortrait1: u("photo-1488509082528-cefbba5ad692"),  // young woman, smiling
  studentPortrait2: u("photo-1500648767791-00dcc994a43e"),  // young man portrait
  studentPortrait3: u("photo-1438761681033-6461ffad8d80"),  // young woman, candid
  studentPortrait4: u("photo-1502323777036-f29e3972d82f"),  // young man, glasses, studious
  studentPortrait5: u("photo-1517841905240-472988babdf9"),  // young woman, warm
  studentPortrait6: u("photo-1531123897727-8f129e1688ce"),  // young woman, confident
  studentPortrait7: u("photo-1539571696357-5a69c17a67c6"),  // young man, glasses
  studentPortrait8: u("photo-1573496359142-b8d87734a5a2"),  // young woman, professional

  // ====== Teacher / faculty portraits ======
  teacherPortrait1: u("photo-1560250097-0b93528c311a"),     // older gentleman, professional
  teacherPortrait2: u("photo-1580894732444-8ecded7900cd"),  // teacher with chalkboard
  teacherPortrait3: u("photo-1573497019418-b400bb3ab074"),  // female teacher portrait
  teacherPortrait4: u("photo-1559548331-f9cb98001426"),     // male teacher
  teacherPortrait5: u("photo-1571260899304-425eee4c7efc"),  // teaching context
  teacherPortrait6: u("photo-1551836022-d5d88e9218df"),     // teacher-feel professional

  // Helper for inline style
  bg: (url: string) => ({ ["--photo" as string]: `url(${url})` } as React.CSSProperties),
};

/* ===========================================================
   Intelligent mappers — pick context-appropriate photos
   =========================================================== */
const STUDENT_PORTRAITS = [
  PHOTOS.studentPortrait1, PHOTOS.studentPortrait2, PHOTOS.studentPortrait3,
  PHOTOS.studentPortrait4, PHOTOS.studentPortrait5, PHOTOS.studentPortrait6,
  PHOTOS.studentPortrait7, PHOTOS.studentPortrait8,
];

const TEACHER_PORTRAITS = [
  PHOTOS.teacherPortrait1, PHOTOS.teacherPortrait2, PHOTOS.teacherPortrait3,
  PHOTOS.teacherPortrait4, PHOTOS.teacherPortrait5, PHOTOS.teacherPortrait6,
];

/** Get a student portrait at a stable index — same input → same photo */
export const studentPortrait = (i: number) =>
  STUDENT_PORTRAITS[i % STUDENT_PORTRAITS.length];

/** Get a teacher portrait at a stable index */
export const teacherPortrait = (i: number) =>
  TEACHER_PORTRAITS[i % TEACHER_PORTRAITS.length];

/** Pick a photo by subject keyword (for faculty subject matching) */
export function subjectPhoto(subject: string): string {
  const s = subject.toLowerCase();
  if (s.includes("math")) return PHOTOS.whiteboardMath;
  if (s.includes("physics")) return PHOTOS.lectureHall;
  if (s.includes("chemistry")) return PHOTOS.chemistry;
  if (s.includes("bio")) return PHOTOS.microscope;
  if (s.includes("makeup") || s.includes("english")) return PHOTOS.notesAndBook;
  return PHOTOS.studyDesk;
}
