import React from "react";
import "./LandingPage.css";

const LandingPage = ({ onGetStarted, onShowAboutLegal }) => {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  const handleGoToGitHub = () => {
    if (onShowAboutLegal) {
      onShowAboutLegal();
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-header">
          <div className="landing-icon">UCASA APP</div>
            <h1 className="landing-title">
            Universal Collision Avoidance System Advisory App
            </h1>
            <p className="landing-subtitle">
              Advanced safety system that quickly detects accidents, sends emergency alerts, 
              tracks location with GPS, and reports incidents for vehicles and machines.
            </p>
          </div>

          <div className="landing-description">
            <p className="landing-text">
              Join us in shaping the future of road safety — contribute your skills to our 
              open-source Collision Avoidance System and help make every journey safer for all!
            </p>
            
            <div className="landing-features">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span className="feature-text">Quick Accident Detection</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span className="feature-text">Emergency Alerts</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <span className="feature-text">GPS Location Tracking</span>
              </div>
              {/* <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Incident Reporting</span>
              </div> */}
            </div>
          </div>

          <div className="landing-actions">
            <button 
              className="landing-btn landing-btn-primary"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button 
              className="landing-btn landing-btn-secondary"
              onClick={handleGoToGitHub}
            >
              <span className="github-icon">📦</span>
              Go to GitHub
            </button>
          </div>

          <div className="landing-footer">
            <p className="landing-footer-text">
              Open Source • Built with ❤️ for Road Safety
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

