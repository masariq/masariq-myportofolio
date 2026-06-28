import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Rafi transformed our entire digital presence. The website is blazing fast, and the TikTok strategy drove a 300% increase in engagement within two months.",
      author: "Sarah Jenkins",
      role: "Founder, Lumina Lifestyle",
      rating: 5
    },
    {
      text: "Incredibly reliable and detail-oriented. It's rare to find someone who understands both clean code architecture and aesthetic visual design so perfectly.",
      author: "Marcus Chen",
      role: "CTO, Zenith Tech",
      rating: 5
    },
    {
      text: "The video content produced by Rafi completely changed our marketing trajectory. Professional, prompt, and highly creative execution.",
      author: "Elena Rodriguez",
      role: "Marketing Director, Vibe Media",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-foreground">Experiences.</h2>
          <p className="text-xl text-muted-foreground">Don't just take my word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full bg-muted/30 p-8 rounded-3xl"
            >
              <div className="flex gap-1 mb-6 text-foreground">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg font-medium leading-relaxed mb-8 flex-grow">
                "{item.text}"
              </p>
              <div className="mt-auto">
                <div className="font-bold text-foreground">{item.author}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
