import { motion } from "framer-motion";
import { defaultPortfolioData } from "@/lib/portfolioData";

const colorMap: Record<string, { pill: string; heading: string; bar: string }> = {
  primary:   { pill: "border-primary/25 text-primary bg-primary/8 hover:bg-primary/18 hover:border-primary/50",   heading: "text-primary",   bar: "bg-primary" },
  secondary: { pill: "border-secondary/25 text-secondary bg-secondary/8 hover:bg-secondary/18 hover:border-secondary/50", heading: "text-secondary", bar: "bg-secondary" },
  accent:    { pill: "border-accent/25 text-accent bg-accent/8 hover:bg-accent/18 hover:border-accent/50",    heading: "text-accent",    bar: "bg-accent" },
  "chart-4": { pill: "border-purple-500/25 text-purple-400 bg-purple-500/8 hover:bg-purple-500/18 hover:border-purple-500/50", heading: "text-purple-400", bar: "bg-purple-400" },
  "chart-5": { pill: "border-teal-400/25 text-teal-400 bg-teal-500/8 hover:bg-teal-500/18 hover:border-teal-400/50",  heading: "text-teal-400",  bar: "bg-teal-400" },
};

export function Skills() {
  const { skills } = defaultPortfolioData;

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-tag">02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">Technical Arsenal</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {skills.map((category, catIdx) => {
            const c = colorMap[category.color] ?? colorMap.primary;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${c.heading}`}>
                    {category.label}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  <span className="text-xs text-muted-foreground font-mono">{category.skills.length} skills</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: catIdx * 0.06 + skillIdx * 0.035 }}
                      whileHover={{ scale: 1.06, y: -1 }}
                      className={`px-4 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200 cursor-default font-mono ${c.pill}`}
                      data-testid={`skill-${skill.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {skill}
                    </motion.span>
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
