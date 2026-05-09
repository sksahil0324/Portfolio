import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    title: "AWS Cloud Practitioner Course",
    issuer: "Amazon Web Services (via GeeksforGeeks)",
    color: "primary",
  },
  {
    title: "Build a Computer Vision App with Azure Cognitive Services",
    issuer: "Microsoft",
    color: "secondary",
  },
  {
    title: "Azure AI Essentials Professional Certificate",
    issuer: "Microsoft",
    color: "accent",
  },
  {
    title: "IT Leadership Professional Certificate",
    issuer: "ServiceNow",
    color: "chart-4",
  },
  {
    title: "Designer Core Micro-Credential",
    issuer: "Alteryx",
    color: "chart-5",
  },
  {
    title: "Data Analytics Essentials Certificate",
    issuer: "Cisco Networking Academy",
    date: "Jun 2025",
    color: "primary",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20 hover:border-primary/50" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20 hover:border-secondary/50" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20 hover:border-accent/50" },
  "chart-4": { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20 hover:border-purple-500/50" },
  "chart-5": { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20 hover:border-teal-500/50" },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">05. Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold">Credentials</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => {
            const c = colorMap[cert.color];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-xl p-6 border transition-all duration-300 ${c.border}`}
                data-testid={`cert-${idx}`}
              >
                <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center mb-4`}>
                  <Award size={20} className={c.text} />
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">{cert.title}</h3>
                <p className={`text-xs font-medium ${c.text}`}>{cert.issuer}</p>
                {cert.date && (
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
