import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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
                <div className="about-card-body-original">
                  <p className="about-text">
                    Hello! I'm Abhishek Kumar Roy, a Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning with a strong interest in Data Analysis and Data-Driven Decision Making. I enjoy working with data to uncover insights, identify trends, and transform raw information into meaningful visualizations.
                  </p>
                  <p className="about-text">
                    I have experience working with Python, SQL, Excel, and Data Visualization tools to analyze datasets and present insights effectively. I am passionate about solving real-world problems using data and continuously improving my analytical and problem-solving skills.
                  </p>
                  <p className="about-text">
                    Along with data analytics, I have also developed technical projects such as a MERN Stack Blog Application, a Portfolio Website, and a Spotify Clone using HTML and CSS, which helped me strengthen my development and problem-solving abilities.
                  </p>
                  <p className="about-text">
                    I am currently seeking opportunities as a Data Analyst where I can apply my analytical skills, work with real datasets, and contribute to data-driven business solutions.
                  </p>
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

              <div className="journey-subsections">
                {/* ITER HACKATHON */}
                <div className="journey-subsection">
                  <div className="journey-header">
                    <span className="premium-badge">Hackathon</span>
                    <h3 className="carousel-pane-title-small">ITER Odisha Hackathon</h3>
                    <p>I participated in the ITER Odisha Hackathon where I worked on innovative ideas and received a participation certificate.</p>
                  </div>
                  <ImageSlider images={iterImages} />
                </div>

                {/* MLRIT HACKATHON */}
                <div className="journey-subsection">
                  <div className="journey-header">
                    <span className="premium-badge">Hackathon</span>
                    <h3 className="carousel-pane-title-small">MLRIT Hyderabad Hackathon</h3>
                    <p>I participated in the MLRIT Hyderabad Hackathon where I collaborated with other developers and built creative solutions.</p>
                  </div>
                  <ImageSlider images={mlritImages} />
                </div>

                {/* FUTURE HACKATHON */}
                <div className="journey-subsection">
                  <div className="journey-header">
                    <span className="premium-badge future">Upcoming</span>
                    <h3 className="carousel-pane-title-small">Future Hackathon</h3>
                    <p>An empty block reserved for my upcoming participation in future hackathons.</p>
                  </div>
                  <ImageSlider images={[]} />
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
