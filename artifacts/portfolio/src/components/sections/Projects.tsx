import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, GitBranch } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const colorMap: Record<string, { border: string; text: string; badge: string; dot: string; glow: string }> = {
  primary:   { border: "hover:border-primary/40",   text: "text-primary",   badge: "bg-primary/10 text-primary border-primary/20",         dot: "bg-primary",    glow: "group-hover:shadow-primary/10" },
  secondary: { border: "hover:border-secondary/40", text: "text-secondary", badge: "bg-secondary/10 text-secondary border-secondary/20",   dot: "bg-secondary",  glow: "group-hover:shadow-secondary/10" },
  accent:    { border: "hover:border-accent/40",    text: "text-accent",    badge: "bg-accent/10 text-accent border-accent/20",             dot: "bg-accent",     glow: "group-hover:shadow-accent/10" },
  "chart-4": { border: "hover:border-purple-500/40", text: "text-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", dot: "bg-purple-400", glow: "group-hover:shadow-purple-500/10" },
  "chart-5": { border: "hover:border-teal-400/40",  text: "text-teal-400",  badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",       dot: "bg-teal-400",   glow: "group-hover:shadow-teal-400/10" },
};
const fallback = colorMap.primary;

export function Projects() {
  const { projects } = defaultPortfolioData;

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-tag">04. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">What I've Built</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        {/* Repo header decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center gap-2 text-muted-foreground text-xs font-mono"
        >
          <GitBranch size={12} />
          <span>~/sksahil0324/</span>
          <span className="text-primary">projects</span>
          <span className="ml-2 px-2 py-0.5 rounded-full border border-white/10 bg-white/3">{projects.length} repos</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const c = colorMap[project.color] ?? fallback;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className={`glass-card card-highlight rounded-2xl p-7 border border-white/6 transition-all duration-300 flex flex-col group shadow-xl ${c.border} ${c.glow}`}
                data-testid={`project-${idx}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <h3 className="text-base font-bold leading-snug">{project.title}</h3>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <a href={project.githubUrl || "#"} target="_blank" rel="noreferrer" aria-label="GitHub"
                      className={`p-2 rounded-lg bg-white/4 hover:bg-white/10 ${c.text} transition-all duration-200`}
                      data-testid={`project-github-${idx}`}>
                      <Github size={14} />
                    </a>
                    <a href={project.demoUrl || "#"} target="_blank" rel="noreferrer" aria-label="Demo"
                      className={`p-2 rounded-lg bg-white/4 hover:bg-white/10 ${c.text} transition-all duration-200`}
                      data-testid={`project-demo-${idx}`}>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-4">
                  <Calendar size={11} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-1.5 mb-6 flex-1">
                  {project.points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className={`mt-[9px] w-1 h-1 rounded-full shrink-0 ${c.dot} opacity-70`} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className={`px-2 py-0.5 rounded-md text-xs font-mono font-medium border ${c.badge}`}>{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
