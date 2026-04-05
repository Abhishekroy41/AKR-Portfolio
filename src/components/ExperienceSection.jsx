import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="center-title">
          <h2 className="section-title">Experience & <span>Professional Training</span></h2>
          <p className="section-subtitle">Industry training, certifications, and hands-on programs that strengthened my skills in data analytics, development, and design.</p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-date">
                    <Calendar size={16} /> {exp.date}
                  </span>
                </div>
                {exp.organization && <h4 className="timeline-org">{exp.organization}</h4>}
                <ul className="timeline-points">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
