import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import rafPhoto from "@assets/photo_website_rafi_1782623162685.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Career", href: "#career", id: "career" },
    { name: "Experiences", href: "#testimonials", id: "testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "career", "testimonials", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4 pointer-events-none">

      {/* Pill navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pointer-events-auto flex items-center justify-between gap-2 bg-background/90 backdrop-blur-xl border border-border rounded-full shadow-[0_2px_24px_rgba(0,0,0,0.08)] px-3 py-2 w-full max-w-2xl"
      >
        {/* Logo / avatar */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="flex items-center gap-2 flex-shrink-0 pl-1"
          data-testid="link-home"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-border flex-shrink-0">
            <img src={rafPhoto} alt="Rafi" className="w-full h-full object-cover object-top" />
          </div>
          <span className="text-sm font-semibold tracking-tight hidden sm:inline">Rafi</span>
        </a>

        {/* Desktop links — centered */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="relative flex flex-col items-center px-3.5 py-1.5 rounded-full text-sm transition-colors hover:bg-muted"
                data-testid={`link-${link.id}`}
              >
                <span className={isActive ? "text-foreground font-medium" : "text-muted-foreground"}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-0.5 w-1 h-1 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="hidden md:inline-flex text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/85 transition-colors whitespace-nowrap"
            data-testid="button-contact-nav"
          >
            Contact
          </a>
          {/* Mobile toggle */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-2 w-full max-w-2xl bg-background/95 backdrop-blur-xl border border-border rounded-3xl shadow-lg p-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-base font-medium text-foreground py-3 px-4 rounded-2xl hover:bg-muted transition-colors"
                data-testid={`mobile-link-${link.id}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="mt-1 text-base font-medium bg-foreground text-background py-3 px-4 rounded-2xl text-center hover:bg-foreground/90 transition-colors"
              data-testid="mobile-link-contact"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
