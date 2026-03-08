import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './index.css';

function Explore() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="app-container">
            <nav className="navbar">
                <Link to="/" className="nav-brand" onClick={() => setIsMenuOpen(false)}>
                    Abhishek Kumar
                </Link>
                <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/#about" onClick={() => setIsMenuOpen(false)}>About & Journey</a></li>
                    <li><a href="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="/#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li><a href="/#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
                    <li><a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    <li className="back-link-item">
                        <Link to="/" className="secondary-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                            <ChevronLeft size={16} /> Back
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="hero-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 5% 0' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 10 }}
                >
                    <h1 className="name" style={{ fontSize: '4rem', marginBottom: '1.5rem', textAlign: 'center' }}>Explore <span>More</span></h1>
                    <p className="description" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center' }}>
                        Welcome to the new exploration page! This page is ready for your custom content.
                        Let me know what you'd like to add here next!
                    </p>
                </motion.div>
                <div className="hero-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px' }}></div>
            </main>
        </div>
    );
}

export default Explore;
