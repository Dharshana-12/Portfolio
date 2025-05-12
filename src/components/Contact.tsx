import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, link }) => {
  const content = (
    <div className="flex items-start">
      <div className="text-black mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
        <p className="text-lg">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
      {content}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to contact me for any questions or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ContactItem 
            icon={<Phone size={24} />}
            title="Phone"
            value="9345845565"
            link="tel:9345845565"
          />
          
          <ContactItem 
            icon={<Mail size={24} />}
            title="Email"
            value="dharshanakannan1305@gmail.com"
            link="mailto:dharshanakannan1305@gmail.com"
          />
          
          <ContactItem 
            icon={<Linkedin size={24} />}
            title="LinkedIn"
            value="dharshana-kannan-dk"
            link="https://www.linkedin.com/in/dharshana-kannan-dk"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;