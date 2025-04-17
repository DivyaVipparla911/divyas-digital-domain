
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the form data to your server
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show a success message
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-portfolio-gold" size={20} />,
      label: "Location",
      value: "Jersey City, NJ"
    },
    {
      icon: <Phone className="text-portfolio-gold" size={20} />,
      label: "Phone",
      value: "973-981-9896"
    },
    {
      icon: <Mail className="text-portfolio-gold" size={20} />,
      label: "Email",
      value: "divya.vipparla@pace.edu"
    }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-portfolio-gray p-6 rounded-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-portfolio-black p-3 text-portfolio-white border border-portfolio-gray/30 rounded-md focus:border-portfolio-gold focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-portfolio-black p-3 text-portfolio-white border border-portfolio-gray/30 rounded-md focus:border-portfolio-gold focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-portfolio-black p-3 text-portfolio-white border border-portfolio-gray/30 rounded-md focus:border-portfolio-gold focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="px-6 py-3 bg-portfolio-gold text-portfolio-black font-medium flex items-center justify-center rounded-md hover:bg-portfolio-gold/90 transition-colors"
            >
              Send Message <Send size={16} className="ml-2" />
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div>
          <div className="mb-6">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="p-2 bg-portfolio-gray/50 rounded-md mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-portfolio-white/70 text-sm">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/divya-vipparla-7aab4518a/" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-portfolio-gray/50 rounded-md hover:bg-portfolio-gold/20 transition-colors">
                <Linkedin className="w-5 h-5 text-portfolio-gold" />
              </a>
              <a href="https://github.com/Divyavipparla911" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-portfolio-gray/50 rounded-md hover:bg-portfolio-gold/20 transition-colors">
                <Github className="w-5 h-5 text-portfolio-gold" />
              </a>
              <a href="mailto:divya.vipparla@pace.edu" 
                className="p-3 bg-portfolio-gray/50 rounded-md hover:bg-portfolio-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-portfolio-gold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
