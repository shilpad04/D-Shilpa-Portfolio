import { useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50
                 backdrop-blur-md bg-background/70
                 border-b border-border/40"
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-wide hover:text-primary transition-colors"
        >
          D SHILPA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glass rounded-full px-3 py-1 flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-3 py-2 text-sm text-muted-foreground
                           hover:text-foreground rounded-full
                           hover:bg-surface transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground
                           hover:text-foreground py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button>Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
