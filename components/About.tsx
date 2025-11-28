import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, TrendingUp, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              The Developer with a <span className="text-brand-primary">Founder's Mindset</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                I am a Full-Stack Developer with <strong>5+ years</strong> of hands-on experience architecting scalable digital solutions. My expertise isn't just in writing clean code—it's in building engines that drive business growth.
              </p>
              <p>
                From <strong>Node.js, React, and Laravel</strong> to deploying complex microservices on <strong>AWS</strong>, I specialize in the entire product lifecycle. I've built CRMs, inventory systems, and procurement platforms that don't just "work" but actively optimize efficiency.
              </p>
              <p>
                Beyond the terminal, I lead teams, mentor juniors, and approach every technical challenge with a product-first mentality. I build to solve problems, not just to ship features.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-brand-card p-6 rounded-xl border border-white/5 hover:border-brand-primary/50 transition-colors group">
              <Terminal className="h-8 w-8 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Full-Stack Architect</h3>
              <p className="text-gray-400 text-sm">Expert in Node, Laravel, React, and DB architecture.</p>
            </div>
            <div className="bg-brand-card p-6 rounded-xl border border-white/5 hover:border-brand-primary/50 transition-colors group">
              <Users className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Technical Leader</h3>
              <p className="text-gray-400 text-sm">Mentoring teams & managing agile project lifecycles.</p>
            </div>
            <div className="bg-brand-card p-6 rounded-xl border border-white/5 hover:border-brand-primary/50 transition-colors group">
              <TrendingUp className="h-8 w-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Systems Scalability</h3>
              <p className="text-gray-400 text-sm">Optimizing performance for high-traffic environments.</p>
            </div>
            <div className="bg-brand-card p-6 rounded-xl border border-white/5 hover:border-brand-primary/50 transition-colors group">
              <Lightbulb className="h-8 w-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2">Product Vision</h3>
              <p className="text-gray-400 text-sm">Solving real business problems with engineered products.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;