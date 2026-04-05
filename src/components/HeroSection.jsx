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
        <motion.h4
          className="greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="typewriter">Hello, My name is</span>
        </motion.h4>
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
        <motion.h3
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Data Analyst | SQL • Excel • Power BI • Python | Data Visualization
        </motion.h3>
        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Data-driven professional with a B.Tech in Computer Science (AI & ML),
          specializing in extracting actionable insights from complex datasets through statistical
          analysis and visualization. Proficient in Python, SQL, Excel, and Power BI, with hands-on
          experience in data cleaning, modeling, and dashboard development. Strong analytical mindset
          with a focus on transforming raw data into strategic, data-backed business decisions.
        </motion.p>
        <motion.div
          className="action-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href="#projects" className="primary-btn">View my work</a>
          <a href="/DA_CV.pdf" target="_blank" rel="noreferrer" className="secondary-btn">View resume</a>
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
