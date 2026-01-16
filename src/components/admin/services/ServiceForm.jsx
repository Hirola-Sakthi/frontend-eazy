import React, { useState, useEffect } from 'react';
import ImageGallery from '../serviceSections/ImageGallery';
import '../serviceSections/AdminStyles.css';

const ServiceForm = ({ service = null, onSave, onCancel }) => {
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

  const [featureInput, setFeatureInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentImageField, setCurrentImageField] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (service) {
      setFormData({
        ...service,
        features: service.features || [],
        tags: service.tags || [],
        heroConfig: service.heroConfig || formData.heroConfig
      });
    }
  }, [service]);

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
        <h2>{service ? 'Edit Service' : 'Create New Service'}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="form-section">
          <h4>Basic Information</h4>
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
              rows="5"
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
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="form-control"
                placeholder="1 month, 6 months, etc."
              />
            </div>
          </div>

          <div className="form-row">
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

        {/* Images */}
        <div className="form-section">
          <h4>Images</h4>
          <div className="form-row">
            <div className="form-group">
              <label>Service Image</label>
              <div className="image-field-group">
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Image URL"
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => openImageGallery('image')}
                >
                  Choose Image
                </button>
              </div>
              {formData.image && (
                <div style={{ marginTop: '10px' }}>
                  <img src={formData.image} alt="Preview" style={{ maxWidth: '200px', borderRadius: '4px' }} />
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Icon</label>
              <div className="image-field-group">
                <input
                  type="text"
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Icon URL"
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => openImageGallery('icon')}
                >
                  Choose Icon
                </button>
              </div>
              {formData.icon && (
                <div style={{ marginTop: '10px' }}>
                  <img src={formData.icon} alt="Preview" style={{ maxWidth: '60px', borderRadius: '4px' }} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="form-section">
          <h4>Features</h4>
          <div className="keyword-input-group">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
              className="form-control"
              placeholder="Add feature and press Enter"
            />
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleAddFeature}
            >
              Add Feature
            </button>
          </div>
          <div className="keywords-list">
            {formData.features.map((feature, index) => (
              <span key={index} className="keyword-tag">
                {feature}
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(index)}
                  className="keyword-remove"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="form-section">
          <h4>Tags</h4>
          <div className="keyword-input-group">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              className="form-control"
              placeholder="Add tag and press Enter"
            />
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
          <div className="keywords-list">
            {formData.tags.map((tag, index) => (
              <span key={index} className="keyword-tag">
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(index)}
                  className="keyword-remove"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Hero Configuration */}
        <div className="form-section">
          <h4>Hero Section Configuration</h4>
          <div className="form-row">
            <div className="form-group">
              <label>Hero Image</label>
              <div className="image-field-group">
                <input
                  type="text"
                  value={formData.heroConfig.heroImage}
                  onChange={(e) => handleHeroConfigChange('heroImage', e.target.value)}
                  className="form-control"
                  placeholder="Hero background image URL"
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => openImageGallery('heroConfig.heroImage')}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>

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
              <label>Gradient From Color</label>
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
              <label>Gradient To Color</label>
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

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.heroConfig.showFeatures}
                onChange={(e) => handleHeroConfigChange('showFeatures', e.target.checked)}
              />
              {' '}Show Features in Hero
            </label>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : service ? 'Update Service' : 'Create Service'}
          </button>
        </div>
      </form>

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

export default ServiceForm;
