import { useState, useEffect, useCallback } from 'react';
import {
  getFAQs,
  getProducts,
  getProductBySlug,
  getTestimonials,
  getTeamMembers,
  getFeatures,
  getPricingPlans,
  getIntegrations,
  getFooter,
  getHeroes,
  getPageContent,
  getSiteSections,
  getBlogs,
  getServiceSections
} from './content.api';

// Generic hook for fetching data
const useContentFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      if (result.error) {
        setError(result.error);
      } else {
        setData(result);
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

// FAQs Hook
export const useFAQs = () => {
  const { data, loading, error, refetch } = useContentFetch(getFAQs);
  return {
    faqs: data?.faqs || [],
    loading,
    error,
    refetch
  };
};

// Products Hook
export const useProducts = (params = {}) => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getProducts(params),
    [JSON.stringify(params)]
  );
  return {
    products: data?.products || [],
    pagination: data?.pagination || null,
    loading,
    error,
    refetch
  };
};

// Single Product Hook
export const useProduct = (slug) => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getProductBySlug(slug),
    [slug]
  );
  return {
    product: data?.product || null,
    loading,
    error,
    refetch
  };
};

// Testimonials Hook
export const useTestimonials = () => {
  const { data, loading, error, refetch } = useContentFetch(getTestimonials);
  return {
    testimonials: data?.testimonials || [],
    loading,
    error,
    refetch
  };
};

// Team Members Hook
export const useTeamMembers = () => {
  const { data, loading, error, refetch } = useContentFetch(getTeamMembers);
  return {
    teamMembers: data?.teamMembers || [],
    loading,
    error,
    refetch
  };
};

// Features Hook
export const useFeatures = (section = '') => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getFeatures(section),
    [section]
  );
  return {
    features: data?.features || [],
    loading,
    error,
    refetch
  };
};

// Pricing Plans Hook
export const usePricingPlans = () => {
  const { data, loading, error, refetch } = useContentFetch(getPricingPlans);
  return {
    pricingPlans: data?.pricingPlans || [],
    loading,
    error,
    refetch
  };
};

// Integrations Hook
export const useIntegrations = () => {
  const { data, loading, error, refetch } = useContentFetch(getIntegrations);
  return {
    integrations: data?.integrations || [],
    loading,
    error,
    refetch
  };
};

// Footer Hook
export const useFooter = () => {
  const { data, loading, error, refetch } = useContentFetch(getFooter);
  return {
    footer: data?.footer || null,
    loading,
    error,
    refetch
  };
};

// Heroes Hook
export const useHeroes = (page = '') => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getHeroes(page),
    [page]
  );
  return {
    heroes: data?.heroes || [],
    loading,
    error,
    refetch
  };
};

// Page Content Hook (fetches all data for a page at once)
export const usePageContent = (page = 'home') => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getPageContent(page),
    [page]
  );
  return {
    sections: data?.sections || [],
    content: data?.content || {},
    loading,
    error,
    refetch
  };
};

// Site Sections Hook
export const useSiteSections = (page = 'home') => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getSiteSections(page),
    [page]
  );
  return {
    sections: data?.sections || [],
    loading,
    error,
    refetch
  };
};

// Blogs Hook
export const useBlogs = (params = {}) => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getBlogs(params),
    [JSON.stringify(params)]
  );
  return {
    blogs: data?.blogs || [],
    pagination: data?.pagination || null,
    loading,
    error,
    refetch
  };
};

// Service Sections Hook
export const useServiceSections = (serviceName) => {
  const { data, loading, error, refetch } = useContentFetch(
    () => getServiceSections(serviceName),
    [serviceName]
  );
  return {
    sections: data?.data || [],
    loading,
    error,
    refetch
  };
};

// Combined hook for getting all data with fallback to static data
export const useContentWithFallback = (fetchHook, staticData) => {
  const hookResult = fetchHook();

  // If API data is available and not loading, use it
  // Otherwise, use static data as fallback
  if (!hookResult.loading && !hookResult.error && hookResult.data) {
    return hookResult;
  }

  // Return static data while loading or on error
  return {
    ...hookResult,
    data: staticData
  };
};
