import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
  { name: "Node.js", icon: "fa-brands fa-node-js" },
  { name: "Express.js", icon: "fa-solid fa-server" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "REST APIs", icon: "fa-solid fa-globe" },
  { name: "Postman", icon: "fa-solid fa-paper-plane" },
  { name: "Git", icon: "fa-brands fa-git-alt" },
];

export const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-12 lg:py-16 relative animate-fade-in animation-delay-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className={`text-4xl md:text-5xl font-bold text-secondary-foreground transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Skills
          </h2>

          {/* Added Line */}
          <p
            className={`text-muted-foreground mt-4 text-sm tracking-wide uppercase transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Core Technical Skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass skill-glow rounded-xl px-5 py-4
                         flex items-center gap-3
                         transition-all duration-500
                         ${
                           visible
                             ? "opacity-100 translate-y-0"
                             : "opacity-0 translate-y-8"
                         }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <i className={`${skill.icon} text-primary text-lg`}></i>

              <span className="text-sm font-medium text-foreground/90">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};