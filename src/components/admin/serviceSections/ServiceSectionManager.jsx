import React, { useState, useEffect } from 'react';
import {
  getAllServiceSections,
  createServiceSection,
  updateServiceSection,
  deleteServiceSection,
  updateSectionOrders,
  toggleSectionVisibility,
  duplicateServiceSection
} from '../../../api/admin/serviceSection.api';
import SectionForm from './SectionForm';
import SectionPreview from './SectionPreview';
import './AdminStyles.css';

const ServiceSectionManager = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [filterService, setFilterService] = useState('');
  const [filterType, setFilterType] = useState('');
  const [previewSection, setPreviewSection] = useState(null);

  useEffect(() => {
    fetchSections();
  }, [filterService, filterType]);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const filters = {};
      if (filterService) filters.serviceName = filterService;
      if (filterType) filters.sectionType = filterType;
      const response = await getAllServiceSections(filters);
      setSections(response.data || []);
    } catch (error) {
      console.error('Error fetching sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setEditingSection(null);
    setShowForm(true);
  };

  const handleEdit = (section) => {
    setEditingSection(section);
    setShowForm(true);
  };

  const handleSave = async (sectionData) => {
    try {
      if (editingSection) {
        await updateServiceSection(editingSection._id, sectionData);
      } else {
        await createServiceSection(sectionData);
      }
      setShowForm(false);
      setEditingSection(null);
      fetchSections();
    } catch (error) {
      console.error('Error saving section:', error);
      throw error;
    }
  };

  const handleDelete = async (sectionId) => {
    if (!window.confirm('Are you sure you want to delete this section?')) return;

    try {
      await deleteServiceSection(sectionId);
      fetchSections();
    } catch (error) {
      console.error('Error deleting section:', error);
      alert('Failed to delete section');
    }
  };

  const handleToggleActive = async (sectionId) => {
    try {
      await toggleSectionVisibility(sectionId);
      fetchSections();
    } catch (error) {
      console.error('Error toggling section:', error);
      alert('Failed to toggle section');
    }
  };

  const handleDuplicate = async (sectionId) => {
    try {
      await duplicateServiceSection(sectionId);
      fetchSections();
    } catch (error) {
      console.error('Error duplicating section:', error);
      alert('Failed to duplicate section');
    }
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newSections = [...sections];
    [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
    updateOrders(newSections);
  };

  const handleMoveDown = (index) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    updateOrders(newSections);
  };

  const updateOrders = async (newSections) => {
    const ordersData = newSections.map((section, index) => ({
      id: section._id,
      order: index
    }));

    try {
      await updateSectionOrders(ordersData);
      setSections(newSections);
    } catch (error) {
      console.error('Error updating orders:', error);
      alert('Failed to update orders');
    }
  };

  const getServiceNames = () => {
    const names = new Set(sections.map(s => s.serviceName));
    return Array.from(names);
  };

  if (showForm) {
    return (
      <div className="section-manager">
        <div className="manager-header">
          <h1>{editingSection ? 'Edit Section' : 'Create New Section'}</h1>
          <button className="btn btn-secondary" onClick={() => setShowForm(false)}>
            Back to List
          </button>
        </div>
        <SectionForm
          section={editingSection}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      </div>
    );
  }

  return (
    <div className="section-manager">
      <div className="manager-header">
        <h1>Service Section Manager</h1>
        <button className="btn btn-primary" onClick={handleCreateNew}>
          Create New Section
        </button>
      </div>

      <div className="filters-bar" style={{ marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label>Filter by Service</label>
          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="form-control"
          >
            <option value="">All Services</option>
            {getServiceNames().map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label>Filter by Type</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="form-control"
          >
            <option value="">All Types</option>
            <option value="banner_below">Banner Below</option>
            <option value="software_features">Software Features</option>
            <option value="features_grid">Features Grid</option>
            <option value="process_section">Process Section</option>
            <option value="why_section">Why Section</option>
            <option value="custom_section">Custom Section</option>
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label>&nbsp;</label>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setFilterService('');
              setFilterType('');
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div className="spinner-border" role="status"></div>
          <p>Loading sections...</p>
        </div>
      ) : sections.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '8px' }}>
          <p>No sections found. Create your first section to get started!</p>
        </div>
      ) : (
        <div className="sections-list">
          {sections.map((section, index) => (
            <div key={section._id} className="section-card">
              <div className="section-header">
                <div className="section-info">
                  <h3>
                    <span className="section-type-badge">{section.sectionType}</span>
                    {section.title || 'Untitled Section'}
                  </h3>
                  <p style={{ margin: '5px 0', color: '#666' }}>
                    Service: <strong>{section.serviceName}</strong> | Order: <strong>{section.order}</strong> |
                    Status: <strong style={{ color: section.isActive ? '#28a745' : '#dc3545' }}>
                      {section.isActive ? 'Active' : 'Inactive'}
                    </strong>
                  </p>
                </div>
                <div className="section-actions">
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                  >
                    ↑
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === sections.length - 1}
                  >
                    ↓
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setPreviewSection(previewSection === section._id ? null : section._id)}
                  >
                    {previewSection === section._id ? 'Hide' : 'Preview'}
                  </button>
                  <button
                    className={`btn btn-sm ${section.isActive ? 'btn-secondary' : 'btn-success'}`}
                    onClick={() => handleToggleActive(section._id)}
                  >
                    {section.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleDuplicate(section._id)}
                  >
                    Duplicate
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEdit(section)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(section._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {section.description && (
                <p style={{ margin: '10px 0', color: '#666' }}>{section.description}</p>
              )}

              {previewSection === section._id && (
                <div className="section-preview">
                  <SectionPreview section={section} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSectionManager;
