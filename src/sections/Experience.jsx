import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineer",
    company: "Stellantis Digital Hub",
    duration: "Nov 2021 – Jun 2023",
    short: "Worked on structured workflows and data-driven enterprise systems.",
    details: [
      "Handled complex data models and workflows",
      "Maintained role-based access and validations",
      "Implemented rule-based automation",
      "Resolved data and system issues",
      "Built reports and dashboards",
      "Performed Excel-based data analysis",
      "Conducted system and regression testing",
    ],
  },
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      id="experience"
      ref={sectionRef}
      className="py-12 lg:py-16 bg-background relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Experience
          </h2>

          <p
            className={`text-muted-foreground transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Professional enterprise experience
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 lg:space-y-8">
          {experienceData.map((exp, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`group glass skill-glow rounded-2xl p-8 md:p-10 
                transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${isOpen ? "glass-strong" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-primary">
                      {exp.role}
                    </h3>

                    <p className="text-primary font-medium transition-all duration-300 group-hover:glow-text mt-2">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.duration}
                    </p>

                    <p className="text-muted-foreground mt-4">
                      {exp.short}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleCard(index)}
                    className={`transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 text-primary scale-110"
                        : "group-hover:text-primary group-hover:scale-110"
                    }`}
                  >
                    <ChevronDown size={24} />
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? "max-h-[500px] opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    {exp.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};