
import { Music, Gamepad2, Pen } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      name: "Music",
      icon: <Music className="h-10 w-10" />,
      description: "I enjoy listening to various genres of music in my free time. It helps me relax and stay focused."
    },
    {
      name: "Gaming",
      icon: <Gamepad2 className="h-10 w-10" />,
      description: "Gaming is one of my favorite pastimes. I enjoy both casual and competitive games."
    },
    {
      name: "Blogging",
      icon: <Pen className="h-10 w-10" />,
      description: "I like to share my thoughts and experiences through writing blog posts about technology and personal interests."
    }
  ];

  return (
    <section id="interests">
      <div className="container-section">
        <h2 className="section-title text-center">
          Personal <span className="highlight">Interests</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-sm text-center card-hover flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{interest.name}</h3>
                <p className="text-muted-foreground">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
