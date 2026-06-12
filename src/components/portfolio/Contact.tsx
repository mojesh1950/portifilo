import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll get back to you within 24 hours.");
      form.reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="font-mono text-xs text-primary mb-3">// 05. contact</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something <span className="text-gradient">extraordinary</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Recruiters, collaborators, or fellow data nerds — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "mojeshn246@gmail.com", href: "mailto:mojeshn246@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/mojesh-thaddi", href: "https://linkedin.com/in/mojesh-thaddi" },
              { icon: Github, label: "GitHub", value: "@mojesh739", href: "https://github.com/mojesh739" },
              { icon: MapPin, label: "Location", value: "Parvathipuram, AP · India", href: "#" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow hover:-translate-y-1 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-muted-foreground">{c.label}</div>
                    <div className="font-medium truncate group-hover:text-primary transition">{c.value}</div>
                  </div>
                </a>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-4 shadow-card glow-border"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Name</label>
                <input
                  required
                  name="name"
                  className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Subject</label>
              <input
                name="subject"
                className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition"
                placeholder="Opportunity, collaboration, or just hi"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition resize-none"
                placeholder="Tell me about your project or role..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
