import React, { useState, useEffect } from 'react';
import '../serviceSections/AdminStyles.css';

const PageForm = ({ page = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
    ogImage: '',
    layout: 'default',
    showHeader: true,
    showFooter: true,
    headerType: 'header4',
    footerType: 'footer1',
    pageStyles: {
      backgroundColor: '#ffffff',
      customCSS: '',
      customClasses: []
    },
    status: 'draft'
  });

  const [keywordInput, setKeywordInput] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (page) {
      setFormData({
        ...page,
        metaKeywords: page.metaKeywords || [],
        pageStyles: page.pageStyles || {
          backgroundColor: '#ffffff',
          customCSS: '',
          customClasses: []
        }
      });
    }
  }, [page]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleStyleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      pageStyles: {
        ...prev.pageStyles,
        [field]: value
      }
    }));
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim()) {
      setFormData(prev => ({
        ...prev,
        metaKeywords: [...prev.metaKeywords, keywordInput.trim()]
      }));
      setKeywordInput('');
    }
  };

  const handleRemoveKeyword = (index) => {
    setFormData(prev => ({
      ...prev,
      metaKeywords: prev.metaKeywords.filter((_, i) => i !== index)
    }));
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setFormData(prev => ({ ...prev, slug }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } catch (error) {
      console.error('Error saving page:', error);
      alert('Failed to save page');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="section-form">
      <div className="form-header">
        <h2>{page ? 'Edit Page' : 'Create New Page'}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="form-section">
          <h4>Basic Information</h4>
          <div className="form-row">
            <div className="form-group">
              <label>Page Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="About Us"
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
                  placeholder="about-us"
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
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Brief description of the page"
              rows="3"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Layout</label>
              <select
                name="layout"
                value={formData.layout}
                onChange={handleChange}
                className="form-control"
              >
                <option value="default">Default</option>
                <option value="full-width">Full Width</option>
                <option value="sidebar-left">Sidebar Left</option>
                <option value="sidebar-right">Sidebar Right</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-control"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
        </div>

        {/* SEO Settings */}
        <div className="form-section">
          <h4>SEO Settings</h4>
          <div className="form-group">
            <label>Meta Title</label>
            <input
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              className="form-control"
              placeholder="SEO Title (defaults to page title)"
            />
          </div>

          <div className="form-group">
            <label>Meta Description</label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              className="form-control"
              placeholder="SEO meta description"
              rows="2"
            />
          </div>

          <div className="form-group">
            <label>Meta Keywords</label>
            <div className="keyword-input-group">
              <input
                type="text"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddKeyword())}
                className="form-control"
                placeholder="Add keyword and press Enter"
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleAddKeyword}
              >
                Add
              </button>
            </div>
            <div className="keywords-list">
              {formData.metaKeywords.map((keyword, index) => (
                <span key={index} className="keyword-tag">
                  {keyword}
                  <button
                    type="button"
                    onClick={() => handleRemoveKeyword(index)}
                    className="keyword-remove"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>OG Image URL</label>
            <input
              type="text"
              name="ogImage"
              value={formData.ogImage}
              onChange={handleChange}
              className="form-control"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        {/* Header & Footer */}
        <div className="form-section">
          <h4>Header & Footer</h4>
          <div className="form-row">
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="showHeader"
                  checked={formData.showHeader}
                  onChange={handleChange}
                />
                {' '}Show Header
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="showFooter"
                  checked={formData.showFooter}
                  onChange={handleChange}
                />
                {' '}Show Footer
              </label>
            </div>
          </div>

          {formData.showHeader && (
            <div className="form-group">
              <label>Header Type</label>
              <select
                name="headerType"
                value={formData.headerType}
                onChange={handleChange}
                className="form-control"
              >
                <option value="header1">Header 1</option>
                <option value="header2">Header 2</option>
                <option value="header3">Header 3</option>
                <option value="header4">Header 4</option>
              </select>
            </div>
          )}

          {formData.showFooter && (
            <div className="form-group">
              <label>Footer Type</label>
              <select
                name="footerType"
                value={formData.footerType}
                onChange={handleChange}
                className="form-control"
              >
                <option value="footer1">Footer 1</option>
                <option value="footer2">Footer 2</option>
                <option value="footer3">Footer 3</option>
              </select>
            </div>
          )}
        </div>

        {/* Page Styling */}
        <div className="form-section">
          <h4>Page Styling</h4>
          <div className="form-group">
            <label>Background Color</label>
            <div className="color-picker-group">
              <input
                type="color"
                value={formData.pageStyles.backgroundColor}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
              />
              <input
                type="text"
                value={formData.pageStyles.backgroundColor}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                className="form-control"
                placeholder="#ffffff"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Custom CSS</label>
            <textarea
              value={formData.pageStyles.customCSS}
              onChange={(e) => handleStyleChange('customCSS', e.target.value)}
              className="form-control code-editor"
              placeholder=".my-class { color: red; }"
              rows="5"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : page ? 'Update Page' : 'Create Page'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PageForm;
