export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-mono font-bold text-primary">
                <i className="fas fa-terminal mr-2"></i>Mk-dugri
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">Cybersecurity Researcher</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Mk-dugri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="footer-link-github"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://www.youtube.com/@MAGICOFMATHEMATICS001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors duration-300"
              data-testid="footer-link-youtube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a 
              href="mailto:contact@mk-dugri.dev" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              data-testid="footer-link-email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 MONU (Mk-dugri). All rights reserved. Built with passion for cybersecurity.</p>
        </div>
      </div>
    </footer>
  );
}
