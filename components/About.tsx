
import React from 'react';
import { Database, Cpu, Code2, Globe } from 'lucide-react';

const About: React.FC = () => {
  const coreFoundations = [
    { icon: <Code2 size={24} />, title: "OOP", text: "Object-Oriented Programming principles are at the core of my development philosophy." },
    { icon: <Database size={24} />, title: "DBMS", text: "Proficient in designing and managing structured relational databases." },
    { icon: <Cpu size={24} />, title: "DSA", text: "Strong foundation in algorithms to solve complex computational problems efficiently." },
    { icon: <Globe size={24} />, title: "OS", text: "Deep understanding of system architectures and operating system mechanics." }
  ];

  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">.about(me)</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-6">Building scalable solutions from Kolkata, India.</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I am a B.Tech CSE student at the Institute of Engineering and Management, Kolkata, driven by a passion for backend engineering. My journey is rooted in a robust academic background combined with real-world freelance experience.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in Java-based technologies, where I focus on crafting clean, maintainable code for complex web applications. My freelance work has taught me the value of user experience and technical reliability in high-stakes environments.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreFoundations.map((item, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/50 transition-colors group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
