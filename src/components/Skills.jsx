import React, { useState } from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const allSkills = [
    // Programming Languages
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Programming', featured: true },
    { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', category: 'Programming' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', category: 'Programming' },
    { name: 'SQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', category: 'Programming' },
    { name: 'HTML/CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', category: 'Programming' },
    // ML/AI Frameworks
    { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg', category: 'ML/AI', featured: true },
    { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', category: 'ML/AI' },
    { name: 'Scikit-Learn', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg', category: 'ML/AI' },
    // Data Science
    { name: 'NumPy', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg', category: 'Data Science' },
    { name: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg', category: 'Data Science' },
    { name: 'Matplotlib', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg', category: 'Data Science' },
    // Cloud & DevOps
    { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'Cloud & DevOps', featured: true },
    { name: 'Google Cloud', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg', category: 'Cloud & DevOps' },
    { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'Cloud & DevOps', featured: true },
    { name: 'MLFlow', icon: 'https://avatars.githubusercontent.com/u/39938107?s=200&v=4', category: 'Cloud & DevOps' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', category: 'Cloud & DevOps' },
    // Web Development
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Web Dev', featured: true },
    { name: 'FastAPI', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', category: 'Web Dev' },
    { name: 'Streamlit', icon: 'https://streamlit.io/images/brand/streamlit-mark-color.svg', category: 'Web Dev' },
    { name: 'Flask', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg', category: 'Web Dev' },
    { name: 'Jupyter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg', category: 'Web Dev' },
    { name: 'VS Code', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg', category: 'Web Dev' }
  ];

  const categories = ['All', 'Programming', 'ML/AI', 'Data Science', 'Cloud & DevOps', 'Web Dev'];
  
  const filteredSkills = activeFilter === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeFilter);

  // Calculate orbital radius for each planet
  const getOrbitRadius = (index, total) => {
    const minRadius = 120;
    const maxRadius = 280;
    const orbitLayers = Math.ceil(Math.sqrt(total));
    const planetsPerLayer = Math.ceil(total / orbitLayers);
    const currentLayer = Math.floor(index / planetsPerLayer);
    const radiusStep = (maxRadius - minRadius) / Math.max(orbitLayers - 1, 1);
    return minRadius + (currentLayer * radiusStep);
  };

  // Get cluster position when "All" is selected - group by category in rotating positions
  const getClusterPosition = (category, indexInCategory, totalInCategory, angle = 0) => {
    const clusterCenters = {
      'Programming': { radius: 170, baseAngle: 0 },      // Right
      'ML/AI': { radius: 170, baseAngle: 72 },           // Top-right
      'Data Science': { radius: 170, baseAngle: 144 },   // Top-left
      'Cloud & DevOps': { radius: 170, baseAngle: 216 }, // Bottom-left
      'Web Dev': { radius: 170, baseAngle: 288 }         // Bottom-right
    };
    
    const cluster = clusterCenters[category] || { radius: 170, baseAngle: 0 };
    
    // Position cluster center in orbit
    const clusterX = Math.cos((cluster.baseAngle + angle) * Math.PI / 180) * cluster.radius;
    const clusterY = Math.sin((cluster.baseAngle + angle) * Math.PI / 180) * cluster.radius;
    
    // Position planet within cluster
    const planetAngle = (indexInCategory / totalInCategory) * Math.PI * 2;
    const planetRadius = 35 + (indexInCategory % 2) * 18;
    
    return {
      x: clusterX + Math.cos(planetAngle) * planetRadius,
      y: clusterY + Math.sin(planetAngle) * planetRadius
    };
  };

  // Get planet colors based on category
  const getPlanetColor = (category) => {
    const colors = {
      'Programming': ['#3b82f6', '#2563eb', '#1d4ed8'],       // Blue tones
      'ML/AI': ['#8b5cf6', '#7c3aed', '#6d28d9'],            // Purple tones
      'Data Science': ['#14b8a6', '#0d9488', '#0f766e'],     // Teal tones
      'Cloud & DevOps': ['#ec4899', '#db2777', '#be185d'],   // Pink tones
      'Web Dev': ['#f59e0b', '#d97706', '#b45309']           // Orange tones
    };
    return colors[category] || ['#6366f1', '#4f46e5', '#4338ca'];
  };

  return (
    <section ref={ref} id="skills" className="py-20 gradient-bg text-white px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Code2 size={32} className="text-purple-400" />
            </motion.div>
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={24} className="text-pink-400" />
            </motion.div>
          </div>
          
          <p className="text-center text-gray-400 mb-12">Hover to explore</p>

          {/* Category tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full border backdrop-blur-sm transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white'
                    : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60'
                }`}
              >
                <span className="text-sm font-semibold">{cat}</span>
              </motion.button>
            ))}
          </div>

          {/* Solar System - Planet themed skills */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[700px] max-w-7xl mx-auto"
            >
              {/* Central Sun (represents you/your core) */}
              <motion.div
                className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 z-20"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: 360
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                {/* Sun glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 blur-2xl opacity-60" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 blur-xl opacity-80" />
                
                {/* Sun core */}
                <motion.div 
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-200 via-orange-300 to-pink-400 shadow-2xl flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 60px rgba(251, 191, 36, 0.8)',
                      '0 0 80px rgba(251, 146, 60, 0.9)',
                      '0 0 60px rgba(251, 191, 36, 0.8)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code2 size={48} className="text-orange-900" />
                </motion.div>
              </motion.div>

              {/* Orbital paths */}
              {filteredSkills.map((_, index) => {
                const orbit = getOrbitRadius(index, filteredSkills.length);
                return (
                  <motion.div
                    key={`orbit-${index}`}
                    className="absolute left-1/2 top-1/2 border border-purple-500/20 rounded-full pointer-events-none"
                    style={{
                      width: orbit * 2,
                      height: orbit * 2,
                      marginLeft: -orbit,
                      marginTop: -orbit
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  />
                );
              })}

              {/* Planet skills */}
              {filteredSkills.map((skill, index) => {
                const isFeatured = skill.featured;
                const planetSize = isFeatured ? 90 : 65;
                
                // Determine positioning based on filter
                let positions, orbitSpeed;
                if (activeFilter === 'All') {
                  // Cluster by category but rotate around sun
                  const categorySkills = allSkills.filter(s => s.category === skill.category);
                  const indexInCategory = categorySkills.findIndex(s => s.name === skill.name);
                  orbitSpeed = 25; // All clusters orbit together
                  
                  // Calculate positions at 4 points in orbit (90 degree intervals)
                  positions = {
                    x: [],
                    y: []
                  };
                  
                  for (let angle = 0; angle < 360; angle += 90) {
                    const pos = getClusterPosition(skill.category, indexInCategory, categorySkills.length, angle);
                    positions.x.push(pos.x - planetSize/2);
                    positions.y.push(pos.y - planetSize/2);
                  }
                  
                  // Close the loop
                  const firstPos = getClusterPosition(skill.category, indexInCategory, categorySkills.length, 0);
                  positions.x.push(firstPos.x - planetSize/2);
                  positions.y.push(firstPos.y - planetSize/2);
                } else {
                  // Traditional orbital pattern
                  const orbitRadius = getOrbitRadius(index, filteredSkills.length);
                  const startAngle = (index / filteredSkills.length) * 360;
                  orbitSpeed = 20 + (index * 2);
                  
                  positions = {
                    x: [
                      Math.cos(startAngle * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.cos((startAngle + 90) * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.cos((startAngle + 180) * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.cos((startAngle + 270) * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.cos(startAngle * Math.PI / 180) * orbitRadius - planetSize/2,
                    ],
                    y: [
                      Math.sin(startAngle * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.sin((startAngle + 90) * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.sin((startAngle + 180) * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.sin((startAngle + 270) * Math.PI / 180) * orbitRadius - planetSize/2,
                      Math.sin(startAngle * Math.PI / 180) * orbitRadius - planetSize/2,
                    ]
                  };
                }
                
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute left-1/2 top-1/2 cursor-pointer z-10"
                    style={{
                      width: planetSize,
                      height: planetSize,
                    }}
                    initial={{ 
                      x: positions.x[0],
                      y: positions.y[0],
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{ 
                      x: positions.x,
                      y: positions.y,
                      opacity: 1,
                      scale: 1
                    }}
                    transition={{
                      x: { duration: orbitSpeed, repeat: Infinity, ease: "linear" },
                      y: { duration: orbitSpeed, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 0.5, delay: index * 0.1 },
                      scale: { duration: 0.5, delay: index * 0.1, type: "spring" }
                    }}
                    whileHover={{ scale: 1.3, zIndex: 30 }}
                    onClick={() => setSelectedPlanet(selectedPlanet === skill.name ? null : skill.name)}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {/* Planet atmosphere glow */}
                    <motion.div 
                      className="absolute inset-0 rounded-full blur-xl opacity-50"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${getPlanetColor(skill.category)[0]}, ${getPlanetColor(skill.category)[1]})`
                      }}
                      animate={{
                        scale: hoveredSkill === skill.name ? [1, 1.4, 1] : 1,
                        opacity: hoveredSkill === skill.name ? [0.5, 0.8, 0.5] : 0.5
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Planet surface */}
                    <div
                      className="absolute inset-2 rounded-full shadow-2xl overflow-hidden"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${getPlanetColor(skill.category)[0]}, ${getPlanetColor(skill.category)[1]}, ${getPlanetColor(skill.category)[2]})`
                      }}
                    >
                      {/* Planet craters/details */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(isFeatured ? 6 : 4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full bg-black/30"
                            style={{
                              width: `${10 + Math.random() * 15}px`,
                              height: `${10 + Math.random() * 15}px`,
                              left: `${Math.random() * 80}%`,
                              top: `${Math.random() * 80}%`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Light reflection */}
                      <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/40 blur-md" />
                    </div>

                    {/* Icon on planet surface */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <motion.div 
                        className={`rounded-full bg-white/95 shadow-xl flex items-center justify-center ${
                          isFeatured ? 'w-14 h-14 p-2.5' : 'w-10 h-10 p-2'
                        }`}
                        animate={{ 
                          rotate: selectedPlanet === skill.name ? 360 : 0,
                          scale: selectedPlanet === skill.name ? 1.1 : 1
                        }}
                        transition={{ 
                          rotate: { duration: 1, type: "spring" },
                          scale: { duration: 0.3 }
                        }}
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </div>

                    {/* Orbiting moons for featured skills */}
                    {isFeatured && (
                      <>
                        {[0, 1].map((moonIndex) => (
                          <motion.div
                            key={`moon-${moonIndex}`}
                            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                            animate={{
                              x: [
                                Math.cos((moonIndex * 180) * Math.PI / 180) * 40,
                                Math.cos((moonIndex * 180 + 90) * Math.PI / 180) * 40,
                                Math.cos((moonIndex * 180 + 180) * Math.PI / 180) * 40,
                                Math.cos((moonIndex * 180 + 270) * Math.PI / 180) * 40,
                                Math.cos((moonIndex * 180) * Math.PI / 180) * 40,
                              ],
                              y: [
                                Math.sin((moonIndex * 180) * Math.PI / 180) * 40,
                                Math.sin((moonIndex * 180 + 90) * Math.PI / 180) * 40,
                                Math.sin((moonIndex * 180 + 180) * Math.PI / 180) * 40,
                                Math.sin((moonIndex * 180 + 270) * Math.PI / 180) * 40,
                                Math.sin((moonIndex * 180) * Math.PI / 180) * 40,
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                              delay: moonIndex * 1.5
                            }}
                          />
                        ))}
                      </>
                    )}

                    {/* Asteroid belt particles */}
                    {index % 3 === 0 && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={`asteroid-${i}`}
                            className="absolute w-1 h-1 rounded-full bg-gray-400 opacity-60"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                            animate={{
                              x: [
                                Math.cos((i * 45) * Math.PI / 180) * 60,
                                Math.cos((i * 45 + 45) * Math.PI / 180) * 60,
                                Math.cos((i * 45 + 90) * Math.PI / 180) * 60,
                                Math.cos((i * 45 + 135) * Math.PI / 180) * 60,
                                Math.cos((i * 45 + 180) * Math.PI / 180) * 60,
                                Math.cos((i * 45 + 225) * Math.PI / 180) * 60,
                                Math.cos((i * 45 + 270) * Math.PI / 180) * 60,
                                Math.cos((i * 45 + 315) * Math.PI / 180) * 60,
                                Math.cos((i * 45) * Math.PI / 180) * 60,
                              ],
                              y: [
                                Math.sin((i * 45) * Math.PI / 180) * 60,
                                Math.sin((i * 45 + 45) * Math.PI / 180) * 60,
                                Math.sin((i * 45 + 90) * Math.PI / 180) * 60,
                                Math.sin((i * 45 + 135) * Math.PI / 180) * 60,
                                Math.sin((i * 45 + 180) * Math.PI / 180) * 60,
                                Math.sin((i * 45 + 225) * Math.PI / 180) * 60,
                                Math.sin((i * 45 + 270) * Math.PI / 180) * 60,
                                Math.sin((i * 45 + 315) * Math.PI / 180) * 60,
                                Math.sin((i * 45) * Math.PI / 180) * 60,
                              ]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.15
                            }}
                          />
                        ))}
                      </>
                    )}

                    {/* Planet name label */}
                    <AnimatePresence>
                      {(hoveredSkill === skill.name || selectedPlanet === skill.name) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        >
                          <div className="bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/40 shadow-xl">
                            <span className="text-sm font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* Shooting stars occasionally */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 40}%`,
                  }}
                  animate={{
                    x: [0, 200],
                    y: [0, 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 8 + i * 3,
                    ease: "easeOut"
                  }}
                >
                  <div className="absolute inset-0 w-20 h-0.5 bg-gradient-to-r from-white to-transparent -rotate-45 blur-sm" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;