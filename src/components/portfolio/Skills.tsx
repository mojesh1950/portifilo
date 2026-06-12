import { motion } from "framer-motion";
import { Brain, Database, BarChart3, Cpu, FileSpreadsheet, LineChart, Sparkles, TerminalSquare, Network } from "lucide-react";

const skills = [
  { name: "Python", level: 92, icon: TerminalSquare, color: "from-cyan-400 to-blue-500" },
  { name: "SQL", level: 88, icon: Database, color: "from-blue-400 to-violet-500" },
  { name: "Machine Learning", level: 85, icon: Brain, color: "from-violet-400 to-fuchsia-500" },
  { name: "Deep Learning", level: 78, icon: Network, color: "from-fuchsia-400 to-pink-500" },
  { name: "Data Analysis", level: 90, icon: LineChart, color: "from-cyan-400 to-teal-500" },
  { name: "Power BI", level: 82, icon: BarChart3, color: "from-yellow-400 to-orange-500" },
  { name: "Excel", level: 88, icon: FileSpreadsheet, color: "from-emerald-400 to-green-500" },
  { name: "TensorFlow", level: 75, icon: Cpu, color: "from-orange-400 to-red-500" },
  { name: "Scikit-learn", level: 84, icon: Sparkles, color: "from-violet-400 to-indigo-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="font-mono text-xs text-primary mb-3">// 02. skills</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Tools I <span className="text-gradient-accent">use</span> daily.
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated stack for the full data science lifecycle — collection, cleaning, modeling, visualization, and storytelling.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 hover:shadow-glow transition-all relative overflow-hidden"
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${s.color} opacity-10 group-hover:opacity-30 blur-2xl transition`} />
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{s.level}%</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{s.name}</h3>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden glass rounded-2xl py-6">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-sm text-muted-foreground">
            {[...Array(2)].flatMap((_, k) =>
              ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Keras", "PyTorch", "Jupyter", "Git", "MySQL", "PostgreSQL", "Tableau", "Streamlit", "OpenCV", "BeautifulSoup"].map((t) => (
                <span key={`${k}-${t}`} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
