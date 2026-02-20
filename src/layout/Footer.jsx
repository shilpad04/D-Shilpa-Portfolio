import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="mt-14 border-t border-border/50 bg-background"
    >
      <div
        className={`max-w-6xl mx-auto px-6 py-6 transition-all duration-700 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <h3 className="text-lg font-semibold text-secondary-foreground">
            D SHILPA
          </h3>

          {/* Copyright (Center) */}
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Shilpa D. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shilpad04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass skill-glow hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/shilpa-d-5547361a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass skill-glow hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};