"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

/**
 * Per-route transition picker.
 * Each route key returns its own enter/exit variants.
 * template.tsx re-mounts on every navigation, so motion fires fresh each time.
 */
function getVariants(pathname: string) {
  if (pathname === "/") {
    // Home — soft zoom-back with crossfade
    return {
      initial: { opacity: 0, scale: 1.04, y: 8 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    };
  }
  if (pathname.startsWith("/courses")) {
    // Courses — book-page flip from right
    return {
      initial: { opacity: 0, rotateY: -12, x: 80, transformPerspective: 1200 },
      animate: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200 },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    };
  }
  if (pathname.startsWith("/faculty")) {
    // Faculty — card shuffle / lift up
    return {
      initial: { opacity: 0, y: 60, rotateX: 6, transformPerspective: 1000 },
      animate: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1000 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    };
  }
  if (pathname.startsWith("/results")) {
    // Results — paper unfold (clip-path)
    return {
      initial: {
        opacity: 0,
        clipPath: "inset(48% 8% 48% 8% round 24px)",
      },
      animate: {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 0px)",
      },
      transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] as const },
    };
  }
  if (pathname.startsWith("/admissions")) {
    // Admissions — slide-up with depth
    return {
      initial: { opacity: 0, y: 100, scale: 0.96 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    };
  }
  if (pathname.startsWith("/contact")) {
    // Contact — ink-bleed circle expand
    return {
      initial: {
        opacity: 0,
        clipPath: "circle(0% at 90% 90%)",
      },
      animate: {
        opacity: 1,
        clipPath: "circle(150% at 90% 90%)",
      },
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] as const },
    };
  }
  // Fallback
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const v = useMemo(() => getVariants(pathname), [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={v.initial}
      animate={v.animate}
      transition={v.transition}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
