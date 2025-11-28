import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Server, Database, Cloud, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="text-brand-primary font-medium text-sm tracking-wide uppercase">Senior Software Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
          >
            <span className="block text-white">Abhay Mishra</span>
            <span className="text-gradient hidden md:inline">System Architect & <br className="hidden md:block"/>Automation Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build scalable systems, automate complex workflows, and help businesses run smarter through engineering excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-primary rounded-lg overflow-hidden transition-all hover:bg-brand-accent shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] w-full sm:w-auto"
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Tech Stack Strip */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="mt-24 pt-10 border-t border-white/5"
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-10 font-medium">Powering Systems With</p>
            <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-10">
              <div className="flex flex-col items-center gap-3 group min-w-[80px]">
                <div className="p-4 bg-white/5 rounded-xl group-hover:bg-brand-primary/20 transition-colors border border-white/5 group-hover:border-brand-primary/30">
                  <Server className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-3 group min-w-[80px]">
                 <div className="p-4 bg-white/5 rounded-xl group-hover:bg-brand-primary/20 transition-colors border border-white/5 group-hover:border-brand-primary/30">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">React</span>
              </div>
              <div className="flex flex-col items-center gap-3 group min-w-[80px]">
                <div className="p-4 bg-white/5 rounded-xl group-hover:bg-brand-primary/20 transition-colors border border-white/5 group-hover:border-brand-primary/30">
                  <Database className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-3 group min-w-[80px]">
                 <div className="p-4 bg-white/5 rounded-xl group-hover:bg-brand-primary/20 transition-colors border border-white/5 group-hover:border-brand-primary/30">
                  <Cloud className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">AWS</span>
              </div>
               <div className="flex flex-col items-center gap-3 group min-w-[80px]">
                 <div className="p-4 bg-white/5 rounded-xl group-hover:bg-brand-primary/20 transition-colors border border-white/5 group-hover:border-brand-primary/30">
                  <span className="w-6 h-6 flex items-center justify-center font-bold text-red-500 text-lg">L</span>
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Laravel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;