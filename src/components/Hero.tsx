
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden tech-gradient">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-blue-500 rounded-full animate-tech-float delay-100"></div>
        <div className="absolute top-3/4 left-1/2 w-20 h-20 border-2 border-blue-400 rounded-md rotate-45 animate-tech-float delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-3 border-blue-600 rounded-lg animate-tech-float delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-blue-900">
            Dhananjay Lakkawar
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
            Cloud | DevOps | AI Enthusiast
          </h2>
          <p className="text-lg text-gray-600 mb-2">Pune, India</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Mail size={18} />
              <a href="mailto:lakkawardhananjay@gmail.com">Contact Me</a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              <Linkedin size={18} />
              <a href="https://www.linkedin.com/in/dhananjaylakkawar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
