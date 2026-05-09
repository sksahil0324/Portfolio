import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = ["about", "skills", "experience", "projects", "certifications", "leadership", "contact"];

function TerminalWindow() {
  const lines = [
    { type: "prompt", text: "whoami" },
    { type: "output-name", text: "sahil_basheer_shaik" },
    { type: "blank" },
    { type: "prompt", text: "cat profile.json" },
    { type: "bracket-open", text: "{" },
    { type: "prop", key: "  role", value: '"Software Engineer"' },
    { type: "prop", key: "  location", value: '"Navi Mumbai, IN"' },
    { type: "prop", key: "  focus", value: '["Python", "Django", "ML"]' },
    { type: "prop-last", key: "  status", value: '"open_to_work"' },
    { type: "bracket-close", text: "}" },
    { type: "blank" },
    { type: "prompt-cursor" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      className="terminal-window w-full max-w-md mx-auto animate-float"
    >
      {/* Window chrome */}
      <div className="terminal-header">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="flex-1 text-center">
          <span className="text-xs text-muted-foreground font-mono">sahil@portfolio — zsh</span>
        </div>
        <Terminal size={12} className="text-muted-foreground" />
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-7 space-y-0.5">
        {lines.map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-2" />;

          if (line.type === "prompt")
            return (
              <div key={i} className="flex gap-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-sky-300">~</span>
                <span className="text-white/80">$ {line.text}</span>
              </div>
            );

          if (line.type === "prompt-cursor")
            return (
              <div key={i} className="flex gap-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-sky-300">~</span>
                <span className="text-white/80">$</span>
                <span className="w-2 h-5 bg-primary/80 rounded-sm cursor-blink inline-block" />
              </div>
            );

          if (line.type === "output-name")
            return <div key={i} className="text-emerald-300 pl-2">{line.text}</div>;

          if (line.type === "bracket-open" || line.type === "bracket-close")
            return <div key={i} className="text-yellow-400 pl-2">{line.text}</div>;

          if (line.type === "prop" || line.type === "prop-last")
            return (
              <div key={i} className="pl-2">
                <span className="text-sky-300">{line.key}</span>
                <span className="text-white/50">: </span>
                <span className="text-amber-300">{line.value}</span>
                {line.type === "prop" && <span className="text-white/40">,</span>}
              </div>
            );

          return null;
        })}
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          onDoubleClick={() => { window.location.href = "/admin"; }}
          className="font-mono text-base font-semibold tracking-tight select-none group"
          title="Double-click to access admin"
          data-testid="nav-logo"
        >
          <span className="text-primary glow-text">SBS</span>
          <span className="text-muted-foreground group-hover:text-primary transition-colors">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {["hero", ...sections].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="capitalize px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-all duration-150 font-medium"
              data-testid={`nav-${s}`}
            >
              {s}
            </button>
          ))}
        </div>

        <a
          href="mailto:sksahil3324@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/25 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-200"
          data-testid="nav-contact"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-[150px]" />
        {/* Horizontal accent line */}
        <div className="absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left — main content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-emerald-400 text-xs font-mono mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Software Engineering roles
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground font-mono text-sm mb-3 tracking-wider"
            >
              <span className="text-primary/60">const</span>{" "}
              <span className="text-sky-300">engineer</span>{" "}
              <span className="text-primary/60">=</span>{" "}
              <span className="text-yellow-400/60">&#123;</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3 pl-4"
            >
              Sahil Basheer
              <span className="block text-primary glow-text">Shaik.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-muted-foreground font-mono text-sm mb-6 pl-4 tracking-wider"
            >
              <span className="text-yellow-400/60">&#125;</span>
            </motion.p>

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-xl md:text-2xl font-mono font-semibold text-primary">
                Software Engineer
              </span>
              <span className="w-0.5 h-6 bg-primary cursor-blink rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed"
            >
              CS graduate building scalable APIs, ML pipelines, and full-stack systems.
              Based in Navi Mumbai — solving real problems with clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="glow-border px-7 font-semibold"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 border-white/15 hover:border-primary/40 font-semibold"
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex items-center gap-5"
            >
              <a href="https://github.com/sksahil0324" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/8 transition-all duration-200"
                data-testid="link-github-hero">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/sahil-shaik24" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/8 transition-all duration-200"
                data-testid="link-linkedin-hero">
                <Linkedin size={18} />
              </a>
              <a href="mailto:sksahil3324@gmail.com"
                className="p-2.5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/8 transition-all duration-200"
                data-testid="link-email-hero">
                <Mail size={18} />
              </a>
              <a href="tel:+918169870210"
                className="p-2.5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/8 transition-all duration-200"
                data-testid="link-phone-hero">
                <Phone size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right — terminal window */}
          <div className="hidden lg:flex justify-end">
            <TerminalWindow />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em]">scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
