import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import Certifications from "../components/portfolio/Certifications";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Mojesh Thaddi — Data Scientist & ML Engineer";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }

      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Mojesh Thaddi — Data Scientist & ML Engineer. VIT-AP grad (CGPA 8.76). Projects in healthcare AI, deep learning forecasting, and analytics."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;