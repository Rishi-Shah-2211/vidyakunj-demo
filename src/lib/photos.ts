// Curated Unsplash photos — education / students / classroom themed.
// All stable specific photo IDs (not random source URLs).
// Swap with real client photos by updating the URL — paths used across pages.

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PHOTOS = {
  // Classrooms / students
  classroomWide: u("photo-1497633762265-9d179a990aa6"),         // classroom with notes
  studentsStudying: u("photo-1523580494863-6f3031224c94"),       // students studying together
  notesAndBook: u("photo-1456513080510-7bf3a84b82f8"),           // open book + pen
  groupStudy: u("photo-1522202176988-66273c2fd55f"),             // group discussion
  studentWriting: u("photo-1434030216411-0b793f4b4173"),         // student writing notes

  // Faculty / teaching
  teacherWriting: u("photo-1577896851231-70ef18881754"),         // teacher at board
  whiteboardMath: u("photo-1635070041078-e363dbe005cb"),         // math on whiteboard
  lectureHall: u("photo-1571260899304-425eee4c7efc"),            // empty lecture seating
  professor: u("photo-1494790108377-be9c29b29330"),              // portrait

  // Library / books
  library: u("photo-1481627834876-b7833e8f5570"),                // library shelves
  booksStack: u("photo-1507842217343-583bb7270b66"),             // stack of books
  studyDesk: u("photo-1503676260728-1c00da094a0b"),              // desk with laptop & books

  // Lab / science
  scienceLab: u("photo-1532094349884-543bc11b234d"),             // beakers
  microscope: u("photo-1582719471384-894fbb16e074"),             // lab microscope
  chemistry: u("photo-1606761568499-6d2451b23c66"),              // chemistry setup

  // Success / graduation
  graduation: u("photo-1523050854058-8df90110c9f1"),             // graduates
  celebrate: u("photo-1627556704290-2b1f5853ff78"),              // result joy
  awardCeremony: u("photo-1577896851305-90ef9c7b8be1"),          // award

  // Campus / building / location
  campus: u("photo-1562774053-701939374585"),                    // school building
  hallway: u("photo-1580582932707-520aed937b7b"),                // school hallway

  // Tech / modern learning
  laptopStudy: u("photo-1531482615713-2afd69097998"),
  tabletNotes: u("photo-1606326608606-aa0b62935f2b"),

  // Family / parents
  family: u("photo-1517059224940-d4af9eec41b7"),
  handshake: u("photo-1521791136064-7986c2920216"),

  // Helper for inline style
  bg: (url: string) => ({ ["--photo" as string]: `url(${url})` } as React.CSSProperties),
};
