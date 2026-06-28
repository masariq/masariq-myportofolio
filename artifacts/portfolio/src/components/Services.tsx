import { useRef } from "react";
import { motion } from "framer-motion";
import rafPhoto from "@assets/photo_website_rafi_1782623162685.png";

const services = [
  {
    category: "Platform",
    title: "Web Development",
    featured: false,
  },
  {
    category: "Content",
    title: "Social Media",
    featured: true,
  },
  {
    category: "Production",
    title: "Video Editing",
    featured: false,
  },
  {
    category: "Creative",
    title: "Web Design",
    featured: false,
  },
  {
    category: "Growth",
    title: "Brand Strategy",
    featured: false,
  },
  {
    category: "Analytics",
    title: "Performance",
    featured: false,
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-28 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Top headline area */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start mb-16">

          {/* Left body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-background/50 leading-relaxed max-w-[220px] pt-2 hidden md:block"
          >
            From first sketch to final pixel — every service is built around measurable outcomes and lasting digital impact.
          </motion.p>

          {/* Center headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-xs font-semibold text-background/40 uppercase tracking-widest">Core Competencies</span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              An integrated approach<br />
              to digital presence.
            </h2>
            <p className="text-[clamp(1.6rem,4vw,3rem)] font-light text-background/35 leading-[1.1] tracking-[-0.02em] mt-2">
              I build platforms, create<br />
              and edit content, and<br className="hidden md:block" />
              manage strategy.
            </p>
          </motion.div>

          {/* Right body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-background/50 leading-relaxed max-w-[220px] pt-2 ml-auto text-right hidden md:block"
          >
            Building multi-channel strategies that connect your brand with the right audience, at the right time, every time.
          </motion.p>
        </div>

        {/* Horizontal service cards */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className={`relative flex-shrink-0 rounded-2xl overflow-hidden flex flex-col justify-between scroll-snap-align-start
                ${service.featured
                  ? "w-[180px] h-[220px] md:w-[210px] md:h-[250px]"
                  : "w-[160px] h-[200px] md:w-[185px] md:h-[230px]"
                }
              `}
              style={{ scrollSnapAlign: "start" }}
            >
              {service.featured ? (
                /* Featured card — dark image overlay */
                <>
                  <img
                    src={rafPhoto}
                    alt="Rafi"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                    <span className="inline-flex self-start text-[10px] font-semibold bg-white/20 text-white backdrop-blur-sm rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <p className="text-white font-bold text-lg leading-tight">{service.title}</p>
                  </div>
                </>
              ) : (
                /* Regular card */
                <div className="bg-background/8 border border-background/12 hover:bg-background/14 transition-colors duration-300 rounded-2xl p-4 h-full flex flex-col justify-between cursor-default">
                  <span className="inline-flex self-start text-[10px] font-semibold text-background/40 border border-background/15 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                    {service.category}
                  </span>
                  <p className="text-background font-semibold text-base leading-snug">{service.title}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
