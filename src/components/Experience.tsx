import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description
}) => {
  return (
    <div className="mb-8 relative">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-black"></div>
      
      {/* Content */}
      <div className="ml-8 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-lg font-medium text-gray-700 mb-3">{company}</h4>
        
        <div className="flex flex-wrap text-gray-600 mb-4">
          <div className="inline-flex items-center mr-6 mb-2">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div>
          <div className="inline-flex items-center mb-2">
            <Calendar size={16} className="mr-1" />
            <span>{period}</span>
          </div>
        </div>
        
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Inplant Training in Web Development",
      company: "Speculation Info Tech",
      location: "Trichy",
      period: "03.07.2024 – 24.07.2024",
      description: [
        "Received hands-on training in web technologies",
        "Gained real-world project exposure",
        "Collaborated with team members on development tasks",
        "Participated in code reviews and feedback sessions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gray-300"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;