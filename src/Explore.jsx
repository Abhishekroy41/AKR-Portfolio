import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Menu, X, User, CalendarDays, Clock, CheckCircle, Zap, RefreshCw, MonitorPlay, Shield, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import './index.css';

function Explore() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedTime, setSelectedTime] = useState("");
    const [bookingStatus, setBookingStatus] = useState("");
    const [showSkills, setShowSkills] = useState(false);

    const skillsList = [
        { icon: '📊', title: 'Interactive Dashboards' },
        { icon: '🐍', title: 'Python Analytics' },
        { icon: '🛠️', title: 'SQL Database Mgt' },
        { icon: '💡', title: 'Actionable Insights' },
        { icon: '🧹', title: 'Data Cleaning & ETL' },
        { icon: '🤖', title: 'Predictive Modeling' }
    ];

    const handleBooking = (e) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) {
            setBookingStatus("Please select both a date and time.");
            return;
        }
        setBookingStatus("Trial successfully scheduled!");
        setTimeout(() => setBookingStatus(""), 4000);
    };

    return (
        <div className="app-container">
            <div className="explore-bg" style={{ backgroundImage: "url('/explore-more-bg.jpg')" }}>
                <div className="explore-overlay"></div>
            </div>
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

            <main className="explore-main">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1200px', margin: '0 auto' }}
                >
                    <motion.h4
                        className="greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ justifyContent: 'center', marginBottom: '1rem', marginTop: '120px' }}
                    >
                        <span className="typewriter">Data to Insights. Insights to Action.</span>
                    </motion.h4>

                    <motion.h1
                        className="name"
                        style={{ fontSize: '4.5rem', marginBottom: '1.5rem', textAlign: 'center', lineHeight: 1.1 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Let's <span>Connect</span> For...
                    </motion.h1>

                    <motion.div
                        className="skills-network-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <div className="network-col left-col" style={{ pointerEvents: showSkills ? "auto" : "none" }}>
                            <motion.div
                                className="ad-card"
                                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                animate={{
                                    opacity: showSkills ? 1 : 0,
                                    x: showSkills ? 0 : 50,
                                    scale: showSkills ? 1 : 0.9
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className="ad-badge">DATA CONSULTING</div>
                                <h3 className="ad-title">Data-Driven Decisions</h3>
                                <p className="ad-description">Transform raw data into strategic insights. Dashboards, models, and deep analytics.</p>
                                <ul className="ad-features">
                                    <li><CheckCircle size={16} /> Actionable Business Insights</li>
                                    <li><CheckCircle size={16} /> Advanced Predictive Modeling</li>
                                    <li><CheckCircle size={16} /> Real-time Interactive Dashboards</li>
                                </ul>
                                <button className="primary-btn ad-btn">Book Consultation</button>
                            </motion.div>
                        </div>

                        <div className="network-col center-col">
                            <motion.div
                                className="center-character"
                                onMouseEnter={() => setShowSkills(true)}
                                onMouseLeave={() => setShowSkills(false)}
                                style={{ cursor: 'pointer' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src="/ai_tech_avatar.png" alt="AI Tech Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </motion.div>
                        </div>

                        <div className="network-col right-col" style={{ pointerEvents: showSkills ? "auto" : "none" }}>
                            {skillsList.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-node glass-node"
                                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                                    animate={{
                                        opacity: showSkills ? 1 : 0,
                                        x: showSkills ? 0 : -50,
                                        scale: showSkills ? 1 : 0.9
                                    }}
                                    transition={{ duration: 0.4, delay: showSkills ? index * 0.08 : 0, ease: "easeOut" }}
                                >
                                    <span className="skill-icon">{skill.icon}</span>
                                    {skill.title}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* --- How It Works Section --- */}
                <motion.div
                    className="business-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">How It <span>Works</span></h2>
                    <p className="description" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>A streamlined process designed for maximum efficiency and zero headaches.</p>

                    <div className="process-grid">
                        <div className="process-card">
                            <div className="process-icon-wrapper"><MonitorPlay size={28} /></div>
                            <h3>1. Consultation & Strategy</h3>
                            <p>We'll discuss your data needs, identify key metrics, and formulate a targeted analytics strategy.</p>
                        </div>
                        <div className="process-card">
                            <div className="process-icon-wrapper"><Zap size={28} /></div>
                            <h3>2. Processing & Analysis</h3>
                            <p>I will clean, process, and analyze your datasets to extract meaningful, actionable insights.</p>
                        </div>
                        <div className="process-card">
                            <div className="process-icon-wrapper"><RefreshCw size={28} /></div>
                            <h3>3. Delivery & Visualization</h3>
                            <p>You receive interactive dashboards and comprehensive reports with strategic recommendations.</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- Benefits Section --- */}
                <motion.div
                    className="business-section benefits-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Premium <span>Benefits</span></h2>
                    <p className="description" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>Perks so good you'll never need to go anywhere else for your design needs.</p>

                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <Shield className="benefit-icon" />
                            <div>
                                <h4>Precision & Accuracy</h4>
                                <p>Rigorous data cleaning and validation to ensure the highest quality insights.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <RefreshCw className="benefit-icon" />
                            <div>
                                <h4>Scalable Solutions</h4>
                                <p>From single ad-hoc reports to robust automated data pipelines.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <Zap className="benefit-icon" />
                            <div>
                                <h4>Timely Delivery</h4>
                                <p>Rapid turnaround times on critical reports and analyses to keep you moving fast.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <Award className="benefit-icon" />
                            <div>
                                <h4>Actionable Insights</h4>
                                <p>Providing clear, data-driven recommendations tailored specifically to your business goals.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- Free Trial Section --- */}
                <motion.div
                    className="free-trial-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Connect a <span>Free Trial</span></h2>
                    <p className="description" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
                        Book a 30-minute discovery call with me to discuss how we can elevate your project.
                    </p>

                    <form className="booking-card premium-card" onSubmit={handleBooking}>
                        <div className="booking-grid">

                            {/* Date Picker */}
                            <div className="booking-form-group">
                                <label className="booking-label">
                                    <CalendarDays size={18} /> Select Date
                                </label>
                                <input
                                    type="date"
                                    className="booking-input"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>

                            {/* Time Picker */}
                            <div className="booking-form-group">
                                <label className="booking-label">
                                    <Clock size={18} /> Select Time
                                </label>
                                <select
                                    className="booking-input"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Choose a slot...</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    <option value="01:00 PM">01:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                    <option value="05:30 PM">05:30 PM</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="primary-btn booking-submit-btn">
                            Book Trial Session
                        </button>

                        {bookingStatus && (
                            <motion.div
                                className="booking-status"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {bookingStatus === "Trial successfully scheduled!" ? <CheckCircle size={18} className="success-icon" /> : null}
                                {bookingStatus}
                            </motion.div>
                        )}
                    </form>
                </motion.div>

                <div className="hero-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px' }}></div>
            </main>
        </div>
    );
}

export default Explore;
