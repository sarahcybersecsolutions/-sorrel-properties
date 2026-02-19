import React from 'react';
import { Home, FileText, Building, TrendingUp, Users, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: "Estate Agency",
      description: "We assist in all aspects of property management, renting, sales and purchase processes to ensure that value is maximized.",
      color: "#3b82f6"
    },
    {
      icon: <FileText size={48} />,
      title: "Feasibility Studies",
      description: "We conduct studies prior to a project's undertaking to ascertain viability and profitability subject to certain conditions.",
      color: "#8b5cf6"
    },
    {
      icon: <Building size={48} />,
      title: "Facility Management",
      description: "We focus on facilities management function and co-ordination, allowing you to focus on your business growth.",
      color: "#ec4899"
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Investment Advisory",
      description: "Expert guidance on real estate investments with high return potential and low risk profiles for maximum growth.",
      color: "#10b981"
    },
    {
      icon: <Users size={48} />,
      title: "Property Valuation",
      description: "Professional property valuation services to determine accurate market value for buying, selling, or financing.",
      color: "#f59e0b"
    },
    {
      icon: <Shield size={48} />,
      title: "Legal Consultation",
      description: "Comprehensive legal support for property transactions, ensuring smooth and secure documentation processes.",
      color: "#ef4444"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="section-badge">What We Offer</span>
          <h2>How We Can Help You</h2>
          <p>Find the right property with our dedicated support and expertise</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{'--service-color': service.color}}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;