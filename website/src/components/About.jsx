import React from 'react';
import { BookOpen, Award, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-grid">
          
          {/* LEFT COLUMN: The Story */}
          <div className="about-story">
            <div className="about-header">
              <div className="icon-box">
                <User size={24} />
              </div>
              <h2>Beyond the Code</h2>
            </div>
            
            <div className="about-text">
              <p>
                My journey into technology didn't start with just writing code—it started with a curiosity about how systems break and how to secure them.
              </p>
              <p>
                As a researcher and engineer, I don't just build applications; I engineer <strong>resilient systems</strong>. 
                Whether it's detecting network anomalies using Machine Learning or building offline-first healthcare tools, 
                my focus is always on <strong>impact, security, and scalability</strong>.
              </p>
              <p>
                When I'm not training models or hunting threats in Wazuh, you can find me exploring the latest in 
                <strong> Generative AI</strong> or contributing to open-source security tools.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Education & Certifications */}
          <div className="about-timeline-card">
            
            {/* Education Section */}
            <h3>
              <BookOpen size={20} className="text-primary"/> Education
            </h3>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h4> Bachelor of Technology (B.Tech)</h4>
              <p className="timeline-degree">Artificial Intelligence and DataScience</p>
              <p className="timeline-date">2023 - 2027</p>
              <p className="timeline-desc">
                Focused on Network Security, Data Structures, and AI. Built "WolfShield" as a capstone project.
              </p>
            </div>

            {/* Certifications Section */}
            <h3 className="cert-title">
              <Award size={20} className="text-primary"/> Certifications
            </h3>

            <div className="cert-list">
              <div className="cert-item">
                <div className="cert-dot"></div>
                <div>
                  <h5>Google Cybersecurity Professional</h5>
                  <p>Coursera • 2023</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-dot"></div>
                <div>
                  <h5>Certified Ethical Hacker (Junior)</h5>
                  <p>EC-Council • 2024</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;