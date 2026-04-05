import React, { useState } from 'react';

import AnimatedBackground from '../../components/AnimatedBackground';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import SkillsSection from '../../components/SkillsSection';
import ProjectsSection from '../../components/ProjectsSection';
import ExperienceSection from '../../components/ExperienceSection';
import EducationSection from '../../components/EducationSection';
import ContactSection from '../../components/ContactSection';
import ReviewsSection from '../../components/ReviewsSection';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <AnimatedBackground />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <ReviewsSection />
    </div>
  );
};

export default Home;
