import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Category = "All" | "Web" | "Social";

const projects = [
  {
    id: 1,
    title: "Fintech Platform Redesign",
    category: "Web" as const,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    role: "UI/UX Design · Dev",
    year: "2024",
    description: "Clean dashboard & landing page for a modern fintech startup.",
    extra: "Next.js · Tailwind",
  },
  {
    id: 2,
    title: "Editorial Fashion Store",
    category: "Web" as const,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    role: "Full-stack Dev",
    year: "2024",
    description: "E-commerce storefront with editorial art direction and fast checkout.",
    extra: "Shopify · Custom theme",
  },
  {
    id: 3,
    title: "Lifestyle Brand Instagram",
    category: "Social" as const,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    role: "Social Media Manager",
    year: "2023 – 2024",
    description: "Content strategy, feed design, and community growth for a lifestyle brand.",
    extra: "Instagram · TikTok",
  },
  {
    id: 4,
    title: "Tech Startup Campaign",
    category: "Social" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    role: "Campaign Strategy",
    year: "2024",
    description: "Product launch campaign that drove 3× engagement in two months.",
    extra: "LinkedIn · Meta Ads",
  },
  {
    id: 5,
    title: "E-Commerce Experience",
    category: "Web" as const,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    role: "Web Design · Dev",
    year: "2025",
    description: "Minimal product-first store with seamless mobile checkout flow.",
    extra: "React · Stripe",
  },
  {
    id: 6,
    title: "F&B Brand Social Media",
    category: "Social" as const,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    role: "Content Creator",
    year: "2023",
    description: "Mouth-watering food photography & reels strategy for a local restaurant.",
    extra: "Instagram · Canva",
  },
];

const tabs: Category[] = ["All", "Web", "Social"];
const tabLabels: Record<Category, string> = {
  All: "All",
  Web: "Web Development",
  Social: "Social Media",
};
const categoryLabel: Record<string, string> = {
  Web: "Website",
  Social: "Social Media",
};

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredProjects =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 md:px-12">

        {/* ── Section header + filter tabs — unchanged ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work.</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A curated selection of projects across website design & development and social media management.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-foreground text-background shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>
        </div>

        {/* ── Card grid ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.28 }}
                whileHover={{ scale: 1.025, transition: { duration: 0.22, ease: "easeOut" } }}
                className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
              >
                {/* ── Image area ── */}
                <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[11px] font-semibold text-gray-800 shadow-sm">
                    {categoryLabel[project.category]}
                  </span>
                </div>

                {/* ── Info panel ── */}
                <div className="bg-white px-5 py-5 flex flex-col gap-1 flex-1">
                  {/* Name row */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[17px] font-bold text-gray-900 leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Role · Year subtext */}
                  <p className="text-[12px] text-gray-400 font-medium">
                    {project.role} · {project.year}
                  </p>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 leading-relaxed mt-1 line-clamp-1">
                    {project.description}
                  </p>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] text-gray-400 font-mono">{project.extra}</span>
                    <button className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-[12px] font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                      View Project
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
