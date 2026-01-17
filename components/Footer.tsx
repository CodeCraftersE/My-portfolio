import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#070707]">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <div className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <Github size={20} />
            </div>
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <div className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <Linkedin size={20} />
            </div>
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 hover:text-white transition-colors">
            <div className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <Mail size={20} />
            </div>
          </a>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-2 text-gray-500 text-sm">
          Built with <Heart size={14} className="text-teal-500 fill-teal-500" /> by {PERSONAL_INFO.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;