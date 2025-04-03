
import { GraduationCap, Code, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title text-center">
          About <span className="highlight">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 shadow-sm card-hover">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-primary h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                B.Tech at RVITM (Expected 2027)
              </p>
              <p className="text-muted-foreground">Current CGPA: 7.5</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm card-hover">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="text-primary h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground">
                Passionate about web development and creating user-friendly experiences
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm card-hover">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Brain className="text-primary h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-muted-foreground">
                Strong interest in DSA and AI technologies
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Bio</h3>
          <p className="text-muted-foreground mb-4">
            I'm a technology enthusiast and aspiring software developer with a passion for creating solutions that make a difference. Currently pursuing my Bachelor of Technology degree at RV Institute of Technology and Management in Bangalore.
          </p>
          <p className="text-muted-foreground mb-4">
            My academic journey has equipped me with strong foundations in programming languages like Java and Python, along with experience in web development using React. I'm particularly interested in Data Structures & Algorithms and exploring the world of Artificial Intelligence.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring new music, gaming, or sharing my thoughts through blogging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
