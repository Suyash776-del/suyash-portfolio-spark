
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Academic from "@/components/sections/Academic";
import Blog from "@/components/sections/Blog";
import Interests from "@/components/sections/Interests";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Suyash Singh | Portfolio";
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Academic />
          <Blog />
          <Interests />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <ChatBubble />
      </div>
    </ThemeProvider>
  );
};

export default Index;
