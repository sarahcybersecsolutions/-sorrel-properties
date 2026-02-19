import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Phone, Mail, Star, Shield, Award, Building } from 'lucide-react';
import './HeroSlideshow.css';

const stunningImages = [
  {
    url: "https://farmanrealestate.com/storage/app/uploads/public/693/d7a/f95/693d7af95a582177344412.jpeg",
    title: "Luxury Living",
    location: "Ring Road, Westlands",
    description: "Studio from Ksh 6.2M • 1BR from Ksh 7.5M • 2BR from Ksh 13.8M • 3BR+DSQ from Ksh 19.8M • Near Kingfisher Hotel",
    tag: "Ongoing",
    beds: 0,
    baths: 0,
    price: "From Ksh 6.2M",
    completion: "Ongoing"
  },
  {
    url: "https://sydiarealty.com/wp-content/uploads/2025/01/Diamond-Bay-Residence-11-1600x790.jpg",
    title: "Modern Apartments",
    location: "Westlands Road, Westlands",
    description: "1BR from Ksh 8.7M • 2BR from Ksh 14.8M • 2 Blocks x 23 Floors • Smart Home Features",
    tag: "Ongoing",
    beds: 0,
    baths: 0,
    price: "From Ksh 8.7M",
    completion: "Ongoing"
  },
  {
    url: "https://sydiarealty.com/wp-content/uploads/2025/01/Oak-Residency-8-1066x790.jpg",
    title: "Urban Residence",
    location: "Mogotio Road, Westlands",
    description: "1BR from Ksh 8.1M • 2BR from Ksh 14.1M • 3BR from Ksh 16.9M • Rooftop Pool & Gym",
    tag: "Ongoing",
    beds: 0,
    baths: 0,
    price: "From Ksh 8.1M",
    completion: "Ongoing"
  },
  {
    url: "https://sydiarealty.com/wp-content/uploads/2025/01/Diplomat-Residencies-2-1280x790.jpg",
    title: "Premium Suites",
    location: "Peponi Road, Westlands",
    description: "1BR from Ksh 6.1M • 2BR from Ksh 13.2M • Near Westgate & Sarit Centre • Hotel Lobby",
    tag: "Ongoing",
    beds: 0,
    baths: 0,
    price: "From Ksh 6.1M",
    completion: "Ongoing"
  },
  {
    url: "https://sydiarealty.com/wp-content/uploads/2025/08/Galaxy-One-3-1080x790.jpg",
    title: "Skyline View",
    location: "Rhapta Road, Westlands",
    description: "1BR from Ksh 7M • 2BR from Ksh 11M • 3BR from Ksh 19M • 270° Views • Infinity Pool",
    tag: "Ongoing",
    beds: 0,
    baths: 0,
    price: "From Ksh 7M",
    completion: "Ongoing"
  },
  {
    url: "https://sydiarealty.com/wp-content/uploads/2024/12/Marble-West-5-1280x790.jpg",
    title: "Ready for You",
    location: "Westlands, Nairobi",
    description: "From Ksh 7.2M • Ready for Occupation • Modern Finishes • Prime Location",
    tag: "Complete",
    beds: 0,
    baths: 0,
    price: "From Ksh 7.2M",
    completion: "Ready"
  }
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stunningImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stunningImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stunningImages.length) % stunningImages.length);
  };

  const currentImage = stunningImages[currentIndex];

  return (
    <section className="hero-stunning">
      {/* Background Images */}
      <div className="stunning-slideshow-container">
        {stunningImages.map((image, index) => (
          <div
            key={index}
            className={`stunning-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="stunning-slide-overlay"></div>
          </div>
        ))}
      </div>

      {/* Animated Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      {/* Content */}
      <div className="hero-stunning-content">
        <div className="container">
          <div className="stunning-text-wrapper">
            {/* Badge */}
            <div className="stunning-badge animate-fade-in">
              <Star size={16} className="star-icon" />
              <span>{currentImage.tag}</span>
            </div>

            {/* Title */}
            <h1 className="stunning-title animate-slide-up">
              {currentImage.title}
            </h1>

            {/* Location */}
            <div className="stunning-location animate-slide-up-delay">
              <div className="location-pill">
                <span className="location-dot"></span>
                {currentImage.location}
              </div>
            </div>

            {/* Features */}
            <div className="stunning-features animate-slide-up-delay-2">
              <div className="feature-pill premium">
                <Building size={14} />
                <span>{currentImage.price}</span>
              </div>
              <div className={`feature-pill ${currentImage.tag === 'Ongoing' ? 'ongoing-tag' : 'complete-tag'}`}>
                <span>{currentImage.tag}</span>
              </div>
            </div>

            {/* Completion Date */}
            <div className="completion-date-badge animate-fade-in-delay">
              <span className="completion-label">Completion:</span>
              <span className="completion-value">{currentImage.completion}</span>
            </div>

            {/* Description */}
            <p className="stunning-description animate-fade-in-delay-2">
              {currentImage.description}
            </p>

            {/* CTA Buttons */}
            <div className="stunning-buttons animate-slide-up-delay-3">
              <a href="/properties" className="btn-stunning-primary">
                <span>View Properties</span>
                <ArrowRight size={20} />
              </a>
              <a href="tel:+254787855213" className="btn-stunning-secondary">
                <Phone size={18} />
                <span>Call +254 787 855213</span>
              </a>
            </div>

            {/* Quick Contact */}
            <div className="quick-contact-bar animate-fade-in-delay-3">
              <div className="quick-contact-item">
                <div className="icon-circle">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="label">Call Us</span>
                  <span className="value">+254 787 855213</span>
                </div>
              </div>
              <div className="quick-contact-divider"></div>
              <div className="quick-contact-item">
                <div className="icon-circle">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="label">Email</span>
                  <span className="value">info.sorrelproperties@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button className="stunning-arrow prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="stunning-arrow next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="stunning-dots">
        {stunningImages.map((_, index) => (
          <button
            key={index}
            className={`stunning-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            {index === currentIndex && <div className="dot-progress"></div>}
          </button>
        )        )}
      </div>
    </section>
  );
};

export default HeroSlideshow;