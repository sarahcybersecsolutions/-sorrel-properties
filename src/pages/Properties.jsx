import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { Search, Filter, Grid, List, Building, Clock, CheckCircle } from 'lucide-react';
import './Properties.css';

const Properties = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterType, setFilterType] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All Properties', icon: Grid },
    { value: 'apartments-for-sale', label: 'Apartments for Sale', icon: Building },
    { value: 'ongoing-projects', label: 'Ongoing Projects', icon: Clock },
    { value: 'complete-projects', label: 'Complete Projects', icon: CheckCircle },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType;
    const matchesCategory = filterCategory === 'all' || property.category === filterCategory;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  return (
    <div className="properties-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Properties</h1>
          <p className="page-subtitle">Discover your perfect home from our extensive collection</p>
        </div>
      </div>

      <div className="container">
        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.value}
                className={`category-tab ${filterCategory === cat.value ? 'active' : ''}`}
                onClick={() => setFilterCategory(cat.value)}
              >
                <Icon size={18} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
        {/* Filters Bar */}
        <div className="filters-bar">
          <div className="search-box-properties">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by location or property name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <Filter size={18} />
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid size={20} />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Showing {filteredProperties.length} properties</p>
        </div>

        {/* Properties Grid/List */}
        <div className={`properties-container ${viewMode}`}>
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="no-results">
            <h3>No properties found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;