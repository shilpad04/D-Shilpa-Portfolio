import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
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
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Fullstack Web Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-xl font-bold leading-tight animate-fade-in animation-delay-200">
                Hi I'm <span className="text-primary glow-text">D Shilpa</span>
                <br />
                <span className="font-serif font-normal text-white">
                  Full Stack MERN Developer
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Building structured, user-focused web applications using the
                MERN stack, with attention to clean design and reliable
                functionality.
              </p>
            </div>
            {/* Call to Actions*/}
            <div>
                <Button>
                    Contact Me <ArrowRight className="w-5 h-5"/>
                </Button>

                <button>
                   {/* Animated SVG Border */} 
                </button>
            </div>

          </div>

          {/* Right Column - Profile Image */}
        </div>
      </div>
    </section>
  );
};
