
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Suyash Singh</h3>
            <p className="text-sm text-muted-foreground">
              Web Developer | Technology Enthusiast
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="mailto:getshaan21@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Suyash Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
