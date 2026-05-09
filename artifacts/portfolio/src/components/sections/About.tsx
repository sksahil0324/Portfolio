import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, UserCircle } from "lucide-react";
import { defaultPortfolioData } from "@/lib/portfolioData";
import { useProfilePhoto } from "@/hooks/use-profile-photo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: "easeOut" },
  }),
};

export function About() {
  const a = defaultPortfolioData.about;
  const { photo } = useProfilePhoto();

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/2 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-tag">01. About</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">Who I Am</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left — bio + photo */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>

            {/* Identity card */}
            <div className="flex items-center gap-5 mb-8 p-4 glass-card card-highlight rounded-2xl">
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/12">
                  {photo ? (
                    <img src={photo} alt="Sahil Basheer Shaik" className="w-full h-full object-cover" data-testid="img-profile" />
                  ) : (
                    <div className="w-full h-full bg-primary/8 flex items-center justify-center">
                      <UserCircle size={38} className="text-primary/30" />
                    </div>
                  )}
                </div>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-md -z-10" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">Sahil Basheer Shaik</h3>
                <p className="text-primary text-sm font-mono mt-0.5">Software Engineer</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <MapPin size={11} className="text-muted-foreground" />
                  <span className="text-muted-foreground text-xs">Navi Mumbai, India</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-5">{a.bio}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{a.bio2}</p>

            {/* Hobbies */}
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">// interests</p>
              <div className="flex flex-wrap gap-2">
                {a.hobbies.map((hobby) => (
                  <span key={hobby} className="px-3 py-1 rounded-full text-xs font-mono font-medium glass border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — education cards */}
          <div className="space-y-4">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card card-highlight rounded-xl p-6 hover:border-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0 mt-0.5"><GraduationCap className="text-primary" size={20} /></div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold">{a.degree}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-mono">CGPA {a.cgpa}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Minor: {a.minor}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 font-medium">{a.university}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">{a.universityPeriod}</p>
                </div>
              </div>
            </motion.div>

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card card-highlight rounded-xl p-6 hover:border-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-secondary/10 shrink-0 mt-0.5"><Award className="text-secondary" size={20} /></div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold">12th Grade</h3>
                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-mono">{a.school12Pct}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{a.school12}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">{a.school12Period} · Navi Mumbai</p>
                </div>
              </div>
            </motion.div>

            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card card-highlight rounded-xl p-6 hover:border-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-accent/10 shrink-0 mt-0.5"><Award className="text-accent" size={20} /></div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold">10th Grade</h3>
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-mono">{a.school10Pct}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{a.school10}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">{a.school10Period} · Navi Mumbai</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
