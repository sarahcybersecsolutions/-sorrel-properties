import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Clock, CheckCircle, Building } from 'lucide-react';
import { useCurrency } from '../contexts/CurrencyContext';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const { currency, formatPrice } = useCurrency();

  const getCategoryBadge = () => {
    switch (property.category) {
      case 'apartments-for-sale':
        return { icon: Building, label: 'For Sale', className: 'badge-sale' };
      case 'ongoing-projects':
        return { icon: Clock, label: 'Ongoing', className: 'badge-ongoing' };
      case 'complete-projects':
        return { icon: CheckCircle, label: 'Complete', className: 'badge-complete' };
      default:
        return null;
    }
  };

  const badge = getCategoryBadge();

  return (
    <div className="property-card-gna">
      <div className="property-image-container-gna">
        <img 
          src={property.image} 
          alt={property.title}
          className="property-image-gna"
          loading="lazy"
        />
        {badge && (
          <div className={`property-badge ${badge.className}`}>
            <badge.icon size={14} />
            <span>{badge.label}</span>
          </div>
        )}
        {property.completionDate && (
          <div className="completion-date">
            <Clock size={14} />
            <span>Completion: {property.completionDate}</span>
          </div>
        )}
        <div className="property-overlay-gna">
          <Link to={`/property/${property.id}`} className="view-listing-btn">
            View Listing
          </Link>
        </div>
      </div>
      
      <div className="property-content-gna">
        <h3 className="property-title-gna">{property.title}</h3>
        
        <div className="property-price-gna">
          <span className="price-label">Price</span>
          <span className="price-value">{formatPrice(property.price)}</span>
          <span className="price-currency">{currency}</span>
        </div>
        
        <div className="property-rooms-gna">
          <span className="room-item">
            <Bed size={16} />
            {property.beds} Beds
          </span>
          <span className="room-item">
            <Bath size={16} />
            {property.baths} Baths
          </span>
        </div>
        
        <div className="property-location-gna">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;