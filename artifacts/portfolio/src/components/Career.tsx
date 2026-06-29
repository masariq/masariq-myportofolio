import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Clock, Coffee, MapPin } from "lucide-react";
import {
  SiSlack, SiNotion, SiGithub, SiFigma,
  SiOpenai, SiGooglegemini, SiClaude, SiReplit,
  SiAffinity, SiCanva,
} from "react-icons/si";

const tools: Array<{ label: string; icon?: React.ElementType; text?: string }> = [
  { label: "Slack",    icon: SiSlack },
  { label: "Notion",   icon: SiNotion },
  { label: "GitHub",   icon: SiGithub },
  { label: "Figma",    icon: SiFigma },
  { label: "Cursor",   text: "⌘" },
  { label: "ChatGPT",  icon: SiOpenai },
  { label: "Gemini",   icon: SiGooglegemini },
  { label: "Claude",   icon: SiClaude },
  { label: "Replit",   icon: SiReplit },
  { label: "Affinity", icon: SiAffinity },
  { label: "Canva",    icon: SiCanva },
  { label: "CapCut",   text: "CC" },
];

const marqueeItems = [...tools, ...tools];

export function Career() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="career" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16">

          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Remote Ready. <br />Globally Focused.
            </h2>
            <p className="text-background/70 text-lg mb-10 max-w-lg">
              Operating seamlessly across time zones. Equipped with the latest async
              communication tools and a proven track record of delivering high-quality
              work without geographical constraints.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 text-background/50 font-mono text-sm mb-2">
                  <Clock size={16} /> TIMEZONE
                </div>
                <div className="text-xl font-medium">Flexible / Async</div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-background/50 font-mono text-sm mb-2">
                  <MapPin size={16} /> BASE
                </div>
                <div className="text-xl font-medium">Global Digital Nomad</div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-background/50 font-mono text-sm mb-2">
                  <Globe size={16} /> LANGUAGES
                </div>
                <div className="text-xl font-medium">English (Native)</div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-background/50 font-mono text-sm mb-2">
                  <Coffee size={16} /> AVAILABILITY
                </div>
                <div className="text-xl font-medium">Full-time / Contract</div>
              </div>
            </div>

            {/* Tech Stack & Tools — scrolling marquee */}
            <div className="pt-8 border-t border-background/20">
              <p className="text-sm text-background/50 font-mono mb-6 uppercase tracking-widest">
                Tech Stack & Tools
              </p>

              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-foreground to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-foreground to-transparent" />

                <motion.div
                  className="flex gap-8 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                  {...(paused ? { animate: false } : {})}
                >
                  {marqueeItems.map((tool, i) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-background/75 hover:text-background transition-colors flex-shrink-0"
                      >
                        {Icon ? (
                          <Icon size={22} />
                        ) : (
                          <span className="font-bold font-mono text-base leading-none w-[22px] text-center">
                            {tool.text}
                          </span>
                        )}
                        <span className="text-sm font-medium whitespace-nowrap">
                          {tool.label}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
