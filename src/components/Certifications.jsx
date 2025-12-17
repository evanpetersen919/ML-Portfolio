import React from 'react';
import { Award, ExternalLink, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      logo: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      verifyLink: 'https://www.credly.com/badges/38f1d71a-07dd-4352-8ba5-d40a4c0d4720/linked_in_profile',
      color: 'from-orange-500 to-yellow-500',
      id: 'SAT-01'
    },
    {
      name: 'PyTorch for Deep Learning',
      issuer: 'DeepLearning.AI',
      logo: new URL('/deeplearning-logo.png', import.meta.url).href,
      verifyLink: 'https://www.coursera.org/account/accomplishments/specialization/6K9J3DGYXZWJ',
      color: 'from-red-500 to-orange-500',
      id: 'SAT-02'
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      logo: new URL('/deeplearning-logo.png', import.meta.url).href,
      verifyLink: 'https://www.coursera.org/account/accomplishments/specialization/X1PG4CF54FK7',
      color: 'from-blue-500 to-cyan-500',
      id: 'SAT-03'
    },
    {
      name: 'Machine Learning In Production',
      issuer: 'DeepLearning.AI',
      logo: new URL('/deeplearning-logo.png', import.meta.url).href,
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/LZOEYFHVLI3P',
      color: 'from-purple-500 to-pink-500',
      id: 'SAT-04'
    }
  ];

  return (
    <section className="py-20 pb-32 gradient-bg text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Radio size={32} className="text-purple-400" />
            <h2 className="text-4xl font-bold">Certifications & Credentials</h2>
          </div>

          {/* Satellite Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group"
              >
                {/* Satellite */}
                <div className="relative">
                  
                  {/* Main satellite chassis */}
                  <div className="relative">
                    {/* Energy field glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur-3xl rounded-xl transition-all duration-700`}
                    />
                    
                    {/* Solar panels - left wing */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[4.5rem] w-20 h-40">
                      <div className={`w-full h-full bg-gradient-to-br ${cert.color} opacity-40 border-2 border-gray-600 rounded-lg relative overflow-hidden`}>
                        {/* Panel cells */}
                        <div className="grid grid-cols-4 grid-rows-6 gap-[2px] h-full p-1">
                          {[...Array(24)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gray-900/60 border border-gray-700"
                            />
                          ))}
                        </div>
                        {/* Energy sweep */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 6, repeat: Infinity, repeatDelay: 5 }}
                        />
                      </div>
                    </div>
                    
                    {/* Solar panels - right wing */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[4.5rem] w-20 h-40">
                      <div className={`w-full h-full bg-gradient-to-bl ${cert.color} opacity-40 border-2 border-gray-600 rounded-lg relative overflow-hidden`}>
                        {/* Panel cells */}
                        <div className="grid grid-cols-4 grid-rows-6 gap-[2px] h-full p-1">
                          {[...Array(24)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gray-900/60 border border-gray-700"
                            />
                          ))}
                        </div>
                        {/* Energy sweep */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent opacity-20"
                          animate={{ x: ["200%", "-100%"] }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </div>
                    </div>
                    
                    {/* Main body with 3D effect */}
                    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl border-2 border-gray-600 p-6 shadow-2xl overflow-hidden backdrop-blur-sm">
                      {/* Metallic shine */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent"
                        animate={{ opacity: [0.05, 0.1, 0.05] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      

                      
                      {/* Status panel */}
                      <div className="relative flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50">
                        <div className="flex items-center gap-3">
                          <div className="text-xs font-mono text-cyan-400 tracking-wider">{cert.id}</div>
                          <motion.div
                            className="w-2 h-2 rounded-full bg-green-400"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                        <div className="flex gap-0.5">
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              className={`w-1 rounded-full bg-gradient-to-t ${cert.color}`}
                              style={{ height: `${6 + i * 3}px` }}
                              animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Certificate info */}
                      <div className="relative flex items-start gap-4 mb-5">
                        <div className="relative">
                          <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${cert.color} opacity-20 rounded-xl blur-sm absolute inset-0`} />
                          <div className="relative w-16 h-16 flex items-center justify-center bg-gray-900/80 backdrop-blur rounded-xl border border-gray-700 overflow-hidden">
                            <img src={cert.logo} alt={cert.name} className="w-12 h-12 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold mb-1.5 group-hover:text-cyan-300 transition-colors leading-tight">
                            {cert.name}
                          </h3>
                          <p className="text-xs text-gray-400 font-mono tracking-wide">{cert.issuer}</p>
                        </div>
                      </div>
                      
                      {/* Verify credential button */}
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative flex items-center justify-center gap-2 text-sm py-3 px-4 rounded-xl bg-gradient-to-r ${cert.color} text-white font-bold hover:shadow-2xl transition-all w-full overflow-hidden group/btn`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                          style={{ opacity: 0.2 }}
                        />
                        <Radio size={16} />
                        <span className="relative z-10">Verify Credential</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {certifications.map((_, index) => {
                const angle = (index * 360) / certifications.length;
                const radius = 220;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="rgba(167, 139, 250, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
