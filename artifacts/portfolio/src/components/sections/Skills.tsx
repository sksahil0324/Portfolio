import { motion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

const colorMap: Record<string, string> = {
  primary: "border-primary/30 text-primary bg-primary/5 hover:bg-primary/15",
  secondary: "border-secondary/30 text-secondary bg-secondary/5 hover:bg-secondary/15",
  accent: "border-accent/30 text-accent bg-accent/5 hover:bg-accent/15",
  "chart-4": "border-purple-500/30 text-purple-400 bg-purple-500/5 hover:bg-purple-500/15",
  "chart-5": "border-teal-400/30 text-teal-400 bg-teal-500/5 hover:bg-teal-500/15",
};

const glowMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  "chart-4": "text-purple-400",
  "chart-5": "text-teal-400",
};

export function Skills() {
  const { data } = usePortfolio();

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Arsenal</h2>
        </motion.div>

        <div className="space-y-10">
          {data.skills.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 ${glowMap[category.color] ?? "text-primary"}`}>
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + skillIdx * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-default ${colorMap[category.color] ?? colorMap.primary}`}
                    data-testid={`skill-${skill.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
