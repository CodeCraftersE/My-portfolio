
import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">.careerPath()</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-16">Professional Experience</h3>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-10 md:pl-20">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 to-transparent"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.6)]"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                  <h4 className="text-2xl font-bold text-white">{exp.company}</h4>
                  <span className="hidden md:block text-gray-600">|</span>
                  <span className="text-teal-400 font-mono font-bold">{exp.role}</span>
                  <span className="md:ml-auto text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-gray-400 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
