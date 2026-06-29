import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/data/projects";

type Category = "All" | "Web" | "Social";

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

        {/* ── Section header + filter tabs ── */}
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
                className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image area */}
                <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[11px] font-semibold text-gray-800 shadow-sm">
                    {categoryLabel[project.category]}
                  </span>
                </div>

                {/* Info panel */}
                <div className="bg-white px-5 py-5 flex flex-col gap-1 flex-1">
                  <h3 className="text-[17px] font-bold text-gray-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-gray-400 font-medium">
                    {project.role} · {project.year}
                  </p>
                  <p className="text-[13px] text-gray-500 leading-relaxed mt-1 line-clamp-1">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] text-gray-400 font-mono">{project.extra}</span>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-[12px] font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      View Project
                      <ArrowUpRight size={13} />
                    </Link>
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
