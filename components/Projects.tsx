import React from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects: ProjectItem[] = [
  {
    title: "Mozart App – ShakeDeal",
    category: "Procurement CRM",
    description: "A comprehensive CRM workflow designed to streamline procurement cycles, featuring inquiry capture, RFQ automation, and quote generation.",
    impact: "Achieved 27% improvement in team efficiency.",
    tech: ["Node.js", "Vue.js", "Directus", "N8N", "PostgreSQL"]
  },
  {
    title: "InviIMS",
    category: "Inventory Management System",
    description: "Full-stack application for real-time stock tracking, automated alerts, and supplier management with eCommerce marketplace order sync.",
    impact: "Complete architecture design from database to frontend.",
    tech: ["React", "Node", "Express", "MongoDB"]
  },
  {
    title: "InviCRM",
    category: "CRM Platform",
    description: "Built core CRM modules including GeM tender management and integrations with Google Calendar and Contacts.",
    impact: "Streamlined customer relationship workflows.",
    tech: ["Laravel", "Vue.js", "MySQL"]
  },
  {
    title: "ScienceXplorers Portal",
    category: "EdTech Platform",
    description: "Student management system featuring enrollment, classes, assignments, analytics dashboards, and automated weekly parent reports.",
    impact: "Automated reporting saved hours of manual work weekly.",
    tech: ["Node", "React", "Redux", "MongoDB", "Azure", "Docker"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-brand-dark scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Key Projects</h2>
          <div className="h-1 w-20 bg-brand-primary rounded mx-auto md:mx-0"></div>
          <p className="mt-4 text-gray-400 max-w-2xl">
            A selection of complex systems and applications engineered for performance and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col">
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div className="flex gap-2">
                    <Github className="h-5 w-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink className="h-5 w-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <span className="text-xs font-semibold tracking-wider text-brand-accent uppercase mb-4 block">{project.category}</span>
                
                <p className="text-gray-400 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">Impact: {project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-[#0B0F19] text-gray-300 rounded-full border border-white/10">
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

export default Projects;