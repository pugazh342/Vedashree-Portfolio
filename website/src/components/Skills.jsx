import React from 'react';
import { Database, Shield, Layout, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Data Intelligence",
    icon: Database,
    skills: ["Python (Pandas/NumPy)", "SQL (Postgres)", "Scikit-Learn", "Plotly/Seaborn", "Jupyter"]
  },
  {
    title: "Security Operations",
    icon: Shield,
    skills: ["Wazuh SIEM", "Network Forensics", "Threat Hunting", "Log Analysis", "Bash Scripting"]
  },
  {
    title: "Full-Stack Engineering",
    icon: Layout,
    skills: ["React.js", "FastAPI", "Tailwind CSS", "Node.js", "REST APIs"]
  },
  {
    title: "DevOps & Cloud",
    icon: Globe,
    skills: ["Docker", "Git/GitHub", "Linux Admin", "CI/CD Pipelines", "Vercel"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* Header */}
        <div className="skills-header">
          <h2>Technical Ecosystem</h2>
          <h3>Tools & Technologies</h3>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <category.icon size={24} />
              </div>
              <h4>{category.title}</h4>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;