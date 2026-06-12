import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Code2, GraduationCap } from "lucide-react";

const stats = [
  { label: "Model Accuracy", value: 94, suffix: "%", icon: Code2 },
  { label: "CGPA / 10", value: 8.76, suffix: "", icon: GraduationCap, decimals: 2 },
  { label: "Records Analyzed", value: 300, suffix: "K+", icon: Briefcase },
  { label: "Research Presented", value: 1, suffix: "", icon: Award },
];

function Counter({ to, suffix, decimals = 0 }: { to: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(p * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{decimals ? n.toFixed(decimals) : Math.floor(n)}{suffix}</span>;
}

const timeline = [
  {
    year: "Jan 2024 – May 2024",
    title: "Data Science Intern",
    place: "Techno Colabs Software · Remote",
    desc: "Built classification models (Random Forest, SVM, Logistic Regression) reaching 88%+ accuracy, engineered features with Pandas/NumPy (+12% F1), and deployed ML models via a Flask REST API.",
  },
  {
    year: "2021 – 2026",
    title: "Integrated M.Sc. in Data Science",
    place: "Vellore Institute of Technology, AP · CGPA 8.76 / 10",
    desc: "Coursework: Machine Learning, Deep Learning, Statistical Inference, Time Series Analysis, Database Management.",
  },
  {
    year: "2025",
    title: "Research Presentation — NCRTAD 2025",
    place: "National Conference on Recent Trends in Advanced Data Science",
    desc: "Presented a hybrid TES–ConvLSTM deep learning framework for multi-step stock price forecasting, outperforming ARIMA on directional accuracy.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mb-16"
        >
          <div className="font-mono text-xs text-primary mb-3">// 01. about</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-gradient">Mojesh Thaddi</span> — a data scientist who ships.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Integrated M.Sc. Data Science graduate from VIT-AP (CGPA 8.76/10) with hands-on
            expertise in healthcare AI and financial forecasting. I built a clinical decision
            support system reaching <span className="text-primary font-medium">94.4% accuracy</span> on
            10,000+ patient records and presented a hybrid deep learning framework at
            NCRTAD 2025. I love taking models from notebook to production with Flask, Streamlit, and clean ML pipelines.
          </p>
        </motion.div>

        {/* Recruiter profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 mb-16 shadow-card glow-border relative"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">Profile</div>
              <div className="font-semibold text-lg">Data Scientist / ML Engineer</div>
              <div className="text-sm text-muted-foreground mt-1">Open to full-time & internship roles</div>
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">Specialties</div>
              <div className="font-semibold text-lg">ML · Deep Learning · CV · Time-Series</div>
              <div className="text-sm text-muted-foreground mt-1">Python, TensorFlow, Scikit-learn, Flask</div>
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">Location</div>
              <div className="font-semibold text-lg">Parvathipuram, Andhra Pradesh</div>
              <div className="text-sm text-muted-foreground mt-1">India · Remote / Relocate</div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <Icon className="w-5 h-5 text-primary mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} decimals={(s as any).decimals} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education & Journey
          </h3>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-[26px] md:-left-[34px] top-2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />
                <div className="glass rounded-2xl p-6 hover:bg-muted/30 transition">
                  <div className="font-mono text-xs text-primary mb-1">{t.year}</div>
                  <div className="text-lg font-semibold">{t.title}</div>
                  <div className="text-sm text-secondary mb-2">{t.place}</div>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
