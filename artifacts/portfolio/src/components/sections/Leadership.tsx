import { motion } from "framer-motion";
import { Users, FlaskConical, Calendar } from "lucide-react";

const leadership = [
  {
    role: "Treasurer",
    org: "ISTE-RAIT",
    period: "July 2025 – Present",
    location: "Navi Mumbai, India",
    icon: Users,
    color: "primary",
    points: [
      "Overseeing financial planning, budgeting, and fund allocation for ISTE activities to ensure transparent resource management.",
      "Coordinating with faculty, sponsors, and stakeholders for smooth execution of workshops, hackathons, and technical events across banking, R&D, and BFSI domains.",
      "Facilitating collaboration and knowledge-sharing through cross-domain events, supporting organizational operations and student development.",
    ],
  },
  {
    role: "Alteryx Data Analytics Workshop Participant",
    org: "EduSkills TECH CAMP — EduSkills Foundation",
    period: "October 2024",
    location: "India",
    icon: FlaskConical,
    color: "secondary",
    points: [
      "Engineered end-to-end automated data workflows using Alteryx, covering data cleansing, ETL pipelines, and performance optimization while following clean coding practices.",
      "Converted raw datasets into actionable insights via dashboards for real-world business cases, demonstrating strong analytical and presentation skills.",
      "Participated in a research project with a pharmaceutical partner (Pfizer) to interpret data insights and ensure compliance with industry regulations.",
      "Applied data-integrity principles and best practices in a lab environment, focusing on industrialization and regulatory adherence.",
    ],
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/20", dot: "bg-primary" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20", dot: "bg-secondary" },
};

export function Leadership() {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">06. Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold">Beyond the Code</h2>
        </motion.div>

        <div className="space-y-8">
          {leadership.map((item, idx) => {
            const c = colorMap[item.color];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`glass-card rounded-2xl p-8 border ${c.border} hover:border-opacity-60 transition-all duration-300`}
                data-testid={`leadership-${idx}`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl ${c.bg} shrink-0`}>
                    <Icon size={24} className={c.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <p className={`font-semibold ${c.text}`}>{item.org}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground glass px-3 py-1.5 rounded-full shrink-0">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
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
