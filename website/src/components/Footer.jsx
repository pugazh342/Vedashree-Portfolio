import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              Vedashree<span>.B</span>
            </h2>
            <p>Data Scientist | Security Analyst | Engineer</p>
          </div>

          {/* Social Icons Column */}
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your-email@example.com">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} Vedashree .B. Built with React.
        </div>
      </div>
    </footer>
  );
};

export default Footer;