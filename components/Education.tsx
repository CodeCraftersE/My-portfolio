import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const courses = [
    "Data Structures and Algorithms", 
    "Database Management", 
    "Operating Systems", 
    "Artificial Intelligence", 
    "Object-Oriented Programming"
  ];

  return (
    <section id="education" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="shrink-0 p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20">
            <GraduationCap className="text-teal-400" size={40} />
          </div>

          <div>
            <h2 className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">.academicHistory()</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-2">B.Tech in Computer Science and Engineering</h3>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <p className="text-gray-400 text-xl font-medium">University of Engineering and Management, Kolkata</p>
              <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">07/2023 - Present</span>
            </div>
            
            <p className="text-gray-500 mb-8 leading-relaxed">
              Equipped with a solid foundation in core computer science principles, with a focus on engineering large-scale, efficient backend systems and understanding complex architectural patterns.
            </p>

            <div className="flex flex-wrap gap-3">
              {courses.map((course, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all cursor-default">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;