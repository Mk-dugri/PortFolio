import { useState, useEffect } from "react";
import { Link } from "wouter";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-mono font-bold text-primary animate-pulse">
              <i className="fas fa-terminal mr-2"></i>Mk-dugri
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="nav-link-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="nav-link-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="nav-link-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="nav-link-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="nav-link-contact"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary"
              data-testid="mobile-menu-toggle"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border border-border rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-link-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-link-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-link-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-link-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
