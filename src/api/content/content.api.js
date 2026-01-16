import { backendUrl } from "../../backendUrl";
import axios from "axios";

// FAQs API
export const getFAQs = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/faqs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return { error: "Failed to fetch FAQs", details: error.message };
  }
};

// Products API
export const getProducts = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(`${backendUrl}/api/v1/website/products${queryString ? '?' + queryString : ''}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { error: "Failed to fetch products", details: error.message };
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/products/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return { error: "Failed to fetch product", details: error.message };
  }
};

// Testimonials API
export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/testimonials`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return { error: "Failed to fetch testimonials", details: error.message };
  }
};

// Team Members API
export const getTeamMembers = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/team`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return { error: "Failed to fetch team members", details: error.message };
  }
};

// Features API
export const getFeatures = async (section = '') => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/features${section ? '?section=' + section : ''}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching features:", error);
    return { error: "Failed to fetch features", details: error.message };
  }
};

// Pricing Plans API
export const getPricingPlans = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/pricing`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pricing plans:", error);
    return { error: "Failed to fetch pricing plans", details: error.message };
  }
};

// Integrations API
export const getIntegrations = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/integrations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching integrations:", error);
    return { error: "Failed to fetch integrations", details: error.message };
  }
};

// Footer API
export const getFooter = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/footer`);
    return response.data;
  } catch (error) {
    console.error("Error fetching footer:", error);
    return { error: "Failed to fetch footer", details: error.message };
  }
};

// Heroes API
export const getHeroes = async (page = '') => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/heroes${page ? '?page=' + page : ''}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return { error: "Failed to fetch heroes", details: error.message };
  }
};

// Site Sections API (for page layout and ordering)
export const getPageContent = async (page = 'home') => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/page-content/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching page content:", error);
    return { error: "Failed to fetch page content", details: error.message };
  }
};

// Get all site sections for a specific page
export const getSiteSections = async (page = 'home') => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/sections?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching site sections:", error);
    return { error: "Failed to fetch site sections", details: error.message };
  }
};

// Blogs API
export const getBlogs = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(`${backendUrl}/api/v1/website/blogs${queryString ? '?' + queryString : ''}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: "Failed to fetch blogs", details: error.message };
  }
};

// Service Sections API
export const getServiceSections = async (serviceName) => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/service-sections/service/${serviceName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service sections:", error);
    return { error: "Failed to fetch service sections", details: error.message };
  }
};

// Get service sections by slug (public endpoint)
export const getServiceSectionsBySlug = async (slug) => {
  try {
    const response = await axios.get(`${backendUrl}/api/v1/website/service-sections/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service sections by slug:", error);
    return { error: "Failed to fetch service sections", details: error.message };
  }
};
