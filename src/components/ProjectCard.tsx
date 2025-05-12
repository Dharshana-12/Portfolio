import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <span className="inline-block px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full mr-2 mb-2 hover:bg-gray-300 transition-colors duration-300">
      {name}
    </span>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  imageUrl,
  demoUrl,
  sourceUrl
}) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
        
        <div className="mb-4">
          {techStack.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
        
        <div className="flex space-x-4">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          
          {sourceUrl && (
            <a 
              href={sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300"
            >
              <Github size={16} className="mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;