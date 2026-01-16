import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import TemplateConfigurator from './TemplateConfigurator';
import './AdminStyles.css';

const COMPONENT_TYPES = [
  { value: 'features_grid', label: 'Features Grid' },
  { value: 'features_cards_carousel', label: 'Feature Cards with Carousel' },
  { value: 'features_list_expandable', label: 'Features List (Expandable with Read More)' },
  { value: 'process_steps', label: 'Process Section' },
  { value: 'why_choose', label: 'Why Section' },
  { value: 'testimonials', label: 'Testimonials' },
  { value: 'content_blocks', label: 'Content Blocks' },
  { value: 'stats_counter', label: 'Stats Counter' },
  { value: 'cta_section', label: 'Call to Action' },
  { value: 'custom_html', label: 'Custom HTML (Advanced)' }
];

const MultiTemplateSectionForm = ({ section = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    serviceName: '',
    title: '',
    subtitle: '',
    description: '',
    templates: [], // Array of template configurations
    order: 0,
    isActive: true
  });

  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(null);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (section) {
      setFormData({
        serviceName: section.serviceName || '',
        title: section.title || '',
        subtitle: section.subtitle || '',
        description: section.description || '',
        templates: section.templates || [],
        order: section.order || 0,
        isActive: section.isActive !== undefined ? section.isActive : true
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

  const addTemplate = (templateType) => {
    const newTemplate = {
      templateType,
      templateVariant: 'variant_1',
      title: '',
      subtitle: '',
      description: '',
      htmlContent: '',
      cssContent: '',
      layoutConfig: {
        columns: 3,
        cardStyle: 'bordered',
        alignment: 'center',
        spacing: 'normal'
      },
      contentItems: [],
      sectionStyles: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
        headingColor: '#1338be'
      },
      order: formData.templates.length
    };

    setFormData(prev => ({
      ...prev,
      templates: [...prev.templates, newTemplate]
    }));
    setCurrentTemplateIndex(formData.templates.length);
    setShowTemplateSelector(false);
  };

  const updateTemplate = (index, updatedTemplate) => {
    const newTemplates = [...formData.templates];
    newTemplates[index] = updatedTemplate;
    setFormData(prev => ({ ...prev, templates: newTemplates }));
  };

  const removeTemplate = (index) => {
    const newTemplates = formData.templates.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, templates: newTemplates }));
    if (currentTemplateIndex === index) {
      setCurrentTemplateIndex(null);
    } else if (currentTemplateIndex > index) {
      setCurrentTemplateIndex(currentTemplateIndex - 1);
    }
  };

  const moveTemplateUp = (index) => {
    if (index === 0) return;
    const newTemplates = [...formData.templates];
    [newTemplates[index - 1], newTemplates[index]] = [newTemplates[index], newTemplates[index - 1]];
    newTemplates[index - 1].order = index - 1;
    newTemplates[index].order = index;
    setFormData(prev => ({ ...prev, templates: newTemplates }));
  };

  const moveTemplateDown = (index) => {
    if (index === formData.templates.length - 1) return;
    const newTemplates = [...formData.templates];
    [newTemplates[index], newTemplates[index + 1]] = [newTemplates[index + 1], newTemplates[index]];
    newTemplates[index].order = index;
    newTemplates[index + 1].order = index + 1;
    setFormData(prev => ({ ...prev, templates: newTemplates }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.templates.length === 0) {
      alert('Please add at least one component to the section');
      return;
    }

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

  const getTemplateName = (templateType) => {
    const found = COMPONENT_TYPES.find(t => t.value === templateType);
    return found ? found.label : templateType;
  };

  return (
    <div className="multi-template-section-form">
      <form onSubmit={handleSubmit}>
        {/* Basic Section Information */}
        <div className="form-section">
          <h4>Section Information</h4>
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
              <small style={{ color: '#666' }}>The service slug this section belongs to</small>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Section Title (Optional)</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Overall section title"
              />
            </div>
            <div className="form-group">
              <label>Section Subtitle (Optional)</label>
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
            <label>Section Description (Optional)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Overall section description"
              rows="3"
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
        </div>

        {/* Component Management */}
        <div className="form-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h4>Section Components ({formData.templates.length})</h4>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowTemplateSelector(true)}
            >
              + Add Component
            </button>
          </div>

          {formData.templates.length === 0 && (
            <div style={{
              padding: '40px',
              textAlign: 'center',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '2px dashed #dee2e6'
            }}>
              <p style={{ color: '#666', marginBottom: '10px' }}>No components added yet</p>
              <p style={{ color: '#999', fontSize: '0.9rem' }}>
                Click "Add Component" to select and configure components for this section
              </p>
            </div>
          )}

          {/* Component List */}
          <div className="templates-list">
            {formData.templates.map((template, index) => (
              <div
                key={index}
                className={`template-card ${currentTemplateIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentTemplateIndex(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="template-header">
                  <div>
                    <span className="template-number">#{index + 1}</span>
                    <span className="template-name">{getTemplateName(template.templateType)}</span>
                    {template.title && (
                      <span className="template-title">- {template.title}</span>
                    )}
                  </div>
                  <div className="template-actions">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon"
                      onClick={(e) => { e.stopPropagation(); moveTemplateUp(index); }}
                      disabled={index === 0}
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-icon"
                      onClick={(e) => { e.stopPropagation(); moveTemplateDown(index); }}
                      disabled={index === formData.templates.length - 1}
                      title="Move down"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm('Remove this component?')) {
                          removeTemplate(index);
                        }
                      }}
                      title="Remove"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <div className="template-info">
                  <span className="badge">{template.contentItems?.length || 0} items</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component Configurator */}
        {currentTemplateIndex !== null && formData.templates[currentTemplateIndex] && (
          <div className="form-section">
            <div style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: '2px solid #1338be'
            }}>
              <h4 style={{ margin: 0, color: '#1338be' }}>
                Configuring: {getTemplateName(formData.templates[currentTemplateIndex].templateType)}
                {' '}(Component #{currentTemplateIndex + 1})
              </h4>
            </div>
            <TemplateConfigurator
              template={formData.templates[currentTemplateIndex]}
              onUpdate={(updatedTemplate) => updateTemplate(currentTemplateIndex, updatedTemplate)}
              onClose={() => setCurrentTemplateIndex(null)}
            />
          </div>
        )}

        {/* Component Selector Modal */}
        {showTemplateSelector && (
          <div className="template-selector-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Choose a Component</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowTemplateSelector(false)}
                >
                  ×
                </button>
              </div>
              <div className="template-grid">
                {COMPONENT_TYPES.map(type => (
                  <div
                    key={type.value}
                    className="template-option"
                    onClick={() => addTemplate(type.value)}
                  >
                    <div className="template-option-icon">
                      {getTemplateIcon(type.value)}
                    </div>
                    <h5>{type.label}</h5>
                    <p>{getTemplateDescription(type.value)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : section ? 'Update Section' : 'Create Section'}
          </button>
        </div>
      </form>

      <style jsx>{`
        .template-card {
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 10px;
          transition: all 0.2s;
        }

        .template-card:hover {
          border-color: #1338be;
          box-shadow: 0 2px 8px rgba(19, 56, 190, 0.1);
        }

        .template-card.active {
          border-color: #1338be;
          background: #f8f9ff;
        }

        .template-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .template-number {
          display: inline-block;
          background: #1338be;
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-right: 8px;
        }

        .template-name {
          font-weight: 600;
          color: #2a2a72;
        }

        .template-title {
          color: #666;
          font-size: 0.9rem;
          margin-left: 5px;
        }

        .template-actions {
          display: flex;
          gap: 5px;
        }

        .template-info {
          display: flex;
          gap: 8px;
        }

        .badge {
          background: #e9ecef;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          color: #495057;
        }

        .template-selector-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .template-selector-modal .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 900px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          padding: 30px;
        }

        .template-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .template-option {
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }

        .template-option:hover {
          border-color: #1338be;
          background: #f8f9ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(19, 56, 190, 0.15);
        }

        .template-option-icon {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .template-option h5 {
          margin: 10px 0 5px;
          color: #2a2a72;
        }

        .template-option p {
          font-size: 0.85rem;
          color: #666;
          margin: 0;
        }

        .btn-icon {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn-icon:hover:not(:disabled) {
          background: #e9ecef;
        }

        .btn-icon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

// Helper functions
function getTemplateIcon(templateType) {
  const icons = {
    'features_grid': '📊',
    'features_cards_carousel': '🎠',
    'features_list_expandable': '📋',
    'process_steps': '🔄',
    'why_choose': '⭐',
    'testimonials': '💬',
    'content_blocks': '📦',
    'stats_counter': '📈',
    'cta_section': '🎯',
    'custom_html': '💻'
  };
  return icons[templateType] || '📄';
}

function getTemplateDescription(templateType) {
  const descriptions = {
    'features_grid': 'Display features in a responsive grid layout',
    'features_cards_carousel': 'Showcase features with mobile carousel',
    'features_list_expandable': 'Expandable list with read more functionality',
    'process_steps': 'Step-by-step process visualization',
    'why_choose': 'Highlight reasons to choose your service',
    'testimonials': 'Customer reviews and testimonials',
    'content_blocks': 'Flexible content blocks with images',
    'stats_counter': 'Display statistics and metrics',
    'cta_section': 'Call-to-action with buttons',
    'custom_html': 'Custom HTML and CSS for full control'
  };
  return descriptions[templateType] || 'Component description';
}

export default MultiTemplateSectionForm;
