import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://cms-eazy.onrender.com';
const CMS_API = `${API_URL}/api/v1/cms`;

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Create axios instance with auth headers
const axiosInstance = axios.create({
  baseURL: CMS_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Get all pages
 * @param {Object} filters - Optional filters (status, search)
 * @returns {Promise} Pages array
 */
export const getAllPages = async (filters = {}) => {
  try {
    const response = await axiosInstance.get('/pages', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    throw error;
  }
};

/**
 * Get single page by ID
 * @param {String} id - Page ID
 * @returns {Promise} Page object
 */
export const getPageById = async (id) => {
  try {
    const response = await axiosInstance.get(`/pages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
};

/**
 * Create new page
 * @param {Object} pageData - Page data
 * @returns {Promise} Created page object
 */
export const createPage = async (pageData) => {
  try {
    const response = await axiosInstance.post('/pages', pageData);
    return response.data;
  } catch (error) {
    console.error('Error creating page:', error);
    throw error;
  }
};

/**
 * Update existing page
 * @param {String} id - Page ID
 * @param {Object} pageData - Updated page data
 * @returns {Promise} Updated page object
 */
export const updatePage = async (id, pageData) => {
  try {
    const response = await axiosInstance.put(`/pages/${id}`, pageData);
    return response.data;
  } catch (error) {
    console.error('Error updating page:', error);
    throw error;
  }
};

/**
 * Delete page
 * @param {String} id - Page ID
 * @returns {Promise} Success message
 */
export const deletePage = async (id) => {
  try {
    const response = await axiosInstance.delete(`/pages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting page:', error);
    throw error;
  }
};

/**
 * Duplicate page
 * @param {String} id - Page ID
 * @returns {Promise} Duplicated page object
 */
export const duplicatePage = async (id) => {
  try {
    const response = await axiosInstance.post(`/pages/${id}/duplicate`);
    return response.data;
  } catch (error) {
    console.error('Error duplicating page:', error);
    throw error;
  }
};

/**
 * Add section to page
 * @param {String} pageId - Page ID
 * @param {String} sectionId - Section ID
 * @param {Number} order - Section order
 * @returns {Promise} Updated page object
 */
export const addSectionToPage = async (pageId, sectionId, order = 0) => {
  try {
    const response = await axiosInstance.post(`/pages/${pageId}/sections`, {
      sectionId,
      order
    });
    return response.data;
  } catch (error) {
    console.error('Error adding section to page:', error);
    throw error;
  }
};

/**
 * Remove section from page
 * @param {String} pageId - Page ID
 * @param {String} sectionId - Section ID
 * @returns {Promise} Updated page object
 */
export const removeSectionFromPage = async (pageId, sectionId) => {
  try {
    const response = await axiosInstance.delete(`/pages/${pageId}/sections/${sectionId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing section from page:', error);
    throw error;
  }
};

/**
 * Reorder page sections
 * @param {String} pageId - Page ID
 * @param {Array} sections - Array of {sectionId, order}
 * @returns {Promise} Updated page object
 */
export const reorderPageSections = async (pageId, sections) => {
  try {
    const response = await axiosInstance.patch(`/pages/${pageId}/sections/reorder`, {
      sections
    });
    return response.data;
  } catch (error) {
    console.error('Error reordering sections:', error);
    throw error;
  }
};

/**
 * Toggle section visibility in page
 * @param {String} pageId - Page ID
 * @param {String} sectionId - Section ID
 * @returns {Promise} Updated page object
 */
export const togglePageSection = async (pageId, sectionId) => {
  try {
    const response = await axiosInstance.patch(`/pages/${pageId}/sections/${sectionId}/toggle`);
    return response.data;
  } catch (error) {
    console.error('Error toggling section:', error);
    throw error;
  }
};

export default {
  getAllPages,
  getPageById,
  createPage,
  updatePage,
  deletePage,
  duplicatePage,
  addSectionToPage,
  removeSectionFromPage,
  reorderPageSections,
  togglePageSection
};
