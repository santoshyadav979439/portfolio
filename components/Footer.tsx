import React from 'react';
import { Github, Linkedin, Twitter, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold font-serif">
              Santosh<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Full Stack Engineer building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div>
              <h4 className="text-sm font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/santoshyadav979439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/santoshyadav979439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/santoshyadav979439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="/Santosh_Yadav_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Resume"
                >
                  <FileText size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Santosh Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}