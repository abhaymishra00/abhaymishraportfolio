import React from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0B0F19] relative overflow-hidden scroll-mt-16">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's Build Something <br className="hidden md:block" />Meaningful Together</h2>
          <p className="text-xl text-gray-400">Open for opportunities to engineer the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <a href="mailto:abhaymishra.developer@gmail.com" className="flex items-center gap-4 p-6 bg-brand-card rounded-xl border border-white/5 hover:border-brand-primary/30 transition-all group">
              <div className="p-4 bg-brand-primary/10 rounded-lg text-brand-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-medium text-white">abhaymishra.developer@gmail.com</p>
              </div>
            </a>

             <a href="tel:+918792040344" className="flex items-center gap-4 p-6 bg-brand-card rounded-xl border border-white/5 hover:border-brand-primary/30 transition-all group">
              <div className="p-4 bg-brand-primary/10 rounded-lg text-brand-primary group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg font-medium text-white">+91 87920 40344</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/abhaymishra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-brand-card rounded-xl border border-white/5 hover:border-brand-primary/30 transition-all group">
              <div className="p-4 bg-brand-primary/10 rounded-lg text-brand-primary group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="text-lg font-medium text-white">linkedin.com/in/abhaymishra</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="bg-brand-card p-8 rounded-2xl border border-white/5 shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="Project Opportunity" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-accent text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;