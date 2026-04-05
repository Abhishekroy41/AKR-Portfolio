import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Trash2, Clock, Sparkles, CalendarDays, CheckCircle2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './Chatbot.css';

const SYSTEM_PROMPT = `
You are the personal AI Assistant for Abhishek Kumar Roy's portfolio website. 
Be helpful, professional, and friendly. Use short, concise answers.
Here is information about Abhishek:
- Name: Abhishek Kumar Roy
- Role: Data Analyst
- Education: B.Tech in CSE (AI & ML) from Trident Academy of Technology (CGPA: 7.63, Dec 2021 - May 2025). Class XII from Imperial School of Learning, Dhanbad.
- Skills: Python, SQL, Excel, Power BI, HTML, CSS, NumPy, Pandas, Matplotlib, Seaborn, Machine Learning.
- Background & Core: Completed B.Tech in CSE (Core: AI & ML) in May 2025. Focused on the Tech Domain, working with Data Analytics, Machine Learning, and building business solutions.
- Experience: UI/UX Designer Intern at NASSCOM Foundation. Virtual training setups at CSRBOX and Deloitte.
- Projects: Data Analysis Dashboard, Customer Churn Prediction (85% accuracy), Financial Forecasting Tool.
- Contact: abhiroy8986@gmail.com, LinkedIn, GitHub (Abhishekroy41).
If the visitor asks something outside this scope, politely decline and steer them back to Abhishek's professional profile.
`;

const predefinedResponses = {
  default: "Hi there! I'm Abhishek's AI Assistant. I can answer questions about his skills, projects, and resume. What would you like to know?",
  skills: "Abhishek is highly skilled in: \\n• Data Analysis (Python, SQL, Advanced Excel, Power BI)\\n• Data Science (Pandas, Scikit-Learn)\\n• Web Development (HTML, CSS, JS)",
  projects: "Some of Abhishek's top projects include:\\n1. Data Analysis Dashboard\\n2. Customer Churn Prediction model (85% accuracy)\\n3. Financial Forecasting Tool",
  experience: "He recently completed a Deloitte Data Analytics Job Simulation. Additionally, he worked as a UI/UX Design Intern for NASSCOM Foundation.",
  education: "Abhishek graduated and successfully completed his B.Tech in May 2025 from Trident Academy of Technology, Bhubaneswar.",
  background: "Abhishek completed his B.Tech in CSE (Core: AI & ML) in May 2025 from Trident Academy of Technology. In the tech domain, he is actively focused on Data Analytics, Machine Learning, and bridging the gap between complex datasets and actionable business insights.",
  contact: "You can reach Abhishek at abhiroy8986@gmail.com, or send a message directly from the contact section of this website!",
  farewell: "You're very welcome! Feel free to reach out if you need anything else. Have a great day!",
  about: "Abhishek Kumar Roy is a Data Analyst who specializes in using Python, SQL, and Power BI to translate complex data into actionable business insights. He has a B.Tech in CSE (Core: AI & ML) and is passionate about building innovative data-driven solutions!"
};

const SUGGESTIONS = [
  "Book an Appointment",
  "What are your skills?",
  "Tell me about your projects",
  "How can I contact you?"
];

