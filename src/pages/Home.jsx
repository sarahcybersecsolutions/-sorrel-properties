import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlideshow from '../components/HeroSlideshow';
import Services from '../components/Services';
import StatsCounter from '../components/StatsCounter';
import { ArrowRight, Award, HomeIcon, Building, MapPin } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Slideshow - Rotating Luxury Images */}
      <HeroSlideshow />
      
      {/* Property Types Section */}
      <section className="property-types-section">
        <div className="container">
          <div className="section-header-gna">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title-gna">Premium Property Types</h2>
            <p className="section-subtitle-gna">Luxury homes and townhouses in Nairobi's finest neighborhoods</p>
          </div>
          
          <div className="property-types-grid">
            <div className="property-type-card luxury">
              <div className="type-icon">
                <HomeIcon size={40} />
              </div>
              <h3>Luxury Villas</h3>
              <p>Exclusive villas in Lavington, Karen, and Kileleshwa with spacious gardens and modern amenities.</p>
              <div className="type-locations">
                <MapPin size={14} />
                <span>Lavington • Karen • Kileleshwa</span>
              </div>
            </div>
            
            <div className="property-type-card townhouse">
              <div className="type-icon">
                <Building size={40} />
              </div>
              <h3>Townhouses</h3>
              <p>Contemporary townhouses in Riverside and Kilimani perfect for modern family living.</p>
              <div className="type-locations">
                <MapPin size={14} />
                <span>Riverside • Kilimani</span>
              </div>
            </div>
            
            <div className="property-type-card apartment">
              <div className="type-icon">
                <Building size={40} />
              </div>
              <h3>Luxury Apartments</h3>
              <p>High-end apartments and penthouses in Westlands with stunning city views.</p>
              <div className="type-locations">
                <MapPin size={14} />
                <span>Westlands • Kilimani</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      
      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Trust Section - GNA Style */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-content">
              <h2 className="trust-title">
                Your Trusted<br />
                <span className="highlight">Property Partner</span>
              </h2>
              <p className="trust-description">
                We help you find the perfect home in Nairobi's most desirable neighborhoods. 
                Whether you're buying your first home, investing in property, or looking for a new place, 
                our team is here to guide you through every step of the journey.
              </p>
              <div className="trust-buttons">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="trust-image">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Sorrel Properties" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-gna">
        <div className="container">
          <div className="cta-content-gna">
            <h2>Ready to Find Your Perfect Property?</h2>
            <p>Let our expert agents guide you through every step of the process</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;