import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:sksahil3324@gmail.com?subject=${subject}&body=${body}`);
  };

  const inputCls = "w-full px-4 py-3 rounded-lg bg-white/4 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-white/6 transition-all duration-200 font-mono text-sm";

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-tag">07. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">Get In Touch</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
          <p className="text-muted-foreground mt-5 max-w-xl leading-relaxed">
            Open to Software Engineering roles — backend, full-stack, or ML systems.
            Let's build something great together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">

            <a href="mailto:sksahil3324@gmail.com" className="glass-card card-highlight rounded-xl p-5 flex items-center gap-4 hover:border-primary/35 transition-all duration-200 group block" data-testid="contact-email">
              <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">Email</p>
                <span className="text-foreground group-hover:text-primary transition-colors font-medium text-sm">sksahil3324@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918169870210" className="glass-card card-highlight rounded-xl p-5 flex items-center gap-4 hover:border-secondary/35 transition-all duration-200 group block" data-testid="contact-phone">
              <div className="p-2.5 rounded-lg bg-secondary/10 shrink-0">
                <Phone className="text-secondary" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">Phone</p>
                <span className="text-foreground group-hover:text-secondary transition-colors font-medium text-sm">+91-8169870210</span>
              </div>
            </a>

            <div className="glass-card card-highlight rounded-xl p-5 flex items-center gap-4" data-testid="contact-location">
              <div className="p-2.5 rounded-lg bg-accent/10 shrink-0">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">Location</p>
                <span className="text-foreground font-medium text-sm">New Panvel, Navi Mumbai, India</span>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <a href="https://github.com/sksahil0324" target="_blank" rel="noreferrer"
                className="flex-1 glass-card card-highlight rounded-xl p-4 hover:border-primary/35 hover:text-primary transition-all duration-200 flex items-center justify-center gap-2.5 font-medium text-sm"
                data-testid="link-github">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com/in/sahil-shaik24" target="_blank" rel="noreferrer"
                className="flex-1 glass-card card-highlight rounded-xl p-4 hover:border-primary/35 hover:text-primary transition-all duration-200 flex items-center justify-center gap-2.5 font-medium text-sm"
                data-testid="link-linkedin">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            {/* Terminal decoration */}
            <div className="terminal-window mt-6">
              <div className="terminal-header">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <Terminal size={11} className="ml-auto text-muted-foreground" />
              </div>
              <div className="p-4 font-mono text-xs space-y-1.5 text-muted-foreground">
                <div><span className="text-emerald-400">➜</span> <span className="text-sky-300">~</span> <span>$ echo $STATUS</span></div>
                <div className="text-emerald-300 pl-2">open_to_work=true</div>
                <div><span className="text-emerald-400">➜</span> <span className="text-sky-300">~</span> <span>$ echo $AVAILABILITY</span></div>
                <div className="text-emerald-300 pl-2">immediate</div>
                <div className="flex gap-1 mt-1">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-sky-300">~</span>
                  <span>$</span>
                  <span className="w-1.5 h-3.5 bg-primary/70 rounded-sm cursor-blink inline-block" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="glass-card card-highlight rounded-2xl p-7 space-y-5">
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block" htmlFor="name">// name</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name" className={inputCls} data-testid="input-name" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block" htmlFor="email">// email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com" className={inputCls} data-testid="input-email" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block" htmlFor="message">// message</label>
                <textarea id="message" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..." rows={5} className={`${inputCls} resize-none`} data-testid="input-message" />
              </div>
              <Button type="submit" size="lg" className="w-full glow-border gap-2 font-semibold" data-testid="button-submit">
                <Send size={15} /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-xs font-mono text-muted-foreground/50 tracking-widest">
            // built by <span className="text-primary/70">sahil_basheer_shaik</span> · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
