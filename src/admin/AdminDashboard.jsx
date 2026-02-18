import React, { useState } from 'react';
import { properties } from '../data/properties';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('add');
  const [message, setMessage] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    beds: '',
    baths: '',
    sqft: '',
    type: 'House',
    image: '',
    featured: false,
    status: 'For Sale'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new property
    const newProperty = {
      id: properties.length + 1,
      title: formData.title,
      location: formData.location,
      price: parseInt(formData.price),
      beds: parseInt(formData.beds),
      baths: parseInt(formData.baths),
      sqft: parseInt(formData.sqft),
      type: formData.type,
      image: formData.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: formData.featured,
      status: formData.status
    };

    // Add to properties array
    properties.push(newProperty);
    
    // Show success message
    setMessage('✅ Property added successfully!');
    
    // Reset form
    setFormData({
      title: '',
      location: '',
      price: '',
      beds: '',
      baths: '',
      sqft: '',
      type: 'House',
      image: '',
      featured: false,
      status: 'For Sale'
    });

    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <div className="admin-header-content">
          <h1>🏠 Sorrel Properties Admin</h1>
          <button onClick={onLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </div>

      <div className="admin-container">
        {/* Sidebar */}
        <div className="admin-sidebar">
          <button 
            className={`sidebar-btn ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            ➕ Add Property
          </button>
          <button 
            className={`sidebar-btn ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            📋 View Properties ({properties.length})
          </button>
        </div>

        {/* Main Content */}
        <div className="admin-main">
          {message && <div className="success-message">{message}</div>}

          {activeTab === 'add' ? (
            <div className="add-property-form">
              <h2>Add New Property</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Property Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Luxury Apartment in Westlands"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Westlands, Nairobi"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Price (KES) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g., 12500000"
                      required
                    />
                    <small>Enter amount in Kenyan Shillings</small>
                  </div>
                  
                  <div className="form-group">
                    <label>Property Type *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Land">Land</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Townhouse">Townhouse</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Bedrooms</label>
                    <input
                      type="number"
                      name="beds"
                      value={formData.beds}
                      onChange={handleInputChange}
                      placeholder="e.g., 3"
                      min="0"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Bathrooms</label>
                    <input
                      type="number"
                      name="baths"
                      value={formData.baths}
                      onChange={handleInputChange}
                      placeholder="e.g., 2"
                      min="0"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Square Feet</label>
                    <input
                      type="number"
                      name="sqft"
                      value={formData.sqft}
                      onChange={handleInputChange}
                      placeholder="e.g., 1500"
                      min="0"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="For Sale">For Sale</option>
                      <option value="For Rent">For Rent</option>
                    </select>
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                      />
                      Featured Property (Show on Homepage)
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                  />
                  <small>Leave empty for default image. You can get free images from unsplash.com</small>
                </div>

                <button type="submit" className="btn-submit">
                  🚀 Add Property
                </button>
              </form>
            </div>
          ) : (
            <div className="properties-list">
              <h2>All Properties ({properties.length})</h2>
              <div className="properties-grid-admin">
                {properties.map(property => (
                  <div key={property.id} className="property-card-admin">
                    <img src={property.image} alt={property.title} />
                    <div className="property-info">
                      <h3>{property.title}</h3>
                      <p>{property.location}</p>
                      <p className="price">KES {property.price.toLocaleString()}</p>
                      <span className={`badge ${property.featured ? 'featured' : ''}`}>
                        {property.featured ? '⭐ Featured' : property.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;