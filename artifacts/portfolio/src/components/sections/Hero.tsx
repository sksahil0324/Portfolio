import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = ["about", "skills", "experience", "projects", "certifications", "leadership", "contact"];

const titles = [
  "Software Engineer",
  "Python Developer",
  "ML Engineer",
  "Full Stack Developer",
  "Data Engineer",
];

function TypingText() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  return (
    <span className="text-primary glow-text">
      {displayed}
      <span className="border-r-2 border-primary ml-0.5 animate-pulse">&nbsp;</span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ["hero", ...sections].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          onDoubleClick={() => { window.location.href = "/admin"; }}
          className="text-xl font-bold text-primary glow-text tracking-tight hover:opacity-80 transition-opacity select-none"
          title="Double-click to access admin"
          data-testid="nav-logo"
        >
          SBS.
        </button>
        <div className="hidden md:flex gap-1">
          {["hero", ...sections].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`capitalize px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                active === s
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
              data-testid={`nav-${s}`}
            >
              {s}
            </button>
          ))}
        </div>
        <a
          href="mailto:sksahil3324@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-lg border border-primary/30 text-primary text-sm hover:bg-primary/10 transition-colors"
          data-testid="nav-contact"
        >
          <Mail size={14} />
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-3"
          >
            Sahil Basheer
            <span className="block text-primary glow-text">Shaik.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-muted-foreground mb-6 h-10 flex items-center"
          >
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Computer Science graduate specializing in scalable applications, API development, and full SDLC
            execution. Passionate about AI/ML and building systems that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="glow-border px-8"
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 border-white/20 hover:border-primary/40"
              data-testid="button-contact"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-5 text-muted-foreground"
          >
            <a
              href="https://github.com/sksahil0324"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
              data-testid="link-github-hero"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sahil-shaik24"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
              data-testid="link-linkedin-hero"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sksahil3324@gmail.com"
              className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
              data-testid="link-email-hero"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+918169870210"
              className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
              data-testid="link-phone-hero"
            >
              <Phone size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
