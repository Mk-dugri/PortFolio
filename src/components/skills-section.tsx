export function SkillsSection() {
  const skills = [
    {
      icon: "fas fa-shield-alt",
      title: "Ethical Hacking",
      color: "text-primary",
      items: [
        "Penetration Testing",
        "Vulnerability Assessment", 
        "Web Application Security",
        "Network Exploitation"
      ]
    },
    {
      icon: "fas fa-search",
      title: "Digital Forensics",
      color: "text-secondary",
      items: [
        "Evidence Collection",
        "Malware Analysis",
        "Memory Forensics",
        "Mobile Forensics"
      ]
    },
    {
      icon: "fas fa-code",
      title: "Development",
      color: "text-accent",
      items: [
        "Python Security Tools",
        "C++ Applications",
        "Web Technologies",
        "JavaScript Security"
      ]
    }
  ];

  const tools = [
    { icon: "fab fa-python", name: "Python", color: "text-primary" },
    { icon: "fas fa-terminal", name: "Bash", color: "text-secondary" },
    { icon: "fab fa-js", name: "JavaScript", color: "text-accent" },
    { icon: "fas fa-database", name: "SQL", color: "text-primary" },
    { icon: "fab fa-linux", name: "Linux", color: "text-secondary" },
    { icon: "fab fa-git-alt", name: "Git", color: "text-accent" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground">Cybersecurity expertise across multiple domains</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 neon-border hover:scale-105 transition-transform duration-300"
              data-testid={`skill-card-${skill.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className="text-center mb-6">
                <i className={`${skill.icon} text-4xl ${skill.color} mb-4`}></i>
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <i className={`fas fa-check ${skill.color} mr-3`}></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Tools & <span className="text-primary">Technologies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-4 text-center neon-border hover:bg-primary/10 transition-all duration-300"
                data-testid={`tool-${tool.name.toLowerCase()}`}
              >
                <i className={`${tool.icon} text-3xl ${tool.color} mb-2`}></i>
                <div className="text-sm">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
