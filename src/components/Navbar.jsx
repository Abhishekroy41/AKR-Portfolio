import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-brand" onClick={() => setIsMenuOpen(false)}>
        Abhishek Kumar
      </a>
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About & Journey</a></li>
        <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
        <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
