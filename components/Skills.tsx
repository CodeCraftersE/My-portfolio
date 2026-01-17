
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black border border-white/20 p-2 rounded-lg shadow-xl">
          <p className="text-teal-400 text-xs font-bold">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">.techStack()</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-16">Technical Expertise</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h4 className="text-2xl font-bold mb-8 text-left border-l-4 border-teal-500 pl-4">
                {category.title}
              </h4>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={category.skills} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <XAxis type="number" hide domain={[0, 100]} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      stroke="#9ca3af" 
                      fontSize={12} 
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                    <Bar dataKey="level" radius={[0, 4, 4, 0]}>
                      {category.skills.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#14b8a6' : '#a855f7'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
