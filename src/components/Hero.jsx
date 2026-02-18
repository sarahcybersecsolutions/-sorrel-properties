import React from 'react';
import { ArrowRight, Phone, Mail, Award } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-gna">
      <div className="hero-content-gna">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title-gna">
                Creating Value.<br />
                <span className="highlight">Connecting People</span><br />
                and Places
              </h1>
              <p className="hero-subtitle-gna">
                Your trusted partner in finding the perfect property. We make buying, 
                selling, and renting properties simple and stress-free.
              </p>
              <div className="hero-buttons">
                <a href="/properties" className="btn btn-primary btn-large">
                  View Properties
                  <ArrowRight size={20} />
                </a>
                <a href="/contact" className="btn btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="hero-contact-card">
              <div className="agent-profile">
                <div className="agent-photo">
                  <img src="/sarah-agent.jpg" alt="Sarah - Lead Agent" />
                </div>
                <div className="agent-details">
                  <h3>Sarah</h3>
                  <p className="agent-role">Lead Agent & Property Consultant</p>
                  <div className="agent-badge">
                    <Award size={16} />
                    <span>Top Rated Agent</span>
                  </div>
                </div>
              </div>
              
              <div className="contact-divider-line"></div>
              
              <div className="contact-item-gna">
                <Phone size={20} />
                <div>
                  <span className="label">Mobile:</span>
                  <span className="value">+254 787 855213</span>
                </div>
              </div>
              <div className="contact-item-gna">
                <Mail size={20} />
                <div>
                  <span className="label">Email:</span>
                  <span className="value">info.sorrelproperties@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-image-section">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Property" 
          className="hero-background-img"
        />
      </div>
    </section>
  );
};

export default Hero;