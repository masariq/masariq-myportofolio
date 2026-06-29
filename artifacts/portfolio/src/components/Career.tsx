import { motion } from "framer-motion";
import { Globe, Clock, Coffee, MapPin } from "lucide-react";

export function Career() {

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

          </div>

        </div>
      </div>
    </section>
  );
}
