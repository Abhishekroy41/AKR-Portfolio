import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Code, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <main id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="freelance-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="pulse-dot"></span> Available for Freelance
        </motion.div>
        <motion.h1
          className="name"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.06, 
                delayChildren: 0.3
              }
            }
          }}
        >
          {"Abhishek Kumar Roy".split("").map((char, index) => (
            char === " " ? (
              <span key={`space-${index}`}>&nbsp;</span>
            ) : (
              <motion.span
                key={`char-${index}`}
                style={{ display: "inline-block" }}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.5 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.6, duration: 0.8 } }
                }}
              >
                {char}
              </motion.span>
            )
          ))}
        </motion.h1>
        <motion.div
          className="tagline-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="hero-tagline-badge">Web Developer & Automation Engineer · Data Analyst · Freelancer</span>
        </motion.div>
        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I build, automate, and analyze — handling automation workflows (n8n, APIs), server monitoring, web development, and data analytics. Open to freelance.
        </motion.p>
        <motion.div
          className="hero-skill-tags"
        >
          {[
            { name: "n8n", color: "#38bdf8", rgb: "56, 189, 248" },
            { name: "APIs", color: "#a78bfa", rgb: "167, 139, 250" },
            { name: "Python", color: "#4ade80", rgb: "74, 222, 128" },
            { name: "SQL", color: "#facc15", rgb: "250, 204, 21" },
            { name: "Power BI", color: "#fb923c", rgb: "251, 146, 60" },
            { name: "Web Dev", color: "#2dd4bf", rgb: "45, 212, 191" },
            { name: "Server Monitoring", color: "#94a3b8", rgb: "148, 163, 184" }
          ].map((skill, i) => (
            <motion.span 
              key={skill.name}
              className="badge"
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 0.8 + i * 0.08, 
                type: "spring", 
                stiffness: 120 
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -3,
                boxShadow: `0 4px 15px rgba(${skill.rgb}, 0.4)`,
                borderColor: skill.color,
                backgroundColor: `rgba(${skill.rgb}, 0.1)`
              }}
              style={{ 
                cursor: 'default',
                borderLeft: `2px solid ${skill.color}`,
                backgroundColor: `rgba(${skill.rgb}, 0.03)`
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          className="hero-stat-cards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <div className="stat-card">
            <span className="stat-label">Current Role</span>
            <span className="stat-value">Web Dev + Automation</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Background</span>
            <span className="stat-value">Data Analytics + AI/ML</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Available</span>
            <span className="stat-value">Freelance Projects</span>
          </div>
        </motion.div>
        <motion.div
          className="action-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Hire Me</a>
          <div className="explore-wrapper">
            <Link to="/explore" className="secondary-btn highlight-explore-btn">Explore more</Link>
            <div className="explore-badge">
              Click here to explore ✨
            </div>
          </div>
        </motion.div>
        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <a href="mailto:abhiroy8986@gmail.com" className="social-icon" title="Email" target="_blank" rel="noreferrer"><Mail size={24} /></a>
          <a href="https://github.com/Abhishekroy41" className="social-icon" title="GitHub" target="_blank" rel="noreferrer"><Github size={24} /></a>
          <a href="https://www.hackerrank.com/profile/abhiroy8986" className="social-icon" title="HackerRank" target="_blank" rel="noreferrer"><Code size={24} /></a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-roy-51a403277" className="social-icon" title="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
          <a href="https://www.instagram.com/iamabhishekumaroy" className="social-icon" title="Instagram" target="_blank" rel="noreferrer"><Instagram size={24} /></a>
        </motion.div>
      </motion.div>





      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img src="/home_bg_image/ai_portfolio_bg.png" alt="AI Generated Portrait" className="hero-illustration" />
      </motion.div>

      <div className="hero-glow"></div>
    </main>
  );
};

export default HeroSection;
