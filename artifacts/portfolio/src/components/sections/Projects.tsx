import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "TextTrinity: Unified NLP Platform",
    period: "Nov 2024 – Feb 2025",
    tech: ["Python", "Django", "Flask", "spaCy", "Transformers", "REST APIs", "PostgreSQL"],
    color: "primary",
    description:
      "Full-stack NLP platform integrating summarization, keyword extraction, and text-to-speech through REST APIs.",
    points: [
      "Developed a full-stack NLP platform using Python and Django, integrating summarization, keyword extraction, and text-processing modules through REST APIs.",
      "Implemented PostgreSQL-optimized workflows reducing query latency by 35% and enabling reliable processing for 50+ concurrent users.",
      "Managed debugging, feature upgrades, API documentation, and version control for smooth production deployment.",
    ],
  },
  {
    title: "Offline Document Intelligence System",
    period: "May 2025 – Jul 2025",
    tech: ["Python", "Django", "FAISS", "Hugging Face", "Quantization", "SQL"],
    color: "secondary",
    description:
      "Secure offline RAG pipeline for parsing and semantically searching PDF/DOCX/TXT documents.",
    points: [
      "Built a secure offline document-processing system capable of parsing and indexing PDF/DOCX/TXT formats with Django backend services.",
      "Integrated FAISS for semantic search with optimized SQL-based pipelines achieving 42ms retrieval time on 10K+ documents.",
      "Handled debugging, exception management, SSL certificate updates, and SDLC-compliant structured documentation.",
    ],
  },
  {
    title: "Enterprise Market Analytics Dashboard",
    period: "Mar 2025 – May 2025",
    tech: ["Python", "Django", "REST APIs", "MS SQL", "JavaScript"],
    color: "accent",
    description:
      "Real-time analytics dashboard with secure ERP-style data ingestion and role-based access control.",
    points: [
      "Engineered a real-time analytics dashboard using Django backend and REST APIs, supporting secure data ingestion from XLSX/CSV and ERP-style flat-file formats.",
      "Integrated MS SQL with optimized CRUD operations and role-based access control, improving data throughput and system reliability.",
      "Implemented logging, debugging tools, and FTP/SFTP-based data synchronization for enterprise-grade deployments.",
    ],
  },
  {
    title: "Library Management System",
    period: "Mar 2025 – May 2025",
    tech: ["Java", "JDBC", "Oracle SQL", "JMS", "SAML"],
    color: "chart-4",
    description:
      "Desktop-based system for managing books, users, and transactions with Oracle Database backend.",
    points: [
      "Designed a desktop system for managing books, users, and transactions with Oracle Database backend, incorporating JMS for messaging and SOAP for communication.",
      "Implemented JDBC connectivity for CRUD operations with optimized SQL queries and thorough test planning documentation.",
      "Added role-based access (Admin/Student) with secure SAML login and input validation.",
    ],
  },
];

const colorMap: Record<string, { border: string; text: string; badge: string; dot: string }> = {
  primary: {
    border: "hover:border-primary/40",
    text: "text-primary",
    badge: "bg-primary/10 text-primary border-primary/20",
    dot: "bg-primary",
  },
  secondary: {
    border: "hover:border-secondary/40",
    text: "text-secondary",
    badge: "bg-secondary/10 text-secondary border-secondary/20",
    dot: "bg-secondary",
  },
  accent: {
    border: "hover:border-accent/40",
    text: "text-accent",
    badge: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
  },
  "chart-4": {
    border: "hover:border-purple-500/40",
    text: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    dot: "bg-purple-400",
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">04. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">What I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const c = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-2xl p-8 border border-white/5 transition-all duration-300 flex flex-col ${c.border}`}
                data-testid={`project-${idx}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href="#"
                      aria-label="GitHub"
                      className="p-2 rounded-lg glass hover:text-primary transition-colors"
                      data-testid={`project-github-${idx}`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      aria-label="Demo"
                      className="p-2 rounded-lg glass hover:text-primary transition-colors"
                      data-testid={`project-demo-${idx}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${c.badge}`}
                    >
                      {t}
                    </span>
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
