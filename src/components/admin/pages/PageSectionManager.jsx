import React, { useState, useEffect } from 'react';
import {
  addSectionToPage,
  removeSectionFromPage,
  reorderPageSections,
  togglePageSection
} from '../../../api/admin/page.api';
import '../serviceSections/AdminStyles.css';

const PageSectionManager = ({ page, sections, onBack }) => {
  const [pageData, setPageData] = useState(page);
  const [availableSections, setAvailableSections] = useState([]);
  const [showAddSection, setShowAddSection] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');
  const [sectionOrder, setSectionOrder] = useState(0);
  const [filterType, setFilterType] = useState('');
  const [filterService, setFilterService] = useState('');

  useEffect(() => {
    // Get IDs of sections already in the page
    const usedSectionIds = pageData.sections?.map(s => s.sectionId._id || s.sectionId) || [];

    // Filter out sections that are already added
    const available = sections.filter(s => !usedSectionIds.includes(s._id));
    setAvailableSections(available);
  }, [sections, pageData]);

  const handleAddSection = async () => {
    if (!selectedSection) {
      alert('Please select a section');
      return;
    }

    try {
      const response = await addSectionToPage(pageData._id, selectedSection, sectionOrder);
      setPageData(response.data);
      setShowAddSection(false);
      setSelectedSection('');
      setSectionOrder(0);
      alert('Section added successfully!');
    } catch (error) {
      console.error('Error adding section:', error);
      alert('Failed to add section');
    }
  };

  const handleRemoveSection = async (sectionId) => {
    if (!confirm('Are you sure you want to remove this section from the page?')) {
      return;
    }

    try {
      const response = await removeSectionFromPage(pageData._id, sectionId);
      setPageData(response.data);
      alert('Section removed successfully!');
    } catch (error) {
      console.error('Error removing section:', error);
      alert('Failed to remove section');
    }
  };

  const handleToggleSection = async (sectionId) => {
    try {
      const response = await togglePageSection(pageData._id, sectionId);
      setPageData(response.data);
    } catch (error) {
      console.error('Error toggling section:', error);
      alert('Failed to toggle section');
    }
  };

  const handleMoveUp = async (index) => {
    if (index === 0) return;

    const newSections = [...pageData.sections];
    const temp = newSections[index];
    newSections[index] = newSections[index - 1];
    newSections[index - 1] = temp;

    const reorderedSections = newSections.map((s, i) => ({
      sectionId: s.sectionId._id || s.sectionId,
      order: i
    }));

    try {
      const response = await reorderPageSections(pageData._id, reorderedSections);
      setPageData(response.data);
    } catch (error) {
      console.error('Error reordering sections:', error);
      alert('Failed to reorder sections');
    }
  };

  const handleMoveDown = async (index) => {
    if (index === pageData.sections.length - 1) return;

    const newSections = [...pageData.sections];
    const temp = newSections[index];
    newSections[index] = newSections[index + 1];
    newSections[index + 1] = temp;

    const reorderedSections = newSections.map((s, i) => ({
      sectionId: s.sectionId._id || s.sectionId,
      order: i
    }));

    try {
      const response = await reorderPageSections(pageData._id, reorderedSections);
      setPageData(response.data);
    } catch (error) {
      console.error('Error reordering sections:', error);
      alert('Failed to reorder sections');
    }
  };

  const sortedSections = [...(pageData.sections || [])]
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const filteredAvailableSections = availableSections.filter(s => {
    if (filterType && s.sectionType !== filterType) return false;
    if (filterService && s.serviceName !== filterService) return false;
    return true;
  });

  const uniqueServices = [...new Set(sections.map(s => s.serviceName))];

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <button className="btn btn-secondary" onClick={onBack}>
            ← Back to Pages
          </button>
          <h1 style={{ marginTop: '10px' }}>Manage Sections for: {pageData.title}</h1>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddSection(true)}>
          Add Section
        </button>
      </div>

      {/* Add Section Modal */}
      {showAddSection && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h2>Add Section to Page</h2>
              <button className="close-btn" onClick={() => setShowAddSection(false)}>×</button>
            </div>
            <div className="modal-body">
              {/* Filters */}
              <div className="form-row">
                <div className="form-group">
                  <label>Filter by Type:</label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="form-control"
                  >
                    <option value="">All Types</option>
                    <option value="features_grid">Features Grid</option>
                    <option value="features_cards_carousel">Feature Cards Carousel</option>
                    <option value="process_steps">Process Steps</option>
                    <option value="why_choose">Why Choose</option>
                    <option value="testimonials">Testimonials</option>
                    <option value="content_blocks">Content Blocks</option>
                    <option value="stats_counter">Stats Counter</option>
                    <option value="cta_section">CTA Section</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Filter by Service:</label>
                  <select
                    value={filterService}
                    onChange={(e) => setFilterService(e.target.value)}
                    className="form-control"
                  >
                    <option value="">All Services</option>
                    {uniqueServices.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Select Section:</label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="form-control"
                >
                  <option value="">-- Select a section --</option>
                  {filteredAvailableSections.map(section => (
                    <option key={section._id} value={section._id}>
                      {section.title || section.serviceName} ({section.sectionType})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Display Order:</label>
                <input
                  type="number"
                  value={sectionOrder}
                  onChange={(e) => setSectionOrder(parseInt(e.target.value))}
                  className="form-control"
                  min="0"
                />
              </div>

              <div className="form-actions">
                <button className="btn btn-secondary" onClick={() => setShowAddSection(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleAddSection}>
                  Add Section
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sections List */}
      <div className="sections-list" style={{ marginTop: '20px' }}>
        <h3>Page Sections ({sortedSections.length})</h3>
        {sortedSections.length === 0 ? (
          <div className="empty-message">
            No sections added to this page yet. Click "Add Section" to get started!
          </div>
        ) : (
          <div className="sections-grid">
            {sortedSections.map((pageSection, index) => {
              const section = pageSection.sectionId;
              if (!section) return null;

              return (
                <div key={section._id} className="section-card">
                  <div className="section-card-header">
                    <h3>
                      {index + 1}. {section.title || section.serviceName}
                    </h3>
                    <span className={pageSection.isActive ? 'status-badge status-published' : 'status-badge status-draft'}>
                      {pageSection.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="section-card-body">
                    <p><strong>Type:</strong> {section.sectionType}</p>
                    <p><strong>Service:</strong> {section.serviceName}</p>
                    <p><strong>Order:</strong> {pageSection.order}</p>
                    {section.subtitle && (
                      <p className="section-description">{section.subtitle}</p>
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
                      disabled={index === sortedSections.length - 1}
                      title="Move Down"
                    >
                      ↓
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleToggleSection(section._id)}
                      title={pageSection.isActive ? 'Deactivate' : 'Activate'}
                    >
                      {pageSection.isActive ? '👁️' : '🚫'}
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveSection(section._id)}
                      title="Remove from Page"
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageSectionManager;
