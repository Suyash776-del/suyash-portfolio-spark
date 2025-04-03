
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ["Java", "Python", "React", "MySQL"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000); // Change skill every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="text-primary">Suyash Singh</span>
            </h1>
            
            <div className="relative h-14 mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground absolute inset-0 flex items-center justify-center lg:justify-start">
                I work with{" "}
                <span
                  className="text-primary font-medium ml-2 transition-all duration-500"
                  key={currentSkill}
                >
                  {skills[currentSkill]}
                </span>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Based in Bangalore, Karnataka. A passionate web developer and technology enthusiast.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button className="w-full sm:w-auto" asChild>
                <a href="#resume">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 rounded-full bg-primary/20 flex items-center justify-center animate-float">
              <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
                <span className="text-5xl font-bold text-primary">SS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
