import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, FolderKanban, Zap, Briefcase, Award, Users, UserCircle, Settings,
  LogOut, Plus, Trash2, Save, X, ChevronDown, ChevronUp, RotateCcw, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/context/PortfolioContext";
import type {
  Project, ExperienceItem, SkillCategory, Certification, LeadershipItem, AboutData
} from "@/lib/portfolioData";

const COLORS = ["primary", "secondary", "accent", "chart-4", "chart-5"];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

const tabs = [
  { id: "overview", label: "Overview", Icon: LayoutDashboard },
  { id: "projects", label: "Projects", Icon: FolderKanban },
  { id: "skills", label: "Skills", Icon: Zap },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "certifications", label: "Certifications", Icon: Award },
  { id: "leadership", label: "Leadership", Icon: Users },
  { id: "about", label: "About", Icon: UserCircle },
  { id: "settings", label: "Settings", Icon: Settings },
];

function Field({ label, value, onChange, multiline = false, placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean; placeholder?: string;
}) {
  const cls = "w-full px-3 py-2 rounded-lg bg-muted/60 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";
  return (
    <div>
      <label className="text-xs text-muted-foreground mb-1 block">{label}</label>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3} className={cls + " resize-y"} />
        : <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className={cls} />}
    </div>
  );
}

function TagsField({ label, tags, onChange }: { label: string; tags: string[]; onChange: (t: string[]) => void }) {
  const [input, setInput] = useState("");
  const add = () => {
    const v = input.trim();
    if (v && !tags.includes(v)) { onChange([...tags, v]); }
    setInput("");
  };
  return (
    <div>
      <label className="text-xs text-muted-foreground mb-1 block">{label}</label>
      <div className="flex gap-2 mb-2">
        <input
          type="text" value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); add(); } }}
          placeholder="Type and press Enter"
          className="flex-1 px-3 py-2 rounded-lg bg-muted/60 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
        />
        <Button size="sm" onClick={add} type="button"><Plus size={14} /></Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs border border-primary/20">
            {t}
            <button onClick={() => onChange(tags.filter(x => x !== t))} className="hover:text-destructive transition-colors ml-1"><X size={10} /></button>
          </span>
        ))}
      </div>
    </div>
  );
}

