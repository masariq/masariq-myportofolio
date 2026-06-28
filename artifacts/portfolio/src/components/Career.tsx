import { motion } from "framer-motion";
import { Globe, Clock, Coffee, MapPin } from "lucide-react";
import { SiSlack, SiNotion, SiGithub, SiFigma } from "react-icons/si";

export function Career() {
  return (
    <section id="career" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Remote Ready. <br/>Globally Focused.</h2>
            <p className="text-background/70 text-lg mb-10 max-w-lg">
              Operating seamlessly across time zones. Equipped with the latest async communication tools and a proven track record of delivering high-quality work without geographical constraints.
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
            
            <div className="pt-8 border-t border-background/20">
              <p className="text-sm text-background/50 font-mono mb-4 uppercase tracking-widest">Tech Stack & Tools</p>
              <div className="flex flex-wrap gap-6 text-background/80">
                <SiSlack size={28} className="hover:text-white transition-colors" />
                <SiNotion size={28} className="hover:text-white transition-colors" />
                <SiGithub size={28} className="hover:text-white transition-colors" />
                <SiFigma size={28} className="hover:text-white transition-colors" />
                {/* Additional custom tool representations could go here */}
                <div className="font-bold font-serif text-2xl hover:text-white transition-colors">Cursor</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-3xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-background/20">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />
                  <div className="text-sm font-mono text-primary mb-1">2022 - Present</div>
                  <h4 className="text-xl font-bold mb-1">Independent Digital Specialist</h4>
                  <p className="text-background/60">Partnering with global brands to deliver web platforms and viral social campaigns.</p>
                </div>
                
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-background/20">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-background/50" />
                  <div className="text-sm font-mono text-background/50 mb-1">2020 - 2022</div>
                  <h4 className="text-xl font-bold mb-1">Lead Frontend Developer</h4>
                  <p className="text-background/60">TechNova Solutions • Remote</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-background/50" />
                  <div className="text-sm font-mono text-background/50 mb-1">2018 - 2020</div>
                  <h4 className="text-xl font-bold mb-1">Content Creator & Editor</h4>
                  <p className="text-background/60">MediaFlow Agency • Remote</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
