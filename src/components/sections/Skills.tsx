
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills: Skill[] = [
    { name: "Java", level: 80, category: "Programming Languages", icon: "💻" },
    { name: "Python", level: 75, category: "Programming Languages", icon: "🐍" },
    { name: "React", level: 70, category: "Web Development", icon: "⚛️" },
    { name: "MySQL", level: 65, category: "Databases", icon: "🗄️" },
    { name: "VS Code", level: 85, category: "Tools & Technologies", icon: "⚙️" },
    { name: "Communication", level: 90, category: "Soft Skills", icon: "🗣️" },
  ];

  const categories = ["Programming Languages", "Web Development", "Databases", "Tools & Technologies", "Soft Skills"];

  return (
    <section id="skills">
      <div className="container-section">
        <h2 className="section-title text-center">
          My <span className="highlight">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            if (categorySkills.length === 0) return null;
            
            return (
              <div key={category} className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="space-y-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">
                          {skill.icon} {skill.name}
                        </span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: animated ? `${skill.level}%` : "0%" 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            I'm continuously learning and improving my skills. Currently exploring advanced React concepts and AI/ML technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
