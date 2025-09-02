import { useQuery } from "@tanstack/react-query";
import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github-api";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectsSection() {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ["/api/github/repos/Mk-dugri"],
    queryFn: () => fetchGitHubRepos("Mk-dugri"),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const featuredProjects = [
    {
      name: "vs-code-clone",
      description: "A complete clone of VS Code's website with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Mk-dugri/vs-code-clone"
    },
    {
      name: "password_cracker_app_page_using_python", 
      description: "Flask-based web application for file processing and password analysis.",
      technologies: ["Python", "Flask", "Security"],
      githubUrl: "https://github.com/Mk-dugri/password_cracker_app_page_using_python"
    },
    {
      name: "calculator-in-cpp",
      description: "Advanced calculator application built with C++ and Windows Forms.",
      technologies: ["C++", "Windows Forms", "Desktop"],
      githubUrl: "https://github.com/Mk-dugri/calculator-in-cpp"
    },
    {
      name: "python-editor",
      description: "Web-based Python code editor with syntax highlighting and execution.",
      technologies: ["JavaScript", "Python", "Web"],
      githubUrl: "https://github.com/Mk-dugri/python-editor"
    },
    {
      name: "Magic-of-Mathematics",
      description: "Educational platform exploring mathematical concepts and algorithms.",
      technologies: ["HTML", "Education", "Mathematics"],
      githubUrl: "https://github.com/Mk-dugri/Magic-of-Mathematics"
    }
  ];

  const getLanguageColor = (language: string | null) => {
    if (!language) return "text-muted-foreground";
    
    const colors: Record<string, string> = {
      "Python": "text-blue-400",
      "JavaScript": "text-yellow-400", 
      "TypeScript": "text-blue-500",
      "HTML": "text-orange-400",
      "CSS": "text-blue-600",
      "C++": "text-blue-300",
      "Java": "text-red-400",
      "C": "text-gray-400"
    };
    
    return colors[language] || "text-primary";
  };

  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground">Cybersecurity tools and research projects</p>
        </div>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="neon-border">
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <div className="flex gap-3">
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="bg-card rounded-xl p-8 neon-border max-w-md mx-auto">
              <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Unable to Load GitHub Repositories</h3>
              <p className="text-muted-foreground mb-6">
                {error instanceof Error ? error.message : "Failed to fetch repositories from GitHub API"}
              </p>
              <p className="text-sm text-muted-foreground">
                Showing featured projects below
              </p>
            </div>
          </div>
        ) : null}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos && repos.length > 0 ? (
            repos.map((repo: GitHubRepo) => (
              <Card 
                key={repo.id}
                className="bg-card rounded-xl neon-border hover:scale-105 transition-all duration-300 group"
                data-testid={`project-card-${repo.name}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {repo.description || "No description available"}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    {repo.language && (
                      <span className={`${getLanguageColor(repo.language)} text-sm font-medium`}>
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center text-muted-foreground text-sm">
                        <i className="fas fa-star mr-1"></i>
                        {repo.stargazers_count}
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="flex items-center text-muted-foreground text-sm">
                        <i className="fas fa-code-branch mr-1"></i>
                        {repo.forks_count}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`link-github-${repo.name}`}
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card rounded-xl neon-border hover:scale-105 transition-all duration-300 group"
                data-testid={`featured-project-card-${project.name}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`link-featured-github-${project.name}`}
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
          
          {/* Future Project Placeholder */}
          <Card className="bg-card rounded-xl border border-dashed border-primary hover:scale-105 transition-all duration-300 group opacity-50">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Coming Soon...
                </h3>
                <p className="text-muted-foreground text-sm">
                  Next generation cybersecurity research project in development.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">Research</span>
                <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">Innovation</span>
              </div>
              <div className="flex space-x-3">
                <i className="fas fa-hourglass-half text-xl text-muted-foreground"></i>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
