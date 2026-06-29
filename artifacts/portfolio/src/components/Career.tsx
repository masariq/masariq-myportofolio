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

            {/* ── 4-column info card ── */}
            <div className="rounded-2xl border border-background/10 bg-background/8 shadow-lg mb-12 overflow-hidden max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-background/10">
                {[
                  { icon: Clock,  label: "TIMEZONE",     value: "GMT+7 · Flexible Overlap" },
                  { icon: MapPin, label: "BASE",          value: "Central Java, Indonesia" },
                  { icon: Globe,  label: "LANGUAGES",     value: "Indonesian, English" },
                  { icon: Coffee, label: "AVAILABILITY",  value: "Full-time / Contract" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex flex-col gap-2.5 px-7 py-6">
                    <Icon size={17} className="text-background/40" strokeWidth={1.6} />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-background/40 font-mono">
                      {label}
                    </span>
                    <span className="text-[15px] font-semibold text-background leading-snug">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
