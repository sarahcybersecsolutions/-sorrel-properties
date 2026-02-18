import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Home, Award } from 'lucide-react';
import './StatsCounter.css';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Home size={40} />,
      value: 500,
      suffix: "+",
      label: "Properties Sold",
      description: "Successfully closed deals"
    },
    {
      icon: <Users size={40} />,
      value: 1000,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers"
    },
    {
      icon: <Award size={40} />,
      value: 8,
      suffix: "+",
      label: "Years Experience",
      description: "Industry expertise"
    },
    {
      icon: <TrendingUp size={40} />,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Client satisfaction"
    }
  ];

  return (
    <section className="stats-counter-section" ref={sectionRef}>
      <div className="stats-counter-bg"></div>
      <div className="floating-shapes">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="shape" style={{ '--delay': `${i * 0.5}s` }} />
        ))}
      </div>
      
      <div className="container">
        <div className={`stats-counter-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-badge-dark">Our Impact</span>
          <h2>Numbers That Speak</h2>
          <p>Trusted by hundreds of clients across Nairobi</p>
        </div>

        <div className="stats-counter-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-counter-card ${isVisible ? 'animate-in' : ''}`}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-value-wrapper">
                {isVisible && (
                  <CounterAnimation 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                )}
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterAnimation = ({ end, suffix, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className="counter-value">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default StatsCounter;