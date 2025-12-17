import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';

// Lazy load heavy components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  // Reduced particles for better performance
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="min-h-screen dark relative overflow-hidden">
      {/* Animated Space Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: particle.id % 3 === 0 
                ? 'rgba(167, 139, 250, 0.6)' 
                : particle.id % 3 === 1
                ? 'rgba(236, 72, 153, 0.6)'
                : 'rgba(196, 181, 253, 0.6)',
              boxShadow: particle.id % 2 === 0 
                ? '0 0 10px rgba(167, 139, 250, 0.8)' 
                : '0 0 10px rgba(236, 72, 153, 0.8)',
            }}
            animate={{
              y: [0, -100, -50, -150, 0],
              x: [0, 50, -30, 40, 0],
              opacity: [0.2, 0.8, 1, 0.6, 0.2],
              scale: [0.8, 1.5, 1, 1.3, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
