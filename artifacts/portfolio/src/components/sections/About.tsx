import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export function About() {
  const a = defaultPortfolioData.about;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-primary text-sm font-mono uppercase tracking-widest mb-3">01. About</p>
          <h2 className="text-4xl md:text-5xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{a.bio}</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{a.bio2}</p>
            <div className="flex flex-wrap gap-3">
              {a.hobbies.map((hobby) => (
                <span key={hobby} className="px-3 py-1 rounded-full text-sm glass border border-primary/20 text-primary">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0"><GraduationCap className="text-primary" size={22} /></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{a.degree}</h3>
                  <p className="text-sm text-muted-foreground">Minor: {a.minor}</p>
                  <p className="text-sm text-muted-foreground mt-1">{a.university}</p>
                  <p className="text-sm text-muted-foreground">{a.universityPeriod}</p>
                  <div className="mt-3"><span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">CGPA: {a.cgpa} / 10</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 shrink-0"><Award className="text-secondary" size={22} /></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">12th Grade</h3>
                  <p className="text-sm text-muted-foreground">{a.school12}</p>
                  <p className="text-sm text-muted-foreground">{a.school12Period} · Navi Mumbai</p>
                  <p className="text-sm text-primary mt-2">Percentage: {a.school12Pct}</p>
                </div>
              </div>
            </motion.div>

            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 shrink-0"><MapPin className="text-accent" size={22} /></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">10th Grade</h3>
                  <p className="text-sm text-muted-foreground">{a.school10}</p>
                  <p className="text-sm text-muted-foreground">{a.school10Period} · Navi Mumbai</p>
                  <p className="text-sm text-primary mt-2">Percentage: {a.school10Pct}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
