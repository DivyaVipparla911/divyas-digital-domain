
import React from 'react';
import Header from '../components/Header';
import ContactContent from '../components/Contact';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-portfolio-black text-portfolio-white">
      <Header />
      <main>
        <div className="pt-20">
          <ContactContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
