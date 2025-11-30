import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 -mt-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-50 text-unity-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-unity-blue group-hover:text-white transition-colors">
                <stat.icon size={28} />
              </div>
              <h3 className="text-4xl font-black text-slate-800 mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;