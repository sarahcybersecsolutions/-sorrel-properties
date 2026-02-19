import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import { useCurrency } from '../contexts/CurrencyContext';
import { Bed, Bath, Square, MapPin, Phone, Mail, ArrowLeft, Heart, Share2, Calendar } from 'lucide-react';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currency, formatPrice } = useCurrency();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1>Property Not Found</h1>
        <button onClick={() => navigate('/properties')} className="btn btn-primary">
          Back to Properties
        </button>
      </div>
    );
  }

  return (
    <div className="property-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} />
            Back
          </button>
        </nav>

        {/* Property Header */}
        <div className="property-detail-header">
          <div className="property-title-section">
            <span className={`status-badge ${property.status.toLowerCase().replace(' ', '-')}`}>
              {property.status}
            </span>
            <h1 className="property-detail-title">{property.title}</h1>
            <div className="property-detail-location">
              <MapPin size={20} />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="property-actions">
            <button className="action-btn" aria-label="Share">
              <Share2 size={20} />
            </button>
            <button className="action-btn" aria-label="Add to favorites">
              <Heart size={20} />
            </button>
          </div>
        </div>

        {/* Property Image */}
        <div className="property-detail-image">
          <img src={property.image} alt={property.title} />
        </div>

        {/* Property Content */}
        <div className="property-detail-content">
          <div className="property-main-info">
            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="quick-stat">
                <Bed size={24} />
                <div>
                  <span className="stat-value">{property.beds}</span>
                  <span className="stat-label">Bedrooms</span>
                </div>
              </div>
              <div className="quick-stat">
                <Bath size={24} />
                <div>
                  <span className="stat-value">{property.baths}</span>
                  <span className="stat-label">Bathrooms</span>
                </div>
              </div>
              <div className="quick-stat">
                <Square size={24} />
                <div>
                  <span className="stat-value">{property.sqft.toLocaleString()}</span>
                  <span className="stat-label">Sq Ft</span>
                </div>
              </div>
              <div className="quick-stat">
                <Calendar size={24} />
                <div>
                  <span className="stat-value">2026</span>
                  <span className="stat-label">Year Built</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="property-description">
              <h2>Description</h2>
              <p>
                Experience luxury living at its finest in this stunning {property.type.toLowerCase()} 
                located in the heart of {property.location}. This exceptional property features 
                {property.beds} spacious bedrooms and {property.baths} modern bathrooms, offering 
                ample space for comfortable living.
              </p>
              <p>
                The property boasts premium finishes throughout, including hardwood flooring, 
                gourmet kitchen with high-end appliances, and large windows that flood the space 
                with natural light. The open-concept layout is perfect for entertaining, while 
                the private outdoor space provides a tranquil retreat.
              </p>
            </div>

            {/* Features */}
            <div className="property-amenities">
              <h2>Features & Amenities</h2>
              <div className="amenities-grid">
                {['Air Conditioning', 'Swimming Pool', 'Garage', 'Garden', 'Security System', 
                  'Fireplace', 'Hardwood Floors', 'Walk-in Closet', 'Balcony', 'Gym Access'].map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <div className="amenity-dot"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="contact-card">
            <h3>Interested in this property?</h3>
            <p>Contact our agents for more information or to schedule a viewing.</p>
            
            <div className="contact-agent">
              <div className="agent-avatar">
                <img src="/sarah-agent.jpg" alt="Sarah - Lead Agent" />
              </div>
              <div className="agent-info">
                <h4>Sarah</h4>
                <p>Lead Agent & Property Consultant</p>
              </div>
            </div>

            <button className="btn btn-primary contact-btn">
              <Phone size={18} />
              Call Agent
            </button>
            <button className="btn btn-secondary email-btn">
              <Mail size={18} />
              Send Email
            </button>

            <div className="contact-divider">
              <span>or</span>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;