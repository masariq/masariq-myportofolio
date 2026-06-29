import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, ArrowLeft, Plus, Minus } from "lucide-react";
import rafPhoto from "@assets/photo_website_rafi_1782623162685.png";

const stats = [
  {
    value: "3+",
    unit: "years",
    label: "Experience",
    description: "Building digital presences for brands across lifestyle, business, and tech.",
  },
  {
    value: "50+",
    unit: "projects",
    label: "Projects",
    description: "Successfully launched, from sleek one-pagers to full social media campaigns.",
  },
  {
    value: "100+",
    unit: "clients",
    label: "Clients",
    description: "Many of whom return for new collaborations, referrals, or ongoing support.",
  },
  {
    value: "98%",
    unit: "satisfaction",
    label: "Satisfaction",
    description: "Based on client feedback collected across all completed projects.",
  },
];

const experiences = [
  {
    id: "exp1",
    date: "2024 – Present",
    role: "Website & Social Media Manager",
    description:
      "Building and managing modern websites, while leading social media strategy and content for small businesses and personal brands.",
  },
  {
    id: "exp2",
    date: "2022 – Present",
    role: "Digital Marketing Specialist",
    description:
      "Planning and executing end-to-end digital marketing — content creation, campaign strategy, and community management across Instagram, TikTok, and Facebook.",
  },
  {
    id: "exp3",
    date: "2022 – 2023",
    role: "Content Creator & Social Media Manager",
    description:
      "Creating content and managing day-to-day social media presence to grow brand visibility and audience engagement.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.3, ease: "easeIn" } },
};

export function About() {
  const [expanded, setExpanded] = useState(false);
  const [openExp, setOpenExp] = useState<string | null>(null);

  const toggleExp = (id: string) => setOpenExp((prev) => (prev === id ? null : id));

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <AnimatePresence mode="wait">
          {!expanded ? (
            /* ── DEFAULT STATE ── */
            <motion.div
              key="default"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-5"
            >
              {/* Left — black profile card */}
              <motion.div
                variants={itemVariants}
                className="bg-foreground text-background rounded-3xl overflow-hidden flex flex-col justify-between min-h-[420px]"
              >
                {/* Photo — full width, no cropping */}
                <div className="w-full h-[260px] overflow-hidden flex items-end justify-center">
                  <img
                    src={rafPhoto}
                    alt="Rafi"
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>

                {/* Text + button */}
                <div className="p-7 pt-5">
                  <h3 className="text-xl font-bold text-background mb-2 leading-snug">
                    I'm Rafi
                  </h3>
                  <p className="text-sm text-background/60 leading-relaxed mb-6">
                    A digital specialist based in Central Java, Indonesia — passionate about
                    crafting beautiful websites and building social media presences that make
                    brands stand out globally.
                  </p>
                  <button
                    onClick={() => setExpanded(true)}
                    className="w-full bg-background text-foreground text-sm font-semibold py-3.5 rounded-2xl hover:bg-background/90 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    About Me
                  </button>
                </div>
              </motion.div>

              {/* Right — 2×2 stat grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-5"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="bg-muted/50 border border-border rounded-3xl p-6 flex flex-col justify-between min-h-[160px]"
                  >
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-bold tracking-tight text-foreground leading-none">
                        {stat.value}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            /* ── EXPANDED STATE ── */
            <motion.div
              key="expanded"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Back button */}
              <motion.button
                variants={itemVariants}
                onClick={() => setExpanded(false)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 cursor-pointer group"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
                Back
              </motion.button>

              {/* Two-column: About left / Experience right */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
              >
                {/* Left — heading + intro + CTAs */}
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-6">
                      <span className="text-muted-foreground font-light">Hi, I'm </span>
                      <span className="text-foreground">Rafi,</span>
                      <br />
                      <span className="text-foreground">building digital</span>
                      <br />
                      <span className="text-muted-foreground font-light">experiences that last.</span>
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      I'm a freelance web designer & developer and social media manager based in
                      Central Java, Indonesia. Over the past three years, I've partnered with
                      businesses and creators around the world to turn their ideas into polished
                      digital presences — websites that feel intuitive, beautiful, and brand-true,
                      and social feeds that show up consistently and compellingly every day.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      My approach is collaborative and detail-oriented. I take time to understand
                      your goals, your audience, and the story you want to tell before a single
                      pixel is placed.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/cv.pdf"
                      download
                      className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground/85 hover:scale-[1.02] transition-all shadow-md"
                    >
                      <Download size={15} />
                      Download CV
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-muted transition-colors group"
                    >
                      Contact Me
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </div>

                {/* Right — accordion experience list */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    Professional Experience
                  </p>
                  {experiences.map((exp) => {
                    const isOpen = openExp === exp.id;
                    return (
                      <div
                        key={exp.id}
                        className="border border-border rounded-2xl overflow-hidden bg-background"
                      >
                        <button
                          onClick={() => toggleExp(exp.id)}
                          className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-muted/40 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground font-medium mb-1">
                              {exp.date}
                            </p>
                            <p className="text-sm font-semibold text-foreground leading-snug">
                              {exp.role}
                            </p>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground"
                          >
                            {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                                {exp.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Featured image */}
              <motion.div
                variants={itemVariants}
                className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.14)] mt-14"
              >
                <img
                  src={rafPhoto}
                  alt="Rafi — Digital Specialist"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <p className="text-white text-base font-semibold">Rafi</p>
                  <p className="text-white/60 text-sm">Website Design & Social Media</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
