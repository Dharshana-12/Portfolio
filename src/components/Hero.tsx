import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpeg'; // adjust the path if needed

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <img 
                src={profileImg} 
                alt="Dharshana Kannan"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-lg md:text-xl font-medium mb-2 opacity-80">Hi, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Dharshana Kannan</h1>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">Frontend Web Developer</h3>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-600 max-w-2xl">
                Passionate about crafting interactive and responsive web applications 
                that deliver exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg transition-transform hover:translate-y-[-2px]">
                  View Projects
                  <ArrowRight size={18} className="ml-2" />
                </a>
                
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white border-2 border-black text-black rounded-lg transition-transform hover:translate-y-[-2px]">
                  Contact Me
                </a>

                <a 
                  href="/Dharshana_Kannan_CV.pdf" 
                  download="Dharshana_Kannan_CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 border-2 border-gray-300 text-gray-800 rounded-lg transition-transform hover:translate-y-[-2px]"
                >
                  Download CV
                  <Download size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
