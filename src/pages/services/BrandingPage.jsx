import React from 'react';
import { useServiceSections } from '@/api/content';
import { ServiceSectionRenderer } from '@/components/services';
import Header4 from '@/components/headers/Header4';

/**
 * BrandingPage Component
 *
 * This component renders a dynamic branding/service page using CMS-managed sections.
 * All content is fetched from the backend based on the serviceName.
 *
 * @param {string} serviceName - The name of the service to fetch sections for (e.g., 'branding', 'digital-marketing')
 */
const BrandingPage = ({ serviceName = 'branding' }) => {
  const { sections, loading, error } = useServiceSections(serviceName);

  if (loading) {
    return (
      <div className="page-wrapper">
        <Header4 />
        <div className="loading-container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading {serviceName} page...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper">
        <Header4 />
        <div className="error-container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Unable to load page</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Sort sections by order
  const sortedSections = sections.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="page-wrapper">
      <Header4 />
      <div id="wrapper" className="wrap">
        {sortedSections.map((section) => (
          <ServiceSectionRenderer key={section._id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default BrandingPage;
