import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div className="text-center p-20">Project not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="project-header">
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'left'}}>
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} /> Back to Lab
          </Link>
          <span className="badge" style={{display: 'block', width: 'fit-content', marginTop: '1rem'}}>
            {project.tech[0]} Case Study
          </span>
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span>By Vedashree .B</span>
            <span>•</span>
            <span>{project.tech.join(" / ")}</span>
          </div>
        </div>
      </header>

      {/* Main Report Content */}
      <article className="report-container">
        
        {/* Section 1: The Problem */}
        <section className="report-section">
          <h2>The Objective</h2>
          <p>{project.desc}</p>
          <p>
            In this project, the goal was to move beyond simple rule-based detection and implement 
            an intelligent system capable of identifying patterns that human analysts might miss.
            We utilized <strong>{project.tech[1]}</strong> to process data in real-time.
          </p>
        </section>

        {/* Section 2: Key Metrics */}
        <section className="report-section">
          <h2>Performance Metrics</h2>
          <div className="metric-grid">
            {project.stats.map((stat, i) => (
              <div key={i} className="metric-card">
                <h3>{stat.val}</h3>
                <p>{stat.lab}</p>
              </div>
            ))}
            <div className="metric-card">
              <h3>100%</h3>
              <p>Reproducible</p>
            </div>
          </div>
        </section>

        {/* Section 3: Methodology (Placeholder for now) */}
        <section className="report-section">
          <h2>The Methodology</h2>
          <p>
            The pipeline consists of three stages: Data Ingestion, Preprocessing, and Inference.
            Data was collected via <strong>{project.tech[2]}</strong>, normalized, and fed into the model.
          </p>
          <div style={{background: '#1e293b', padding: '2rem', borderRadius: '8px', color: '#f8fafc', fontFamily: 'monospace', fontSize: '0.9rem'}}>
            <p className="text-purple-400"># Core Logic Snippet</p>
            <p>def process_stream(data):</p>
            <p style={{paddingLeft: '1rem'}}>vector = vectorizer.transform(data)</p>
            <p style={{paddingLeft: '1rem'}}>prediction = model.predict(vector)</p>
            <p style={{paddingLeft: '1rem'}}>return {"{"} "risk": prediction, "timestamp": now() {"}"}</p>
          </div>
        </section>

        <div style={{display: 'flex', gap: '1rem', marginTop: '4rem'}}>
          <a href="#" className="btn-primary" style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <Github size={18} /> View Source Code
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;