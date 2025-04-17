
import React from 'react';
import Header from '../components/Header';
import { FileText, Download } from 'lucide-react';
import { Separator } from '../components/ui/separator';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div className="min-h-screen bg-portfolio-black text-portfolio-white">
      <Header />
      <main>
        <section className="pt-32 pb-20 max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <h1 className="text-3xl md:text-4xl font-serif flex items-center gap-3 mb-4 md:mb-0">
              <FileText className="text-portfolio-gold" size={28} />
              <span>Resume</span>
            </h1>
            
            <a 
              href="#" 
              className="px-5 py-2 bg-portfolio-gold text-portfolio-black rounded-md flex items-center gap-2 hover:bg-portfolio-gold/90 transition-colors"
              download
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
          
          <div className="bg-portfolio-gray p-6 rounded-lg">
            {/* Resume Content */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-serif mb-4 text-portfolio-gold">Education</h2>
                <Separator className="mb-4 bg-portfolio-gray/30" />
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl">MS in Computer Science</h3>
                    <p className="text-portfolio-gold/80">Pace University, New York</p>
                    <p className="text-sm text-portfolio-white/70">Expected May 2025</p>
                    <p>GPA: 3.93</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl">BE in Electronics and Communication</h3>
                    <p className="text-portfolio-gold/80">Panimalar Engineering College, India</p>
                    <p className="text-sm text-portfolio-white/70">April 2021</p>
                    <p>GPA: 8.88/10</p>
                  </div>
                </div>
              </div>
              
              {/* Experience */}
              <div>
                <h2 className="text-2xl font-serif mb-4 text-portfolio-gold">Professional Experience</h2>
                <Separator className="mb-4 bg-portfolio-gray/30" />
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl">Full Stack Development Intern</h3>
                    <p className="text-portfolio-gold/80">Glo AI Inc., New York</p>
                    <p className="text-sm text-portfolio-white/70">December 2024 - March 2025</p>
                    <ul className="list-disc list-inside mt-2 text-portfolio-white/80 space-y-1">
                      <li>Built full-stack application using Node.js, React Native, Firebase Authentication, and MongoDB</li>
                      <li>Engineered AI-powered recommendation engine using Gemini AI</li>
                      <li>Designed RESTful APIs and streamlined authentication</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl">Custom Software Engineering Analyst</h3>
                    <p className="text-portfolio-gold/80">Accenture, Bengaluru</p>
                    <p className="text-sm text-portfolio-white/70">January 2023 - August 2023</p>
                    <ul className="list-disc list-inside mt-2 text-portfolio-white/80 space-y-1">
                      <li>Administered 12 R&D applications across Windows Server, Azure, and AWS</li>
                      <li>Performed database administration using Toad for Oracle and SQL Server</li>
                      <li>Developed responsive UIs with JavaScript, Knockout.js and jQuery</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl">Application Development Associate</h3>
                    <p className="text-portfolio-gold/80">Accenture, Chennai</p>
                    <p className="text-sm text-portfolio-white/70">August 2021 - December 2022</p>
                    <ul className="list-disc list-inside mt-2 text-portfolio-white/80 space-y-1">
                      <li>Developed full-stack web application using .NET Core and Angular</li>
                      <li>Implemented RESTful APIs with C# and Entity Framework Core</li>
                      <li>Optimized frontend performance, reducing page load times by 45%</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div>
                <h2 className="text-2xl font-serif mb-4 text-portfolio-gold">Technical Skills</h2>
                <Separator className="mb-4 bg-portfolio-gray/30" />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {["JavaScript", "React", "Node.js", "Python", "C#", ".NET", "AWS", "Azure", "MongoDB", "SQL"].map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-portfolio-black border border-portfolio-gold/20 rounded-md p-3 text-center"
                    >
                      <span className="text-portfolio-white">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
