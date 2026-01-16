import React, { useState, useEffect } from 'react';
import { getAllServiceSections, updateSectionOrders } from '../../../api/admin/serviceSection.api';
import MultiTemplateSectionForm from '../serviceSections/MultiTemplateSectionForm';
import '../serviceSections/AdminStyles.css';

const ServiceSectionManager = ({ service, onBack }) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingSection, setEditingSection] = useState(null);

  useEffect(() => {
    fetchSections();
  }, [service]);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const response = await getAllServiceSections({ serviceName: service.title });
      // Filter sections that match this service's slug
      const serviceSections = (response.data || []).filter(
        s => s.serviceSlug === service.slug || s.serviceName === service.title
      );
      setSections(serviceSections.sort((a, b) => (a.order || 0) - (b.order || 0)));
    } catch (error) {
      console.error('Error fetching sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSection = () => {
    setEditingSection(null);
    setShowForm(true);
  };

  const handleEditSection = (section) => {
    setEditingSection(section);
    setShowForm(true);
  };

  const handleMoveUp = async (index) => {
    if (index === 0) return;

    const newSections = [...sections];
    const temp = newSections[index];
    newSections[index] = newSections[index - 1];
    newSections[index - 1] = temp;

    const reorderedSections = newSections.map((s, i) => ({
      id: s._id,
      order: i
    }));

    try {
      await updateSectionOrders(reorderedSections);
      setSections(newSections);
    } catch (error) {
      console.error('Error reordering sections:', error);
      alert('Failed to reorder sections');
    }
  };

  const handleMoveDown = async (index) => {
    if (index === sections.length - 1) return;

    const newSections = [...sections];
    const temp = newSections[index];
    newSections[index] = newSections[index + 1];
    newSections[index + 1] = temp;

    const reorderedSections = newSections.map((s, i) => ({
      id: s._id,
      order: i
    }));

    try {
      await updateSectionOrders(reorderedSections);
      setSections(newSections);
    } catch (error) {
      console.error('Error reordering sections:', error);
      alert('Failed to reorder sections');
    }
  };

  if (showForm) {
    return (
      <MultiTemplateSectionForm
        section={editingSection}
        onSave={async (sectionData) => {
          // Pre-fill service name and slug
          const dataWithService = {
            ...sectionData,
            serviceName: service.title,
            serviceSlug: service.slug
          };

          // Import the save functions
          const { createServiceSection, updateServiceSection } = await import('../../../api/admin/serviceSection.api');

          try {
            if (editingSection) {
              await updateServiceSection(editingSection._id, dataWithService);
              alert('Section updated successfully!');
            } else {
              await createServiceSection(dataWithService);
              alert('Section created successfully!');
            }
            setShowForm(false);
            setEditingSection(null);
            fetchSections();
          } catch (error) {
            console.error('Error saving section:', error);
            throw error;
          }
        }}
        onCancel={() => {
          setShowForm(false);
          setEditingSection(null);
        }}
      />
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <button className="btn btn-secondary" onClick={onBack}>
            ← Back to Services
          </button>
          <h1 style={{ marginTop: '10px' }}>
            Manage Sections for: {service.title}
          </h1>
          <p style={{ color: '#666', marginTop: '5px' }}>
            Add, edit, and organize sections that will appear on the service detail page
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleCreateSection}>
          Add New Section
        </button>
      </div>

      {/* Sections List */}
      <div className="sections-list" style={{ marginTop: '20px' }}>
        <h3>Page Sections ({sections.length})</h3>
        {loading ? (
          <div className="loading-message">Loading sections...</div>
        ) : sections.length === 0 ? (
          <div className="empty-message">
            <p>No sections added to this service yet.</p>
            <p>Click "Add New Section" to start building your page with components like:</p>
            <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '20px auto' }}>
              <li>Features Grid - Showcase service features</li>
              <li>Feature Cards Carousel - Highlight key benefits</li>
              <li>Features List - Expandable list with "Read More"</li>
              <li>Testimonials - Customer reviews</li>
              <li>Process Steps - How it works</li>
              <li>Custom HTML - Complete design freedom</li>
            </ul>
          </div>
        ) : (
          <div className="sections-grid">
            {sections.map((section, index) => (
              <div key={section._id} className="section-card">
                <div className="section-card-header">
                  <h3>
                    {index + 1}. {section.title || section.sectionType}
                  </h3>
                  <span className={section.isActive ? 'status-badge status-published' : 'status-badge status-draft'}>
                    {section.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="section-card-body">
                  {section.templates && section.templates.length > 0 ? (
                    <>
                      <p><strong>Components:</strong> {section.templates.length} configured</p>
                      <p style={{ fontSize: '0.85rem', color: '#666' }}>
                        {section.templates.map(t => {
                          const componentNames = {
                            'features_grid': 'Features Grid',
                            'features_cards_carousel': 'Feature Cards',
                            'features_list_expandable': 'Features List',
                            'process_steps': 'Process',
                            'why_choose': 'Why Choose',
                            'testimonials': 'Testimonials',
                            'content_blocks': 'Content Blocks',
                            'stats_counter': 'Stats',
                            'cta_section': 'CTA',
                            'custom_html': 'Custom HTML'
                          };
                          return componentNames[t.templateType] || t.templateType;
                        }).join(', ')}
                      </p>
                    </>
                  ) : (
                    <p><strong>Type:</strong> {section.sectionType || 'Not configured'}</p>
                  )}
                  {section.subtitle && <p><strong>Subtitle:</strong> {section.subtitle}</p>}
                  <p><strong>Order:</strong> {section.order}</p>
                  {section.templates && section.templates.length > 0 ? (
                    <p><strong>Total Items:</strong> {section.templates.reduce((sum, t) => sum + (t.contentItems?.length || 0), 0)}</p>
                  ) : (
                    <p><strong>Items:</strong> {section.contentItems?.length || 0}</p>
                  )}
                </div>
                <div className="section-card-footer">
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    title="Move Up"
                  >
                    ↑
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === sections.length - 1}
                    title="Move Down"
                  >
                    ↓
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleEditSection(section)}
                    title="Edit Section"
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Reference */}
      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '30px'
      }}>
        <h4 style={{ marginBottom: '15px' }}>💡 Pro Tips:</h4>
        <ul style={{ lineHeight: '1.8', color: '#666' }}>
          <li><strong>Section Order:</strong> Use ↑↓ buttons to reorder sections as they'll appear on the page</li>
          <li><strong>Service Info:</strong> Service name and slug are auto-filled from this service</li>
          <li><strong>Components:</strong> Add multiple components to each section and configure them independently</li>
          <li><strong>Content Items:</strong> Each component can have multiple items (features, cards, etc.)</li>
          <li><strong>Colors:</strong> Use #1338be or #2a2a72 with white for brand consistency</li>
          <li><strong>Preview:</strong> Visit /services/{service.slug} to see your changes live</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSectionManager;
