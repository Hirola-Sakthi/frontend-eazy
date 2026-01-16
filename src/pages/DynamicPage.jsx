import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceSectionRenderer from '../components/services/ServiceSectionRenderer';
import Header4 from '../components/headers/Header4';
import Footer1 from '../components/footers/Footer1';

const DynamicPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL || 'https://cms-eazy.onrender.com'}/api/v1/website/pages/${slug}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            navigate('/page-not-found');
            return;
          }
          throw new Error('Failed to fetch page');
        }

        const data = await response.json();
        setPage(data.data);
      } catch (err) {
        console.error('Error fetching page:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPage();
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.5rem',
        color: '#313860'
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.5rem',
        color: '#dc3545'
      }}>
        Error: {error}
      </div>
    );
  }

  if (!page) {
    return null;
  }

  // Get header and footer components dynamically
  const HeaderComponent = page.showHeader ? Header4 : null;
  const FooterComponent = page.showFooter ? Footer1 : null;

  // Sort sections by order
  const sortedSections = page.sections
    ? page.sections
        .filter(s => s.isActive && s.sectionId)
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map(s => s.sectionId)
    : [];

  return (
    <>
      <Helmet>
        <title>{page.metaTitle || page.title}</title>
        {page.metaDescription && (
          <meta name="description" content={page.metaDescription} />
        )}
        {page.metaKeywords && page.metaKeywords.length > 0 && (
          <meta name="keywords" content={page.metaKeywords.join(', ')} />
        )}
        {page.ogImage && (
          <meta property="og:image" content={page.ogImage} />
        )}
        <meta property="og:title" content={page.metaTitle || page.title} />
        {page.metaDescription && (
          <meta property="og:description" content={page.metaDescription} />
        )}
      </Helmet>

      {HeaderComponent && <HeaderComponent />}

      <main
        style={{
          backgroundColor: page.pageStyles?.backgroundColor || '#ffffff',
          minHeight: '50vh'
        }}
        className={page.pageStyles?.customClasses?.join(' ')}
      >
        {sortedSections.map((section, index) => (
          <ServiceSectionRenderer key={section._id || index} section={section} />
        ))}
      </main>

      {page.pageStyles?.customCSS && (
        <style>{page.pageStyles.customCSS}</style>
      )}

      {FooterComponent && <FooterComponent />}
    </>
  );
};

export default DynamicPage;
