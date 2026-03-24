import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Drivio Vehicle Rental App",
    description:
      "Full-stack vehicle rental platform with role-based access, booking validation, Razorpay integration, admin approvals, dashboards, and automated workflows.",
    image: "/projects/project1.png",
    tags: [
      "Tailwindcss",
      "React",
      "Expressjs",
      "Nodejs",
      "MongoDB",
      "Razorpay",
    ],
    link: "https://driviocarrental.netlify.app/",
    github:
      "https://github.com/shilpad04/Drivio---Online-Vehicle-Rental-Platform",
  },
  {
    title: "TaskFlow",
    description:
      "Full-stack task management app with secure authentication, task prioritization, dashboards, and real-time tracking for efficient daily workflow management.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://flowtask9.netlify.app/",
    github: "https://github.com/shilpad04/Task-Flow",
  },
  {
    title: "PrepMate",
    description:
      "AI-powered interview preparation platform that generates personalized questions, detailed explanations, and structured learning sessions using dynamic user inputs.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "MongoDB", "AI Integration", "JWT"],
    link: "https://prepmate.netlify.app/",
    github: "https://github.com/shilpad04/PrepMate",
  },
];

export const Projects = () => {
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 lg:py-16 bg-background relative"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-10 lg:mb-14">
          <h2
            className={`text-4xl md:text-5xl font-bold text-secondary-foreground transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Projects
          </h2>

          <p
            className={`text-muted-foreground mt-4 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            A collection of projects I’ve developed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                {/* Desktop Hover Links */}
                <div className="hidden lg:flex absolute inset-0 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile + Tablet Buttons */}
                <div className="flex lg:hidden gap-3 mt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-md border border-border text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-8 lg:mt-10 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <AnimatedBorderButton href="https://github.com/shilpad04">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};