import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/sorrel-logo-black.webp" alt="Sorrel Properties" className="footer-logo-img" />
              <p className="footer-description">
                Your trusted partner in finding the perfect property. We make buying, 
                selling, and renting properties simple and stress-free.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/properties">Properties</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Property Types</h4>
              <ul>
                <li><Link to="/properties?type=house">Houses</Link></li>
                <li><Link to="/properties?type=apartment">Apartments</Link></li>
                <li><Link to="/properties?type=condo">Condos</Link></li>
                <li><Link to="/properties?type=commercial">Commercial</Link></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); setTimeout(() => {const event = new CustomEvent('showAdminLogin'); window.dispatchEvent(event);}, 300);}} style={{color: '#666', fontSize: '12px', marginTop: '10px', display: 'block'}}>Admin Login</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>Westlands Commercial Centre<br />Nairobi, Kenya</span>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+254 787 855213</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>info.sorrelproperties@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2026 Sorrel Properties. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;