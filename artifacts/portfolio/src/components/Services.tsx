import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Share2, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "web",
    icon: Code2,
    label: "Web Design & Dev",
    headline: "Beautiful, high-performance websites built for modern brands.",
    description:
      "From concept to deployment — I design and build custom websites that are fast, responsive, and conversion-focused. Every site is crafted with precision using modern frameworks and clean, maintainable code.",
    tags: ["React", "Next.js", "Tailwind CSS", "WordPress", "Figma", "CMS"],
    deliverables: [
      "Custom website design & development",
      "Landing pages & marketing sites",
      "Portfolio & personal brand sites",
      "CMS setup & ongoing management",
      "Performance optimization",
    ],
  },
  {
    id: "social",
    icon: Share2,
    label: "Social Media",
    headline: "Consistent, on-brand social media that builds real audiences.",
    description:
      "I handle everything from content calendars and visual feed design to copywriting and posting schedules. Your brand shows up professionally every day, without you lifting a finger.",
    tags: ["Instagram", "TikTok", "Content Calendar", "Canva", "Strategy", "Analytics"],
    deliverables: [
      "Monthly content planning & calendars",
      "Visual feed design & grid layout",
      "Caption writing & hashtag research",
      "Story & Reel templates",
      "Account growth strategy",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <section id="services" className="py-28 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold text-background/40 uppercase tracking-widest block mb-5">
            Core Competencies
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-3">
            An integrated approach<br />to digital presence.
          </h2>
          <p className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-light text-background/40 leading-snug">
            I build platforms and manage your brand's<br className="hidden md:block" /> digital presence end-to-end.
          </p>
        </motion.div>

        {/* Tab Icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 mb-10 flex-wrap"
        >
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                data-testid={`tab-${s.id}`}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "bg-background text-foreground border-background scale-[1.03] shadow-lg"
                    : "bg-transparent text-background/60 border-background/15 hover:border-background/35 hover:text-background"
                  }`}
              >
                <motion.div
                  animate={isActive ? { rotate: [0, -12, 12, -6, 6, 0] } : { rotate: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 1.8} />
                </motion.div>
                {s.label}
              </button>
            );
          })}
        </motion.div>

        {/* Animated Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left — headline + description + tags */}
            <div className="bg-background/8 border border-background/12 rounded-3xl p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.05, type: "spring", stiffness: 260 }}
                  className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center mb-6"
                >
                  {(() => { const Icon = current.icon; return <Icon size={26} className="text-background" strokeWidth={1.6} />; })()}
                </motion.div>
                <h3 className="text-xl font-bold text-background mb-3 leading-snug">{current.headline}</h3>
                <p className="text-sm text-background/55 leading-relaxed">{current.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {current.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.25 }}
                    className="text-[11px] font-medium px-3 py-1 rounded-full bg-background/10 text-background/70 border border-background/10"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Right — deliverables */}
            <div className="bg-background/8 border border-background/12 rounded-3xl p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <p className="text-xs font-semibold text-background/35 uppercase tracking-widest mb-5">What's included</p>
                <ul className="space-y-3">
                  {current.deliverables.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.07, duration: 0.3 }}
                      className="flex items-start gap-3 text-sm text-background/80"
                    >
                      <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-background/40 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-background hover:text-background/70 transition-colors group"
                data-testid={`link-inquire-${active}`}
              >
                Inquire about this service
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
