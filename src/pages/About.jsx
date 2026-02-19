import React from 'react';
import { Award, Users, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: <Building2 size={32} />, value: "2,500+", label: "Properties Sold" },
    { icon: <Users size={32} />, value: "1,200+", label: "Happy Clients" },
    { icon: <Award size={32} />, value: "8+", label: "Years Experience" },
    { icon: <TrendingUp size={32} />, value: "98%", label: "Success Rate" }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We believe in honest and transparent dealings with all our clients."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every transaction and interaction."
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge technology to enhance your experience."
    },
    {
      title: "Commitment",
      description: "We're committed to finding the perfect property for every client."
    }
  ];

  const team = [
    {
      name: "Sarah",
      role: "Lead Agent & Property Consultant",
      image: "/sarah-agent.jpg"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">
              Finding You the<br />
              <span className="gradient-text">Perfect Place</span>
            </h1>
            <p className="about-description">
              For over 8 years, we have been helping people in Nairobi find their ideal homes. 
              From first-time buyers to experienced investors, our focus has always been on 
              understanding what our clients need and delivering results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-value-large">{stat.value}</span>
                <span className="stat-label-text">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="section-title">What We Do</h2>
              <p className="mission-text">
                We make it easier for you to find the right property. Whether you're looking 
                to buy your first home, invest in real estate, or find a rental property, 
                our team is here to support you at every stage of the process.
              </p>
              <ul className="mission-list">
                <li>
                  <CheckCircle size={20} />
                  <span>Personalized property matching based on your preferences</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Expert guidance throughout the entire buying process</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Access to exclusive listings and off-market properties</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Comprehensive market analysis and valuation services</span>
                </li>
              </ul>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our mission"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Your Agent</h2>
            <p className="section-subtitle">Your dedicated property consultant</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;