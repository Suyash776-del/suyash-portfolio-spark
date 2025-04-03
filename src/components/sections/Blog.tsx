
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "My journey learning React and building my first component-based application.",
      date: "March 15, 2025",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Data Structures Every Programmer Should Know",
      excerpt: "An overview of essential data structures and when to use them.",
      date: "February 28, 2025",
      category: "Programming",
    },
    {
      id: 3,
      title: "My Experience with MySQL",
      excerpt: "Working with databases and implementing them in web applications.",
      date: "January 10, 2025",
      category: "Databases",
    },
  ];

  return (
    <section id="blog" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title text-center">
          My <span className="highlight">Blog</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-muted-foreground mb-8">
            I enjoy sharing my thoughts and experiences in the world of technology. Here are some of my latest posts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-card rounded-xl overflow-hidden shadow-sm card-hover h-full flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button>
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
