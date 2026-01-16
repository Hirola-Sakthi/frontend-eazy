import React, { useState, useEffect } from 'react';

const FeaturesShowcaseSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {}, htmlContent, cssContent } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  if (htmlContent) {
    return (
      <section style={{ background: backgroundColor }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {cssContent && <style dangerouslySetInnerHTML={{ __html: cssContent }} />}
      </section>
    );
  }

  // Show first 6 on mobile when collapsed, all on desktop
  const displayedItems = (showAll || !isMobile) ? sortedItems : sortedItems.slice(0, 6);

  return (
    <div className="features-showcase-wrapper">
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 15px' }}>
        {/* Header */}
        {(subtitle || title || description) && (
          <div className="features-showcase-header">
            {subtitle && (
              <h6 className="features-showcase-subtitle" style={{ color: headingColor }}>
                {subtitle}
              </h6>
            )}
            {title && (
              <h2 className="features-showcase-title" style={{ color: headingColor }}>
                {title}
              </h2>
            )}
            {description && (
              <p className="features-showcase-description" style={{ color: textColor }}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className="row">
          {displayedItems.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                {item.image && (
                  <div className="feature-icon">
                    <img src={item.image} alt={item.title || 'Feature'} loading="lazy" />
                  </div>
                )}
                <div className="feature-content">
                  {item.title && (
                    <h5 className="feature-title" style={{ color: headingColor }}>
                      {item.title}
                    </h5>
                  )}
                  {item.description && (
                    <p className="feature-description" style={{ color: textColor }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button (Mobile Only) */}
        {isMobile && sortedItems.length > 6 && (
          <div className="text-center mt-4">
            <button
              onClick={toggleShowAll}
              className="show-more-btn"
              style={{
                color: headingColor,
                borderColor: headingColor
              }}
            >
              {showAll ? "Show Less" : "Show More"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginLeft: '8px',
                  transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .features-showcase-wrapper {
          background: ${backgroundColor};
          padding: 80px 0;
          position: relative;
        }

        .features-showcase-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .features-showcase-subtitle {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.75rem;
        }

        .features-showcase-title {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0.5rem 0 1rem;
        }

        .features-showcase-description {
          font-size: 1.063rem;
          line-height: 1.7;
          opacity: 0.85;
          max-width: 700px;
          margin: 0 auto;
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          background: ${backgroundColor === '#ffffff' ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'};
          border: 1px solid rgba(19, 56, 190, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: rgba(19, 56, 190, 0.3);
          box-shadow: 0 4px 16px rgba(19, 56, 190, 0.08);
          transform: translateY(-4px);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${headingColor}, ${textColor});
          border-radius: 12px;
          padding: 12px;
        }

        .feature-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 0 0 0.5rem;
        }

        .feature-description {
          font-size: 0.938rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.85;
        }

        .show-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid;
          border-radius: 8px;
          font-size: 0.938rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .show-more-btn:hover {
          background: ${headingColor};
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(19, 56, 190, 0.2);
        }

        @media (max-width: 991px) {
          .features-showcase-wrapper {
            padding: 60px 0;
          }

          .features-showcase-title {
            font-size: 1.875rem;
          }

          .feature-card {
            padding: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .features-showcase-title {
            font-size: 1.625rem;
          }

          .features-showcase-header {
            margin-bottom: 2.5rem;
          }

          .feature-icon {
            width: 48px;
            height: 48px;
          }

          .feature-title {
            font-size: 1rem;
          }

          .feature-description {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 576px) {
          .features-showcase-title {
            font-size: 1.5rem;
          }

          .feature-card {
            gap: 1rem;
            padding: 1rem;
          }
        }
      `}} />
    </div>
  );
};

export default FeaturesShowcaseSection;
