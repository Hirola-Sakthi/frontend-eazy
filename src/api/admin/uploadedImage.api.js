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
      'Authorization': `Bearer ${token}`
    }
  });
};

// Upload image to Cloudinary
export const uploadImage = async (file, folder = 'cms-blog-images', tags = [], description = '') => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);
    formData.append('tags', tags.join(','));
    formData.append('description', description);

    const token = getAuthToken();
    const response = await axios.post(`${backendUrl}/api/v1/cms/upload/image`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Get all uploaded images
export const getAllUploadedImages = async (filters = {}) => {
  try {
    const axiosInstance = createAuthAxios();
    const queryString = new URLSearchParams(filters).toString();
    const response = await axiosInstance.get(`/api/v1/cms/uploaded-images${queryString ? '?' + queryString : ''}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching uploaded images:", error);
    throw error;
  }
};

// Get image statistics
export const getImageStats = async () => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get('/api/v1/cms/uploaded-images/stats');
    return response.data;
  } catch (error) {
    console.error("Error fetching image stats:", error);
    throw error;
  }
};

// Get image by ID
export const getImageById = async (id) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get(`/api/v1/cms/uploaded-images/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};

// Update image metadata
export const updateImageMetadata = async (id, metadata) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.put(`/api/v1/cms/uploaded-images/${id}`, metadata);
    return response.data;
  } catch (error) {
    console.error("Error updating image metadata:", error);
    throw error;
  }
};

// Delete image
export const deleteImage = async (id) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.delete(`/api/v1/cms/uploaded-images/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};

// Increment image usage
export const incrementImageUsage = async (id) => {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post(`/api/v1/cms/uploaded-images/${id}/increment-usage`);
    return response.data;
  } catch (error) {
    console.error("Error incrementing image usage:", error);
    throw error;
  }
};
