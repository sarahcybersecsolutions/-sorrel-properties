import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, DollarSign, MessageCircle, Lock } from 'lucide-react';
import { useCurrency } from '../contexts/CurrencyContext';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currency, toggleCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-info-bar">
        <div className="container">
          <div className="top-info-content">
            <div className="top-info-left">
              <a href="tel:+254787855213" className="top-info-item">
                <Phone size={14} />
                <span>+254 787 855213</span>
              </a>
              <a href="mailto:info.sorrelproperties@gmail.com" className="top-info-item">
                <Mail size={14} />
                <span>info.sorrelproperties@gmail.com</span>
              </a>
            </div>
            <div className="top-info-right">
              {/* Currency Toggle */}
              <button 
                className="currency-toggle"
                onClick={toggleCurrency}
                title="Click to switch currency"
              >
                <DollarSign size={14} />
                <span>{currency}</span>
                <span className="currency-arrow">⇄</span>
                <span>{currency === 'KES' ? 'USD' : 'KES'}</span>
              </button>
              <span className="top-info-item">
                <MapPin size={14} />
                <span>Nairobi, Kenya</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Bar */}
      <div className="floating-contact-bar">
        <a href="tel:+254787855213" className="floating-contact-item phone" title="Call Us">
          <Phone size={20} />
        </a>
        <a 
          href="https://wa.me/254787855213" 
          className="floating-contact-item whatsapp" 
          title="WhatsApp"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
        </a>
        <a href="mailto:info.sorrelproperties@gmail.com" className="floating-contact-item email" title="Email Us">
          <Mail size={20} />
        </a>
      </div>

      {/* Main Navigation */}
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src="/sorrel-logo-black.webp" alt="Sorrel Properties" className="nav-logo-img" />
          </Link>

          <div className="nav-links desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-nav-cta">
              Get Started
            </Link>
            <Link to="/admin" className="nav-login-btn" title="Admin Login">
              <Lock size={16} />
              Login
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Currency Toggle */}
          <button 
            className="mobile-currency-toggle"
            onClick={() => {
              toggleCurrency();
              setIsMobileMenuOpen(false);
            }}
          >
            <DollarSign size={18} />
            Switch to {currency === 'KES' ? 'USD' : 'KES'}
          </button>
          
          <Link
            to="/contact"
            className="btn btn-nav-cta mobile-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>

          <Link
            to="/admin"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Lock size={18} /> Admin Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;