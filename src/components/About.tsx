import React from 'react';
import { Code, Compass, Monitor, PenTool } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      icon: <Code size={32} />, 
      name: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks.'
    },
    { 
      icon: <PenTool size={32} />, 
      name: 'UI/UX Design',
      description: 'Creating intuitive and appealing user experiences with clean designs.'
    },
    { 
      icon: <Monitor size={32} />, 
      name: 'Web Technologies',
      description: 'Proficient in HTML, CSS, JavaScript, and various frameworks and libraries.'
    },
    { 
      icon: <Compass size={32} />, 
      name: 'Problem Solving',
      description: 'Analytical approach to solving complex problems with elegant solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            I'm a passionate Frontend Web Developer focused on creating clean, responsive, 
            and user-centric web interfaces. I thrive in transforming concepts into 
            functional websites that provide exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="mb-4 text-gray-800 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;