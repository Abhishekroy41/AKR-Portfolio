import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

const EducationSection = () => {
  return (
    <>
      <section id="activities" className="activities-section">
        <motion.div
          className="activities-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="activities-grid">
            {/* Achievements Column */}
            <div className="achievements-column">
              <h2 className="section-title">Achievements <span>& Activities</span></h2>
              <div className="achievements-content">
                <h3 className="achievement-heading">
                  <Award className="inline-icon" size={24} /> Hackathon Participation
                </h3>
                <ul className="achievement-list">
                  <li>Participated in INVENTRON 2023 – National Level Hackathon, gaining experience in problem-solving and team collaboration.</li>
                  <li>Participated in Odisha’s Biggest Hackathon 2022, worked in a team to develop innovative solutions under time constraints.</li>
                </ul>
              </div>
            </div>

            {/* Hobbies Column */}
            <div className="hobbies-column">
              <h2 className="section-title">My <span>Hobbies</span></h2>
              <div className="hobbies-content">
                <motion.div className="hobby-card">
                  <span className="hobby-emoji">📚</span>
                  <div className="hobby-info">
                    <h4>Reading</h4>
                    <p>Expanding knowledge through books.</p>
                  </div>
                </motion.div>
                <motion.div className="hobby-card">
                  <span className="hobby-emoji">🌍</span>
                  <div className="hobby-info">
                    <h4>Travelling</h4>
                    <p>Exploring new places and experiences.</p>
                  </div>
                </motion.div>
                <motion.div className="hobby-card">
                  <span className="hobby-emoji">🚀</span>
                  <div className="hobby-info">
                    <h4>Learning</h4>
                    <p>Building new skills every day.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="education" className="education-section">
        <motion.div
          className="education-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="center-title">
            <h2 className="section-title">My <span>Education</span></h2>
          </div>

          <div className="education-cards">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(88, 166, 255, 0.3)" }}
              >
                <div className="edu-icon-wrapper">
                  <GraduationCap size={40} />
                </div>
                <div className="edu-content">
                  <span className="edu-date">{edu.date}</span>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <h4 className="edu-institution">{edu.institution}</h4>
                  <div className="edu-score">
                    <strong>Score:</strong> <span>{edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default EducationSection;
