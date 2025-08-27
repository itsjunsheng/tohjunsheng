import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "cca", label: "CCA" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // Observe sections to highlight the current link
  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const prefersReducedMotion = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    []
  );

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    // Remove # in the URL
    if (location.hash) {
      history.replaceState(null, "", location.pathname + location.search);
    }

    if (window.innerWidth < 768) setIsOpen(false);
  }, [prefersReducedMotion]);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 bg-gray-900/80 backdrop-blur text-white shadow-lg"
      role="navigation"
      aria-label="Primary"
    >
      <div className="flex w-full items-center justify-between py-3.5 px-6 md:px-8">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="text-2xl font-extrabold tracking-wide"
        >
          Portfolio
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-lg font-bold">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(id);
              }}
              aria-current={active === id ? "page" : undefined}
              className={`transition transform duration-200 ease-in-out hover:scale-105 ${
                active === id ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isOpen ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -20}}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="md:hidden flex flex-col items-center bg-gray-900/0 gap-6 pb-8 text-lg font-bold"
          >
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={active === id ? "text-blue-600" : "hover:text-blue-600"}
            >
              {label}
            </button>
          ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
