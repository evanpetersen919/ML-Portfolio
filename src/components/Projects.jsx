import React, { useState } from 'react';
import { Rocket, ExternalLink, Github, FileText, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'TripSaver - AI-Powered Trip Planner',
      description: 'Intelligent trip planning application leveraging LLMs and computer vision for personalized travel recommendations and budget optimization.',
      image: '/projects/tripsaver/demo.mp4',
      isVideo: true,
      techStack: ['Python', 'PyTorch', 'Hugging Face', 'React', 'AWS'],
      achievements: [
        '4 AI models: 500-class classifier + visual search across 4,248 landmarks',
        'Deployed real-time, scalable inference on AWS Lambda with Next.js web app',
        'Social media augmentation pipeline (Instagram/TikTok) + transfer learning with GPU'
      ],
      metrics: '2025',
      links: {
        demo: 'https://cv-location-classifier.vercel.app/',
        github: 'https://github.com/evanpetersen919/CV-Location-Classifier'
      },
      tags: ['ML', 'Web Dev', 'Computer Vision'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'NIH Chest Disease Classifier',
      description: 'Deep learning model for multi-label chest X-ray classification using transfer learning and attention mechanisms.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop&q=80',
      isVideo: false,
      techStack: ['Python', 'PyTorch', 'Scikit-Learn', 'Streamlit'],
      achievements: [
        'Processed 40K images with 0% data leakage across train/val/test',
        'Handled 21:1 class imbalance; 27.5% overall improvement',
        'Deployed Streamlit web app with AUC-ROC 0.793 on test data'
      ],
      metrics: '2025',
      links: {
        demo: 'https://chest-x-ray-classifier-acyc6y4495m9tnja4gtpfz.streamlit.app/',
        github: 'https://github.com/evanpetersen919/Chest-X-Ray-Classifier'
      },
      tags: ['ML', 'Computer Vision'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Turbofan Health Prediction',
      description: 'Predictive maintenance system using LSTM networks to forecast turbofan engine failures with SHAP explainability.',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&h=600&fit=crop&q=80',
      isVideo: false,
      techStack: ['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI', 'Docker', 'Streamlit'],
      achievements: [
        '2-layer LSTM achieving 14.4 RMSE on ~10.2K test sequences',
        'Applied SHAP for sensor attribution and interpretability',
        'Containerized with Docker, served via FastAPI + Streamlit UI'
      ],
      metrics: '2025',
      links: {
        demo: 'https://engine-failure.onrender.com/',
        github: 'https://github.com/evanpetersen919/Engine-Failure'
      },
      tags: ['ML', 'School'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'MLB Stat Predictor',
      description: 'Machine learning project that predicts next season MLB player performance using XGBoost and Neural Networks with historical data from 2000-2025.',
      image: '/projects/mlb-predictor.jpg',
      isVideo: false,
      techStack: ['Python', 'XGBoost', 'TensorFlow', 'Scikit-Learn', 'Streamlit'],
      achievements: [
        'Achieved R² of 0.829 for hitter predictions with XGBoost',
        'R² of 0.735 for pitcher performance predictions',
        'Built interactive Streamlit web app for custom predictions',
        'Predicts 8+ key statistics per player (WAR, HR, ERA, etc.)'
      ],
      metrics: '2025',
      links: {
        demo: 'https://mlb-stat-predictor-kjsuvrdjedxnmzafgecv5g.streamlit.app/',
        github: 'https://github.com/evanpetersen919/MLB-Stat-Predictor'
      },
      tags: ['ML', 'School'],
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const filters = ['all', 'ML', 'Web Dev', 'Computer Vision', 'School'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 gradient-bg text-white px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Rocket size={32} className="text-purple-400" />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            <Filter size={20} className="text-gray-400" />
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-surface rounded-xl border border-dark-border overflow-hidden card-hover flex flex-col"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                {/* Project Image/Video */}
                <div className="relative h-64 bg-gray-900 overflow-hidden">
                  {project.isVideo ? (
                    <video
                      src={project.image}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onLoadedMetadata={(e) => e.target.currentTime = 18}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4 text-sm flex-grow">
                    {project.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-purple-400 font-semibold">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                        {project.title.includes('TripSaver') ? 'Website' : 'Demo'}
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
