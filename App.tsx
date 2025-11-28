import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Mindset from './components/Mindset';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-100 font-sans selection:bg-brand-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Mindset />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;