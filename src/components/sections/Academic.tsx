
import { BookOpen, Code2 } from "lucide-react";

const Academic = () => {
  return (
    <section id="academic">
      <div className="container-section">
        <h2 className="section-title text-center">
          <span className="highlight">Academic</span> Interests
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Code2 className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Structures & Algorithms</h3>
                <p className="text-muted-foreground">
                  Passionate about understanding and implementing efficient algorithms and data structures. My coursework has focused on complexity analysis, algorithm design, and problem-solving techniques.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <BookOpen className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Coursework</h3>
                <p className="text-muted-foreground mb-4">
                  My academic journey has equipped me with both theoretical knowledge and practical skills. Some key courses I've taken:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Data Structures & Algorithms</li>
                  <li>Object-Oriented Programming</li>
                  <li>Database Management Systems</li>
                  <li>Web Development</li>
                  <li>Artificial Intelligence Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Currently maintaining a CGPA of 7.5 in my B.Tech program at RVITM. Expected graduation in 2027.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
