import { motion } from "framer-motion";
import { Users, FlaskConical, Calendar } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const colorMap: Record<string, { text: string; bg: string; border: string; dot: string; badge: string }> = {
  primary:   { text: "text-primary",   bg: "bg-primary/10",   border: "border-white/8 hover:border-primary/35",   dot: "bg-primary",   badge: "bg-primary/10 text-primary border-primary/20" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-white/8 hover:border-secondary/35", dot: "bg-secondary", badge: "bg-secondary/10 text-secondary border-secondary/20" },
  accent:    { text: "text-accent",    bg: "bg-accent/10",    border: "border-white/8 hover:border-accent/35",    dot: "bg-accent",    badge: "bg-accent/10 text-accent border-accent/20" },
  "chart-4": { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-white/8 hover:border-purple-400/35", dot: "bg-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  "chart-5": { text: "text-teal-400",  bg: "bg-teal-500/10",  border: "border-white/8 hover:border-teal-400/35",  dot: "bg-teal-400",  badge: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
};
const fallback = colorMap.primary;

export function Leadership() {
  const { leadership } = defaultPortfolioData;

  return (
    <section id="leadership" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-5xl relative">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-tag">06. Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">Beyond the Code</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {leadership.map((item, idx) => {
            const c = colorMap[item.color] ?? fallback;
            const Icon = item.iconType === "flask" ? FlaskConical : Users;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`glass-card card-highlight rounded-2xl p-7 border transition-all duration-300 ${c.border}`}
                data-testid={`leadership-${idx}`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-xl ${c.bg} shrink-0`}>
                    <Icon size={20} className={c.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold tracking-tight">{item.role}</h3>
                        <p className={`text-sm font-semibold mt-0.5 ${c.text}`}>{item.org}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground glass px-3 py-1.5 rounded-full shrink-0 font-mono">
                        <Calendar size={11} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-[9px] w-1 h-1 rounded-full shrink-0 ${c.dot} opacity-80`} />
                          {pt}
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
