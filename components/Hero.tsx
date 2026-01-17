
import React from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-teal-400 text-sm font-mono tracking-widest animate-pulse uppercase">
            &lt; Ready to engineer /&gt;
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold font-poppins mb-6 tracking-tight">
          {PERSONAL_INFO.name}
        </h1>

        <h2 className="text-xl md:text-3xl text-gray-400 font-mono mb-8 max-w-3xl mx-auto">
          Aspiring <span className="text-teal-400">Java</span> Engineer |
          <span className="text-purple-400"> Backend</span> Developer |
          <span className="text-blue-400"> Java EE</span>
        </h2>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-black px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
          >
            <FileText size={20} />
            Preview Resume
          </a>

          <a
            href="/resume.pdf"
            download="Sayantan_Das_Resume.pdf"
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
          >
            <FileText size={20} />
            Download Resume
          </a>

          <div className="flex gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Github size={24} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
