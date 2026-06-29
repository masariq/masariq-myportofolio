import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found.</p>
          <Link href="/#portfolio" className="text-foreground font-semibold underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabel = project.category === "Web" ? "Website" : "Social Media";

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:grid lg:grid-cols-[420px_1fr]">

        {/* ── Left: sticky info panel ── */}
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto bg-zinc-50 flex flex-col px-10 py-10">

          {/* Back link */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10 w-fit"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Back to Portfolio
          </Link>

          {/* Project icon */}
          <div
            className="w-11 h-11 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            style={{ backgroundColor: project.iconColor }}
          >
            {project.title[0]}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-zinc-900 leading-snug mb-4">
            {project.title}
          </h1>

          {/* Short bio */}
          <p className="text-[14px] text-zinc-500 leading-relaxed mb-8">
            {project.shortBio}
          </p>

          {/* Info list */}
          <div className="border-t border-zinc-200 pt-6 flex flex-col gap-5 mb-8">
            {[
              { label: "Category", value: categoryLabel },
              { label: "Client", value: project.client },
              { label: "Date", value: project.date },
              { label: "Role", value: project.role },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <span className="text-[12px] text-zinc-400 font-medium uppercase tracking-wider flex-shrink-0">
                  {label}
                </span>
                <span className="text-[14px] text-zinc-700 font-medium text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Process paragraph */}
          <div className="border-t border-zinc-200 pt-6 mt-auto">
            <p className="text-[13px] text-zinc-500 leading-relaxed">
              {project.process}
            </p>
          </div>
        </aside>

        {/* ── Right: scrollable image showcase ── */}
        <main className="bg-zinc-950 min-h-screen flex flex-col gap-3 p-3">

          {/* Visit Website button (Web projects only) */}
          {project.category === "Web" && project.liveUrl && (
            <div className="flex justify-end px-3 pt-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-100 transition-colors shadow-sm"
              >
                <ExternalLink size={14} />
                Visit Website
              </a>
            </div>
          )}

          {/* Stacked showcase images */}
          {project.images.map((src, i) => (
            <div
              key={i}
              className="w-full rounded-2xl overflow-hidden flex-shrink-0"
            >
              <img
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                className="w-full h-auto block object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* Bottom spacer */}
          <div className="h-6" />
        </main>
      </div>
    </div>
  );
}
