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
 * Get all services
 * @param {Object} filters - Optional filters (category, search, tags, isActive)
 * @returns {Promise} Services array
 */
export const getAllServices = async (filters = {}) => {
  try {
    const response = await axiosInstance.get('/services', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

/**
 * Get single service by ID
 * @param {String} id - Service ID
 * @returns {Promise} Service object
 */
export const getServiceById = async (id) => {
  try {
    const response = await axiosInstance.get(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching service:', error);
    throw error;
  }
};

/**
 * Create new service
 * @param {Object} serviceData - Service data
 * @returns {Promise} Created service object
 */
export const createService = async (serviceData) => {
  try {
    const response = await axiosInstance.post('/services', serviceData);
    return response.data;
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
};

/**
 * Update existing service
 * @param {String} id - Service ID
 * @param {Object} serviceData - Updated service data
 * @returns {Promise} Updated service object
 */
export const updateService = async (id, serviceData) => {
  try {
    const response = await axiosInstance.put(`/services/${id}`, serviceData);
    return response.data;
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
};

/**
 * Delete service
 * @param {String} id - Service ID
 * @returns {Promise} Success message
 */
export const deleteService = async (id) => {
  try {
    const response = await axiosInstance.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
};

/**
 * Duplicate service
 * @param {String} id - Service ID
 * @returns {Promise} Duplicated service object
 */
export const duplicateService = async (id) => {
  try {
    const response = await axiosInstance.post(`/services/${id}/duplicate`);
    return response.data;
  } catch (error) {
    console.error('Error duplicating service:', error);
    throw error;
  }
};

/**
 * Update service orders
 * @param {Array} services - Array of {id, order}
 * @returns {Promise} Success message
 */
export const updateServiceOrders = async (services) => {
  try {
    const response = await axiosInstance.put('/services/orders/bulk', { services });
    return response.data;
  } catch (error) {
    console.error('Error updating service orders:', error);
    throw error;
  }
};

export default {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  duplicateService,
  updateServiceOrders
};
