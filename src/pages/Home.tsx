
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-portfolio-black text-portfolio-white">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
