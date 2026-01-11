import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [text, setText] = useState("Initializing...");

  useEffect(() => {
    const steps = [
      { msg: "Loading Datasets...", delay: 0 },
      { msg: "Training Model...", delay: 800 },
      { msg: "Optimizing Parameters...", delay: 1600 },
      { msg: "Rendering Portfolio...", delay: 2100 }
    ];

    steps.forEach(step => {
      setTimeout(() => setText(step.msg), step.delay);
    });
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-logo">Vedashree<span>.B</span></h1>
        
        <div className="loader-bar-bg">
          <div className="loader-bar-fill"></div>
        </div>
        
        <div className="loader-status">
          <span className="typing-text">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;