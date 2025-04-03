
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hotel Room Booking System",
      description: "A system that allows users to book hotel rooms online conveniently. It improves convenience and streamlines the booking process.",
      tech: ["Java", "React", "MySQL"],
      github: "#", // Replace with actual GitHub link when available
      demo: "#",   // Replace with actual demo link when available
      image: "/lovable-uploads/b8ab0dc6-d67c-4a36-962a-6c5e11f879df.png"
    },
    // More projects can be added here in the future
  ];

  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title text-center">
          My <span className="highlight">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-card rounded-xl overflow-hidden shadow-sm card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            These are some of my featured projects. I'm always working on new ideas!
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
