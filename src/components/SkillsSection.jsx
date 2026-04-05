import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { skillCategories, certificates } from '../data/portfolioData';

const SkillsSection = () => {
  const [activeSkillsTab, setActiveSkillsTab] = useState('skills');
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section id="skills" className="skills-section">
        {/* --- Portfolio Showcase Header --- */}
        <div className="showcase-header">
          <motion.p
            className="showcase-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ✦ What I Bring to the Table ✦
          </motion.p>
          <motion.h2
            className="showcase-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Portfolio <span>Showcase</span>
          </motion.h2>
          <motion.p
            className="showcase-description"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A curated display of technical expertise and professional achievements.<br />
            Built with precision, driven by data, and powered by curiosity.
          </motion.p>
        </div>

        {/* --- Tab Toggle Buttons --- */}
        <div className="skills-tab-switcher">
          <button
            className={`skills-tab-btn ${activeSkillsTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSkillsTab('skills')}
          >
            &lt;&gt; My Skills
          </button>
          <button
            className={`skills-tab-btn ${activeSkillsTab === 'certs' ? 'active' : ''}`}
            onClick={() => setActiveSkillsTab('certs')}
          >
            🏅 Certificates
          </button>
        </div>

        {/* --- Tab Content --- */}
        <div className="skills-tab-content">
          <AnimatePresence mode="wait">
            {activeSkillsTab === 'certs' ? (
              <motion.div
                className="certs-container"
                key="certs-container"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="certs-grid">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="cert-card"
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: index * 0.1 }}
                    >
                      <div 
                        className="cert-image-wrapper"
                        onClick={() => setSelectedCert(cert)}
                        style={{ cursor: 'zoom-in' }}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="cert-image"
                          loading="lazy"
                        />
                        <div className="cert-overlay">
                          <span className="cert-type-badge">{cert.type}</span>
                        </div>
                        <div className="cert-zoom-hint">
                          <ExternalLink size={16} /> Click to Enlarge
                        </div>
                      </div>
                      <div className="cert-info">
                        <div className="cert-header">
                          <span className="cert-badge-icon">{cert.badge}</span>
                          <h4 className="cert-title">{cert.title}</h4>
                        </div>
                        <p className="cert-issuer">{cert.issuer}</p>
                        {cert.date && <span className="cert-date">📅 {cert.date}</span>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="skills-container"
                key="skills-container"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skills-grid">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="skill-card"
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: index * 0.1 }}
                    >
                      <div className="skill-card-inner">
                        <h3 className="skill-category-title">{category.title}</h3>
                        <div className="skill-tags">
                          {category.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- Certificate Modal --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedCert(null)}>
                <X size={32} />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} />
              <div className="modal-info">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SkillsSection;
