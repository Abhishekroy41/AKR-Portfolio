import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail } from 'lucide-react';

const ContactSection = () => {
  const [result, setResult] = useState("");

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
  );
};

export default ContactSection;
