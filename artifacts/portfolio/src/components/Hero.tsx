import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] pt-32 pb-20 flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">Available for Remote Work</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8"
          >
            Building Premium Websites <br className="hidden md:block" />
            & Crafting Engaging Social Media Experiences.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
          >
            Digital specialist blending technical execution with compelling visual narratives. From full-stack web development to viral short-form video production.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <a 
              href="#contact"
              className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:scale-105 hover:bg-foreground/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] w-full sm:w-auto justify-center"
            >
              Hire My Services <ArrowRight size={18} />
            </a>
            <a 
              href="#career"
              className="flex items-center gap-2 bg-transparent border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-muted transition-colors w-full sm:w-auto justify-center"
            >
              <FileText size={18} /> View Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl"
          >
            <img 
              src="/images/profile.png" 
              alt="Rafi Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-full" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
