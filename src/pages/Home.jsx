import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSlideshow from '../components/HeroSlideshow';
import Services from '../components/Services';
import StatsCounter from '../components/StatsCounter';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { ArrowRight, Award, HomeIcon, Building, MapPin, Lock, X } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const featuredProperties = properties;
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  useEffect(() => {
    if (sessionStorage.getItem('showAdminLogin') === 'true') {
      sessionStorage.removeItem('showAdminLogin');
      setShowLogin(true);
    }
    if (window.location.hash === '#gotoadmin') {
      navigate('/admin');
    }
  }, [navigate]);
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginPassword === 'sorrel2026') {
      sessionStorage.setItem('adminAuth', 'true');
      setShowLogin(false);
      navigate('/admin');
    } else {
      setLoginError('Incorrect password. Try: sorrel2026');
    }
  };
  
  return (
    <div className="home">
      {/* Admin Login Modal */}
      {showLogin && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: 'white', padding: '40px', borderRadius: '15px',
            maxWidth: '400px', width: '90%', textAlign: 'center', position: 'relative'
          }}>
            <button onClick={() => setShowLogin(false)} style={{
              position: 'absolute', top: '15px', right: '15px',
              background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px'
            }}><X size={24} /></button>
            <h2 style={{color: '#1e3a5f', marginBottom: '20px'}}>Admin Login</h2>
            <form onSubmit={handleLogin}>
              <input type="password" placeholder="Enter password" value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)} style={{
                  width: '100%', padding: '14px', borderRadius: '8px',
                  border: '2px solid #ddd', fontSize: '16px', marginBottom: '15px'
                }} />
              <button type="submit" style={{
                width: '100%', padding: '14px', background: '#1e3a5f',
                color: 'white', border: 'none', borderRadius: '8px',
                fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
              }}>Login</button>
              {loginError && <p style={{color: 'red', marginTop: '10px'}}>{loginError}</p>}
            </form>
          </div>
        </div>
      )}
      
      {/* Hero Slideshow - Rotating Luxury Images */}
      <HeroSlideshow />
      
      {/* SEO Keywords Banner */}
      <section style={{background: '#1e3a5f', color: 'white', padding: '20px 0', textAlign: 'center'}}>
        <div className="container">
          <p style={{margin: 0, fontSize: '13px', lineHeight: '1.8'}}>
            <strong>Property for sale Westlands Nairobi</strong> | 
            <strong> Apartments for rent Kilimani</strong> | 
            <strong> Luxury homes Karen</strong> | 
            <strong> Buy house Lavington</strong> | 
            <strong> Townhouse Kileleshwa</strong> | 
            <strong> Studio apartment Nairobi</strong> |
            <strong> Land for sale Nairobi</strong>
          </p>
        </div>
      </section>
      
      {/* Properties Listings Section */}
      <section className="properties-listing-section" style={{padding: '80px 0', background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header-gna" style={{textAlign: 'center', marginBottom: '50px'}}>
            <span className="section-badge">Our Listings</span>
            <h2 className="section-title-gna">Premium Properties for Sale in Westlands, Nairobi</h2>
            <p className="section-subtitle-gna">Discover luxury apartments, villas, and townhouses in Nairobi's most sought-after locations</p>
          </div>
          
          <div className="properties-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px'}}>
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div style={{textAlign: 'center'}}>
            <Link to="/properties" className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 40px', fontSize: '16px'}}>
              View More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      
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