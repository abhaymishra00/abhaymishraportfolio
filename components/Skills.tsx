import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cloud, 
  Workflow, 
  Cpu,
  Zap,
  Layout
} from 'lucide-react';

// Define the structure for our skill nodes
interface SkillNode {
  id: string;
  title: string;
  icon: any;
  x: number; // Percentage (0-100)
  y: number; // Percentage (0-100)
  color: string;
  borderColor: string;
  shadowColor: string;
  skills: string[];
}

const Skills: React.FC = () => {
  // Configuration for the desktop map layout
  const nodes: SkillNode[] = [
    // Left Column
    { 
      id: 'frontend', 
      title: 'Full Stack UI', 
      icon: Layout, 
      x: 15, 
      y: 30, 
      color: 'text-violet-400', 
      borderColor: 'border-violet-500/30', 
      shadowColor: 'shadow-violet-500/20',
      skills: ["React", "Vue.js", "Redux", "Tailwind"]
    },
    { 
      id: 'automation', 
      title: 'Workflow Auto', 
      icon: Workflow, 
      x: 15, 
      y: 70, 
      color: 'text-rose-400', 
      borderColor: 'border-rose-500/30', 
      shadowColor: 'shadow-rose-500/20',
      skills: ["N8N", "Webhooks", "Event-Driven", "Integrations"]
    },
    // Right Column
    { 
      id: 'backend', 
      title: 'Backend Engineering', 
      icon: Server, 
      x: 85, 
      y: 20, 
      color: 'text-emerald-400', 
      borderColor: 'border-emerald-500/30', 
      shadowColor: 'shadow-emerald-500/20',
      skills: ["Node.js", "AdonisJS", "Microservices", "REST API"]
    },
    { 
      id: 'database', 
      title: 'Database Architect', 
      icon: Database, 
      x: 85, 
      y: 50, 
      color: 'text-amber-400', 
      borderColor: 'border-amber-500/30', 
      shadowColor: 'shadow-amber-500/20',
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    { 
      id: 'devops', 
      title: 'Cloud & DevOps', 
      icon: Cloud, 
      x: 85, 
      y: 80, 
      color: 'text-sky-400', 
      borderColor: 'border-sky-500/30', 
      shadowColor: 'shadow-sky-500/20',
      skills: ["AWS", "Docker", "CI/CD", "Linux"]
    }
  ];

  // Helper to calculate SVG Path from Center (50, 50) to a Node (x, y)
  const getPath = (targetX: number, targetY: number) => {
    const startX = 50;
    const startY = 50;
    
    // Control points for a nice S-curve
    const midX = (startX + targetX) / 2;
    
    return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${targetY}, ${targetX} ${targetY}`;
  };

  return (
    <section id="skills" className="py-24 bg-[#0B0F19] relative overflow-hidden scroll-mt-16">
      {/* Circuit Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Architecture</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              A visual breakdown of my core technical strengths and how they connect to build scalable systems.
            </p>
          </motion.div>
        </div>

        {/* --- DESKTOP VIEW: SVG + COORDINATE SYSTEM --- */}
        <div className="hidden lg:block relative w-full h-[600px] bg-[#0d121f]/30 rounded-3xl border border-white/5 shadow-2xl overflow-hidden backdrop-blur-sm">
          
          {/* 1. SVG Layer for Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {nodes.map((node) => (
              <g key={node.id}>
                {/* Background Line */}
                <path 
                  d={getPath(node.x, node.y)} 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  vectorEffect="non-scaling-stroke" // Keeps stroke width constant
                />
                {/* Animated Particle */}
                <path 
                  d={getPath(node.x, node.y)} 
                  stroke="#06b6d4" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="10 100" // Create dashes
                  vectorEffect="non-scaling-stroke"
                >
                  <animate attributeName="stroke-dashoffset" from="110" to="0" dur="3s" repeatCount="indefinite" />
                </path>
              </g>
            ))}
          </svg>

          {/* 2. Central Hub Node (Always at 50, 50) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-48 h-48 rounded-full bg-[#0B0F19] border-4 border-brand-primary/50 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            >
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
              
              <Cpu className="w-12 h-12 text-brand-primary mb-2" />
              <h3 className="text-xl font-display font-bold text-white text-center leading-none">System<br/>Architect</h3>
            </motion.div>
          </div>

          {/* 3. Surrounding Nodes (Positioned by Percentage) */}
          {nodes.map((node) => (
            <div 
              key={node.id}
              className="absolute z-10 w-72"
              style={{ 
                left: `${node.x}%`, 
                top: `${node.y}%`, 
                transform: 'translate(-50%, -50%)' // Centers the div on the coordinate
              }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-5 rounded-xl bg-[#0d121f] border ${node.borderColor} shadow-lg ${node.shadowColor} hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded bg-white/5 ${node.color}`}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{node.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {node.skills.map(s => (
                    <span key={s} className={`px-2 py-1 text-xs bg-black/40 ${node.color.replace('text-', 'text-')} rounded border border-white/10`}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* --- MOBILE VIEW: VERTICAL STACK --- */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="flex items-center justify-center mb-8">
             <div className="w-20 h-20 rounded-full border-2 border-brand-primary flex items-center justify-center bg-brand-primary/10 animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Cpu className="w-10 h-10 text-brand-primary" />
             </div>
             <p className="ml-4 font-bold text-white text-lg">System Architect</p>
          </div>
          
           {nodes.map((node) => (
             <div key={node.id} className={`p-5 rounded-xl bg-[#0d121f] border ${node.borderColor} shadow-lg`}>
                <div className="flex items-center gap-3 mb-3">
                  <node.icon className={`w-5 h-5 ${node.color}`} />
                  <h3 className="text-white font-bold">{node.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {node.skills.map(s => (
                    <span key={s} className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded border border-white/5">{s}</span>
                  ))}
                </div>
             </div>
           ))}
        </div>

        {/* Bottom Tools Strip */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-white/5 text-center">
            <h4 className="text-gray-500 text-sm uppercase tracking-widest mb-6 font-semibold flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-brand-primary" /> Additional Arsenal
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["Firebase", "JMeter", "K6", "Jira", "Figma", "Socket.io", "Git", "Bitbucket", "BuddyWorks", "GCP"].map((tool, i) => (
                <span key={i} className="px-4 py-1.5 text-sm text-gray-400 bg-white/5 border border-white/5 rounded-full hover:text-white hover:border-brand-primary/30 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;