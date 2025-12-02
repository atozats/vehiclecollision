import React from "react";
import "./LandingPage.css";

const LandingPage = ({ onGetStarted, onShowAboutLegal }) => {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  const handleGoToGitHub = () => {
    const githubUrl = "https://github.com/atozats/vehiclecollision";
    window.open(githubUrl, "_blank", "noopener,noreferrer");
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
             Start
            </button>
          </div>

          <div id="join-us-heading" className="join-us-section">
            <h2 className="join-us-heading clickable-heading" onClick={handleGoToGitHub}>🚀 Join Us in Building the Future of Road Safety!</h2>
            
            <div className="join-us-content">
              <p className="join-us-intro">
                🌍 Open-Source Contributors Wanted for a Life-Saving Innovation
              </p>
              
              <p className="join-us-text">
                We at AtoZ Automation Solutions Pvt. Ltd. are thrilled to open the doors to passionate developers, engineers, designers, and innovators who want to make a real impact on the world.
              </p>
              
              <p className="join-us-text">
                We are building an Open-Source, GPS-based Collision Avoidance System — a smart, real-time safety platform designed to prevent accidents, save lives, and create safer roads for everyone.
              </p>
              
              <p className="join-us-text">
                And now… YOU can be part of this mission!
              </p>
              
              <h3 className="join-us-subheading">💡 Why Join This Project?</h3>
              
              <ul className="join-us-list">
                <li>✨ Work on a high-impact public safety technology</li>
                <li>✨ Contribute to a fully open-source MERN stack project</li>
                <li>✨ Collaborate with like-minded innovators across the community</li>
                <li>✨ Gain visibility, experience, and recognition</li>
                <li>✨ Help build a globally useful system from the ground up</li>
              </ul>
              
              <p className="join-us-text">
                This is not just another software project — it's an opportunity to build something that can truly help humanity.
              </p>
              
              <h3 className="join-us-subheading">🧩 Who Can Contribute?</h3>
              
              <p className="join-us-text">
                We welcome contributors of all skill levels:
              </p>
              
              <ul className="join-us-list">
                <li>💻 Developers (React, Node.js, MongoDB, GPS/Geo APIs)</li>
                <li>🎨 UI/UX Designers</li>
                <li>🛰️ GIS / GPS Enthusiasts</li>
                <li>🧪 Testers & QA Engineers</li>
                <li>📘 Documentation Writers</li>
                <li>🤝 Community Helpers & Idea Contributors</li>
              </ul>
              
              <p className="join-us-text">
                If you're enthusiastic and ready to learn, you're already qualified!
              </p>
              
              <h3 className="join-us-subheading">🚀 How to Join</h3>
              
              <p className="join-us-text">
                Simply connect with us, explore the project repository, and start contributing!
              </p>
              
              <p className="join-us-text">
                Together, we'll build a safer world — one line of code at a time.
              </p>
              
              <p className="join-us-closing">
                🌟 Let's Make Roads Safer. Let's Build the Future—Together.
              </p>
              
              <p className="join-us-text">
                If you believe in open collaboration and want your work to matter, this is the project for you.
              </p>

              <h2 className="join-us-heading clickable-heading" onClick={handleGoToGitHub}>🚀 Join Us in Building the Future of Road Safety!</h2>
            </div>
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

