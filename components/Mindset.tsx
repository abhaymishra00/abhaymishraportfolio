import React from 'react';
import { Rocket, Target, Users, Zap, Briefcase, Globe } from 'lucide-react';

const Mindset: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-card to-[#0d121f] border-y border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mindset Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-brand-primary/10 mb-4">
            <Rocket className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Entrepreneurial <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Engineering Mindset</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I don't just write code. I build systems that solve real business problems, reduce costs, and scale operations.
          </p>
        </div>

        {/* Mindset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
          <div className="p-8 rounded-2xl bg-[#0B0F19]/50 border border-white/10 hover:border-brand-primary/50 transition-colors">
            <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Product-First Thinking</h3>
            <p className="text-gray-400">
              Converting vague business requirements into scalable, engineered solutions. I focus on the "why" before the "how".
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0B0F19]/50 border border-white/10 hover:border-brand-primary/50 transition-colors">
             <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Solution Oriented</h3>
            <p className="text-gray-400">
              Passion for launching internal tools and automations that eliminate bottlenecks. I build to enable growth.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0B0F19]/50 border border-white/10 hover:border-brand-primary/50 transition-colors">
             <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Leadership & Mentorship</h3>
            <p className="text-gray-400">
              Experience mentoring engineers and leading technical execution. Building great software requires building great teams.
            </p>
          </div>
        </div>

        {/* Goals & Collaboration Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Startup Consulting */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-[#0B0F19] to-brand-card border border-white/10 overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Briefcase className="text-brand-primary" /> 
                Fractional CTO & Tech Setup
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I help startups navigate early-stage technical chaos. Whether it's setting up the initial architecture, establishing CI/CD pipelines, or mentoring the founding engineering team, I provide the technical foundation businesses need to scale.
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-brand-primary/10 text-brand-primary font-medium border border-brand-primary/20">
                Open for Advisory Roles
              </div>
            </div>
          </div>

          {/* Google Goal */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-[#0B0F19] border border-blue-500/20 overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe className="text-blue-400" /> 
                My North Star: Google
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I am driven by the ambition to contribute to world-scale engineering at Google. I am actively upskilling and aiming for an opportunity to step into the Google office, ready to bring my backend expertise and system design skills to the ecosystem.
              </p>
               <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 font-medium border border-blue-500/20">
                Targeting Google Engineering Roles
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Mindset;