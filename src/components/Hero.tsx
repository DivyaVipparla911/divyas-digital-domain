
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Award, User, Briefcase } from 'lucide-react';

const Hero = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "C#",
    ".NET", "AWS", "Azure", "MongoDB", "SQL"
  ];
  
  const certifications = [
    {
      title: "Power Platform Fundamentals",
      issuer: "Microsoft",
      icon: "M",
      image: "/lovable-uploads/5490cde7-4683-43f0-8ba3-dd3530d12677.png"
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      icon: "M",
      image: "/lovable-uploads/735a3f07-0a80-47db-8ebc-d305f9190285.png"
    },
    {
      title: "Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      icon: "M",
      image: "/lovable-uploads/dddfff38-2190-436b-9be5-67db194274e8.png"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-black">
      {/* Header Profile Section */}
      <section className="pt-28 pb-16 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-start">
          <div className="relative w-48 h-48 flex-shrink-0">
            <Avatar className="w-full h-full border-4 border-portfolio-gold shadow-lg">
              <AvatarImage src="" alt="Divya Vipparla" />
              <AvatarFallback className="bg-portfolio-gray text-portfolio-gold text-5xl font-serif">DV</AvatarFallback>
            </Avatar>
            <div className="absolute -z-10 w-full h-full rounded-full bg-portfolio-gold/20 -right-4 -bottom-4"></div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
              <span className="text-portfolio-gold">Divya Vipparla</span>
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Badge className="bg-portfolio-gold/20 text-portfolio-gold hover:bg-portfolio-gold/30 px-3 py-1">
                Full Stack Developer
              </Badge>
            </div>
            <p className="text-lg text-portfolio-white/80 max-w-2xl mb-6">
              I'm a Full Stack Developer with experience in building robust web and mobile applications.
              Currently pursuing my Master's in Computer Science at Pace University, I bring a blend of
              academic knowledge and practical industry experience from my time at Accenture and Glo AI Inc.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section with Tiles */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">

        {/* Tech Stack Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif mb-6 flex items-center">
            <Code className="text-portfolio-gold mr-3" size={24} />
            <span>Tech Stack</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="bg-portfolio-darkgray border border-portfolio-gray/50 hover:border-portfolio-gold transition-all group"
              >
                <CardContent className="p-4 flex items-center justify-center h-full">
                  <span className="text-portfolio-white/90 group-hover:text-portfolio-gold transition-colors text-center">
                    {skill}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
            
        {/* Certifications Section */}
        <div>
          <h2 className="text-2xl font-serif mb-6 flex items-center">
            <Award className="text-portfolio-gold mr-3" size={24} />
            <span>Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-portfolio-black border border-portfolio-gray/50 hover:border-portfolio-gold/50 transition-all duration-300 group"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 flex items-center justify-center bg-portfolio-black rounded-full p-2">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-portfolio-white group-hover:text-portfolio-gold transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-portfolio-white/60 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
