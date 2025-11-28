import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
  "React (HackerRank)",
  "Problem Solving (HackerRank)",
  "JavaScript (HackerRank)",
  "CSS (HackerRank)",
  "Google Cloud Essentials",
  "Create and Manage Cloud Resources",
  "Perform Foundational Infrastructure Tasks in GCP"
];

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-brand-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
             <h2 className="text-3xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <Award className="text-brand-accent" /> Certifications
             </h2>
             <p className="text-gray-400">
               Validated expertise across frontend, backend, and cloud infrastructure.
             </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certs.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-brand-card rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-300 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;