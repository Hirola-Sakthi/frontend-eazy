import React, { useState, useEffect } from 'react';
import { getAllServiceSections, createServiceSection, updateServiceSection, deleteServiceSection } from '../../../api/admin/serviceSection.api';
import ImageGallery from '../serviceSections/ImageGallery';
import SectionFormModal from './SectionFormModal';
import '../serviceSections/AdminStyles.css';

const IntegratedServiceForm = ({ service = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    description: '',
    features: [],
    price: '',
    duration: '',
    image: '',
    icon: '',
    category: '',
    tags: [],
    heroConfig: {
      heroImage: '',
      leftImage: '',
      rightImage: '',
      buttonText: 'Get Started',
      buttonLink: '/contact',
      secondaryButtonText: '',
      secondaryButtonLink: '',
      gradientFrom: '#667eea',
      gradientTo: '#764ba2',
      showFeatures: true,
      featuresLimit: 5
    },
    isActive: true
  });

  const [sections, setSections] = useState([]);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentImageField, setCurrentImageField] = useState(null);
  const [featureInput, setFeatureInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    if (service) {
      setFormData({
        ...service,
        features: service.features || [],
        tags: service.tags || [],
        heroConfig: service.heroConfig || formData.heroConfig
      });
      fetchServiceSections(service.title, service.slug);
    }
  }, [service]);

  const fetchServiceSections = async (serviceName, serviceSlug) => {
    try {
      const response = await getAllServiceSections({ serviceName });
      const serviceSections = (response.data || []).filter(
        s => s.serviceSlug === serviceSlug || s.serviceName === serviceName
      );
      setSections(serviceSections.sort((a, b) => (a.order || 0) - (b.order || 0)));
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleHeroConfigChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      heroConfig: {
        ...prev.heroConfig,
        [field]: value
      }
    }));
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setFormData(prev => ({ ...prev, slug }));
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, featureInput.trim()]
      }));
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const openImageGallery = (fieldPath) => {
    setCurrentImageField(fieldPath);
    setShowImageGallery(true);
  };

  const handleImageSelect = (imageUrl) => {
    if (currentImageField.startsWith('heroConfig.')) {
      const field = currentImageField.split('.')[1];
      handleHeroConfigChange(field, imageUrl);
    } else {
      setFormData(prev => ({ ...prev, [currentImageField]: imageUrl }));
    }
    setShowImageGallery(false);
  };

  // Section Management
  const handleAddSection = () => {
    setEditingSection(null);
    setShowSectionModal(true);
  };

  const handleEditSection = (section) => {
    setEditingSection(section);
    setShowSectionModal(true);
  };

  const handleSaveSection = async (sectionData) => {
    const dataWithService = {
      ...sectionData,
      serviceName: formData.title,
      serviceSlug: formData.slug
    };

    try {
      if (editingSection) {
        await updateServiceSection(editingSection._id, dataWithService);
      } else {
        await createServiceSection(dataWithService);
      }
      await fetchServiceSections(formData.title, formData.slug);
      setShowSectionModal(false);
      setEditingSection(null);
    } catch (error) {
      console.error('Error saving section:', error);
      throw error;
    }
  };

  const handleDeleteSection = async (sectionId) => {
    if (!confirm('Delete this section?')) return;

    try {
      await deleteServiceSection(sectionId);
      setSections(sections.filter(s => s._id !== sectionId));
    } catch (error) {
      console.error('Error deleting section:', error);
      alert('Failed to delete section');
    }
  };

  // Drag and Drop
  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    const newSections = [...sections];
    const draggedSection = newSections[draggedItem];
    newSections.splice(draggedItem, 1);
    newSections.splice(index, 0, draggedSection);

    setDraggedItem(index);
    setSections(newSections);
  };

  const handleDragEnd = async () => {
    setDraggedItem(null);
    // Update orders in database
    const updatedSections = sections.map((section, index) => ({
      id: section._id,
      order: index
    }));

    try {
      const { updateSectionOrders } = await import('../../../api/admin/serviceSection.api');
      await updateSectionOrders(updatedSections);
    } catch (error) {
      console.error('Error updating section orders:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Failed to save service');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="section-form">
      <div className="form-header">
        <h2>{service ? 'Edit Service & Page Design' : 'Create Service & Design Page'}</h2>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          Configure service details and design the page layout all in one place
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Service Details */}
        <div className="form-section" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#1338be' }}>Step 1: Service Information</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Service Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="E-Invoicing & Billing"
                required
              />
            </div>
            <div className="form-group">
              <label>Slug *</label>
              <div className="input-group">
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e-invoicing-billing"
                  required
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={generateSlug}
                >
                  Generate
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Short Description (Max 200 chars)</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              className="form-control"
              placeholder="Brief description for listing pages"
              rows="2"
              maxLength="200"
            />
          </div>

          <div className="form-group">
            <label>Full Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Detailed description of the service"
              rows="4"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                placeholder="₹99/month or Free"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
                placeholder="Billing, Inventory, etc."
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                />
                {' '}Active
              </label>
            </div>
          </div>
        </div>

        {/* Step 2: Hero Section */}
        <div className="form-section" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#1338be' }}>Step 2: Hero Section</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Button Text</label>
              <input
                type="text"
                value={formData.heroConfig.buttonText}
                onChange={(e) => handleHeroConfigChange('buttonText', e.target.value)}
                className="form-control"
                placeholder="Get Started"
              />
            </div>
            <div className="form-group">
              <label>Button Link</label>
              <input
                type="text"
                value={formData.heroConfig.buttonLink}
                onChange={(e) => handleHeroConfigChange('buttonLink', e.target.value)}
                className="form-control"
                placeholder="/contact"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gradient From</label>
              <div className="color-picker-group">
                <input
                  type="color"
                  value={formData.heroConfig.gradientFrom}
                  onChange={(e) => handleHeroConfigChange('gradientFrom', e.target.value)}
                />
                <input
                  type="text"
                  value={formData.heroConfig.gradientFrom}
                  onChange={(e) => handleHeroConfigChange('gradientFrom', e.target.value)}
                  className="form-control"
                  placeholder="#667eea"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Gradient To</label>
              <div className="color-picker-group">
                <input
                  type="color"
                  value={formData.heroConfig.gradientTo}
                  onChange={(e) => handleHeroConfigChange('gradientTo', e.target.value)}
                />
                <input
                  type="text"
                  value={formData.heroConfig.gradientTo}
                  onChange={(e) => handleHeroConfigChange('gradientTo', e.target.value)}
                  className="form-control"
                  placeholder="#764ba2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Page Sections - DRAG AND DROP */}
        <div className="form-section" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ margin: 0, color: '#1338be' }}>Step 3: Page Sections (Drag to Reorder)</h3>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleAddSection}
              disabled={!formData.title || !formData.slug}
            >
              + Add Section
            </button>
          </div>

          {!formData.title || !formData.slug ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666', background: 'white', borderRadius: '4px' }}>
              Please fill in Service Title and generate Slug first before adding sections
            </div>
          ) : sections.length === 0 ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', background: 'white', borderRadius: '4px' }}>
              <p style={{ color: '#666', marginBottom: '15px' }}>No sections added yet. Click "Add Section" to start designing your page!</p>
              <p style={{ fontSize: '0.9rem', color: '#999' }}>
                Suggested sections: Features Cards, Features List, Testimonials, Process Steps, CTA
              </p>
            </div>
          ) : (
            <div className="sections-list">
              {sections.map((section, index) => (
                <div
                  key={section._id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragEnd={handleDragEnd}
                  className="section-card"
                  style={{
                    cursor: 'move',
                    opacity: draggedItem === index ? 0.5 : 1,
                    marginBottom: '10px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div className="section-card-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        background: '#1338be',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '600'
                      }}>
                        {index + 1}
                      </span>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1rem' }}>
                          {section.title || section.sectionType}
                        </h4>
                        <small style={{ color: '#666' }}>{section.sectionType}</small>
                      </div>
                    </div>
                    <span className={section.isActive ? 'status-badge status-published' : 'status-badge status-draft'}>
                      {section.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="section-card-body">
                    <p><strong>Items:</strong> {section.contentItems?.length || 0}</p>
                    {section.subtitle && <p><strong>Subtitle:</strong> {section.subtitle}</p>}
                  </div>
                  <div className="section-card-footer">
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEditSection(section)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteSection(section._id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="form-actions" style={{ position: 'sticky', bottom: 0, background: 'white', padding: '20px', borderTop: '2px solid #e0e0e0', zIndex: 100 }}>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : service ? 'Update Service & Sections' : 'Create Service & Sections'}
          </button>
        </div>
      </form>

      {/* Section Modal */}
      {showSectionModal && (
        <SectionFormModal
          section={editingSection}
          serviceName={formData.title}
          serviceSlug={formData.slug}
          onSave={handleSaveSection}
          onCancel={() => {
            setShowSectionModal(false);
            setEditingSection(null);
          }}
        />
      )}

      {/* Image Gallery Modal */}
      {showImageGallery && (
        <div className="image-picker-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Select Image</h2>
              <button className="close-btn" onClick={() => setShowImageGallery(false)}>×</button>
            </div>
            <ImageGallery onSelectImage={handleImageSelect} allowUpload={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegratedServiceForm;
