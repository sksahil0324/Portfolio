export interface Project {
  id: string;
  title: string;
  period: string;
  tech: string[];
  color: string;
  description: string;
  points: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  color: string;
  points: string[];
  tech: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  color: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  iconType: "users" | "flask";
  color: string;
  points: string[];
}

export interface AboutData {
  bio: string;
  bio2: string;
  cgpa: string;
  university: string;
  degree: string;
  minor: string;
  universityPeriod: string;
  school12: string;
  school12Period: string;
  school12Pct: string;
  school10: string;
  school10Period: string;
  school10Pct: string;
  hobbies: string[];
}

export interface PortfolioData {
  about: AboutData;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  certifications: Certification[];
  leadership: LeadershipItem[];
}

export const defaultPortfolioData: PortfolioData = {
  about: {
    bio: "Computer Science graduate and Python Developer specializing in software development across domains — automobile, retail, and consulting. Experienced in building scalable applications, API development, debugging, database management, and full SDLC execution.",
    bio2: "Skilled in cross-functional team collaboration, customer-centric problem-solving, and technical documentation. Adept at OS-level performance challenges with hands-on experience in Linux, IIS, and PowerShell for deployment, monitoring, and automation.",
    cgpa: "8.12",
    university: "Ramrao Adik Institute of Technology, D.Y. Patil Deemed University",
    degree: "B.Tech Computer Engineering",
    minor: "Data Science",
    universityPeriod: "July 2022 – July 2026",
    school12: "New Horizon Public School",
    school12Period: "May 2020 – July 2022",
    school12Pct: "68%",
    school10: "New Horizon Public School",
    school10Period: "May 2007 – April 2020",
    school10Pct: "87.4%",
    hobbies: ["Programming", "Chess", "Reading", "Gaming", "Badminton"],
  },
  skills: [
    {
      id: "s1",
      label: "Languages",
      color: "primary",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    },
    {
      id: "s2",
      label: "Frameworks & Libraries",
      color: "secondary",
      skills: ["React", "Flask", "FastAPI", "Django", "TensorFlow", "scikit-learn", "spaCy", "PyTorch"],
    },
    {
      id: "s3",
      label: "Tools & Platforms",
      color: "accent",
      skills: ["Git", "Docker", "FAISS", "Hugging Face", "VS Code", "Jira", "Linux", "Shell Scripting"],
    },
    {
      id: "s4",
      label: "Cloud & Enterprise",
      color: "chart-4",
      skills: ["AWS", "Azure (Cognitive Services)", "Azure AI", "Oracle Database", "MySQL", "PostgreSQL", "MS SQL"],
    },
    {
      id: "s5",
      label: "Core Competencies",
      color: "chart-5",
      skills: ["Data Structures & Algorithms", "Distributed Systems", "Operating Systems", "Relational Databases", "ETL Pipelines", "REST API Design", "Microservices", "SDLC"],
    },
  ],
  experience: [
    {
      id: "e1",
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
      id: "e2",
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
  ],
  projects: [
    {
      id: "p1",
      title: "TextTrinity: Unified NLP Platform",
      period: "Nov 2024 – Feb 2025",
      tech: ["Python", "Django", "Flask", "spaCy", "Transformers", "REST APIs", "PostgreSQL"],
      color: "primary",
      description: "Full-stack NLP platform integrating summarization, keyword extraction, and text-to-speech through REST APIs.",
      points: [
        "Developed a full-stack NLP platform using Python and Django, integrating summarization, keyword extraction, and text-processing modules through REST APIs.",
        "Implemented PostgreSQL-optimized workflows reducing query latency by 35% and enabling reliable processing for 50+ concurrent users.",
        "Managed debugging, feature upgrades, API documentation, and version control for smooth production deployment.",
      ],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "p2",
      title: "Offline Document Intelligence System",
      period: "May 2025 – Jul 2025",
      tech: ["Python", "Django", "FAISS", "Hugging Face", "Quantization", "SQL"],
      color: "secondary",
      description: "Secure offline RAG pipeline for parsing and semantically searching PDF/DOCX/TXT documents.",
      points: [
        "Built a secure offline document-processing system capable of parsing and indexing PDF/DOCX/TXT formats with Django backend services.",
        "Integrated FAISS for semantic search with optimized SQL-based pipelines achieving 42ms retrieval time on 10K+ documents.",
        "Handled debugging, exception management, SSL certificate updates, and SDLC-compliant structured documentation.",
      ],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "p3",
      title: "Enterprise Market Analytics Dashboard",
      period: "Mar 2025 – May 2025",
      tech: ["Python", "Django", "REST APIs", "MS SQL", "JavaScript"],
      color: "accent",
      description: "Real-time analytics dashboard with secure ERP-style data ingestion and role-based access control.",
      points: [
        "Engineered a real-time analytics dashboard using Django backend and REST APIs, supporting secure data ingestion from XLSX/CSV and ERP-style flat-file formats.",
        "Integrated MS SQL with optimized CRUD operations and role-based access control, improving data throughput and system reliability.",
        "Implemented logging, debugging tools, and FTP/SFTP-based data synchronization for enterprise-grade deployments.",
      ],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "p4",
      title: "Library Management System",
      period: "Mar 2025 – May 2025",
      tech: ["Java", "JDBC", "Oracle SQL", "JMS", "SAML"],
      color: "chart-4",
      description: "Desktop-based system for managing books, users, and transactions with Oracle Database backend.",
      points: [
        "Designed a desktop system for managing books, users, and transactions with Oracle Database backend, incorporating JMS for messaging and SOAP for communication.",
        "Implemented JDBC connectivity for CRUD operations with optimized SQL queries and thorough test planning documentation.",
        "Added role-based access (Admin/Student) with secure SAML login and input validation.",
      ],
      githubUrl: "#",
      demoUrl: "#",
    },
  ],
  certifications: [
    { id: "c1", title: "AWS Cloud Practitioner Course", issuer: "Amazon Web Services (via GeeksforGeeks)", color: "primary" },
    { id: "c2", title: "Build a Computer Vision App with Azure Cognitive Services", issuer: "Microsoft", color: "secondary" },
    { id: "c3", title: "Azure AI Essentials Professional Certificate", issuer: "Microsoft", color: "accent" },
    { id: "c4", title: "IT Leadership Professional Certificate", issuer: "ServiceNow", color: "chart-4" },
    { id: "c5", title: "Designer Core Micro-Credential", issuer: "Alteryx", color: "chart-5" },
    { id: "c6", title: "Data Analytics Essentials Certificate", issuer: "Cisco Networking Academy", date: "Jun 2025", color: "primary" },
  ],
  leadership: [
    {
      id: "l1",
      role: "Treasurer",
      org: "ISTE-RAIT",
      period: "July 2025 – Present",
      location: "Navi Mumbai, India",
      iconType: "users",
      color: "primary",
      points: [
        "Overseeing financial planning, budgeting, and fund allocation for ISTE activities to ensure transparent resource management.",
        "Coordinating with faculty, sponsors, and stakeholders for smooth execution of workshops, hackathons, and technical events across banking, R&D, and BFSI domains.",
        "Facilitating collaboration and knowledge-sharing through cross-domain events, supporting organizational operations and student development.",
      ],
    },
    {
      id: "l2",
      role: "Alteryx Data Analytics Workshop Participant",
      org: "EduSkills TECH CAMP — EduSkills Foundation",
      period: "October 2024",
      location: "India",
      iconType: "flask",
      color: "secondary",
      points: [
        "Engineered end-to-end automated data workflows using Alteryx, covering data cleansing, ETL pipelines, and performance optimization while following clean coding practices.",
        "Converted raw datasets into actionable insights via dashboards for real-world business cases, demonstrating strong analytical and presentation skills.",
        "Participated in a research project with a pharmaceutical partner (Pfizer) to interpret data insights and ensure compliance with industry regulations.",
        "Applied data-integrity principles and best practices in a lab environment, focusing on industrialization and regulatory adherence.",
      ],
    },
  ],
};
