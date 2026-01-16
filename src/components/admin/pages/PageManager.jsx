import React, { useState, useEffect } from 'react';
import {
  getAllPages,
  createPage,
  updatePage,
  deletePage,
  duplicatePage
} from '../../../api/admin/page.api';
import { getAllServiceSections } from '../../../api/admin/serviceSection.api';
import PageForm from './PageForm';
import PageSectionManager from './PageSectionManager';
import '../serviceSections/AdminStyles.css';

const PageManager = () => {
  const [pages, setPages] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPage, setEditingPage] = useState(null);
  const [managingSections, setManagingSections] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    search: ''
  });

  useEffect(() => {
    fetchPages();
    fetchSections();
  }, [filters]);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const response = await getAllPages(filters);
      setPages(response.data || []);
    } catch (error) {
      console.error('Error fetching pages:', error);
      alert('Failed to fetch pages');
    } finally {
      setLoading(false);
    }
  };

  const fetchSections = async () => {
    try {
      const response = await getAllServiceSections();
      setSections(response.data || []);
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  const handleCreatePage = () => {
    setEditingPage(null);
    setShowForm(true);
  };

  const handleEditPage = (page) => {
    setEditingPage(page);
    setShowForm(true);
  };

  const handleSavePage = async (pageData) => {
    try {
      if (editingPage) {
        await updatePage(editingPage._id, pageData);
        alert('Page updated successfully!');
      } else {
        await createPage(pageData);
        alert('Page created successfully!');
      }
      setShowForm(false);
      setEditingPage(null);
      fetchPages();
    } catch (error) {
      console.error('Error saving page:', error);
      alert('Failed to save page');
    }
  };

  const handleDeletePage = async (id) => {
    if (!confirm('Are you sure you want to delete this page?')) {
      return;
    }

    try {
      await deletePage(id);
      alert('Page deleted successfully!');
      fetchPages();
    } catch (error) {
      console.error('Error deleting page:', error);
      alert('Failed to delete page');
    }
  };

  const handleDuplicatePage = async (id) => {
    try {
      await duplicatePage(id);
      alert('Page duplicated successfully!');
      fetchPages();
    } catch (error) {
      console.error('Error duplicating page:', error);
      alert('Failed to duplicate page');
    }
  };

  const handleManageSections = (page) => {
    setManagingSections(page);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'published':
        return 'status-badge status-published';
      case 'draft':
        return 'status-badge status-draft';
      case 'archived':
        return 'status-badge status-archived';
      default:
        return 'status-badge';
    }
  };

  if (managingSections) {
    return (
      <PageSectionManager
        page={managingSections}
        sections={sections}
        onBack={() => {
          setManagingSections(null);
          fetchPages();
        }}
      />
    );
  }

  if (showForm) {
    return (
      <PageForm
        page={editingPage}
        onSave={handleSavePage}
        onCancel={() => {
          setShowForm(false);
          setEditingPage(null);
        }}
      />
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Page Manager</h1>
        <button className="btn btn-primary" onClick={handleCreatePage}>
          Create New Page
        </button>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <label>Status:</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="form-control"
          >
            <option value="">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Search:</label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="Search by title or slug..."
            className="form-control"
          />
        </div>
      </div>

      {/* Pages List */}
      {loading ? (
        <div className="loading-message">Loading pages...</div>
      ) : pages.length === 0 ? (
        <div className="empty-message">
          No pages found. Create your first page to get started!
        </div>
      ) : (
        <div className="sections-grid">
          {pages.map((page) => (
            <div key={page._id} className="section-card">
              <div className="section-card-header">
                <h3>{page.title}</h3>
                <span className={getStatusBadgeClass(page.status)}>
                  {page.status}
                </span>
              </div>
              <div className="section-card-body">
                <p><strong>Slug:</strong> /{page.slug}</p>
                <p><strong>Layout:</strong> {page.layout}</p>
                <p><strong>Sections:</strong> {page.sections?.length || 0}</p>
                {page.description && (
                  <p className="section-description">{page.description}</p>
                )}
              </div>
              <div className="section-card-footer">
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => handleManageSections(page)}
                  title="Manage Sections"
                >
                  📋 Sections
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => handleEditPage(page)}
                  title="Edit Page"
                >
                  ✏️ Edit
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => handleDuplicatePage(page._id)}
                  title="Duplicate Page"
                >
                  📋 Duplicate
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeletePage(page._id)}
                  title="Delete Page"
                >
                  🗑️ Delete
                </button>
                {page.status === 'published' && (
                  <a
                    href={`/page/${page.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    👁️ View
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

export default PageManager;
