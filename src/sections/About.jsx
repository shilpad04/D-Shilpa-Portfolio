import { Code, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with cross-functional teams to turn requirements into practical and scalable solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Continuously improving my skills by learning modern technologies and applying best practices to build maintainable applications.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing clear, readable, and maintainable code with structured and scalable backend logic.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building clean and scalable web applications
            </h2>

            <div 
            className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a Full Stack MERN Developer with 1.8 years of experience in
                a professional software environment. My background includes
                working on data-driven systems and structured user workflows,
                which helped me develop a thoughtful approach to application
                design and backend logic.
              </p>

              <p>
                I enjoy building web applications that balance clean, intuitive
                interfaces with reliable and well-structured backend systems. I
                focus on writing clear, maintainable code and designing scalable
                data models that support real-world use cases.
              </p>

              <p>
                I’m particularly interested in creating solutions that not only
                function efficiently but also provide a smooth and meaningful
                user experience.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`glass p-6 rounded-2xl animate-fade-in animation-delay-${(idx + 1) * 100}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
