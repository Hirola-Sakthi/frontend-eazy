import { backendUrl } from "../../backendUrl";
import axios from "axios";

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Create axios instance with auth
const createAuthAxios = () => {
  const token = getAuthToken();
  return axios.create({
    baseURL: backendUrl,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

// Create a new service section
export const createServiceSection = async (sectionData) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post('/api/v1/cms/service-sections', sectionData);
    return response.data;
  } catch (error) {
    console.error("Error creating service section:", error);
    throw error;
  }
};

// Get all service sections with filters
export const getAllServiceSections = async (filters = {}) => {
  try {
    const axiosInstance = createAuthAxios();
    const queryString = new URLSearchParams(filters).toString();
    const response = await axiosInstance.get(`/api/v1/cms/service-sections${queryString ? '?' + queryString : ''}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service sections:", error);
    throw error;
  }
};

// Get a single service section
export const getServiceSectionById = async (id) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get(`/api/v1/cms/service-sections/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service section:", error);
    throw error;
  }
};

// Update a service section
export const updateServiceSection = async (id, sectionData) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.put(`/api/v1/cms/service-sections/${id}`, sectionData);
    return response.data;
  } catch (error) {
    console.error("Error updating service section:", error);
    throw error;
  }
};

// Delete a service section
export const deleteServiceSection = async (id) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.delete(`/api/v1/cms/service-sections/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting service section:", error);
    throw error;
  }
};

// Update section orders in bulk
export const updateSectionOrders = async (sections) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.put('/api/v1/cms/service-sections/orders/bulk', { sections });
    return response.data;
  } catch (error) {
    console.error("Error updating section orders:", error);
    throw error;
  }
};

// Toggle section visibility
export const toggleSectionVisibility = async (id) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.patch(`/api/v1/cms/service-sections/${id}/toggle`);
    return response.data;
  } catch (error) {
    console.error("Error toggling section visibility:", error);
    throw error;
  }
};

// Duplicate a service section
export const duplicateServiceSection = async (id) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post(`/api/v1/cms/service-sections/${id}/duplicate`);
    return response.data;
  } catch (error) {
    console.error("Error duplicating service section:", error);
    throw error;
  }
};
