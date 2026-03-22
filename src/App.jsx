import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Code, User, ExternalLink, Briefcase, Calendar, Award, GraduationCap, Send, MessageCircle, Menu, X, Linkedin, Instagram, ChevronRight, ChevronLeft, Star, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["HTML", "CSS", "SQL", "Python"]
  },
  {
    title: "Packages",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    title: "Data Visualization Tools",
    skills: ["Advanced MS Excel", "Power BI"]
  },
  {
    title: "Analytical Abilities",
    skills: ["Data Cleaning", "EDA", "Insight Generation", "Descriptive Statistics"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

const certificates = [
  {
    title: "Training on Core Java",
    issuer: "Lakshya Institute of Technology (LIT)",
    date: "25 Apr 2024",
    badge: "🎓",
    type: "Certification",
    image: "/certificates/certificate5.png" 
  },
  {
    title: "INVENTRON 2K23 – National Level Hackathon",
    issuer: "MLRIT Centre for Innovation & Entrepreneurship",
    date: "27–28 Jan 2023",
    badge: "🏅",
    type: "Participation",
    image: "/certificates/certificate2.png"
  },
  {
    title: "Code 4 Odisha – Odisha's Biggest Hackathon",
    issuer: "ITER, Siksha O' Anusandhan University",
    date: "27–28 Aug 2022",
    badge: "🏅",
    type: "Participation",
    image: "/certificates/certificate3.png"
  },
  {
    title: "Python Programming",
    issuer: "CoDing SeeKho by Vikas Singh (ISO Certified)",
    date: "21 Apr 2025",
    badge: "🐍",
    type: "Completion",
    image: "/certificates/certificate1.png"
  },
  {
    title: "Certificate Course on Artificial Intelligence",
    issuer: "Infosys Foundation Finishing School for Employability (ICT Academy)",
    date: "25 Nov 2024",
    badge: "🤖",
    type: "Recognition",
    image: "/certificates/certificate4.png"
  }
];

const projects = [
  {
    title: "Data Analysis Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    problem: "Sales data was scattered and difficult for the business team to interpret quickly.",
    tools: "Python, SQL, Excel",
    description: "Built an automated data pipeline and dashboard to aggregate daily sales metrics.",
    result: "Reduced reporting time by 40% and identified a 15% revenue gap in Q3.",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Customer Churn Prediction",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    problem: "High customer turnover in the subscription service with no early warning system.",
    tools: "Python, Pandas, Scikit-Learn",
    description: "Developed a machine learning model to predict which customers were most likely to churn.",
    result: "Achieved an 85% accuracy rate, allowing targeted retention campaigns.",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Financial Forecasting Tool",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800",
    problem: "Manual financial projections were prone to human error and took weeks to produce.",
    tools: "Python, SQL, Power BI",
    description: "Analyzed historical trends and created an interactive forecasting vizualization.",
    result: "Improved projection accuracy by 20% and enabled real-time scenario testing.",
    githubLink: "#",
    liveLink: "#"
  }
];

const experiences = [
  {
    title: "Deloitte Australia Data Analytics – Job Simulation (Forage)",
    organization: "Deloitte",
    date: "February 2026",
    points: [
      "Completed a Deloitte data analytics job simulation involving real-world data analysis and forensic technology tasks.",
      "Created an interactive data dashboard using Tableau.",
      "Used Excel to classify datasets and derive business insights."
    ]
  },
  {
    title: "Front-End Web Development Training (Virtual)",
    organization: "CSRBOX in collaboration with IBM SkillsBuild",
    date: "June 2024 – August 2024",
    points: [
      "Completed structured online training in HTML, CSS, and JavaScript.",
      "Built and submitted a final web development project as part of the program evaluation.",
      "Earned a completion certificate for successful participation."
    ]
  },
  {
    title: "UI/UX Designer Intern",
    organization: "NASSCOM Foundation – thingQbator (Cisco CSR Initiative)",
    date: "October 2023 – January 2024",
    points: [
      "Designed user interface layouts using Figma and Canva.",
      "Applied user experience principles to improve design usability.",
      "Gained practical experience in visual design and digital product interfaces."
    ]
  }
];

const education = [
  {
    degree: "B.Tech, Computer Science in AI & ML",
    institution: "Trident Academy of Technology, Bhubaneswar",
    score: "CGPA: 7.63",
    date: "12/2021 – 05/2025"
  },
  {
    degree: "Senior Secondary (Class XII) – CBSE",
    institution: "Imperial School of Learning, Dhanbad",
    score: "Percentage: 64%",
    date: "05/2019 – 05/2021"
  }
];

const iterImages = [
  "/ITER/IMG_3045.JPG.jpeg",
  "/ITER/img1.jpeg",
  "/ITER/img10.jpeg",
  "/ITER/img2.jpeg",
  "/ITER/img3.jpeg",
  "/ITER/img4.jpeg",
  "/ITER/img5.jpeg",
  "/ITER/img6.jpeg",
  "/ITER/img7.jpeg",
  "/ITER/img8.jpeg",
  "/ITER/img9.jpeg"
];

const mlritImages = [
  "/MLRIT/IMG_3044.JPG.jpeg",
  "/MLRIT/frie.jpeg",
  "/MLRIT/friemds.jpeg",
  "/MLRIT/g_team.jpeg",
  "/MLRIT/group.jpeg",
  "/MLRIT/groups.jpeg",
  "/MLRIT/imgkiit.jpeg",
  "/MLRIT/imgss.jpeg",
  "/MLRIT/my.jpeg",
  "/MLRIT/pp.jpeg",
  "/MLRIT/profile.jpg",
  "/MLRIT/trident.jpeg"
];

const ImageSlider = ({ images }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider-container" ref={scrollRef}>
      {images && images.length > 0 ? (
        images.map((img, i) => (
          <div key={i} className="slider-item">
            <img src={img} alt={`Slide ${i}`} loading="lazy" />
          </div>
        ))
      ) : (
        <div className="empty-slider">
          <p>No images added yet.</p>
        </div>
      )}
    </div>
  );
};

const initialReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Amazing portfolio! The layout is incredibly clean, and the Apple-style swipe carousel is very innovative.",
    date: "2026-03-01"
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 4,
    comment: "Very solid data analytics background. The projects are well-presented.",
    date: "2026-03-05"
  }
];

