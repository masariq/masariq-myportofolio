import { motion } from "framer-motion";
import { ArrowRight, FileText, Globe, Star } from "lucide-react";
import rafPhoto from "@assets/photo_website_rafi_1782623162685.png";

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl w-full">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-700 dark:text-green-400 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
            Available for Remote Work
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-center text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.08] tracking-[-0.03em] mb-6"
        >
          <span className="font-light text-muted-foreground">Digital specialist </span>
          <span className="font-bold text-foreground">crafting</span>
          <br />
          <span className="font-bold text-foreground">premium online </span>
          <span className="font-light text-muted-foreground">presence</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-center text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed"
        >
          From full-stack web development to viral short-form video production — blending technical execution with compelling visual storytelling.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-2 bg-foreground text-background px-7 py-3 rounded-full font-medium text-sm hover:scale-[1.03] hover:bg-foreground/90 transition-all shadow-md"
            data-testid="button-hire"
          >
            Hire My Services <ArrowRight size={15} />
          </a>
          <a
            href="#career"
            onClick={(e) => { e.preventDefault(); document.querySelector("#career")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-2 border border-border text-foreground px-7 py-3 rounded-full font-medium text-sm hover:bg-muted transition-colors"
            data-testid="button-resume"
          >
            <FileText size={15} /> View Resume
          </a>
        </motion.div>

        {/* Hero Visual — 3-card layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative flex items-end justify-center gap-4 md:gap-6 h-[340px] md:h-[420px]"
        >
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden sm:flex flex-col justify-between w-[190px] md:w-[230px] h-[260px] md:h-[310px] bg-card border border-border rounded-2xl p-5 shadow-lg self-end mb-6 flex-shrink-0"
          >
            <div>
              <p className="text-[10px] text-muted-foreground mb-2 font-medium uppercase tracking-wider">Web Project</p>
              <p className="text-sm font-semibold leading-snug text-foreground">Carter is solving problems<br />through strategic design and<br />compelling visuals.</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-7 h-7 rounded-full bg-muted border border-border overflow-hidden flex-shrink-0">
                <img src={rafPhoto} alt="Rafi" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground">Rafi · Web Dev</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" className="text-yellow-400" />)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center — main photo frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="relative flex-shrink-0 w-[200px] md:w-[250px] h-[300px] md:h-[380px] rounded-[2rem] overflow-hidden border-[6px] border-background shadow-[0_30px_80px_rgba(0,0,0,0.18)] bg-muted z-10"
            style={{ boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 30px 80px rgba(0,0,0,0.15)" }}
          >
            <img
              src={rafPhoto}
              alt="Rafi"
              className="w-full h-full object-cover object-top"
            />
            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
              <p className="text-white text-sm font-semibold">Rafi</p>
              <p className="text-white/70 text-xs">Digital Specialist</p>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 4 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden sm:flex flex-col justify-between w-[190px] md:w-[230px] h-[240px] md:h-[290px] bg-card border border-border rounded-2xl p-5 shadow-lg self-end mb-8 flex-shrink-0"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-foreground text-background flex items-center justify-center flex-shrink-0">
                <Globe size={14} />
              </div>
              <p className="text-xs font-semibold text-foreground">We craft digital<br />presence that lasts.</p>
            </div>
            <div className="bg-muted rounded-xl p-3 mt-auto">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-medium">Clients</p>
              <p className="text-xl font-bold text-foreground">100+</p>
              <p className="text-[10px] text-muted-foreground">worldwide & remote</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
