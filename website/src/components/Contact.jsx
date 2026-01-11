import React from 'react';
import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-wrapper">
          {/* Left Side: The "Hook" */}
          <div className="contact-content">
            <h2 className="contact-title">Ready to Engineer Intelligence?</h2>
            <p className="contact-desc">
              I am currently available for **Data Science** and **Security Analyst** roles. 
              If you are looking for someone who can bridge the gap between complex algorithms and secure production systems, let's talk.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={20} className="text-primary" />
                <span>Available for Remote & Relocation</span>
              </div>
              <div className="contact-item">
                <Mail size={20} className="text-primary" />
                <span>vedashree.b@example.com</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Actions */}
          <div className="contact-actions">
            <a href="mailto:vedashree.b@example.com" className="btn-primary contact-btn">
              <Mail size={20} /> Send an Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-secondary contact-btn">
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
            <p className="contact-note">
              I typically respond within 24 hours.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;