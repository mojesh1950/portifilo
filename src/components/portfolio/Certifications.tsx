import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certs = [
  { title: "Python for Data Science", issuer: "Analytics Vidhya", year: "2024" },
  { title: "SQL for Data Analysis", issuer: "Analytics Vidhya", year: "2024" },
  { title: "Machine Learning", issuer: "Great Learning", year: "2024" },
  { title: "Tableau Fundamentals", issuer: "Simplilearn", year: "2023" },
  { title: "Research Presentation — NCRTAD 2025", issuer: "National Conference on Recent Trends in Advanced Data Science", year: "2025" },
  { title: "Data Science Internship", issuer: "Techno Colabs Software", year: "2024" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <div className="font-mono text-xs text-primary mb-3">// 04. certifications</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Credentials & <span className="text-gradient">learning</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Continuously sharpening my craft through industry-recognized programs and hands-on practice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 hover:shadow-glow-violet transition-all relative group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-accent flex items-center justify-center shadow-glow-violet">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <BadgeCheck className="w-4 h-4 text-primary opacity-60" />
              </div>
              <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-primary transition">{c.title}</h3>
              <div className="text-xs text-muted-foreground">{c.issuer}</div>
              <div className="text-xs font-mono text-secondary mt-1">{c.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
