import React, { useState, useMemo } from 'react';
import { Mail, Send, CheckCircle, Rocket, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Generate stars once and keep them stable
  const stars = useMemo(() => 
    [...Array(40)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.max(0.1, 1 - (Math.random() * 100 / 100) * 1.5),
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2
    })), []
  );

  // Generate sun energy bursts once
  const energyBursts = useMemo(() =>
    [...Array(6)].map((_, i) => ({
      id: i,
      left: 15 + i * 14,
      bottom: 20 + Math.random() * 30,
      width: 40 + Math.random() * 40,
      height: 40 + Math.random() * 40,
      duration: 4 + Math.random() * 3
    })), []
  );

  // Generate surface rocks once
  const surfaceRocks = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      id: i,
      left: 15 + Math.random() * 70,
      bottom: 5 + Math.random() * 15,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    })), []
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // EmailJS credentials
    const serviceId = 'service_1p5hner';
    const templateId = 'template_grzmdoj';
    const publicKey = 'kyayT_VyhdsUdxBPt';

    emailjs.send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    }, publicKey)
      .then(() => {
        setSubmitted(true);
        setSending(false);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSending(false);
        alert('Failed to send message. Please try again or email me directly.');
      });
  };

  return (
    <section id="contact" className="relative overflow-hidden gradient-bg">
      {/* Smooth gradient transition to sun atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 via-purple-800/40 via-orange-900/50 to-transparent pointer-events-none z-0" style={{ height: '60%' }} />
      
      {/* Stars fading into atmosphere */}
      <div className="absolute inset-0 overflow-hidden" style={{ height: '50%' }}>
        {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                opacity: star.opacity
              }}
              animate={{
                opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay
              }}
            />
          ))}
      </div>

      {/* Sun surface as the entire bottom - extends to include footer */}
      <div className="relative pb-0">
        {/* Curved sun surface horizon */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-600/40 via-orange-500/70 to-orange-600" 
             style={{
               clipPath: 'ellipse(150% 100% at 50% 100%)',
             }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/30 to-yellow-600/50"
             style={{
               clipPath: 'ellipse(150% 100% at 50% 100%)',
               mixBlendMode: 'screen'
             }}
        />
        
        {/* Intense sun glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-400/60 via-transparent to-transparent" 
             style={{
               clipPath: 'ellipse(150% 100% at 50% 100%)',
             }}
        />
        
        {/* Sun surface texture and details */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Solar flares and prominences */}
          <motion.div
            className="absolute top-[50%] left-[10%] w-32 h-32 rounded-full bg-red-500/40 blur-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-[60%] right-[15%] w-40 h-40 rounded-full bg-yellow-400/50 blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[35%] w-36 h-36 rounded-full bg-orange-400/40 blur-2xl"
            animate={{ 
              scale: [1, 1.35, 1],
              opacity: [0.4, 0.75, 0.4]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Plasma flows */}
          <motion.div
            className="absolute top-[45%] left-0 right-0 h-40 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent blur-xl"
            animate={{ x: ["-100%", "100%"], scaleY: [1, 1.2, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[60%] left-0 right-0 h-32 bg-gradient-to-r from-transparent via-red-400/15 to-transparent blur-xl"
            animate={{ x: ["100%", "-100%"], scaleY: [1, 1.3, 1] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[30%] left-0 right-0 h-36 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent blur-2xl"
            animate={{ x: ["-50%", "150%"], scaleY: [1, 1.25, 1] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Bright core glow from below */}
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-yellow-300/30 via-orange-400/20 to-transparent" />
          
          {/* Radiant energy bursts */}
          {energyBursts.map((burst) => (
            <motion.div
              key={burst.id}
              className="absolute rounded-full bg-yellow-200/30 blur-xl"
              style={{
                left: `${burst.left}%`,
                bottom: `${burst.bottom}%`,
                width: `${burst.width}px`,
                height: `${burst.height}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                y: [0, -20, 0]
              }}
              transition={{
                duration: burst.duration,
                repeat: Infinity,
                delay: burst.id * 0.8
              }}
            />
          ))}
        </div>

        {/* Main content on planet surface */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-32">
          <div>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Rocket size={32} className="text-purple-400" />
              <h2 className="text-4xl font-bold text-white">Contact</h2>
            </div>

            {/* Contact form - landing pad style */}
            <div className="relative">
              {/* Landing pad rings */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-cyan-400/20 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-purple-400/10 rounded-full"
                  animate={{ rotate: -360, scale: [1, 1.08, 1] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 border-2 border-purple-500/30 shadow-2xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none backdrop-blur-sm"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {sending ? 'Sending...' : 'Send Message'}
                      <Send size={20} />
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2 text-white">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Quick Contact Info - Satellite Communication Panel */}
            <div 
              className="mt-12"
            >
              <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 border-2 border-cyan-400/40 shadow-2xl relative overflow-hidden">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                {/* Scanning line effect */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/20 rounded-xl"
                  animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    {/* Signal bars */}
                    <div className="flex gap-1">
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-gradient-to-t from-green-500 to-cyan-400 rounded-full"
                          style={{ height: `${8 + i * 3}px` }}
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            scaleY: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                    
                    <p className="text-cyan-300 font-mono text-sm tracking-widest">CONNECT WITH ME</p>
                    
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                      animate={{ 
                        opacity: [0.4, 1, 0.4],
                        boxShadow: ['0 0 5px rgba(74, 222, 128, 0.5)', '0 0 15px rgba(74, 222, 128, 0.8)', '0 0 5px rgba(74, 222, 128, 0.5)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <motion.a
                      href="mailto:evanpetersen919@gmail.com"
                      className="group relative px-5 py-2.5 bg-gray-800/70 border border-purple-500/40 rounded-lg hover:border-purple-400 transition-all overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                      <span className="relative text-purple-300 group-hover:text-purple-200 font-mono text-sm tracking-wide">evanpetersen919@gmail.com</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/evan-petersen-b93037386/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-5 py-2.5 bg-gray-800/70 border border-cyan-500/40 rounded-lg hover:border-cyan-400 transition-all overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
                      />
                      <span className="relative text-cyan-300 group-hover:text-cyan-200 font-mono text-sm tracking-wide">LinkedIn</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/evanpetersen919"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-5 py-2.5 bg-gray-800/70 border border-orange-500/40 rounded-lg hover:border-orange-400 transition-all overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }}
                      />
                      <span className="relative text-orange-300 group-hover:text-orange-200 font-mono text-sm tracking-wide">GitHub</span>
                    </motion.a>
                  </div>
                </div>
                
                {/* Animated corner indicators */}
                {[
                  { top: 2, left: 2, border: 'border-t-2 border-l-2' },
                  { top: 2, right: 2, border: 'border-t-2 border-r-2' },
                  { bottom: 2, left: 2, border: 'border-b-2 border-l-2' },
                  { bottom: 2, right: 2, border: 'border-b-2 border-r-2' }
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-4 h-4 ${pos.border} border-cyan-400/60`}
                    style={{ ...pos }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional surface elements */}
        <div className="relative z-0 pb-12">
          {/* Small rocks/details on surface */}
          {surfaceRocks.map((rock) => (
            <motion.div
              key={rock.id}
              className="absolute w-2 h-2 bg-purple-800/40 rounded-full"
              style={{
                left: `${rock.left}%`,
                bottom: `${rock.bottom}%`,
              }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: rock.duration,
                repeat: Infinity,
                delay: rock.delay
              }}
            />
          ))}
        </div>

        {/* Footer merged into Contact */}
        <div className="relative z-10 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Satellite panel background - matching Education satellite theme */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-8 border-2 border-gray-700 shadow-2xl overflow-hidden">
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

          <div className="relative grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Evan Petersen</h3>
              <p className="text-gray-400 text-sm">
                Machine Learning Engineer & Software Developer
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a
                    href="https://github.com/evanpetersen919"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/evan-petersen-b93037386/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-4">Built With</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>React + Vite</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Lucide Icons</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative pt-8 border-t border-cyan-400/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Evan Petersen
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
