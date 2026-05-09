import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const colorMap: Record<string, { dot: string; fill: string; text: string; badge: string; line: string }> = {
  primary:   { dot: "border-primary bg-primary/15",   fill: "bg-primary",   text: "text-primary",   badge: "bg-primary/10 text-primary border-primary/20",     line: "from-primary/60" },
  secondary: { dot: "border-secondary bg-secondary/15", fill: "bg-secondary", text: "text-secondary", badge: "bg-secondary/10 text-secondary border-secondary/20", line: "from-secondary/60" },
  accent:    { dot: "border-accent bg-accent/15",     fill: "bg-accent",    text: "text-accent",    badge: "bg-accent/10 text-accent border-accent/20",         line: "from-accent/60" },
  "chart-4": { dot: "border-purple-400 bg-purple-400/15", fill: "bg-purple-400", text: "text-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", line: "from-purple-400/60" },
  "chart-5": { dot: "border-teal-400 bg-teal-500/15",  fill: "bg-teal-400",  text: "text-teal-400",  badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",   line: "from-teal-400/60" },
};

export function Experience() {
  const { experience } = defaultPortfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-tag">03. Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">Where I've Worked</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-secondary/25 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experience.map((exp, idx) => {
              const c = colorMap[exp.color] ?? colorMap.primary;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="md:pl-16 relative"
                  data-testid={`experience-${idx}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[11px] top-7 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center ${c.dot}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${c.fill}`} />
                  </div>

                  <div className="glass-card card-highlight rounded-2xl p-7 hover:border-white/15 transition-all duration-300 group">
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-mono uppercase tracking-widest ${c.text}`}>{exp.type}</span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                        <p className={`text-base font-semibold mt-0.5 ${c.text}`}>{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground glass px-3 py-1.5 rounded-full font-mono shrink-0">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                          <span className={`mt-[9px] w-1 h-1 rounded-full shrink-0 ${c.fill} opacity-80`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {exp.tech.map((t) => (
                        <span key={t} className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-medium border ${c.badge}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
