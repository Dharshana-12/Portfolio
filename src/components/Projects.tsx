import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "MCQ Virtual Gaming",
      description: "An interactive quiz-based platform that gamifies learning using MCQs across topics, offering instant feedback and real-time scoring.",
      techStack: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://images.pexels.com/photos/4790254/pexels-photo-4790254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      demoUrl: "#",
      sourceUrl: "#"
    },
    {
      title: "AI-Integrated E-commerce Site",
      description: "A smart e-commerce platform with AI-driven recommendations, chatbot support, and adaptive design for a personalized shopping experience.",
      techStack: ["React", "JavaScript", "AI API"],
      imageUrl: "https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      demoUrl: "#",
      sourceUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some projects I've worked on that showcase my skills and approach to problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;