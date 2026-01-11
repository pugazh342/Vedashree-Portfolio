import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Activity, Search, Github, ArrowRight, Menu, X } from 'lucide-react';

// --- EXTERNAL COMPONENT IMPORTS ---
// Ensure these files exist in your src/components/ folder
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact'; 
import Loader from './components/Loader';
import ScrollReveal from './components/ScrollReveal';
import NotFound from './components/NotFound';

// --- DATA: PROJECTS ---
const projects = [
  {
    id: 1,
    title: "Unsupervised Network Anomaly Detection",
    desc: "A machine learning pipeline that analyzes Wazuh SIEM logs to detect zero-day threats using Isolation Forests. Standard rules often miss subtle data exfiltration patterns; this model identifies them by learning 'normal' baseline behavior.",
    stats: [{ val: "94%", lab: "Detection Rate" }, { val: "<2%", lab: "False Positives" }],
    tech: ["Python", "Scikit-Learn", "Wazuh"],
    icon: Shield
  },
  {
    id: 2,
    title: "NLP-Driven Clinical Triage Engine",
    desc: "An offline-first decision support system that parses patient symptoms using Spacy NLP to automate risk stratification. It extracts entities (symptoms, duration) and maps them to clinical urgency levels (High/Medium/Low).",
    stats: [{ val: "120ms", lab: "Avg Latency" }, { val: "89%", lab: "Triage Accuracy" }],
    tech: ["FastAPI", "Spacy NLP", "React"],
    icon: Activity
  },
  {
    id: 3,
    title: "Real-Time Forensic Telemetry",
    desc: "High-velocity data pipeline for monitoring endpoint security streams (CPU, RAM, Network) in real-time. Built with WebSockets and Redis to handle 10k+ events per second without UI lag.",
    stats: [{ val: "1GB/s", lab: "Throughput" }, { val: "Live", lab: "Sync Status" }],
    tech: ["WebSockets", "Plotly", "Redis"],
    icon: Search
  }
];

// --- INTERNAL COMPONENT: NAVBAR ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="logo">Vedashree<span>.B</span></div>
      
      {/* Desktop Links */}
      <div className="nav-links desktop-only">
        <Link to="/">Research</Link>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" className="btn-primary">Resume</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Research</Link>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="./Resume.pdf" onClick={() => setIsOpen(false)} className="btn-primary" style={{justifyContent: 'center', margin: '1rem'}}>Resume</a>
        </div>
      )}
    </nav>
  );
};

// --- INTERNAL COMPONENT: HERO ---
const Hero = () => (
  <header className="hero" id="home">
    <div className="hero-content">
      
      {/* PROFILE PICTURE (Points to profile.png) */}
      <img 
        src="/images/Profile.png" 
        alt="Vedashree .B" 
        className="profile-img"
        onError={(e) => {e.target.style.display='none'}} 
      />

      <span className="badge">Available for Data Science Roles</span>
      <h1>Turning Raw Data into <br /> <span style={{color: 'var(--primary)'}}>Actionable Intelligence.</span></h1>
      <p>
        Hi, I'm <strong>Vedashree .B</strong>. I bridge the gap between ML models and production systems. 
        Specializing in <strong>Security Analytics</strong> and <strong>Healthcare Decision Systems</strong>.
      </p>
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        <a href="#projects" className="btn-primary">View Research</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontWeight: 500}}>
          <Github size={20}/> GitHub
        </a>
      </div>
    </div>

    {/* VISUAL CODE CARD */}
    <div className="hero-visual">
      <div className="code-card">
        <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem'}}>
          <div style={{width:10, height:10, borderRadius:'50%', background:'#ef4444'}}></div>
          <div style={{width:10, height:10, borderRadius:'50%', background:'#eab308'}}></div>
          <div style={{width:10, height:10, borderRadius:'50%', background:'#22c55e'}}></div>
        </div>
        <p style={{fontSize: '0.8rem', color: '#64748b'}}># Analysis Pipeline</p>
        <p style={{marginTop: '1rem', fontFamily: 'monospace'}}>
          <span style={{color: '#9333ea'}}>def</span> <span style={{color: '#2563eb'}}>detect_anomaly</span>(data):
        </p>
        <p style={{paddingLeft: '1rem', fontFamily: 'monospace'}}>
          risk_score = model.predict(data)
        </p>
        <p style={{paddingLeft: '1rem', fontFamily: 'monospace'}}>
          <span style={{color: '#9333ea'}}>return</span> risk_score &gt; <span style={{color: '#d97706'}}>0.85</span>
        </p>
        <div style={{marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '1rem'}}>
          <div>
            <div style={{fontSize: '0.7rem', color: '#64748b'}}>ACCURACY</div>
            <div style={{fontWeight: 'bold'}}>94.8%</div>
          </div>
          <div>
            <div style={{fontSize: '0.7rem', color: '#64748b'}}>THREATS</div>
            <div style={{fontWeight: 'bold', color: '#ef4444'}}>Blocked</div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

// --- INTERNAL COMPONENT: PROJECT GRID ---
const ProjectGrid = () => (
  <section className="projects-section" id="projects">
    <div className="section-title">
      <h3 style={{color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold'}}>Selected Work</h3>
      <h2 style={{fontSize: '2.5rem', marginTop: '0.5rem'}}>Engineering Intelligence</h2>
    </div>
    
    <div className="grid">
      {projects.map(p => (
        <div key={p.id} className="card">
          <div className="card-icon"><p.icon size={28}/></div>
          <h3>{p.title}</h3>
          <p>{p.desc.substring(0, 120)}...</p>
          
          <div className="tags">
            {p.tech.map(t => <span key={t}>{t}</span>)}
          </div>
          
          <div style={{marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9'}}>
            <Link to={`/project/${p.id}`} className="btn-primary" style={{fontSize: '0.9rem', width: 'fit-content'}}>
              View Case Study <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- MAIN APP COMPONENT (ROUTER) ---
function App() {
  const [loading, setLoading] = useState(true);

  // Simulate AI Model Loading (2.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app-container">
        
        {/* 1. LOADER: Shows on first load */}
        {loading && <Loader />}
        
        {/* 2. NAVBAR: Fixed at top */}
        <Navbar />
        
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <main>
              <ScrollReveal><Hero /></ScrollReveal>
              <ScrollReveal><About /></ScrollReveal>
              <ScrollReveal><Skills /></ScrollReveal>
              <ScrollReveal><ProjectGrid /></ScrollReveal>
              <ScrollReveal><Contact /></ScrollReveal>
              <Footer />       
            </main>
          } />
          
          {/* PROJECT DETAIL PAGES */}
          <Route path="/project/:id" element={
            <>
              <ProjectDetail projects={projects} />
              <Footer />
            </>
          } />

          {/* SECURITY: 404 CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;