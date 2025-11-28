import React from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    company: "ShakeDeal",
    role: "Senior Software Engineer",
    period: "2024 – Present",
    description: [
      "Designed scalable backend services using Node.js (AdonisJS) + PostgreSQL.",
      "Architected database schemas and optimized performance-heavy SQL queries, improving backend performance by 20%.",
      "Built and maintained CI/CD pipelines using GitHub Actions and BuddyWorks.",
      "Worked with AWS (EC2, S3, Lambda, Elastic IP) for scalable infrastructure.",
      "Implemented role-based authentication and payment gateway integrations."
    ],
    tech: ["Node.js", "AdonisJS", "PostgreSQL", "AWS", "CI/CD"]
  },
  {
    company: "Inevitable Infotech",
    role: "Senior Developer",
    period: "2022 – 2024",
    description: [
      "Led full-stack development using Laravel, VueJS, NodeJS, and ReactJS.",
      "Migrated monolithic systems to microservices for better scalability.",
      "Enhanced MySQL & MongoDB performance significantly.",
      "Integrated Google APIs for CRM & eCommerce workflows."
    ],
    tech: ["Laravel", "Vue.js", "Microservices", "MongoDB"]
  },
  {
    company: "GrowUpNext",
    role: "Senior Web Developer",
    period: "2020 – 2022",
    description: [
      "Developed responsive applications using React + Node.",
      "Improved frontend performance by 20% across major projects.",
      "Automated deployments using Jenkins and GitHub Actions.",
      "Ensured OWASP-based security compliance."
    ],
    tech: ["React", "Node.js", "Jenkins", "Security"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0d121f] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-brand-primary rounded"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Dot on timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0d121f] bg-brand-card text-brand-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-card p-6 md:p-8 rounded-xl border border-white/5 hover:border-brand-primary/30 transition-all shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                    <h4 className="text-brand-primary font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="mr-2 text-brand-primary mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech?.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded border border-brand-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;