import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-start lg:items-center overflow-x-hidden pt-24 lg:pt-28 pb-12 lg:pb-16 animate-fade-in">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="space-y-4 animate-fade-in animation-delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary glow-text">Shilpa</span>
              </h1>
            </div>

            <h2
              key={currentRole}
              className="text-2xl md:text-3xl font-semibold text-foreground/80 animate-fade-in animation-delay-200"
            >
              {roles[currentRole]}
            </h2>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in animation-delay-300">
              I build structured, scalable and user-focused web applications
              using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animation-delay-400">
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <AnimatedBorderButton href="/D_Shilpa_CV.pdf">
                <Download className="w-4 h-4" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 pt-2 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">Follow:</span>

              <a
                href="https://github.com/shilpad04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/shilpa-d-5547361a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0 animate-fade-in animation-delay-300">
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[380px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-3xl" />

              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_0_40px_color-mix(in_srgb,var(--color-primary)_25%,transparent)]">
                <img
                  src="/shilpa.png"
                  alt="Shilpa"
                  className="w-full aspect-[4/5] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};