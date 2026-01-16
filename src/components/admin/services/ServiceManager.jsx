import React, { useState, useEffect } from 'react';
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
  duplicateService
} from '../../../api/admin/service.api';
import IntegratedServiceForm from './IntegratedServiceForm';
import '../serviceSections/AdminStyles.css';

const ServiceManager = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    search: '',
    isActive: ''
  });

  useEffect(() => {
    fetchServices();
  }, [filters]);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await getAllServices(filters);
      setServices(response.services || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      alert('Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateService = () => {
    setEditingService(null);
    setShowForm(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleSaveService = async (serviceData) => {
    try {
      if (editingService) {
        await updateService(editingService._id, serviceData);
        alert('Service updated successfully!');
      } else {
        await createService(serviceData);
        alert('Service created successfully!');
      }
      setShowForm(false);
      setEditingService(null);
      fetchServices();
    } catch (error) {
      console.error('Error saving service:', error);
      alert(error.response?.data?.message || 'Failed to save service');
    }
  };

  const handleDeleteService = async (id) => {
    if (!confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
      return;
    }

    try {
      await deleteService(id);
      alert('Service deleted successfully!');
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service');
    }
  };

  const handleDuplicateService = async (id) => {
    try {
      await duplicateService(id);
      alert('Service duplicated successfully!');
      fetchServices();
    } catch (error) {
      console.error('Error duplicating service:', error);
      alert('Failed to duplicate service');
    }
  };

  if (showForm) {
    return (
      <IntegratedServiceForm
        service={editingService}
        onSave={handleSaveService}
        onCancel={() => {
          setShowForm(false);
          setEditingService(null);
        }}
      />
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Service Manager</h1>
        <button className="btn btn-primary" onClick={handleCreateService}>
          Create New Service
        </button>
      </div>

      {/* Quick Guide */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h4 style={{ marginBottom: '15px', fontWeight: '600' }}>🚀 How to Build a Service Page:</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          <div>
            <strong>1. Create Service Details</strong>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: '5px 0 0 0' }}>
              Add title, slug, description, pricing, and hero config
            </p>
          </div>
          <div>
            <strong>2. Design Page Layout</strong>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: '5px 0 0 0' }}>
              Add sections (features, testimonials, etc.) and drag to reorder
            </p>
          </div>
          <div>
            <strong>3. Publish & View</strong>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: '5px 0 0 0' }}>
              Mark as Active and view live at /services/your-slug
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <label>Category:</label>
          <input
            type="text"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            placeholder="Filter by category..."
            className="form-control"
          />
        </div>
        <div className="filter-group">
          <label>Search:</label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="Search by title or description..."
            className="form-control"
          />
        </div>
        <div className="filter-group">
          <label>Status:</label>
          <select
            value={filters.isActive}
            onChange={(e) => setFilters({ ...filters, isActive: e.target.value })}
            className="form-control"
          >
            <option value="">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </div>

      {/* Services List */}
      {loading ? (
        <div className="loading-message">Loading services...</div>
      ) : services.length === 0 ? (
        <div className="empty-message">
          No services found. Create your first service to get started!
        </div>
      ) : (
        <div className="sections-grid">
          {services.map((service) => (
            <div key={service._id} className="section-card">
              <div className="section-card-header">
                <h3>{service.title}</h3>
                <span className={service.isActive ? 'status-badge status-published' : 'status-badge status-draft'}>
                  {service.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="section-card-body">
                <p><strong>Slug:</strong> /{service.slug}</p>
                {service.category && <p><strong>Category:</strong> {service.category}</p>}
                {service.price && <p><strong>Price:</strong> {service.price}</p>}
                {service.shortDescription && (
                  <p className="section-description">{service.shortDescription}</p>
                )}
              </div>
              <div className="section-card-footer">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleEditService(service)}
                  title="Edit Service & Page Sections"
                  style={{ fontWeight: '600' }}
                >
                  ✏️ Edit Service & Sections
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => handleDuplicateService(service._id)}
                  title="Duplicate Service"
                >
                  📄 Duplicate
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteService(service._id)}
                  title="Delete Service"
                >
                  🗑️ Delete
                </button>
                {service.isActive && (
                  <a
                    href={`/services/${service.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success"
                  >
                    👁️ View Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceManager;