// Inner component for the Booking Form
const BookingForm = ({ onComplete }) => {
  const [status, setStatus] = useState('idle');
  
  const submitBooking = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Appointment Request from Portfolio Chatbot");

    // Format the email message body properly for Web3Forms
    const name = formData.get("name");
    const email = formData.get("email");
    const date = formData.get("date");
    const time = formData.get("time");
    
    formData.append("message", `Name: ${name}\nEmail: ${email}\nRequested Date: ${date}\nRequested Time: ${time}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setTimeout(() => {
          onComplete(`Appointment request sent successfully for ${date} at ${time}! Abhishek will confirm with you via email shortly.`);
        }, 1500);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="booking-success">
        <CheckCircle2 size={32} />
        <p>Request Sent Successfully!</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitBooking} className="chatbot-booking-form">
      <div className="form-header">
        <CalendarDays size={18} />
        <span>Schedule a Meeting</span>
      </div>
      
      <div className="form-row">
        <input type="date" name="date" required className="booking-input" min={new Date().toISOString().split('T')[0]} />
        <input type="time" name="time" required className="booking-input" />
      </div>
      
      <input type="text" name="name" placeholder="Your Name" required className="booking-input" />
      <input type="email" name="email" placeholder="Your Email" required className="booking-input" />
      
      <button type="submit" disabled={status === 'submitting'} className="booking-submit-btn">
        {status === 'submitting' ? 'Confirming...' : 'Confirm Appointment'}
      </button>

      {status === 'error' && <p className="booking-error">Failed to send request. Try again.</p>}
    </form>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: predefinedResponses.default, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const clearChat = () => {
    setMessages([
      { role: 'ai', text: "Chat history cleared. How can I help you today?", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
    ]);
  };

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const handleBookingCompletion = (confirmationMsg) => {
    // Remove the form message and add confirmation
    setMessages(prev => {
      const updated = prev.filter(m => !m.isBookingForm);
      return [...updated, { 
        role: 'ai', 
        text: confirmationMsg,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
      }];
    });
  };

  const handleSendMessage = async (textOverride) => {
    const userText = textOverride || inputMessage.trim();
    if (!userText) return;

    if (!textOverride) setInputMessage('');
    
    const timeNow = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    setMessages(prev => [...prev, { role: 'user', text: userText, time: timeNow }]);
    setIsLoading(true);

    // Intercept Booking Request
    const lowerText = userText.toLowerCase();
    const isBookingRequest = 
      lowerText.includes('book') || 
      lowerText.includes('appointment') || 
      lowerText.includes('meeting') ||
      lowerText.includes('schedule') ||
      lowerText.includes('connect');

    // Simulate think block
    await new Promise(r => setTimeout(r, Math.random() * 800 + 400));

    if (isBookingRequest) {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "I'd love to help you schedule a meeting with Abhishek! Please select a date and time below:", 
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        isBookingForm: true
      }]);
      setIsLoading(false);
      return;
    }

    try {
      if (apiKey) {
        // Use Real-Time Gemini AI
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const history = messages
          .filter(msg => !msg.isBookingForm) // Exclude forms from context
          .map(msg => ({
            role: msg.role === 'ai' ? 'model' : 'user',
            parts: [{ text: msg.text }],
          }));

        const chat = model.startChat({
          history: [
            { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
            { role: 'model', parts: [{ text: "Understood. I'm ready to act as Abhishek's assistant." }] },
            ...history
          ]
        });

        const result = await chat.sendMessage(userText);
        const responseText = result.response.text();
        
        setMessages(prev => [...prev, { role: 'ai', text: responseText, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
      } else {
        // Fallback: Smart Keyword Matching
        let response = "I specialize in answering questions about Abhishek's portfolio! You can ask me things like:\\n• What are your skills?\\n• Tell me about your projects\\n• How can I contact you?";
        
        if (lowerText.includes('skill') || lowerText.includes('tech') || lowerText.includes('python')) {
          response = predefinedResponses.skills;
        } else if (lowerText.includes('project') || lowerText.includes('work') || lowerText.includes('dashboard')) {
          response = predefinedResponses.projects;
        } else if (lowerText.includes('background') || lowerText.includes('core') || lowerText.includes('domain') || lowerText.includes('b.tech') || lowerText.includes('btech') || lowerText.includes('passout') || lowerText.includes('graduate')) {
          response = predefinedResponses.background;
        } else if (lowerText.includes('experience') || lowerText.includes('intern') || lowerText.includes('deloitte')) {
          response = predefinedResponses.experience;
        } else if (lowerText.includes('education') || lowerText.includes('study') || lowerText.includes('college') || lowerText.includes('university')) {
          response = predefinedResponses.education;
        } else if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('hire')) {
          response = predefinedResponses.contact;
        } else if (lowerText === 'ok' || lowerText.includes('thank') || lowerText.includes('tahnk') || lowerText.includes('bye') || lowerText.includes('goodbye')) {
          response = predefinedResponses.farewell;
        } else if (lowerText.includes('about') || lowerText.includes('who are you') || lowerText.includes('yourself') || lowerText.includes('who is abhishek') || lowerText.includes('profile') || lowerText.includes('intro')) {
           response = predefinedResponses.about;
        } else if (lowerText.includes('hi') || lowerText.includes('hello')) {
           response = "Hello! How can I help you learn more about Abhishek today?";
        }
        
        setMessages(prev => [...prev, { role: 'ai', text: response, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try reaching out via the contact form!", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    }
    
    setIsLoading(false);
  };

  const formatText = (text) => {
    return text.split('\\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split('\\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className="chatbot-window premium-card"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar-container">
                  <img src="/profile (2).jpg" alt="Abhi" className="chatbot-profile-pic" />
                  <span className="chatbot-online-indicator"></span>
                </div>
                <div>
                  <h3 className="chatbot-title">Abhi AI <Sparkles size={14} className="chatbot-sparkle" /></h3>
                  <p className="chatbot-status">Online • Ask me anything</p>
                </div>
              </div>
              <div className="chatbot-header-actions">
                <button onClick={clearChat} className="chatbot-action-btn" title="Clear Chat">
                  <Trash2 size={18} />
                </button>
                <button onClick={toggleChat} className="chatbot-action-btn" title="Close">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`chatbot-message-row ${msg.role === 'user' ? 'user-row' : 'ai-row'}`}
                >
                  {msg.role === 'ai' && (
                    <div className="chatbot-avatar ai-avatar">
                      <Bot size={16} />
                    </div>
                  )}
                  <div className="chatbot-bubble-wrapper">
                    <div className={`chatbot-message ${msg.role === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                      {formatText(msg.text)}
                    </div>
                    {msg.isBookingForm && (
                      <BookingForm onComplete={handleBookingCompletion} />
                    )}
                    <span className={`chatbot-timestamp ${msg.role === 'user' ? 'timestamp-right' : 'timestamp-left'}`}>
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="chatbot-message-row ai-row"
                >
                  <div className="chatbot-avatar ai-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="chatbot-message ai-bubble">
                    <div className="typing-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} className="scroll-anchor" />
            </div>

            {/* Suggestions */}
            {!isLoading && messages.length <= 3 && !messages[messages.length-1].isBookingForm && (
              <div className="chatbot-suggestions">
                <div className="suggestions-scroll">
                  {SUGGESTIONS.map((suggestion, idx) => (
                    <button 
                      key={idx} 
                      className="suggestion-chip"
                      onClick={() => handleSendMessage(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="chatbot-input-area">
              <input
                type="text"
                placeholder="Ask or book a meeting..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="chatbot-input"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className={`chatbot-send-btn ${inputMessage.trim() ? 'active' : ''}`}
                disabled={isLoading || !inputMessage.trim()}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <div className="chatbot-toggle-content">
            <Sparkles size={20} className="chatbot-btn-icon" />
            <span className="chatbot-toggle-text">Ask AI</span>
          </div>
        )}
        {!isOpen && <span className="chatbot-toggle-indicator"></span>}
      </motion.button>
    </div>
  );
};

export default Chatbot;
