import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "SkillCraft Technology",
    type: "Remote",
    period: "September 2024 – October 2024",
    color: "primary",
    points: [
      "Built supervised deep learning models achieving 85% accuracy using scikit-learn and pandas for employee benefits analytics, integrating unsupervised clustering techniques to enhance product development pipelines.",
      "Developed a feature engineering pipeline that reduced test time by 40%, integrated MySQL-based workflows for optimized data handling, consumer product analysis, and PL/SQL-backed classification tasks.",
      "Monitored performance metrics and provided technical support for user-feedback driven improvements across market expansion initiatives.",
    ],
    tech: ["Python", "scikit-learn", "pandas", "MySQL", "PL/SQL"],
  },
  {
    role: "Java Developer Intern",
    company: "Next24tech Technology & Services",
    type: "Remote",
    period: "July 2024 – September 2024",
    color: "secondary",
    points: [
      "Developed a resume builder with export templates used by 100+ users, an encrypted live chat application, and a data visualization tool leveraging table structures to streamline data flow for 500+ entries.",
      "Implemented application server architecture using UNIX and Shell Scripting, with batch file processing for automated conversions and integrations across enterprise systems.",
      "Followed Agile methodologies with Jira, focusing on scalable design, debugging, maintenance, and deployment using Java, Eclipse, and Electron. Ensured JUnit-based testing, code reviews, and model enhancement.",
    ],
    tech: ["Java", "Eclipse", "Electron", "UNIX", "Shell Scripting", "Jira", "JUnit"],
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary text-black",
  secondary: "bg-secondary text-white",
};

const dotColorMap: Record<string, string> = {
  primary: "border-primary bg-primary/20",
  secondary: "border-secondary bg-secondary/20",
};

const glowMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
};

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">03. Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="md:pl-20 relative"
                data-testid={`experience-${idx}`}
              >
                <div
                  className={`absolute left-[26px] top-6 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center ${dotColorMap[exp.color]}`}
                >
                  <div className={`w-2 h-2 rounded-full ${exp.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                </div>

                <div className="glass-card rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className={glowMap[exp.color]} />
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                      </div>
                      <p className={`text-lg font-semibold ${glowMap[exp.color]}`}>{exp.company}</p>
                      <span className="text-sm text-muted-foreground">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground glass px-3 py-1.5 rounded-full">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${exp.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 text-muted-foreground"
                      >
                        {t}
                      </span>
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
