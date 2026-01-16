import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import SectionPreview from './SectionPreview';
import './AdminStyles.css';

const SECTION_TYPES = [
  { value: 'banner_below', label: 'Banner Below (H1 Title)' },
  { value: 'software_features', label: 'Software Features (H2 + Icons)' },
  { value: 'features_grid', label: 'Features Grid' },
  { value: 'features_cards_carousel', label: 'Feature Cards with Carousel' },
  { value: 'features_list_expandable', label: 'Features List (Expandable with Read More)' },
  { value: 'process_section', label: 'Process Section' },
  { value: 'why_section', label: 'Why Section' },
  { value: 'testimonials', label: 'Testimonials' },
  { value: 'content_blocks', label: 'Content Blocks' },
  { value: 'stats_counter', label: 'Stats Counter' },
  { value: 'cta_section', label: 'Call to Action' },
  { value: 'custom_html', label: 'Custom HTML Section (Advanced)' }
];

const SectionForm = ({ section = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    serviceName: '',
    sectionType: 'banner_below',
    title: '',
    subtitle: '',
    description: '',
    image: '',
    buttonText: '',
    buttonLink: '',
    items: [],
    processSteps: [],
    htmlContent: '',
    cssContent: '',
    order: 0,
    isActive: true,
    backgroundColor: '#ffffff',
    textColor: '#000000',
    customStyles: {}
  });

  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentImageField, setCurrentImageField] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (section) {
      setFormData({
        ...section,
        items: section.items || [],
        processSteps: section.processSteps || [],
        customStyles: section.customStyles || {}
      });
    }
  }, [section]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const openImageGallery = (fieldPath) => {
    setCurrentImageField(fieldPath);
    setShowImageGallery(true);
  };

  const handleImageSelect = (imageUrl) => {
    if (currentImageField.startsWith('items[')) {
      const match = currentImageField.match(/items\[(\d+)\]\.(\w+)/);
      if (match) {
        const index = parseInt(match[1]);
        const field = match[2];
        const newItems = [...formData.items];
        newItems[index] = { ...newItems[index], [field]: imageUrl };
        setFormData(prev => ({ ...prev, items: newItems }));
      }
    } else if (currentImageField.startsWith('processSteps[')) {
      const match = currentImageField.match(/processSteps\[(\d+)\]\.(\w+)/);
      if (match) {
        const index = parseInt(match[1]);
        const field = match[2];
        const newSteps = [...formData.processSteps];
        newSteps[index] = { ...newSteps[index], [field]: imageUrl };
        setFormData(prev => ({ ...prev, processSteps: newSteps }));
      }
    } else {
      setFormData(prev => ({ ...prev, [currentImageField]: imageUrl }));
    }
    setShowImageGallery(false);
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { title: '', description: '', image: '', icon: '', number: '', link: '', linkText: '', order: prev.items.length }]
    }));
  };

  const updateItem = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const removeItem = (index) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const addProcessStep = () => {
    setFormData(prev => ({
      ...prev,
      processSteps: [...prev.processSteps, { title: '', description: '', image: '', order: prev.processSteps.length }]
    }));
  };

  const updateProcessStep = (index, field, value) => {
    const newSteps = [...formData.processSteps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setFormData(prev => ({ ...prev, processSteps: newSteps }));
  };

  const removeProcessStep = (index) => {
    setFormData(prev => ({
      ...prev,
      processSteps: prev.processSteps.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } catch (error) {
      console.error('Error saving section:', error);
      alert('Failed to save section');
    } finally {
      setSaving(false);
    }
  };

  const renderBasicFields = () => (
    <>
      <div className="form-row">
        <div className="form-group">
          <label>Service Name *</label>
          <input
            type="text"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g., branding, digital-marketing"
            required
          />
        </div>
        <div className="form-group">
          <label>Section Type *</label>
          <select
            name="sectionType"
            value={formData.sectionType}
            onChange={handleChange}
            className="form-control"
            required
          >
            {SECTION_TYPES.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Section title"
          />
        </div>
        <div className="form-group">
          <label>Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="form-control"
            placeholder="Section subtitle"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          placeholder="Section description"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Display Order</label>
          <input
            type="number"
            name="order"
            value={formData.order}
            onChange={handleChange}
            className="form-control"
            min="0"
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

      <div className="form-row">
        <div className="form-group">
          <label>Background Color</label>
          <div className="color-picker-group">
            <input
              type="color"
              name="backgroundColor"
              value={formData.backgroundColor}
              onChange={handleChange}
            />
            <input
              type="text"
              name="backgroundColor"
              value={formData.backgroundColor}
              onChange={handleChange}
              className="form-control"
              placeholder="#ffffff"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Text Color</label>
          <div className="color-picker-group">
            <input
              type="color"
              name="textColor"
              value={formData.textColor}
              onChange={handleChange}
            />
            <input
              type="text"
              name="textColor"
              value={formData.textColor}
              onChange={handleChange}
              className="form-control"
              placeholder="#000000"
            />
          </div>
        </div>
      </div>
    </>
  );

  const renderImageField = () => (
    <div className="form-group">
      <label>Section Image</label>
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
  );

  const renderButtonFields = () => (
    <div className="form-row">
      <div className="form-group">
        <label>Button Text</label>
        <input
          type="text"
          name="buttonText"
          value={formData.buttonText}
          onChange={handleChange}
          className="form-control"
          placeholder="Get Started"
        />
      </div>
      <div className="form-group">
        <label>Button Link</label>
        <input
          type="text"
          name="buttonLink"
          value={formData.buttonLink}
          onChange={handleChange}
          className="form-control"
          placeholder="/contact"
        />
      </div>
    </div>
  );

  const renderItems = () => (
    <div className="form-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Items</h4>
        <button type="button" className="btn btn-primary btn-sm" onClick={addItem}>
          Add Item
        </button>
      </div>
      <div className="items-list">
        {formData.items.map((item, index) => (
          <div key={index} className="item-card">
            <div className="item-header">
              <span className="item-title">Item {index + 1}</span>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItem(index, 'title', e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={item.description}
                onChange={(e) => updateItem(index, 'description', e.target.value)}
                className="form-control"
              />
            </div>
            {formData.sectionType === 'why_section' && (
              <div className="form-group">
                <label>Number (e.g., 01)</label>
                <input
                  type="text"
                  value={item.number}
                  onChange={(e) => updateItem(index, 'number', e.target.value)}
                  className="form-control"
                />
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label>Image URL</label>
                <div className="image-field-group">
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => updateItem(index, 'image', e.target.value)}
                    className="form-control"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => openImageGallery(`items[${index}].image`)}
                  >
                    Choose
                  </button>
                </div>
                {item.image && (
                  <img src={item.image} alt="Preview" style={{ maxWidth: '100px', marginTop: '5px', borderRadius: '4px' }} />
                )}
              </div>
              <div className="form-group">
                <label>Icon (CSS class)</label>
                <input
                  type="text"
                  value={item.icon}
                  onChange={(e) => updateItem(index, 'icon', e.target.value)}
                  className="form-control"
                  placeholder="fas fa-star"
                />
              </div>
            </div>
            {['features_cards_carousel', 'content_blocks'].includes(formData.sectionType) && (
              <div className="form-row">
                <div className="form-group">
                  <label>Link URL</label>
                  <input
                    type="text"
                    value={item.link}
                    onChange={(e) => updateItem(index, 'link', e.target.value)}
                    className="form-control"
                    placeholder="/path-to-page"
                  />
                </div>
                <div className="form-group">
                  <label>Link Text</label>
                  <input
                    type="text"
                    value={item.linkText}
                    onChange={(e) => updateItem(index, 'linkText', e.target.value)}
                    className="form-control"
                    placeholder="Learn More"
                  />
                </div>
              </div>
            )}
            <div className="form-group">
              <label>Order</label>
              <input
                type="number"
                value={item.order}
                onChange={(e) => updateItem(index, 'order', parseInt(e.target.value))}
                className="form-control"
                min="0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProcessSteps = () => (
    <div className="form-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Process Steps</h4>
        <button type="button" className="btn btn-primary btn-sm" onClick={addProcessStep}>
          Add Step
        </button>
      </div>
      <div className="items-list">
        {formData.processSteps.map((step, index) => (
          <div key={index} className="item-card">
            <div className="item-header">
              <span className="item-title">Step {index + 1}</span>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => removeProcessStep(index)}
              >
                Remove
              </button>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={step.title}
                onChange={(e) => updateProcessStep(index, 'title', e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={step.description}
                onChange={(e) => updateProcessStep(index, 'description', e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <div className="image-field-group">
                <input
                  type="text"
                  value={step.image}
                  onChange={(e) => updateProcessStep(index, 'image', e.target.value)}
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => openImageGallery(`processSteps[${index}].image`)}
                >
                  Choose
                </button>
              </div>
              {step.image && (
                <img src={step.image} alt="Preview" style={{ maxWidth: '100px', marginTop: '5px', borderRadius: '4px' }} />
              )}
            </div>
            <div className="form-group">
              <label>Order</label>
              <input
                type="number"
                value={step.order}
                onChange={(e) => updateProcessStep(index, 'order', parseInt(e.target.value))}
                className="form-control"
                min="0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="section-form">
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h4>Basic Information</h4>
          {renderBasicFields()}
        </div>

        {['banner_below', 'process_section', 'custom_section'].includes(formData.sectionType) && (
          <div className="form-section">
            <h4>Content</h4>
            {renderImageField()}
          </div>
        )}

        {['why_section'].includes(formData.sectionType) && (
          <div className="form-section">
            <h4>Call to Action</h4>
            {renderButtonFields()}
          </div>
        )}

        {['software_features', 'features_grid', 'why_section', 'features_cards_carousel', 'features_list_expandable', 'testimonials', 'content_blocks', 'stats_counter'].includes(formData.sectionType) && renderItems()}

        {formData.sectionType === 'process_section' && renderProcessSteps()}

        {formData.sectionType === 'custom_html' && (
          <div className="form-section">
            <h4>Custom HTML & CSS</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>
              ⚠️ Use colors <code>#1338be</code> or <code>#2a2a72</code> as backgrounds with white text, or as text colors with white backgrounds.
            </p>
            <div className="form-group">
              <label>HTML Content</label>
              <textarea
                name="htmlContent"
                value={formData.htmlContent}
                onChange={handleChange}
                className="form-control code-editor"
                placeholder='<div class="my-section">\n  <h2>My Custom Section</h2>\n  <p>Content here...</p>\n</div>'
                rows="12"
                style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
              />
              <small style={{ color: '#666' }}>
                Use Handlebars syntax for dynamic content: {'{{title}}'}, {'{{description}}'}, etc.
              </small>
            </div>
            <div className="form-group">
              <label>Custom CSS (Optional)</label>
              <textarea
                name="cssContent"
                value={formData.cssContent}
                onChange={handleChange}
                className="form-control code-editor"
                placeholder='.my-section {\n  background: #1338be;\n  color: white;\n  padding: 60px 20px;\n}\n\n.my-section h2 {\n  color: #2a2a72;\n}'
                rows="8"
                style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
              />
              <small style={{ color: '#666' }}>
                Recommended colors: #1338be (primary blue), #2a2a72 (dark blue), white
              </small>
            </div>
            <div className="color-guide" style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px',
              marginTop: '10px'
            }}>
              <h6 style={{ marginBottom: '10px', fontWeight: '600' }}>Color Guide:</h6>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <div style={{
                  background: '#1338be',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  fontSize: '0.85rem'
                }}>
                  #1338be with white text
                </div>
                <div style={{
                  background: '#2a2a72',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  fontSize: '0.85rem'
                }}>
                  #2a2a72 with white text
                </div>
                <div style={{
                  background: 'white',
                  color: '#1338be',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  border: '2px solid #1338be',
                  fontSize: '0.85rem'
                }}>
                  #1338be text on white
                </div>
                <div style={{
                  background: 'white',
                  color: '#2a2a72',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  border: '2px solid #2a2a72',
                  fontSize: '0.85rem'
                }}>
                  #2a2a72 text on white
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : section ? 'Update Section' : 'Create Section'}
          </button>
        </div>
      </form>

      {showPreview && (
        <div className="preview-container">
          <div className="preview-header">
            <h3>Live Preview</h3>
          </div>
          <SectionPreview section={formData} />
        </div>
      )}

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

export default SectionForm;
