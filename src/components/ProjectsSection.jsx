import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="center-title">
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">A selection of projects where I analyzed data, built visualizations, and uncovered meaningful insights.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-details">
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Tools:</strong> <span className="highlight-tools">{project.tools}</span></p>
                  <p><strong>Description:</strong> {project.description}</p>
                  <p><strong>Result:</strong> <span className="highlight-success">{project.result}</span></p>
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link" title="GitHub Repo">
                    <Github size={20} /> <span className="link-text">GitHub</span>
                  </a>
                  <a href={project.liveLink} className="project-link" title="Live Demo">
                    <ExternalLink size={20} /> <span className="link-text">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
