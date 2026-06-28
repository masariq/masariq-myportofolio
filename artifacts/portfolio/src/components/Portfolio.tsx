import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Category = "All" | "Web" | "Social";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const projects = [
    {
      id: 1,
      title: "Fintech Platform Redesign",
      category: "Web",
      image: "/images/web-1.png",
    },
    {
      id: 2,
      title: "Editorial Fashion Store",
      category: "Web",
      image: "/images/web-2.png",
    },
    {
      id: 3,
      title: "Lifestyle Brand Instagram",
      category: "Social",
      image: "/images/social-1.png",
    },
    {
      id: 4,
      title: "Tech Startup Campaign",
      category: "Social",
      image: "/images/social-2.png",
    },
    {
      id: 5,
      title: "E-Commerce Experience",
      category: "Web",
      image: "/images/web-3.png",
    },
  ];

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const tabs: Category[] = ["All", "Web", "Social"];
  const tabLabels: Record<Category, string> = {
    All: "All",
    Web: "Web Development",
    Social: "Social Media",
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work.</h2>
            <p className="text-muted-foreground text-lg max-w-xl">A curated selection of projects across website design & development and social media management.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tabs.map(tab => (
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-muted aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mt-4">
                      <ExternalLink size={18} />
                    </div>
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