function BulletsField({ label, points, onChange }: { label: string; points: string[]; onChange: (p: string[]) => void }) {
  const update = (i: number, v: string) => onChange(points.map((p, j) => j === i ? v : p));
  const remove = (i: number) => onChange(points.filter((_, j) => j !== i));
  const add = () => onChange([...points, ""]);
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="text-xs text-muted-foreground">{label}</label>
        <Button size="sm" variant="outline" onClick={add} type="button" className="h-6 px-2 text-xs gap-1"><Plus size={10} />Add</Button>
      </div>
      <div className="space-y-2">
        {points.map((p, i) => (
          <div key={i} className="flex gap-2">
            <textarea
              value={p} onChange={e => update(i, e.target.value)} rows={2}
              className="flex-1 px-3 py-2 rounded-lg bg-muted/60 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button onClick={() => remove(i)} className="text-muted-foreground hover:text-destructive transition-colors mt-1" type="button"><Trash2 size={14} /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorPicker({ value, onChange }: { value: string; onChange: (c: string) => void }) {
  const labels: Record<string, string> = { primary: "Cyan", secondary: "Violet", accent: "Blue", "chart-4": "Purple", "chart-5": "Teal" };
  const styles: Record<string, string> = { primary: "bg-primary", secondary: "bg-secondary", accent: "bg-accent", "chart-4": "bg-purple-400", "chart-5": "bg-teal-400" };
  return (
    <div>
      <label className="text-xs text-muted-foreground mb-2 block">Accent Color</label>
      <div className="flex gap-2">
        {COLORS.map(c => (
          <button key={c} type="button" onClick={() => onChange(c)}
            className={`w-8 h-8 rounded-full ${styles[c]} transition-all ${value === c ? "ring-2 ring-white ring-offset-2 ring-offset-background scale-110" : "opacity-60 hover:opacity-100"}`}
            title={labels[c]}
          />
        ))}
      </div>
    </div>
  );
}

function CollapsibleCard({ title, onDelete, children }: { title: string; onDelete: () => void; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-xl border border-white/8">
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => setOpen(!open)} className="flex items-center gap-2 text-sm font-medium flex-1 text-left hover:text-primary transition-colors">
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {title}
        </button>
        <button onClick={onDelete} className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all" type="button">
          <Trash2 size={14} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <div className="px-4 pb-4 space-y-4 border-t border-white/5 pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectsTab() {
  const { data, setData } = usePortfolio();
  const update = (id: string, patch: Partial<Project>) =>
    setData({ ...data, projects: data.projects.map(p => p.id === id ? { ...p, ...patch } : p) });
  const remove = (id: string) => setData({ ...data, projects: data.projects.filter(p => p.id !== id) });
  const add = () => setData({
    ...data, projects: [...data.projects, {
      id: uid(), title: "New Project", period: "2025", tech: [], color: "primary",
      description: "Project description", points: [], githubUrl: "#", demoUrl: "#"
    }]
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{data.projects.length} project(s)</p>
        <Button size="sm" onClick={add} className="gap-2" data-testid="button-add-project"><Plus size={14} />Add Project</Button>
      </div>
      {data.projects.map(p => (
        <CollapsibleCard key={p.id} title={p.title} onDelete={() => remove(p.id)}>
          <Field label="Title" value={p.title} onChange={v => update(p.id, { title: v })} />
          <Field label="Period" value={p.period} onChange={v => update(p.id, { period: v })} placeholder="Nov 2024 – Feb 2025" />
          <Field label="Short Description" value={p.description} onChange={v => update(p.id, { description: v })} multiline />
          <Field label="GitHub URL" value={p.githubUrl} onChange={v => update(p.id, { githubUrl: v })} placeholder="https://github.com/..." />
          <Field label="Demo URL" value={p.demoUrl} onChange={v => update(p.id, { demoUrl: v })} placeholder="https://..." />
          <TagsField label="Tech Stack (press Enter to add)" tags={p.tech} onChange={v => update(p.id, { tech: v })} />
          <BulletsField label="Bullet Points" points={p.points} onChange={v => update(p.id, { points: v })} />
          <ColorPicker value={p.color} onChange={v => update(p.id, { color: v })} />
        </CollapsibleCard>
      ))}
    </div>
  );
}

function SkillsTab() {
  const { data, setData } = usePortfolio();
  const updateCat = (id: string, patch: Partial<SkillCategory>) =>
    setData({ ...data, skills: data.skills.map(s => s.id === id ? { ...s, ...patch } : s) });
  const removeCat = (id: string) => setData({ ...data, skills: data.skills.filter(s => s.id !== id) });
  const addCat = () => setData({
    ...data, skills: [...data.skills, { id: uid(), label: "New Category", color: "primary", skills: [] }]
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{data.skills.length} category(s)</p>
        <Button size="sm" onClick={addCat} className="gap-2" data-testid="button-add-skill-category"><Plus size={14} />Add Category</Button>
      </div>
      {data.skills.map(cat => (
        <CollapsibleCard key={cat.id} title={cat.label} onDelete={() => removeCat(cat.id)}>
          <Field label="Category Name" value={cat.label} onChange={v => updateCat(cat.id, { label: v })} />
          <TagsField label="Skills (press Enter to add)" tags={cat.skills} onChange={v => updateCat(cat.id, { skills: v })} />
          <ColorPicker value={cat.color} onChange={v => updateCat(cat.id, { color: v })} />
        </CollapsibleCard>
      ))}
    </div>
  );
}

function ExperienceTab() {
  const { data, setData } = usePortfolio();
  const update = (id: string, patch: Partial<ExperienceItem>) =>
    setData({ ...data, experience: data.experience.map(e => e.id === id ? { ...e, ...patch } : e) });
  const remove = (id: string) => setData({ ...data, experience: data.experience.filter(e => e.id !== id) });
  const add = () => setData({
    ...data, experience: [...data.experience, {
      id: uid(), role: "New Role", company: "Company Name", type: "Remote",
      period: "2024", color: "primary", points: [], tech: []
    }]
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{data.experience.length} position(s)</p>
        <Button size="sm" onClick={add} className="gap-2" data-testid="button-add-experience"><Plus size={14} />Add Experience</Button>
      </div>
      {data.experience.map(e => (
        <CollapsibleCard key={e.id} title={`${e.role} @ ${e.company}`} onDelete={() => remove(e.id)}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Role" value={e.role} onChange={v => update(e.id, { role: v })} />
            <Field label="Company" value={e.company} onChange={v => update(e.id, { company: v })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Type" value={e.type} onChange={v => update(e.id, { type: v })} placeholder="Remote / On-site" />
            <Field label="Period" value={e.period} onChange={v => update(e.id, { period: v })} placeholder="Jul 2024 – Sep 2024" />
          </div>
          <TagsField label="Tech Stack" tags={e.tech} onChange={v => update(e.id, { tech: v })} />
          <BulletsField label="Key Contributions" points={e.points} onChange={v => update(e.id, { points: v })} />
          <ColorPicker value={e.color} onChange={v => update(e.id, { color: v })} />
        </CollapsibleCard>
      ))}
    </div>
  );
}

function CertificationsTab() {
  const { data, setData } = usePortfolio();
  const update = (id: string, patch: Partial<Certification>) =>
    setData({ ...data, certifications: data.certifications.map(c => c.id === id ? { ...c, ...patch } : c) });
  const remove = (id: string) => setData({ ...data, certifications: data.certifications.filter(c => c.id !== id) });
  const add = () => setData({
    ...data, certifications: [...data.certifications, { id: uid(), title: "New Certificate", issuer: "Issuer", color: "primary" }]
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{data.certifications.length} certification(s)</p>
        <Button size="sm" onClick={add} className="gap-2" data-testid="button-add-cert"><Plus size={14} />Add Certification</Button>
      </div>
      {data.certifications.map(c => (
        <CollapsibleCard key={c.id} title={c.title} onDelete={() => remove(c.id)}>
          <Field label="Certificate Title" value={c.title} onChange={v => update(c.id, { title: v })} />
          <Field label="Issuer / Platform" value={c.issuer} onChange={v => update(c.id, { issuer: v })} />
          <Field label="Date (optional)" value={c.date || ""} onChange={v => update(c.id, { date: v || undefined })} placeholder="Jun 2025" />
          <ColorPicker value={c.color} onChange={v => update(c.id, { color: v })} />
        </CollapsibleCard>
      ))}
    </div>
  );
}

function LeadershipTab() {
  const { data, setData } = usePortfolio();
  const update = (id: string, patch: Partial<LeadershipItem>) =>
    setData({ ...data, leadership: data.leadership.map(l => l.id === id ? { ...l, ...patch } : l) });
  const remove = (id: string) => setData({ ...data, leadership: data.leadership.filter(l => l.id !== id) });
  const add = () => setData({
    ...data, leadership: [...data.leadership, {
      id: uid(), role: "New Role", org: "Organization", period: "2025", location: "India",
      iconType: "users", color: "primary", points: []
    }]
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{data.leadership.length} item(s)</p>
        <Button size="sm" onClick={add} className="gap-2" data-testid="button-add-leadership"><Plus size={14} />Add Entry</Button>
      </div>
      {data.leadership.map(l => (
        <CollapsibleCard key={l.id} title={`${l.role} — ${l.org}`} onDelete={() => remove(l.id)}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Role" value={l.role} onChange={v => update(l.id, { role: v })} />
            <Field label="Organization" value={l.org} onChange={v => update(l.id, { org: v })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Period" value={l.period} onChange={v => update(l.id, { period: v })} />
            <Field label="Location" value={l.location} onChange={v => update(l.id, { location: v })} />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-2 block">Icon Type</label>
            <div className="flex gap-3">
              {(["users", "flask"] as const).map(t => (
                <button key={t} type="button" onClick={() => update(l.id, { iconType: t })}
                  className={`px-3 py-1.5 rounded-lg text-xs border transition-all ${l.iconType === t ? "border-primary/50 bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:border-white/20"}`}>
                  {t === "users" ? "Team / Leadership" : "Workshop / Lab"}
                </button>
              ))}
            </div>
          </div>
          <BulletsField label="Responsibilities / Achievements" points={l.points} onChange={v => update(l.id, { points: v })} />
          <ColorPicker value={l.color} onChange={v => update(l.id, { color: v })} />
        </CollapsibleCard>
      ))}
    </div>
  );
}

function AboutTab() {
  const { data, setData } = usePortfolio();
  const a = data.about;
  const u = (patch: Partial<AboutData>) => setData({ ...data, about: { ...a, ...patch } });
  const [hobbyInput, setHobbyInput] = useState("");

  return (
    <div className="space-y-5">
      <div className="glass-card rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Bio</h3>
        <Field label="Bio Paragraph 1" value={a.bio} onChange={v => u({ bio: v })} multiline />
        <Field label="Bio Paragraph 2" value={a.bio2} onChange={v => u({ bio2: v })} multiline />
      </div>
      <div className="glass-card rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">University</h3>
        <Field label="University Name" value={a.university} onChange={v => u({ university: v })} />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Degree" value={a.degree} onChange={v => u({ degree: v })} />
          <Field label="Minor" value={a.minor} onChange={v => u({ minor: v })} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Period" value={a.universityPeriod} onChange={v => u({ universityPeriod: v })} />
          <Field label="CGPA" value={a.cgpa} onChange={v => u({ cgpa: v })} placeholder="8.12" />
        </div>
      </div>
      <div className="glass-card rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider">12th Grade</h3>
        <Field label="School Name" value={a.school12} onChange={v => u({ school12: v })} />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Period" value={a.school12Period} onChange={v => u({ school12Period: v })} />
          <Field label="Percentage" value={a.school12Pct} onChange={v => u({ school12Pct: v })} placeholder="68%" />
        </div>
      </div>
      <div className="glass-card rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">10th Grade</h3>
        <Field label="School Name" value={a.school10} onChange={v => u({ school10: v })} />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Period" value={a.school10Period} onChange={v => u({ school10Period: v })} />
          <Field label="Percentage" value={a.school10Pct} onChange={v => u({ school10Pct: v })} placeholder="87.4%" />
        </div>
      </div>
      <div className="glass-card rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Hobbies</h3>
        <div className="flex gap-2">
          <input type="text" value={hobbyInput} onChange={e => setHobbyInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); const v = hobbyInput.trim(); if (v && !a.hobbies.includes(v)) { u({ hobbies: [...a.hobbies, v] }); setHobbyInput(""); } } }}
            placeholder="Add hobby, press Enter"
            className="flex-1 px-3 py-2 rounded-lg bg-muted/60 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <Button size="sm" type="button" onClick={() => { const v = hobbyInput.trim(); if (v && !a.hobbies.includes(v)) { u({ hobbies: [...a.hobbies, v] }); setHobbyInput(""); } }}><Plus size={14} /></Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {a.hobbies.map(h => (
            <span key={h} className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
              {h}
              <button type="button" onClick={() => u({ hobbies: a.hobbies.filter(x => x !== h) })} className="hover:text-destructive ml-1"><X size={10} /></button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsTab() {
  const { changePassword, resetData, logout } = usePortfolio();
  const [, setLocation] = useLocation();
  const [curr, setCurr] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (next !== confirm) { setMsg({ text: "New passwords do not match.", ok: false }); return; }
    if (next.length < 8) { setMsg({ text: "Password must be at least 8 characters.", ok: false }); return; }
    const ok = changePassword(curr, next);
    setMsg(ok ? { text: "Password changed successfully.", ok: true } : { text: "Current password is incorrect.", ok: false });
    if (ok) { setCurr(""); setNext(""); setConfirm(""); }
  };

  const handleReset = () => {
    if (confirm && window.confirm("This will reset ALL portfolio data to defaults. Are you sure?")) {
      resetData();
    } else if (window.confirm("Reset ALL portfolio content to original resume data? This cannot be undone.")) {
      resetData();
    }
  };

  return (
    <div className="space-y-6 max-w-lg">
      <div className="glass-card rounded-xl p-6 space-y-4">
        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Change Password</h3>
        <form onSubmit={handleChange} className="space-y-3">
          <Field label="Current Password" value={curr} onChange={setCurr} />
          <Field label="New Password" value={next} onChange={setNext} placeholder="Min 8 characters" />
          <Field label="Confirm New Password" value={confirm} onChange={setConfirm} />
          {msg && <p className={`text-sm ${msg.ok ? "text-primary" : "text-destructive"}`}>{msg.text}</p>}
          <Button type="submit" size="sm" className="gap-2 w-full"><Save size={14} />Update Password</Button>
        </form>
      </div>

      <div className="glass-card rounded-xl p-6 space-y-4 border border-destructive/10">
        <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider">Danger Zone</h3>
        <p className="text-xs text-muted-foreground">Reset all portfolio data back to the original resume data.</p>
        <Button variant="destructive" size="sm" onClick={handleReset} className="gap-2">
          <RotateCcw size={14} />Reset to Defaults
        </Button>
      </div>

      <div className="glass-card rounded-xl p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Session</h3>
        <Button variant="outline" size="sm" onClick={() => { logout(); setLocation("/admin"); }} className="gap-2">
          <LogOut size={14} />Sign Out
        </Button>
      </div>
    </div>
  );
}

function OverviewTab() {
  const { data } = usePortfolio();
  const stats = [
    { label: "Projects", value: data.projects.length, color: "text-primary" },
    { label: "Skill Categories", value: data.skills.length, color: "text-secondary" },
    { label: "Skills Total", value: data.skills.reduce((a, c) => a + c.skills.length, 0), color: "text-accent" },
    { label: "Experience", value: data.experience.length, color: "text-purple-400" },
    { label: "Certifications", value: data.certifications.length, color: "text-teal-400" },
    { label: "Leadership", value: data.leadership.length, color: "text-primary" },
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {stats.map(s => (
          <div key={s.label} className="glass-card rounded-xl p-5 text-center">
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold mb-3">Quick Tips</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-primary">•</span>Click any section tab to edit that data.</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Changes are saved automatically to your browser.</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Expand a card by clicking its title row to reveal fields.</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Use Settings to change your admin password or reset all data.</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Default login password: <code className="bg-muted px-1 rounded text-primary text-xs">admin@sahil2026</code></li>
        </ul>
      </div>
    </div>
  );
}

export default function Admin() {
  const { isAuthenticated, logout } = usePortfolio();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  if (!isAuthenticated) {
    setLocation("/admin");
    return null;
  }

  const tabContent: Record<string, React.ReactNode> = {
    overview: <OverviewTab />,
    projects: <ProjectsTab />,
    skills: <SkillsTab />,
    experience: <ExperienceTab />,
    certifications: <CertificationsTab />,
    leadership: <LeadershipTab />,
    about: <AboutTab />,
    settings: <SettingsTab />,
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="glass border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <LayoutDashboard size={14} className="text-primary" />
            </div>
            <span className="font-semibold text-sm">Portfolio CMS</span>
            <span className="text-muted-foreground text-xs hidden sm:block">· Sahil Shaik</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1"
              data-testid="link-view-portfolio"
            >
              <ExternalLink size={12} />
              View Portfolio
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => { logout(); setLocation("/admin"); }}
              className="gap-1.5 h-8 text-xs"
              data-testid="button-logout"
            >
              <LogOut size={12} />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar */}
        <aside className="w-48 shrink-0 hidden md:block">
          <nav className="space-y-1 sticky top-20">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 text-left ${
                  activeTab === id
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                data-testid={`tab-${id}`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile tab strip */}
        <div className="md:hidden w-full mb-4 fixed bottom-0 left-0 right-0 glass border-t border-white/5 z-40 px-2 py-2">
          <div className="flex overflow-x-auto gap-1 no-scrollbar">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-xs shrink-0 transition-all ${
                  activeTab === id ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 pb-24 md:pb-0">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-lg font-bold mb-5 capitalize">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            {tabContent[activeTab]}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
