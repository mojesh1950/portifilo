import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 -z-0">
        <HeroScene />
      </div>
      {/* gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">Available for opportunities</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-foreground"
            >
              Turning data
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-gradient glow-text"
            >
              into decisions.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Aspiring <span className="text-primary font-medium">Data Scientist</span> &{" "}
            <span className="text-secondary font-medium">Data Analyst</span> building
            intelligent systems with Python, Machine Learning, and modern analytics tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glow-border hover:bg-muted/40 transition"
            >
              View Projects
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/mojesh739" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/mojesh-thaddi" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column — info card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex flex-col gap-4 justify-self-end"
        >
          <div className="glass rounded-2xl p-6 max-w-sm shadow-card animate-float">
            <div className="font-mono text-xs text-muted-foreground mb-2">// current_focus</div>
            <div className="font-medium text-foreground">Deep Learning · Computer Vision · Business Intelligence</div>
          </div>
          <div className="glass rounded-2xl p-6 max-w-sm shadow-card animate-float [animation-delay:1.5s]">
            <div className="font-mono text-xs text-muted-foreground mb-2">// stack</div>
            <div className="flex flex-wrap gap-2">
              {["Python", "TensorFlow", "SQL", "Power BI", "Scikit-learn"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
