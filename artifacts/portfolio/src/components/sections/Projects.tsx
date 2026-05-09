import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const colorMap: Record<string, { border: string; text: string; badge: string; dot: string }> = {
  primary: { border: "hover:border-primary/40", text: "text-primary", badge: "bg-primary/10 text-primary border-primary/20", dot: "bg-primary" },
  secondary: { border: "hover:border-secondary/40", text: "text-secondary", badge: "bg-secondary/10 text-secondary border-secondary/20", dot: "bg-secondary" },
  accent: { border: "hover:border-accent/40", text: "text-accent", badge: "bg-accent/10 text-accent border-accent/20", dot: "bg-accent" },
  "chart-4": { border: "hover:border-purple-500/40", text: "text-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", dot: "bg-purple-400" },
  "chart-5": { border: "hover:border-teal-400/40", text: "text-teal-400", badge: "bg-teal-500/10 text-teal-400 border-teal-500/20", dot: "bg-teal-400" },
};
const fallback = colorMap.primary;

export function Projects() {
  const { projects } = defaultPortfolioData;

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">04. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">What I've Built</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const c = colorMap[project.color] ?? fallback;
            return (
              <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.12 }} whileHover={{ y: -4 }} className={`glass-card rounded-2xl p-8 border border-white/5 transition-all duration-300 flex flex-col ${c.border}`} data-testid={`project-${idx}`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    <a href={project.githubUrl || "#"} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg glass hover:text-primary transition-colors" data-testid={`project-github-${idx}`}><Github size={16} /></a>
                    <a href={project.demoUrl || "#"} target="_blank" rel="noreferrer" aria-label="Demo" className="p-2 rounded-lg glass hover:text-primary transition-colors" data-testid={`project-demo-${idx}`}><ExternalLink size={16} /></a>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {project.points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />{pt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className={`px-2.5 py-1 rounded-md text-xs font-medium border ${c.badge}`}>{t}</span>
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
