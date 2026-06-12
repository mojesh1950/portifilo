import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Clinical Decision Support System",
    tag: "Deep Learning · Healthcare AI",
    desc: "Cardiovascular disease risk predictor on 10,000+ patient records — benchmarked 5 ML algorithms, optimized SVM hit 94.4% accuracy, deployed live as a Flask web app.",
    stack: ["Python", "TensorFlow", "SVM", "XGBoost", "Flask"],
    gradient: "from-cyan-500/30 via-blue-500/20 to-violet-500/30",
    accent: "🫀",
    github: "https://github.com/mojesh1950/cardiac_ai",
    demo: "https://cardiac-ai-pi.vercel.app",
  },
  {
    title: "Stock Market Forecasting (TES–ConvLSTM)",
    tag: "Deep Learning · Time-Series",
    desc: "Hybrid TES + ConvLSTM forecasting framework with Encoder-Decoder & Dual Attention, tuned via Bayesian Optimization — outperformed ARIMA. Presented at NCRTAD 2025.",
    stack: ["Python", "ConvLSTM", "TensorFlow", "Bayesian Opt"],
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-pink-500/30",
    accent: "📈",
    github: "https://github.com/mojesh739/Stock-Price-Forecasting-",
    demo: "#",
  },
  {
    title: "Cyclone Sensor Analysis & Monitoring",
    tag: "IoT · Time-Series · Anomaly Detection",
    desc: "Analyzed 300K+ industrial sensor records over 3 years. K-Means state segmentation, Isolation Forest anomaly detection, and 1-hour ARIMA forecasting for root-cause hypotheses.",
    stack: ["Python", "Pandas", "Scikit-learn", "ARIMA"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    accent: "🌀",
    github: "https://github.com/mojesh739/Cyclone-Sensor-Analysis1",
    demo: "#",
  },
  {
    title: "Employee Attrition Prediction System",
    tag: "Machine Learning · HR Analytics",
    desc: "Predicted attrition risk on the IBM HR dataset (14,999 records, 35 features). XGBoost reached ~87% accuracy with optimized recall; identified top drivers for HR action.",
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    gradient: "from-yellow-500/30 via-orange-500/20 to-pink-500/30",
    accent: "👥",
    github: "https://github.com/mojesh739/BigMart-Product-Outlet-Sales-Analysis",
    demo: "#",
  },
  {
    title: "Blinkit Sales & Inventory Dashboard",
    tag: "Data Analysis · Power BI",
    desc: "End-to-end retail analytics dashboard surfacing top categories, peak demand windows, and revenue drivers with interactive DAX measures.",
    stack: ["Power BI", "SQL", "DAX", "Excel"],
    gradient: "from-blue-500/30 via-indigo-500/20 to-violet-500/30",
    accent: "🛒",
    github: "https://github.com/mojesh739",
    demo: "#",
  },
  {
    title: "Vehicle Number Plate Detection",
    tag: "Deep Learning · Computer Vision",
    desc: "License plate detection & OCR pipeline using YOLO and TensorFlow with OpenCV pre/post-processing for real-time inference.",
    stack: ["TensorFlow", "OpenCV", "YOLO", "Python"],
    gradient: "from-pink-500/30 via-rose-500/20 to-orange-500/30",
    accent: "🚗",
    github: "https://github.com/mojesh739",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-primary mb-3">// 03. projects</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Selected <span className="text-gradient">work</span>.
            </h2>
            <p className="text-lg text-muted-foreground">
              A mix of deep learning, analytics, and dashboard projects — each shipped with clean code, tests, and documentation.
            </p>
          </div>
          <a
            href="https://github.com/mojesh739"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass glow-border hover:shadow-glow transition self-start"
          >
            <Github className="w-4 h-4" />
            See all on GitHub
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {p.accent}
                </div>
                <div className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 rounded-full bg-background/60 backdrop-blur-sm border border-border">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:text-primary transition">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={p.demo} className="inline-flex items-center gap-1.5 text-sm hover:text-primary transition">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
