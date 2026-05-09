import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const colorMap: Record<string, { bg: string; icon: string; border: string; issuer: string }> = {
  primary:   { bg: "bg-primary/10",   icon: "text-primary",   border: "border-white/8 hover:border-primary/40",   issuer: "text-primary" },
  secondary: { bg: "bg-secondary/10", icon: "text-secondary", border: "border-white/8 hover:border-secondary/40", issuer: "text-secondary" },
  accent:    { bg: "bg-accent/10",    icon: "text-accent",    border: "border-accent/8 hover:border-accent/40",    issuer: "text-accent" },
  "chart-4": { bg: "bg-purple-500/10", icon: "text-purple-400", border: "border-white/8 hover:border-purple-400/40", issuer: "text-purple-400" },
  "chart-5": { bg: "bg-teal-500/10",  icon: "text-teal-400",  border: "border-white/8 hover:border-teal-400/40",  issuer: "text-teal-400" },
};
const fallback = colorMap.primary;

export function Certifications() {
  const { certifications } = defaultPortfolioData;

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-tag">05. Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">Credentials</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => {
            const c = colorMap[cert.color] ?? fallback;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.93, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -3 }}
                className={`glass-card card-highlight rounded-xl p-6 border transition-all duration-300 ${c.border}`}
                data-testid={`cert-${idx}`}
              >
                <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center mb-4`}>
                  <ShieldCheck size={17} className={c.icon} />
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-3">{cert.title}</h3>
                <div className="flex items-center justify-between">
                  <p className={`text-xs font-mono font-medium ${c.issuer}`}>{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
