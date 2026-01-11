import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="error-icon-wrapper">
        <AlertTriangle size={64} className="error-icon" />
      </div>
      
      <h1 className="error-title">
        404: Anomaly Detected
      </h1>
      
      <p className="error-desc">
        The resource you are looking for does not exist or has been moved to a secure location. 
        This event has been logged.
      </p>

      <Link to="/" className="btn-primary error-btn">
        <Home size={20} /> Return to Base
      </Link>
    </div>
  );
};

export default NotFound;