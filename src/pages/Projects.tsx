
import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-portfolio-black text-portfolio-white">
      <Header />
      <main>
        <div className="pt-20">
          <Portfolio />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
