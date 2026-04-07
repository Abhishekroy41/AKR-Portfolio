import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, User, Database, Terminal, Briefcase, MapPin, Award, Calendar } from 'lucide-react';
import { ImageSlider } from './ImageSlider';
import { iterImages, mlritImages } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-track">

          {/* PANE 1: ABOUT ME */}
          <div className="carousel-pane">
            <div className="about-scroll-card premium-card">
              <h2 className="carousel-pane-title text-center" style={{ marginBottom: "3rem" }}>About <span>Me</span></h2>
              <div className="about-card-inner-original">

                {/* TEXT LEFT */}
                <div className="about-card-body-improved">
                  <div className="about-info-block">
                    <div className="about-icon-wrapper"><User className="about-icon" /></div>
                    <div className="about-info-content">
                      <h3 className="about-info-title">Who I Am</h3>
                      <p className="about-info-text">
                        A Computer Science Engineering graduate specializing in AI and Machine Learning. I have a strong passion for Data Analysis and Data-Driven Decision Making.
                      </p>
                    </div>
                  </div>

                  <div className="about-info-block">
                    <div className="about-icon-wrapper"><Database className="about-icon" /></div>
                    <div className="about-info-content">
                      <h3 className="about-info-title">What I Do</h3>
                      <p className="about-info-text">
                        I analyze datasets, uncover insights, and transform raw data into meaningful visualizations using Python, SQL, Excel, and advanced BI tools.
                      </p>
                    </div>
                  </div>

                  <div className="about-info-block">
                    <div className="about-icon-wrapper"><Terminal className="about-icon" /></div>
                    <div className="about-info-content">
                      <h3 className="about-info-title">Development Experience</h3>
                      <p className="about-info-text">
                        Alongside analytics, I build technical projects like MERN Stack Applications and interactive UIs which strengthen my overall problem-solving abilities.
                      </p>
                    </div>
                  </div>

                  <div className="about-info-block">
                    <div className="about-icon-wrapper"><Briefcase className="about-icon" /></div>
                    <div className="about-info-content">
                      <h3 className="about-info-title">Career Goals</h3>
                      <p className="about-info-text">
                        Currently seeking opportunities as a Data Analyst to apply my analytical capabilities, work with real-world complexities, and drive business growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* IMAGE RIGHT */}
                <motion.div
                  className="about-image-wrapper-centered"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="about-image-circle-premium">
                    <img src="/profile (2).jpg" alt="Abhishek Kumar Roy Profile" />
                  </div>
                </motion.div>

              </div>

              {/* Scroll Right Indicator */}
              <div className="scroll-indicator scroll-right">
                <span className="scroll-text">Swipe for My Journey</span>
                <ChevronRight size={24} className="bounce-right" />
              </div>
            </div>
          </div>

          {/* PANE 2: MY JOURNEY (Contains Subsections) */}
          <div className="carousel-pane">
            <div className="journey-scroll-card premium-card">

              {/* Scroll Left Indicator */}
              <div className="scroll-indicator scroll-left">
                <ChevronLeft size={24} className="bounce-left" />
                <span className="scroll-text">Swipe back for About Me</span>
              </div>

              <h2 className="carousel-pane-title text-center" style={{ marginBottom: "3rem" }}>My <span>Journey</span></h2>

              <div className="journey-bento-grid">
                {/* ITER HACKATHON */}
                <div className="bento-card premium-hover">
                  <div className="bento-content">
                    <div className="badge-row">
                      <span className="premium-badge bento-badge"><Award size={14} /> Hackathon</span>
                      <span className="timeline-date"><Calendar size={14}/> 2023</span>
                    </div>
                    <h3 className="bento-title">ITER Odisha Hackathon</h3>
                    <div className="location-row">
                      <MapPin size={16} /> <span className="location-text">Bhubaneswar, Odisha</span>
                    </div>
                    <p className="journey-desc">Participated in the high-stakes ITER Hackathon, brainstorming innovative tech solutions and collaborating under pressure.</p>
                  </div>
                  <div className="bento-image-wrapper">
                    <ImageSlider images={iterImages} />
                  </div>
                </div>

                {/* MLRIT HACKATHON */}
                <div className="bento-card premium-hover">
                  <div className="bento-content">
                    <div className="badge-row">
                      <span className="premium-badge bento-badge"><Award size={14} /> Hackathon</span>
                      <span className="timeline-date"><Calendar size={14}/> 2024</span>
                    </div>
                    <h3 className="bento-title">MLRIT Hackathon</h3>
                    <div className="location-row">
                      <MapPin size={16} /> <span className="location-text">Hyderabad, Telangana</span>
                    </div>
                    <p className="journey-desc">Collaborated with a dynamic team to build creative, data-driven solutions during an intense 24-hour coding sprint.</p>
                  </div>
                  <div className="bento-image-wrapper">
                    <ImageSlider images={mlritImages} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
