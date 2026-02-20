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
    title: "CineScore",
    description:
      "Movie discovery app using OMDb API with live search, filters, ratings, favorites (LocalStorage), and responsive UI.",
    image: "/projects/project2.png",
    tags: ["Tailwindcss", "ReactJS", "OMDB API"],
    link: "https://cinescoremovie.netlify.app/",
    github: "https://github.com/shilpad04/CineScore-",
  },
  {
    title: "Drivio Vehicle Rental App",
    description:
      "Recipe browsing app with search, category & cuisine filters, detailed views, favorites (LocalStorage), and mobile-first design.",
    image: "/projects/project3.png",
    tags: ["ReactJs", "Tailwindcss", "React Hooks "],
    link: "https://recipeapptherecipebox.netlify.app/",
    github: "https://github.com/shilpad04/Recipe-App-The_Recipe_Box",
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
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group glass rounded-2xl overflow-hidden transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
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
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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