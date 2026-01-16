import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import './AdminStyles.css';

const TemplateConfigurator = ({ template, onUpdate, onClose }) => {
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentImageField, setCurrentImageField] = useState(null);

  const handleChange = (field, value) => {
    onUpdate({
      ...template,
      [field]: value
    });
  };

  const handleNestedChange = (parent, field, value) => {
    onUpdate({
      ...template,
      [parent]: {
        ...template[parent],
        [field]: value
      }
    });
  };

  const openImageGallery = (fieldPath) => {
    setCurrentImageField(fieldPath);
    setShowImageGallery(true);
  };

  const handleImageSelect = (imageUrl) => {
    if (currentImageField.startsWith('contentItems[')) {
      const match = currentImageField.match(/contentItems\[(\d+)\]\.(\w+)/);
      if (match) {
        const index = parseInt(match[1]);
        const field = match[2];
        updateContentItem(index, field, imageUrl);
      }
    } else {
      handleChange(currentImageField, imageUrl);
    }
    setShowImageGallery(false);
  };

  const addContentItem = () => {
    const newItem = {
      type: 'card',
      title: '',
      description: '',
      image: '',
      icon: '',
      link: '',
      linkText: '',
      number: '',
      htmlContent: '',
      order: template.contentItems?.length || 0,
      isExpanded: false
    };

    onUpdate({
      ...template,
      contentItems: [...(template.contentItems || []), newItem]
    });
  };

  const updateContentItem = (index, field, value) => {
    const newItems = [...(template.contentItems || [])];
    newItems[index] = { ...newItems[index], [field]: value };
    onUpdate({
      ...template,
      contentItems: newItems
    });
  };

  const removeContentItem = (index) => {
    const newItems = (template.contentItems || []).filter((_, i) => i !== index);
    onUpdate({
      ...template,
      contentItems: newItems
    });
  };

  const moveItemUp = (index) => {
    if (index === 0) return;
    const newItems = [...(template.contentItems || [])];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    newItems[index - 1].order = index - 1;
    newItems[index].order = index;
    onUpdate({
      ...template,
      contentItems: newItems
    });
  };

  const moveItemDown = (index) => {
    const items = template.contentItems || [];
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    newItems[index].order = index;
    newItems[index + 1].order = index + 1;
    onUpdate({
      ...template,
      contentItems: newItems
    });
  };

  const renderBasicFields = () => (
    <>
      <div className="form-group">
        <label>Component Title</label>
        <input
          type="text"
          value={template.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          className="form-control"
          placeholder="Component title"
        />
      </div>

      <div className="form-group">
        <label>Component Subtitle</label>
        <input
          type="text"
          value={template.subtitle || ''}
          onChange={(e) => handleChange('subtitle', e.target.value)}
          className="form-control"
          placeholder="Component subtitle"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={template.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          className="form-control"
          placeholder="Component description"
          rows="3"
        />
      </div>
    </>
  );

  const renderLayoutConfig = () => (
    <div className="form-section">
      <h5>Layout Configuration</h5>
      <div className="form-row">
        <div className="form-group">
          <label>Columns</label>
          <select
            value={template.layoutConfig?.columns || 3}
            onChange={(e) => handleNestedChange('layoutConfig', 'columns', parseInt(e.target.value))}
            className="form-control"
          >
            <option value="1">1 Column</option>
            <option value="2">2 Columns</option>
            <option value="3">3 Columns</option>
            <option value="4">4 Columns</option>
          </select>
        </div>

        <div className="form-group">
          <label>Card Style</label>
          <select
            value={template.layoutConfig?.cardStyle || 'bordered'}
            onChange={(e) => handleNestedChange('layoutConfig', 'cardStyle', e.target.value)}
            className="form-control"
          >
            <option value="bordered">Bordered</option>
            <option value="shadowed">Shadowed</option>
            <option value="minimal">Minimal</option>
            <option value="colored">Colored</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Alignment</label>
          <select
            value={template.layoutConfig?.alignment || 'center'}
            onChange={(e) => handleNestedChange('layoutConfig', 'alignment', e.target.value)}
            className="form-control"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div className="form-group">
          <label>Spacing</label>
          <select
            value={template.layoutConfig?.spacing || 'normal'}
            onChange={(e) => handleNestedChange('layoutConfig', 'spacing', e.target.value)}
            className="form-control"
          >
            <option value="compact">Compact</option>
            <option value="normal">Normal</option>
            <option value="spacious">Spacious</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStylingOptions = () => (
    <div className="form-section">
      <h5>Styling</h5>
      <div className="form-row">
        <div className="form-group">
          <label>Background Color</label>
          <div className="color-picker-group">
            <input
              type="color"
              value={template.sectionStyles?.backgroundColor || '#ffffff'}
              onChange={(e) => handleNestedChange('sectionStyles', 'backgroundColor', e.target.value)}
            />
            <input
              type="text"
              value={template.sectionStyles?.backgroundColor || '#ffffff'}
              onChange={(e) => handleNestedChange('sectionStyles', 'backgroundColor', e.target.value)}
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
              value={template.sectionStyles?.textColor || '#000000'}
              onChange={(e) => handleNestedChange('sectionStyles', 'textColor', e.target.value)}
            />
            <input
              type="text"
              value={template.sectionStyles?.textColor || '#000000'}
              onChange={(e) => handleNestedChange('sectionStyles', 'textColor', e.target.value)}
              className="form-control"
              placeholder="#000000"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Heading Color</label>
          <div className="color-picker-group">
            <input
              type="color"
              value={template.sectionStyles?.headingColor || '#1338be'}
              onChange={(e) => handleNestedChange('sectionStyles', 'headingColor', e.target.value)}
            />
            <input
              type="text"
              value={template.sectionStyles?.headingColor || '#1338be'}
              onChange={(e) => handleNestedChange('sectionStyles', 'headingColor', e.target.value)}
              className="form-control"
              placeholder="#1338be"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentItems = () => {
    const items = template.contentItems || [];
    const needsItems = !['custom_html', 'cta_section'].includes(template.templateType);

    if (!needsItems) return null;

    return (
      <div className="form-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h5>Content Items ({items.length})</h5>
          <button type="button" className="btn btn-primary btn-sm" onClick={addContentItem}>
            + Add Item
          </button>
        </div>

        {items.length === 0 && (
          <div style={{
            padding: '30px',
            textAlign: 'center',
            background: '#f8f9fa',
            borderRadius: '8px',
            border: '1px dashed #dee2e6'
          }}>
            <p style={{ color: '#666', margin: 0 }}>No items added yet. Click "Add Item" to start.</p>
          </div>
        )}

        <div className="items-list">
          {items.map((item, index) => (
            <div key={index} className="item-card">
              <div className="item-header">
                <span className="item-title">Item {index + 1}</span>
                <div className="item-actions">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon"
                    onClick={() => moveItemUp(index)}
                    disabled={index === 0}
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-icon"
                    onClick={() => moveItemDown(index)}
                    disabled={index === items.length - 1}
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (window.confirm('Remove this item?')) {
                        removeContentItem(index);
                      }
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={item.title || ''}
                  onChange={(e) => updateContentItem(index, 'title', e.target.value)}
                  className="form-control"
                  placeholder="Item title"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={item.description || ''}
                  onChange={(e) => updateContentItem(index, 'description', e.target.value)}
                  className="form-control"
                  placeholder="Item description"
                  rows="3"
                />
              </div>

              {template.templateType === 'why_choose' && (
                <div className="form-group">
                  <label>Number (e.g., 01)</label>
                  <input
                    type="text"
                    value={item.number || ''}
                    onChange={(e) => updateContentItem(index, 'number', e.target.value)}
                    className="form-control"
                    placeholder="01"
                  />
                </div>
              )}

              <div className="form-group">
                <label>Image URL</label>
                <div className="image-field-group">
                  <input
                    type="text"
                    value={item.image || ''}
                    onChange={(e) => updateContentItem(index, 'image', e.target.value)}
                    className="form-control"
                    placeholder="Image URL"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => openImageGallery(`contentItems[${index}].image`)}
                  >
                    Choose
                  </button>
                </div>
                {item.image && (
                  <img
                    src={item.image}
                    alt="Preview"
                    style={{ maxWidth: '100px', marginTop: '5px', borderRadius: '4px' }}
                  />
                )}
              </div>

              {['features_cards_carousel', 'content_blocks'].includes(template.templateType) && (
                <div className="form-row">
                  <div className="form-group">
                    <label>Link URL</label>
                    <input
                      type="text"
                      value={item.link || ''}
                      onChange={(e) => updateContentItem(index, 'link', e.target.value)}
                      className="form-control"
                      placeholder="/path-to-page"
                    />
                  </div>
                  <div className="form-group">
                    <label>Link Text</label>
                    <input
                      type="text"
                      value={item.linkText || ''}
                      onChange={(e) => updateContentItem(index, 'linkText', e.target.value)}
                      className="form-control"
                      placeholder="Learn More"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCustomHtmlEditor = () => {
    if (template.templateType !== 'custom_html') return null;

    return (
      <div className="form-section">
        <h5>Custom HTML & CSS</h5>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>
          ⚠️ Use colors <code>#1338be</code> or <code>#2a2a72</code> as backgrounds with white text,
          or as text colors with white backgrounds.
        </p>

        <div className="form-group">
          <label>HTML Content</label>
          <textarea
            value={template.htmlContent || ''}
            onChange={(e) => handleChange('htmlContent', e.target.value)}
            className="form-control code-editor"
            placeholder='<div class="my-section">\n  <h2>My Custom Section</h2>\n  <p>Content here...</p>\n</div>'
            rows="12"
            style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
          />
        </div>

        <div className="form-group">
          <label>Custom CSS (Optional)</label>
          <textarea
            value={template.cssContent || ''}
            onChange={(e) => handleChange('cssContent', e.target.value)}
            className="form-control code-editor"
            placeholder='.my-section {\n  background: #1338be;\n  color: white;\n  padding: 60px 20px;\n}'
            rows="8"
            style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="template-configurator">
      <div className="form-section">
        <h5>Basic Information</h5>
        {renderBasicFields()}
      </div>

      {!['custom_html'].includes(template.templateType) && renderLayoutConfig()}
      {renderStylingOptions()}
      {renderContentItems()}
      {renderCustomHtmlEditor()}

      <div className="configurator-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClose}
        >
          Done Configuring
        </button>
      </div>

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

      <style jsx>{`
        .template-configurator {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
        }

        .item-card {
          background: white;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e9ecef;
        }

        .item-title {
          font-weight: 600;
          color: #2a2a72;
        }

        .item-actions {
          display: flex;
          gap: 5px;
        }

        .color-picker-group {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .color-picker-group input[type="color"] {
          width: 50px;
          height: 38px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          cursor: pointer;
        }

        .image-field-group {
          display: flex;
          gap: 10px;
        }

        .configurator-actions {
          margin-top: 20px;
          text-align: right;
        }

        .btn-icon {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
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

export default TemplateConfigurator;
