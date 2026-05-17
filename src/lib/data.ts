// Vidyakunj Institute — content source of truth
// Real where confirmed, plausible placeholders elsewhere. Easy to swap.

export const INSTITUTE = {
  name: "Vidyakunj Institute",
  shortName: "Vidyakunj",
  tagline: "Where Anand learns. For a generation, and counting.",
  founded: 2002,
  yearsCount: 23,
  studentsCount: 8400,
  toppersCount: 142,
  facultyCount: 24,
  shortAddress: "Near Elecon Garden, Anand",
  fullAddress:
    "Near Elecon Garden, Vallabh Vidyanagar Road, Anand, Gujarat 388120",
  phone: "+91 90000 00000",
  phoneRaw: "919000000000",
  email: "admissions@vidyakunj.in",
  hours: { weekday: "7 AM – 9 PM", sunday: "9 AM – 1 PM" },
  mapsLink: "https://maps.google.com/?q=Vidyakunj+Institute+Anand",
};

export const NAV_LINKS = [
  { href: "/", label: "Home", num: "01" },
  { href: "/courses", label: "Courses", num: "02" },
  { href: "/faculty", label: "Faculty", num: "03" },
  { href: "/results", label: "Results", num: "04" },
  { href: "/admissions", label: "Admissions", num: "05" },
  { href: "/contact", label: "Contact", num: "06" },
];

export type Course = {
  id: string;
  badge: string;
  title: string;
  description: string;
  subjects: string[];
  duration: string;
  forWho: string;
  highlight?: boolean;
};

export const COURSES: Course[] = [
  {
    id: "jee",
    badge: "JEE Track",
    title: "JEE Main & Advanced",
    description:
      "Comprehensive two-year preparation for India's most competitive engineering entrance. Concept-first teaching, weekly tests, doubt rooms.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    duration: "2-year program",
    forWho: "Class 11 & 12",
    highlight: true,
  },
  {
    id: "neet",
    badge: "NEET Track",
    title: "NEET Medical",
    description:
      "Focused preparation for the All India medical entrance with senior subject experts and dedicated biology faculty.",
    subjects: ["Physics", "Chemistry", "Biology"],
    duration: "2-year program",
    forWho: "Class 11 & 12",
  },
  {
    id: "board",
    badge: "Board Track",
    title: "GSEB & CBSE Boards",
    description:
      "Strong fundamentals for class 11 and 12 board examinations. Emphasis on writing skills, revision strategy, and exam temperament.",
    subjects: ["Maths", "Physics", "Chemistry", "Bio"],
    duration: "Per academic year",
    forWho: "Class 11 & 12",
  },
  {
    id: "foundation",
    badge: "Foundation",
    title: "Foundation Programme",
    description:
      "Early-stage preparation for class 9 and 10 students who want to build a serious academic base before entering Senior Secondary.",
    subjects: ["Maths", "Science", "English"],
    duration: "1-year per class",
    forWho: "Class 9 & 10",
  },
];

export type Faculty = {
  name: string;
  role: string;
  subject: string;
  years: number;
  bio: string;
  achievement: string;
  featured?: boolean;
  initials: string;
};

export const FACULTY: Faculty[] = [
  {
    name: "Dhiraj Patel",
    role: "Senior Faculty — Mathematics",
    subject: "Mathematics · Class 11 & 12",
    years: 15,
    bio: "An institution unto himself in Anand's teaching circle, Dhiraj Sir has guided over two thousand students through 11th and 12th Maths — many of whom now teach, build and lead across India.",
    achievement: "2000+ students mentored · Knowledge High School alumnus-turned-mentor for many",
    featured: true,
    initials: "DP",
  },
  {
    name: "Hemant Joshi",
    role: "Head of Physics",
    subject: "Physics · JEE / NEET",
    years: 18,
    bio: "Former research scholar at MS University. Known for breaking down mechanics and electromagnetism with first-principles clarity.",
    achievement: "Ranked among top 10 Physics coaches in Gujarat",
    initials: "HJ",
  },
  {
    name: "Anjali Mehta",
    role: "Chemistry Lead",
    subject: "Chemistry · JEE / NEET / Boards",
    years: 12,
    bio: "Ex-IIT Bombay teaching fellow. Brings industry context to organic chemistry that students rarely forget.",
    achievement: "JEE Advanced AIR 1-1000 mentor, 8 years running",
    initials: "AM",
  },
  {
    name: "Suresh Patel",
    role: "Biology Lead",
    subject: "Biology · NEET",
    years: 20,
    bio: "Two decades of NEET-focused biology teaching with a near-photographic recall of NCERT.",
    achievement: "47 NEET selections in 2025 batch",
    initials: "SP",
  },
  {
    name: "Priya Shah",
    role: "Mathematics Faculty",
    subject: "Mathematics · Foundation / Boards",
    years: 8,
    bio: "Specialises in building strong foundation in algebra and geometry for class 9 and 10 students.",
    achievement: "GSEB topper coach, 5 years",
    initials: "PS",
  },
  {
    name: "Rakesh Bhatt",
    role: "Physics Faculty",
    subject: "Physics · Foundation / Boards",
    years: 9,
    bio: "Patient mentor known for making waves and optics intuitive through real-life demonstrations.",
    achievement: "Author of two reference workbooks",
    initials: "RB",
  },
];

export const TOPPERS = [
  { name: "Aarav Patel", rank: "AIR 234", exam: "JEE Advanced 2024", college: "IIT Bombay", year: 2024 },
  { name: "Khushi Mehta", rank: "AIR 1,082", exam: "NEET 2024", college: "BJ Medical, Ahmedabad", year: 2024 },
  { name: "Ridham Shah", rank: "AIR 567", exam: "JEE Main 2024", college: "NIT Surat", year: 2024 },
  { name: "Janvi Joshi", rank: "AIR 2,341", exam: "NEET 2024", college: "GMERS Gandhinagar", year: 2024 },
  { name: "Yash Trivedi", rank: "98.6%", exam: "GSEB Class 12 Science", college: "DA-IICT", year: 2024 },
  { name: "Anjali Desai", rank: "AIR 1,847", exam: "JEE Advanced 2023", college: "IIT Roorkee", year: 2023 },
];

export const WHY_PILLARS = [
  {
    icon: "🎓",
    title: "Two-decade teaching legacy",
    description:
      "Founded in 2002, Vidyakunj has shaped over 8,000 students — many of whom are now doctors, engineers and educators across India.",
  },
  {
    icon: "👥",
    title: "Faculty you'll remember",
    description:
      "Twenty-four full-time educators with an average of 12+ years in the chair. Names students refer juniors to, years after passing out.",
  },
  {
    icon: "📈",
    title: "Results that travel",
    description:
      "142 students into IITs, NITs and government medical seats since 2018. Annual selection rate consistently above the Gujarat average.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dhiraj Sir's way of teaching calculus made the entire JEE Maths paper feel familiar. I owe my AIR to the conceptual base I built here.",
    author: "Aarav Patel",
    detail: "AIR 234, JEE Advanced 2024",
  },
  {
    quote:
      "Vidyakunj feels less like coaching and more like an extended family. Doubts get cleared by name, not by token number.",
    author: "Khushi Mehta",
    detail: "AIR 1,082, NEET 2024",
  },
];
