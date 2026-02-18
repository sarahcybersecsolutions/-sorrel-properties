import React from 'react';
import { Home, MapPin, Shield, Clock, Headphones, TrendingUp } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Home size={32} />,
      title: "Premium Properties",
      description: "Access to exclusive listings and premium properties not available on other platforms."
    },
    {
      icon: <MapPin size={32} />,
      title: "Prime Locations",
      description: "Properties in the most sought-after neighborhoods and developments."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Transactions",
      description: "Safe and secure property transactions with verified listings and trusted agents."
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you at every step of your journey."
    },
    {
      icon: <Headphones size={32} />,
      title: "Expert Guidance",
      description: "Professional real estate agents to guide you through the buying process."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Market Insights",
      description: "Get the latest market trends and property valuations to make informed decisions."
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We provide the best service and features to help you find your perfect home
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;