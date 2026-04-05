import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Menu, X, User, CalendarDays, Clock, CheckCircle, Zap, RefreshCw, MonitorPlay, Shield, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../index.css';

function Explore() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedTime, setSelectedTime] = useState("");
    const [bookingStatus, setBookingStatus] = useState("");

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
                        initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        style={{ justifyContent: 'center', marginBottom: '1rem', marginTop: '120px' }}
                    >
                        <span className="typewriter">Data to Insights. Insights to Action.</span>
                    </motion.h4>

                    <motion.h1
                        className="name"
                        style={{ fontSize: '4.5rem', marginBottom: '1.5rem', textAlign: 'center', lineHeight: 1.1, position: 'relative' }}
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        Let's <motion.span 
                            animate={{ color: ["#fff", "var(--accent-color)", "#fff"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >Connect</motion.span> For...
                        <motion.div 
                            style={{ position: 'absolute', right: '10%', top: '-20px', width: '60px', height: '60px', border: '2px dashed rgba(88, 166, 255, 0.4)', borderRadius: '50%', pointerEvents: 'none' }}
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '3rem',
                            marginTop: '4rem',
                            alignItems: 'stretch',
                            position: 'relative'
                        }}
                    >
                        {/* Trendy Floating Decorative Badge */}
                        <motion.div
                            style={{ position: 'absolute', top: '-45px', left: '15px', background: 'rgba(22, 27, 34, 0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(88, 166, 255, 0.2)', padding: '0.6rem 1.2rem', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#fff', fontSize: '0.95rem', fontWeight: '600', zIndex: 10, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Star size={16} color="var(--accent-color)" /> Professional Data Services
                        </motion.div>
                        {/* Premium Consulting Card (Replaced AI Avatar) */}
                        <div style={{
                            background: 'rgba(22, 27, 34, 0.65)',
                            border: '1px solid rgba(88, 166, 255, 0.2)',
                            borderRadius: '24px',
                            padding: '3rem 2.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                            backdropFilter: 'blur(16px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 0 20px rgba(88, 166, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-color)', filter: 'blur(90px)', opacity: '0.15', borderRadius: '50%'
                            }}></div>
                            
                            <div style={{ display: 'inline-block', padding: '0.5rem 1.2rem', background: 'rgba(88, 166, 255, 0.1)', color: 'var(--accent-color)', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '800', marginBottom: '2rem', letterSpacing: '1px', alignSelf: 'flex-start', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                                DATA CONSULTING
                            </div>
                            <h3 style={{ fontSize: '2.4rem', marginBottom: '1.2rem', color: '#fff', lineHeight: '1.2', fontWeight: '800' }}>Data-Driven Decisions</h3>
                            <p style={{ color: '#a3b3cc', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                                Transform raw data into strategic insights. Dashboards, models, and deep analytics built to elevate your business.
                            </p>
                            
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem', flex: 1 }}>
                                {[
                                    'Actionable Business Insights',
                                    'Advanced Predictive Modeling',
                                    'Real-time Interactive Dashboards'
                                ].map((feature, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#c9d1d9', fontSize: '1.05rem', fontWeight: '500' }}>
                                        <div style={{ background: 'rgba(88, 166, 255, 0.1)', padding: '6px', borderRadius: '50%', display: 'flex', color: 'var(--accent-color)', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
                                            <CheckCircle size={16} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <button 
                                className="primary-btn" 
                                onClick={() => document.getElementById('free-trial')?.scrollIntoView({ behavior: 'smooth' })}
                                style={{ width: '100%', fontSize: '1.1rem', padding: '1rem', display: 'flex', justifyContent: 'center', fontWeight: '700', letterSpacing: '0.5px' }}
                            >
                                Book Consultation
                            </button>
                        </div>

                        {/* Interactive Skills Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            alignContent: 'center'
                        }}>
                            {skillsList.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                                    whileHover={{ y: -5, background: 'rgba(22, 27, 34, 0.8)', borderColor: 'rgba(88, 166, 255, 0.4)', boxShadow: '0 10px 30px rgba(88, 166, 255, 0.15)' }}
                                    style={{
                                        background: 'rgba(22, 27, 34, 0.4)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '20px',
                                        padding: '1.8rem 1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '2rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        width: '56px',
                                        height: '56px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        {skill.icon}
                                    </div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.4' }}>
                                        {skill.title}
                                    </h4>
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
                    id="free-trial"
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
