export function AboutSection() {
  return (
    <section id="about" className="py-20" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p data-testid="text-about-intro">
                I'm <span className="text-primary font-semibold">MONU (Mk-dugri)</span>, a dedicated cybersecurity student 
                with an insatiable passion for ethical hacking and digital forensics. My journey in cybersecurity 
                extends far beyond the classroom, diving deep into real-world security challenges.
              </p>
              <p data-testid="text-about-specialization">
                I specialize in <span className="text-secondary">vulnerability research</span>, 
                <span className="text-accent"> penetration testing</span>, and developing innovative security tools. 
                My goal is to contribute to a safer digital ecosystem through responsible disclosure and 
                educational content.
              </p>
              <p data-testid="text-about-activities">
                When I'm not hunting for vulnerabilities, you can find me creating educational content on my 
                <span className="text-primary"> YouTube channel</span> or contributing to open-source security projects.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 text-center neon-border" data-testid="stat-projects">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-card rounded-lg p-4 text-center neon-border" data-testid="stat-learning">
                <div className="text-2xl font-bold text-secondary">∞</div>
                <div className="text-sm text-muted-foreground">Learning</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card/50 rounded-xl p-8 border border-primary/30 terminal-glow">
              <div className="text-center mb-6">
                <i className="fas fa-user-secret text-6xl text-primary mb-4"></i>
                <h3 className="text-2xl font-bold">Digital Identity</h3>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-primary">Active Researcher</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Specialization:</span>
                  <span className="text-secondary">Ethical Hacking</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus Area:</span>
                  <span className="text-accent">Digital Forensics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="text-primary">Student + Research</span>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-background/60 rounded border border-primary/20">
                <p className="text-xs text-center text-muted-foreground">
                  "Security is not a product, but a process of continuous learning and adaptation"
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 neon-border">
              <h3 className="text-xl font-bold mb-4 text-primary">Current Focus</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center" data-testid="focus-vulnerability">
                  <i className="fas fa-bug text-primary mr-3"></i>Advanced Vulnerability Research
                </li>
                <li className="flex items-center" data-testid="focus-forensics">
                  <i className="fas fa-fingerprint text-secondary mr-3"></i>Digital Forensics Techniques
                </li>
                <li className="flex items-center" data-testid="focus-network">
                  <i className="fas fa-network-wired text-accent mr-3"></i>Network Security Analysis
                </li>
                <li className="flex items-center" data-testid="focus-development">
                  <i className="fas fa-code text-primary mr-3"></i>Security Tool Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
