import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:sksahil3324@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">07. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Open to Software Engineering, ML Engineering, Data Engineering, and Full Stack roles.
            Let's connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4" data-testid="contact-email">
              <div className="p-3 rounded-xl bg-primary/10">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:sksahil3324@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                  sksahil3324@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-center gap-4" data-testid="contact-phone">
              <div className="p-3 rounded-xl bg-secondary/10">
                <Phone className="text-secondary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:+918169870210" className="text-foreground hover:text-secondary transition-colors font-medium">
                  +91-8169870210
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-center gap-4" data-testid="contact-location">
              <div className="p-3 rounded-xl bg-accent/10">
                <MapPin className="text-accent" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <span className="text-foreground font-medium">New Panvel, Navi Mumbai, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/sksahil0324"
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-xl p-4 hover:border-primary/40 hover:text-primary transition-all duration-200 flex items-center gap-2"
                data-testid="link-github"
              >
                <Github size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sahil-shaik24"
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-xl p-4 hover:border-primary/40 hover:text-primary transition-all duration-200 flex items-center gap-2"
                data-testid="link-linkedin"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" size="lg" className="w-full glow-border gap-2" data-testid="button-submit">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground"
        >
          <p>Designed and built by Sahil Basheer Shaik &mdash; {new Date().getFullYear()}</p>
        </motion.div>
      </div>
    </section>
  );
}
