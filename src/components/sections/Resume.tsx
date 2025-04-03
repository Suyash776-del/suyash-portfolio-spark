
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title text-center">
          My <span className="highlight">Resume</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-primary">RV Institute of Technology and Management</p>
                    <p className="text-sm text-muted-foreground">Expected Graduation: 2027</p>
                    <p className="text-sm text-muted-foreground">CGPA: 7.5</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Programming Languages:</span>{" "}
                    <span className="text-muted-foreground">Java, Python</span>
                  </li>
                  <li>
                    <span className="font-medium">Web Development:</span>{" "}
                    <span className="text-muted-foreground">React</span>
                  </li>
                  <li>
                    <span className="font-medium">Databases:</span>{" "}
                    <span className="text-muted-foreground">MySQL</span>
                  </li>
                  <li>
                    <span className="font-medium">Tools:</span>{" "}
                    <span className="text-muted-foreground">VS Code</span>
                  </li>
                  <li>
                    <span className="font-medium">Soft Skills:</span>{" "}
                    <span className="text-muted-foreground">Communication</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Hotel Room Booking System</h4>
                  <p className="text-sm text-muted-foreground">
                    A system that allows users to book hotel rooms online conveniently. It improves convenience and streamlines the booking process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Resume PDF
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              You can also view my full resume online or download it as a PDF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
