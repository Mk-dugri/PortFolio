import { TypingAnimation } from "./typing-animation";

export function HeroSection() {

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center cyber-grid relative"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://avatars.githubusercontent.com/u/165674949?v=4" 
            alt="MONU Profile" 
            className="w-40 h-40 rounded-full mx-auto border-4 border-primary terminal-glow"
            data-testid="profile-image"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-primary font-mono glitch-text" data-testid="hero-name">MONU</span>
          <span className="text-2xl md:text-4xl text-muted-foreground ml-4">(Mk-dugri)</span>
          <br />
          <TypingAnimation 
            text="Cybersecurity Researcher" 
            className="text-2xl md:text-4xl" 
            speed={150}
          />
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-description">
          Passionate about <span className="text-secondary">ethical hacking</span>, 
          <span className="text-accent"> digital forensics</span>, and securing the digital world 
          one vulnerability at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://github.com/Mk-dugri?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 neon-border font-mono"
            data-testid="button-view-projects"
          >
            <i className="fas fa-code mr-2"></i>View Projects
          </a>
          <a 
            href="https://github.com/Mk-dugri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="link-github-profile"
          >
            <i className="fab fa-github mr-2"></i>GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
