import { Github, Heart, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-glow">
              MT
            </span>
            <span className="text-gradient font-semibold">mojesh.thaddi</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            Data Scientist & ML Engineer — turning data into decisions.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        <div className="flex justify-start md:justify-end items-center gap-3">
          <a href="https://github.com/mojesh739" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/mojesh-thaddi" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:mojeshn246@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Mojesh Thaddi — Crafted with <Heart className="inline w-3 h-3 text-accent" /> & lots of coffee.</div>
          <div className="font-mono">Built with React · Three.js · Framer Motion</div>
        </div>
      </div>
    </footer>
  );
}
