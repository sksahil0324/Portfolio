import { motion } from "framer-motion";
import { Users, FlaskConical, Calendar } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const colorMap: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/20", dot: "bg-primary" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20", dot: "bg-secondary" },
  accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/20", dot: "bg-accent" },
  "chart-4": { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", dot: "bg-purple-400" },
  "chart-5": { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20", dot: "bg-teal-400" },
};
const fallback = colorMap.primary;

export function Leadership() {
  const { leadership } = defaultPortfolioData;

  return (
    <section id="leadership" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-5xl relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">06. Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold">Beyond the Code</h2>
        </motion.div>
        <div className="space-y-8">
          {leadership.map((item, idx) => {
            const c = colorMap[item.color] ?? fallback;
            const Icon = item.iconType === "flask" ? FlaskConical : Users;
            return (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className={`glass-card rounded-2xl p-8 border ${c.border} hover:border-opacity-60 transition-all duration-300`} data-testid={`leadership-${idx}`}>
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl ${c.bg} shrink-0`}><Icon size={24} className={c.text} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <p className={`font-semibold ${c.text}`}>{item.org}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground glass px-3 py-1.5 rounded-full shrink-0">
                        <Calendar size={13} /><span>{item.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
