import { motion } from "framer-motion";
import { Code2, Share2, Video } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Code2 size={32} strokeWidth={1.5} />,
      title: "Web Development & Management",
      description: "Full-cycle web creation from concept to deployment. High-performance, responsive sites built with modern frameworks and meticulous attention to detail.",
      tags: ["React", "Next.js", "Tailwind CSS", "CMS"]
    },
    {
      icon: <Share2 size={32} strokeWidth={1.5} />,
      title: "Social Media Branding",
      description: "Cohesive visual identity for social platforms. Engaging Instagram and TikTok feeds that convert followers into loyal community members.",
      tags: ["Strategy", "Content Calendar", "Visual Identity", "Analytics"]
    },
    {
      icon: <Video size={32} strokeWidth={1.5} />,
      title: "Short-Form Video Production",
      description: "High-retention video content for Reels, TikTok, and YouTube Shorts. Dynamic editing, captioning, and trend-aware direction.",
      tags: ["Editing", "Color Grading", "Motion Graphics", "CapCut / Premiere"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Competencies.</h2>
          <p className="text-muted-foreground text-lg max-w-xl">A unified approach to digital presence. I build the platform, create the content, and manage the strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-foreground mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono font-medium px-3 py-1 bg-muted text-muted-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
