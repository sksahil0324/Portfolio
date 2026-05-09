import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const dotColorMap: Record<string, string> = {
  primary: "border-primary bg-primary/20",
  secondary: "border-secondary bg-secondary/20",
  accent: "border-accent bg-accent/20",
  "chart-4": "border-purple-400 bg-purple-400/20",
  "chart-5": "border-teal-400 bg-teal-400/20",
};
const glowMap: Record<string, string> = {
  primary: "text-primary", secondary: "text-secondary", accent: "text-accent",
  "chart-4": "text-purple-400", "chart-5": "text-teal-400",
};
const dotFillMap: Record<string, string> = {
  primary: "bg-primary", secondary: "bg-secondary", accent: "bg-accent",
  "chart-4": "bg-purple-400", "chart-5": "bg-teal-400",
};

export function Experience() {
  const { experience } = defaultPortfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">03. Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Where I've Worked</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div key={exp.id} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="md:pl-20 relative" data-testid={`experience-${idx}`}>
                <div className={`absolute left-[26px] top-6 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center ${dotColorMap[exp.color] ?? dotColorMap.primary}`}>
                  <div className={`w-2 h-2 rounded-full ${dotFillMap[exp.color] ?? "bg-primary"}`} />
                </div>
                <div className="glass-card rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className={glowMap[exp.color] ?? "text-primary"} />
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                      </div>
                      <p className={`text-lg font-semibold ${glowMap[exp.color] ?? "text-primary"}`}>{exp.company}</p>
                      <span className="text-sm text-muted-foreground">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground glass px-3 py-1.5 rounded-full">
                      <Calendar size={14} /><span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${dotFillMap[exp.color] ?? "bg-primary"}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