// Animated Interactive Background
const AnimatedBackground = () => (
  <div className="animated-bg">
    <div className="particles-overlay"></div>
    <div className="glow-blob glow-blob-1"></div>
    <div className="glow-blob glow-blob-2"></div>
    <div className="glow-blob glow-blob-3"></div>
  </div>
);

function App() {
  const [result, setResult] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const [reviewFormResult, setReviewFormResult] = useState("");
  const [activeSkillsTab, setActiveSkillsTab] = useState('skills');
  const [selectedCert, setSelectedCert] = useState(null);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      setReviewFormResult("Please fill out all fields.");
      return;
    }
    const newEntry = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([newEntry, ...reviews]);
    setNewReview({ name: "", comment: "", rating: 5 });
    setReviewFormResult("Thank you for your review!");
    setTimeout(() => setReviewFormResult(""), 3000);
  };

  useEffect(() => {
    // Reset or standard event listeners can go here
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "ba6e9968-78ea-45e4-a282-2ddb9425c2d3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to send. Please try again later.");
    }

    // Hide the result message after 5 seconds
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <div className="app-container">
      <AnimatedBackground />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Abhishek Kumar <span>Roy</span>
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
            <a href="/explore" className="secondary-btn">Explore more</a>
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
          <img src="/hero_data_analyst.png" alt="Data Analyst Illustration" className="hero-illustration" />
        </motion.div>

        <div className="hero-glow"></div>
      </main>

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

      <section id="skills" className="skills-section">
        {/* --- Portfolio Showcase Header --- */}
        <div className="showcase-header">
          <motion.p
            className="showcase-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ✦ What I Bring to the Table ✦
          </motion.p>
          <motion.h2
            className="showcase-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Portfolio <span>Showcase</span>
          </motion.h2>
          <motion.p
            className="showcase-description"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A curated display of technical expertise and professional achievements.<br />
            Built with precision, driven by data, and powered by curiosity.
          </motion.p>
        </div>

        {/* --- Tab Toggle Buttons --- */}
        <div className="skills-tab-switcher">
          <button
            className={`skills-tab-btn ${activeSkillsTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSkillsTab('skills')}
          >
            &lt;&gt; My Skills
          </button>
          <button
            className={`skills-tab-btn ${activeSkillsTab === 'certs' ? 'active' : ''}`}
            onClick={() => setActiveSkillsTab('certs')}
          >
            🏅 Certificates
          </button>
        </div>

        {/* --- Tab Content --- */}
        <div className="skills-tab-content">
          <AnimatePresence mode="wait">
            {activeSkillsTab === 'certs' ? (
              <motion.div
                className="certs-container"
                key="certs-container"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="certs-grid">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="cert-card"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div 
                        className="cert-image-wrapper"
                        onClick={() => setSelectedCert(cert)}
                        style={{ cursor: 'zoom-in' }}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="cert-image"
                          loading="lazy"
                        />
                        <div className="cert-overlay">
                          <span className="cert-type-badge">{cert.type}</span>
                        </div>
                        <div className="cert-zoom-hint">
                          <ExternalLink size={16} /> Click to Enlarge
                        </div>
                      </div>
                      <div className="cert-info">
                        <div className="cert-header">
                          <span className="cert-badge-icon">{cert.badge}</span>
                          <h4 className="cert-title">{cert.title}</h4>
                        </div>
                        <p className="cert-issuer">{cert.issuer}</p>
                        {cert.date && <span className="cert-date">📅 {cert.date}</span>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="skills-container"
                key="skills-container"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skills-grid">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="skill-card"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="skill-card-inner">
                        <h3 className="skill-category-title">{category.title}</h3>
                        <div className="skill-tags">
                          {category.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <motion.div
          className="projects-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="center-title">
            <h2 className="section-title">My <span>Projects</span></h2>
            <p className="section-subtitle">A selection of projects where I analyzed data, built visualizations, and uncovered meaningful insights.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-details">
                    <p><strong>Problem:</strong> {project.problem}</p>
                    <p><strong>Tools:</strong> <span className="highlight-tools">{project.tools}</span></p>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Result:</strong> <span className="highlight-success">{project.result}</span></p>
                  </div>
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link" title="GitHub Repo">
                      <Github size={20} /> <span className="link-text">GitHub</span>
                    </a>
                    <a href={project.liveLink} className="project-link" title="Live Demo">
                      <ExternalLink size={20} /> <span className="link-text">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="experience" className="experience-section">
        <motion.div
          className="experience-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="center-title">
            <h2 className="section-title">Experience & <span>Professional Training</span></h2>
            <p className="section-subtitle">Industry training, certifications, and hands-on programs that strengthened my skills in data analytics, development, and design.</p>
          </div>

          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="timeline-dot">
                  <Briefcase size={20} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-date">
                      <Calendar size={16} /> {exp.date}
                    </span>
                  </div>
                  {exp.organization && <h4 className="timeline-org">{exp.organization}</h4>}
                  <ul className="timeline-points">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

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

      <section id="contact" className="contact-section">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="center-title">
            <h2 className="section-title">Let's Build Something <span>Together</span></h2>
            <p className="section-subtitle">I'm currently open to new opportunities and my inbox is always open. Whether you have a question, a proposal, or just want to say hi, feel free to reach out!</p>
          </div>

          <div className="contact-content">
            <motion.form
              className="contact-form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="input-group">
                <input type="text" name="name" placeholder="Full Name" required className="contact-input" />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email Address" required className="contact-input" />
              </div>
              <div className="input-group">
                <textarea name="message" placeholder="Message" required rows="5" className="contact-input contact-textarea"></textarea>
              </div>
              <button type="submit" className="contact-submit-btn" disabled={result === "Sending..."}>
                {result === "Sending..." ? "Sending..." : <>Send Message <Send size={18} /></>}
              </button>
              {result && (
                <p className={`form-result-message ${result.includes("Successfully") ? 'success' : 'error'}`}>
                  {result}
                </p>
              )}
            </motion.form>

            <motion.div
              className="contact-divider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="divider-line"></div>
              <span>or contact me directly via</span>
              <div className="divider-line"></div>
            </motion.div>

            <motion.div
              className="direct-contact-options"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="https://wa.me/918935986254" target="_blank" rel="noreferrer" className="direct-contact-card">
                <div className="contact-icon bg-whatsapp">
                  <MessageCircle size={28} />
                </div>
                <div className="contact-info">
                  <h4>WhatsApp</h4>
                  <p>+91 8935986254</p>
                </div>
              </a>

              <a href="mailto:abhiroy8986@gmail.com" className="direct-contact-card">
                <div className="contact-icon bg-email">
                  <Mail size={28} />
                </div>
                <div className="contact-info">
                  <h4>Email</h4>
                  <p>abhiroy8986@gmail.com</p>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="reviews" className="reviews-section">
        <motion.div
          className="reviews-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="center-title">
            <h2 className="section-title">Reviews & <span>Ratings</span></h2>
            <p className="section-subtitle">What do you think about my portfolio? I'd love to hear your feedback!</p>
          </div>

          <div className="reviews-layout">
            <div className="reviews-form-container premium-card">
              <h3 className="review-card-title">Leave a Review</h3>
              <form className="review-form" onSubmit={handleReviewSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                </div>
                <div className="rating-select">
                  <span className="rating-label">Rating:</span>
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={28}
                        className={star <= newReview.rating ? 'star-filled' : 'star-empty'}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        fill={star <= newReview.rating ? "currentColor" : "none"}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                  </div>
                </div>
                <div className="input-group">
                  <textarea
                    placeholder="Your Comment..."
                    rows="4"
                    className="contact-input contact-textarea"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="primary-btn submit-review-btn">Post Review</button>
                {reviewFormResult && (
                  <p className={`form-result-message ${reviewFormResult.includes("Thank you") ? 'success' : 'error'}`}>
                    {reviewFormResult}
                  </p>
                )}
              </form>
            </div>

            <div className="reviews-list">
              <h3 className="review-list-title">Recent Feedback</h3>
              <div className="reviews-scroll">
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    className="review-item premium-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="review-header">
                      <div className="review-user">
                        <UserCircle size={42} className="user-avatar" />
                        <div className="review-user-info">
                          <strong>{review.name}</strong>
                          <span className="review-date">{review.date}</span>
                        </div>
                      </div>
                      <div className="review-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            fill={star <= review.rating ? "#f59e0b" : "none"}
                            color={star <= review.rating ? "#f59e0b" : "rgba(255, 255, 255, 0.1)"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>



      {/* --- Certificate Modal --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedCert(null)}>
                <X size={32} />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} />
              <div className="modal-info">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
