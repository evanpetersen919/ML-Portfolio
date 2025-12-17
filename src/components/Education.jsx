import React from 'react';
import { GraduationCap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 pb-40 gradient-bg text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap size={32} className="text-purple-400" />
            <h2 className="text-4xl font-bold">Education Journey</h2>
          </div>

          {/* Rocket Journey Container */}
          <div className="relative max-w-5xl mx-auto h-[650px] md:h-[550px]">
            {/* Dotted Path */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <motion.path
                d="M 50 350 Q 200 200, 350 250 T 650 100"
                stroke="rgba(167, 139, 250, 0.3)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,10"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
            </svg>

            {/* Earth (Starting Point) */}
            <motion.div
              className="absolute left-[30px] top-[320px] md:left-[50px] md:top-[320px]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ zIndex: 2 }}
            >
              <div className="relative">
                {/* Earth Planet */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-green-500 shadow-lg shadow-blue-500/50 relative overflow-hidden">
                  {/* Earth details */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent" />
                  <div className="absolute top-4 right-2 w-6 h-6 rounded-full bg-green-600/40" />
                  <div className="absolute bottom-6 left-4 w-8 h-4 rounded-full bg-green-600/40" />
                </div>
                {/* Earth Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-sm font-semibold text-blue-400">Start</p>
                </div>
              </div>
            </motion.div>

            {/* Rocket */}
            <motion.div
              className="absolute"
              initial={{ offsetDistance: "0%", opacity: 0 }}
              whileInView={{ offsetDistance: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 3.5, ease: [0.45, 0, 0.55, 1] }}
              style={{ 
                offsetPath: "path('M 50 350 Q 200 200, 350 250 T 650 100')",
                zIndex: 3 
              }}
            >
              <motion.div
                animate={{ rotate: [0, -3, 0, 3, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket size={36} className="text-purple-400 transform rotate-45" />
                {/* Rocket Trail */}
                <div className="absolute -left-8 top-4 w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-70" />
                <div className="absolute -left-6 top-3 w-6 h-1 bg-gradient-to-r from-yellow-400 to-transparent opacity-50" />
              </motion.div>
            </motion.div>

            {/* CSUSM Planet (Destination) */}
            <motion.div
              className="absolute right-[30px] top-[20px] md:right-[50px] md:top-[10px]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ zIndex: 2 }}
            >
              <div className="relative">
                {/* CSUSM Planet */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50 relative overflow-hidden">
                  {/* Planet Ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-8 rounded-full border-4 border-purple-400/40 transform -rotate-12" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }} />
                  {/* Planet details */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <motion.div
                    className="absolute inset-2 rounded-full border-2 border-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                {/* CSUSM Label */}
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-xs font-semibold text-purple-400">Cal State San Marcos</p>
                  <p className="text-xs text-gray-400">Expected May 2027</p>
                </div>
              </div>
            </motion.div>

            {/* Satellite Data Panel */}
            <motion.div
              className="absolute bottom-[-130px] left-1/2 -translate-x-1/2 w-full max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 3.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ zIndex: 4 }}
            >
              <div className="relative">
                {/* Satellite dish antenna */}
                <motion.div
                  className="absolute -top-16 left-1/2 -translate-x-1/2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-4 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500/30" />
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Signal waves */}
                <motion.div
                  className="absolute -top-12 left-1/2 -translate-x-1/2"
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-blue-400/50" />
                </motion.div>
                
                {/* Main satellite panel */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-6 border-2 border-gray-700 shadow-2xl overflow-hidden">
                  {/* Metallic texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
                  
                  {/* Rivets/screws in corners */}
                  <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
                  <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
                  <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
                  
                  {/* Status LEDs */}
                  <div className="absolute top-4 right-6 flex gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-blue-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-yellow-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-2 bg-blue-950/50 px-3 py-1 rounded">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-cyan-400"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs text-cyan-400 font-mono">SAT-EDU-01</span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">LINK ESTABLISHED</span>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4 mb-4">
                      <h3 className="text-lg font-bold mb-2 text-blue-400">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-gray-300 text-sm mb-1">Minor in Data Science</p>
                      <p className="text-xs text-gray-500 font-mono">CSUSM • San Marcos, CA</p>
                    </div>
                    
                    {/* Progress indicators */}
                    <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                      <div className="bg-gray-800/50 p-2 rounded border border-gray-700">
                        <div className="text-gray-500 mb-1">STATUS</div>
                        <div className="text-green-400 font-mono">IN PROGRESS</div>
                      </div>
                      <div className="bg-gray-800/50 p-2 rounded border border-gray-700">
                        <div className="text-gray-500 mb-1">COMPLETION</div>
                        <div className="text-blue-400 font-mono">MAY 2027</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Stars scattered around */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  zIndex: 0
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
