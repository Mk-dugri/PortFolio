export function FeaturedProject() {
  return (
    <section className="py-20 bg-muted relative" data-testid="featured-project-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Featured</span> Project
          </h2>
          <p className="text-xl text-muted-foreground">Showcasing cutting-edge cybersecurity tools</p>
        </div>
        
        <div className="bg-card rounded-xl neon-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-primary font-mono" data-testid="text-project-title">FileFusion</h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-project-description">
                Advanced polyglot file manipulation tool for cybersecurity research. 
                Create, detect, extract, and verify multi-format files with integrated 
                antivirus scanning capabilities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-shield-alt text-primary"></i>
                  <span>Polyglot file creation and detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-virus text-secondary"></i>
                  <span>VirusTotal integration for malware scanning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-search text-accent"></i>
                  <span>Advanced file analysis and extraction</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://filefusion.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 neon-border"
                  data-testid="link-live-demo"
                >
                  <i className="fas fa-rocket mr-2"></i>Launch FileFusion
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* FileFusion Interface Preview */}
              <div className="bg-card/50 rounded-xl p-6 border border-primary/30">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/80 rounded-lg p-4 text-center border border-primary/20">
                    <i className="fas fa-file-archive text-3xl text-primary mb-2"></i>
                    <h4 className="font-semibold text-sm">Create Polyglot</h4>
                    <p className="text-xs text-muted-foreground">Combine file formats</p>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center border border-secondary/20">
                    <i className="fas fa-search text-3xl text-secondary mb-2"></i>
                    <h4 className="font-semibold text-sm">Detect Format</h4>
                    <p className="text-xs text-muted-foreground">Analyze signatures</p>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center border border-accent/20">
                    <i className="fas fa-download text-3xl text-accent mb-2"></i>
                    <h4 className="font-semibold text-sm">Extract Files</h4>
                    <p className="text-xs text-muted-foreground">Perfect reconstruction</p>
                  </div>
                  <div className="bg-background/80 rounded-lg p-4 text-center border border-destructive/20">
                    <i className="fas fa-shield-virus text-3xl text-destructive mb-2"></i>
                    <h4 className="font-semibold text-sm">AV Scanning</h4>
                    <p className="text-xs text-muted-foreground">VirusTotal integration</p>
                  </div>
                </div>
                
                <div className="bg-background/80 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono text-primary">FileFusion Analysis Results</span>
                    <span className="text-xs text-muted-foreground">Security Report</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Detected Formats:</span>
                      <span className="text-primary">PNG, PDF, ZIP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Confidence Score:</span>
                      <span className="text-secondary">98.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Security Status:</span>
                      <span className="text-accent">Clean ✓</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-muted-foreground">filefusion@terminal</span>
                </div>
                <div className="text-primary">
                  <span className="text-secondary">$</span> curl -X POST filefusion.onrender.com/api/create<br />
                  <span className="text-muted-foreground">[+] Uploading target files...</span><br />
                  <span className="text-muted-foreground">[+] Creating polyglot structure...</span><br />
                  <span className="text-muted-foreground">[+] Running integrity checks...</span><br />
                  <span className="text-primary">[✓] FileFusion polyglot ready for download!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
