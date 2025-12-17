import React, { useState } from 'react';
import { Rocket, Target, Zap, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [hoveredPanel, setHoveredPanel] = useState(null);

  const hologramPanels = [
    {
      id: 'focus',
      icon: Target,
      title: 'Technical Expertise',
      color: 'from-blue-500 to-cyan-500',
      content: 'My tech stack centers around PyTorch for deep learning, NumPy and Pandas for data work, and Scikit-Learn for traditional ML. I use AWS for cloud infrastructure, Docker for containerization, and Git for version control. On the web development side, I work with React, FastAPI, and Streamlit to build interfaces and deploy models as web services.',
      linkTo: 'skills'
    },
    {
      id: 'journey',
      icon: Rocket,
      title: 'Professional Experience',
      color: 'from-purple-500 to-pink-500',
      content: 'I take ML models from concept to production, building complete applications that solve real problems. My projects include computer vision systems for image classification and object detection, MLOps pipelines for automated training and deployment, and full-stack web apps that let users interact with the models through clean interfaces.',
      linkTo: 'projects'
    },
    {
      id: 'current',
      icon: Brain,
      title: 'Academic Trajectory',
      color: 'from-pink-500 to-orange-500',
      content: 'I am a Computer Science student at Cal State San Marcos with a Data Science minor, graduating May 2027. My coursework covers algorithms, data structures, and machine learning fundamentals. Currently exploring reinforcement learning and 2D visualization with Unreal Engine. I learn best through hands-on experience building real projects.',
      linkTo: 'education'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for better positioning
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 gradient-bg text-white px-6 relative overflow-hidden">
      {/* Digital rain effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400 font-mono text-xs"
            style={{
              left: `${(i * 5)}%`,
              top: -20
            }}
            animate={{
              y: ['0vh', '110vh']
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap size={40} className="text-purple-400" />
            </motion.div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Profile
            </h2>
          </div>

          {/* Holographic panels */}
          <div className="grid md:grid-cols-3 gap-6">
            {hologramPanels.map((panel, index) => {
              const Icon = panel.icon;
              const isHovered = hoveredPanel === index;
              
              return (
                <motion.div
                  key={panel.id}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredPanel(index)}
                  onHoverEnd={() => setHoveredPanel(null)}
                  onClick={() => scrollToSection(panel.linkTo)}
                  className="cursor-pointer group"
                >
                  {/* Hologram glow base */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${panel.color.split(' ').join(', ')})`
                    }}
                    animate={{
                      opacity: isHovered ? [0.4, 0.7, 0.4] : [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Main hologram panel */}
                  <div className={`relative bg-gradient-to-br from-gray-900/95 via-purple-900/30 to-gray-900/95 rounded-2xl border-2 ${
                    isHovered ? 'border-purple-400' : 'border-purple-400/30'
                  } p-6 shadow-2xl transition-all duration-300`}>
                    {/* Scan lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden rounded-2xl">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent h-8"
                        animate={{ y: ['-100%', '300%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Corner brackets */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                    {/* Icon with pulsing effect */}
                    <motion.div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${panel.color} mb-4 relative`}
                      animate={{
                        boxShadow: isHovered 
                          ? ['0 0 20px rgba(168, 85, 247, 0.5)', '0 0 40px rgba(168, 85, 247, 0.8)', '0 0 20px rgba(168, 85, 247, 0.5)']
                          : '0 0 20px rgba(168, 85, 247, 0.3)'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon size={32} className="text-white relative z-10" />
                      
                      {/* Icon glow rings */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-white/30"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${panel.color} bg-clip-text text-transparent`}>
                      {panel.title}
                    </h3>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2 mb-4">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-xs text-gray-400 font-mono">ACTIVE</span>
                    </div>

                    {/* Preview text */}
                    <div className="text-sm text-gray-400 min-h-[120px]">
                      {panel.content}
                    </div>

                    {/* Navigate indicator */}
                    <motion.div
                      className="mt-4 text-xs text-cyan-400 flex items-center gap-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span>Navigate to {panel.title}</span>
                      <span>→</span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
