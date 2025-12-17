import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white px-6 py-20 relative overflow-hidden gradient-bg">
      <div className="relative z-10 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Evan Petersen
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-200">
            Machine Learning Engineer & Software Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Specializing in production ML systems and cloud deployment. 
            Building scalable AI solutions from research to production.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-600 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              View Projects
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-400 hover:border-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/evanpetersen919" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/evan-petersen-b93037386/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:evanpetersen919@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
