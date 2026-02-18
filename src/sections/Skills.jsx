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
      className="py-20 lg:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">

          <div className="flex justify-center lg:justify-start items-center">
            <h2
              className={`text-4xl font-bold text-primary glow-text transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Skills
            </h2>
          </div>

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
      </div>
    </section>
  );
};
