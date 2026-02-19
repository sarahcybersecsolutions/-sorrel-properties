import React, { useState } from 'react';
import { properties as initialProperties } from '../data/properties';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [properties, setProperties] = useState(initialProperties);
  const [activeTab, setActiveTab] = useState('add');
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    location: '',
    price: '',
    beds: '',
    baths: '',
    sqft: '',
    type: 'Apartment',
    image: '',
    category: 'ongoing-projects',
    status: 'ongoing',
    completionDate: 'Ongoing',
    forSaleOrRent: 'For Sale',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEdit = (property) => {
    setFormData({
      id: property.id,
      title: property.title || '',
      location: property.location || '',
      price: property.price || '',
      beds: property.beds || '',
      baths: property.baths || '',
      sqft: property.sqft || '',
      type: property.type || 'Apartment',
      image: property.image || '',
      category: property.category || 'ongoing-projects',
      status: property.status || 'ongoing',
      completionDate: property.completionDate || 'Ongoing',
      forSaleOrRent: property.forSaleOrRent || 'For Sale',
      description: property.description || ''
    });
    setEditingId(property.id);
    setActiveTab('edit');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const updatedProperty = {
      id: formData.id,
      title: formData.title,
      location: formData.location,
      price: parseInt(formData.price),
      beds: parseInt(formData.beds),
      baths: parseInt(formData.baths),
      sqft: parseInt(formData.sqft),
      type: formData.type,
      image: formData.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: formData.category,
      status: formData.status,
      completionDate: formData.completionDate,
      forSaleOrRent: formData.forSaleOrRent,
      description: formData.description
    };

    setProperties(prev => prev.map(p => p.id === formData.id ? updatedProperty : p));
    setMessage('✅ Property updated successfully!');
    setEditingId(null);
    setActiveTab('add');
    resetForm();
    setTimeout(() => setMessage(''), 3000);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      location: '',
      price: '',
      beds: '',
      baths: '',
      sqft: '',
      type: 'Apartment',
      image: '',
      category: 'ongoing-projects',
      status: 'ongoing',
      completionDate: 'Ongoing',
      forSaleOrRent: 'For Sale',
      description: ''
    });
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
      category: formData.category,
      status: formData.status,
      completionDate: formData.completionDate,
      forSaleOrRent: formData.forSaleOrRent,
      description: formData.description
    };

    // Add to properties array
    setProperties(prev => [...prev, newProperty]);
    
    // Show success message
    setMessage('✅ Property added successfully!');
    
    // Reset form
    resetForm();
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(prev => prev.filter(p => p.id !== id));
      setMessage('✅ Property deleted successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
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

          {activeTab === 'edit' ? (
            <div className="add-property-form">
              <h2>Edit Property</h2>
              <p style={{color: '#64748b', marginBottom: '20px'}}>Editing property ID: {editingId}</p>
              
              <form onSubmit={handleUpdate}>
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
                  <label>Property Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter detailed property description. This will appear on the property listing page. Include information about amenities, location highlights, unit types, prices, nearby places, etc. No word limit - write as much as you want!"
                    rows={12}
                    style={{ minHeight: '250px', width: '100%' }}
                  />
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
                    <label>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="ongoing-projects">Ongoing Projects</option>
                      <option value="complete-projects">Complete Projects</option>
                      <option value="apartments-for-sale">For Sale</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="ongoing">Ongoing</option>
                      <option value="complete">Complete</option>
                      <option value="available">Available</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Completion Date</label>
                    <input
                      type="text"
                      name="completionDate"
                      value={formData.completionDate}
                      onChange={handleInputChange}
                      placeholder="e.g., Ongoing or Ready"
                    />
                  </div>

                  <div className="form-group">
                    <label>For Sale or Rent</label>
                    <select
                      name="forSaleOrRent"
                      value={formData.forSaleOrRent}
                      onChange={handleInputChange}
                    >
                      <option value="For Sale">For Sale</option>
                      <option value="For Rent">For Rent</option>
                    </select>
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
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn-submit">
                    💾 Save Changes
                  </button>
                  <button 
                    type="button" 
                    className="btn-cancel"
                    onClick={() => {
                      setActiveTab('add');
                      setEditingId(null);
                      resetForm();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : activeTab === 'add' ? (
            <div className="add-property-form">
              <h2>Add New Property</h2>
              
              <form onSubmit={handleSubmit}>
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
                  <label>Property Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter detailed property description. This will appear on the property listing page. Include information about amenities, location highlights, unit types, prices, nearby places, etc. No word limit - write as much as you want!"
                    rows={12}
                    style={{ minHeight: '250px', width: '100%' }}
                  />
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
                      <option value="ongoing">Ongoing</option>
                      <option value="complete">Complete</option>
                      <option value="available">Available</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>For Sale or Rent</label>
                    <select
                      name="forSaleOrRent"
                      value={formData.forSaleOrRent}
                      onChange={handleInputChange}
                    >
                      <option value="For Sale">For Sale</option>
                      <option value="For Rent">For Rent</option>
                    </select>
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
                      <div className="badge-row">
                        <span className={`badge ${property.forSaleOrRent === 'For Rent' ? 'badge-rent' : 'badge-sale'}`}>
                          {property.forSaleOrRent || 'For Sale'}
                        </span>
                        <span className="badge-status">
                          {property.status}
                        </span>
                      </div>
                    </div>
                    <div className="property-actions">
                      <button 
                        className="btn-edit" 
                        onClick={() => handleEdit(property)}
                        title="Edit Property"
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        className="btn-delete" 
                        onClick={() => handleDelete(property.id)}
                        title="Delete Property"
                      >
                        🗑️ Delete
                      </button>
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