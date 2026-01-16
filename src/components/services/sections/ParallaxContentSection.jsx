import React, { useEffect, useRef } from 'react';

const ParallaxContentSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {}, htmlContent, cssContent } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];

  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.parallax-stacked-section');

    // Enhanced intersection observer with better threshold
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    sections.forEach((section) => obs.observe(section));
    observerRef.current = obs;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sortedItems.length]);

  if (htmlContent) {
    return (
      <section style={{ background: backgroundColor }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {cssContent && <style dangerouslySetInnerHTML={{ __html: cssContent }} />}
      </section>
    );
  }

  // Calculate proper nth-child values (accounting for HR elements)
  const getNthChildValue = (index) => {
    // Items are at positions: 1, 3, 5, 7, 9, 11...
    // Because HRs are at: 2, 4, 6, 8, 10...
    return index * 2 + 1;
  };

  return (
    <div className="parallax-section-wrapper">
      <div className="section-outer panel">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-inner panel">
            {/* Header */}
            {(title || subtitle || description) && (
              <div className="parallax-header panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-12 sm:max-w-600px xl:max-w-800px mx-auto text-center">
                {subtitle && (
                  <span className="fs-6 fw-bold text-uppercase" style={{
                    color: headingColor,
                    letterSpacing: '1.5px',
                    marginBottom: '0.5rem'
                  }}>
                    {subtitle}
                  </span>
                )}
                {title && (
                  <h2 className="h3 lg:h2 xl:h1 m-0" style={{
                    color: headingColor,
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }}>
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="fs-6 xl:fs-5" style={{
                    color: textColor,
                    opacity: 0.8,
                    lineHeight: '1.7',
                    maxWidth: '700px'
                  }}>
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Parallax Items Container */}
            <div className="parallax-items-container">
              {sortedItems.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="parallax-stacked-section" data-index={i}>
                    <div className="parallax-content-wrapper">
                      <div className="row align-items-center g-4 lg:g-6 xl:g-8">
                        {/* Content on left */}
                        <div className="col-12 col-md-6 order-1 order-md-0">
                          <div className="parallax-content panel vstack justify-center gap-3 sm:gap-4 h-100">
                            <div className="panel vstack gap-2 sm:gap-3">
                              {item.title && (
                                <h3 className="h4 lg:h3 xl:h2 m-0" style={{
                                  color: headingColor,
                                  fontWeight: '700',
                                  lineHeight: '1.3',
                                  marginBottom: '0.75rem'
                                }}>
                                  {item.title}
                                </h3>
                              )}
                              {item.description && (
                                <p className="fs-6 xl:fs-5" style={{
                                  color: textColor,
                                  opacity: 0.8,
                                  lineHeight: '1.7',
                                  marginBottom: '1rem'
                                }}>
                                  {item.description}
                                </p>
                              )}
                              {item.link && item.linkText && (
                                <a
                                  href={item.link}
                                  className="uc-link fw-bold hstack gap-narrow"
                                  style={{
                                    color: headingColor,
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease',
                                    fontSize: '1rem',
                                    fontWeight: '600'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(5px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >
                                  <span>{item.linkText}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" style={{ marginLeft: '8px' }} />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Image on right */}
                        <div className="col-12 col-md-6 order-0 order-md-1">
                          {item.image && (
                            <div className="parallax-image-wrapper panel w-100">
                              <img
                                src={item.image}
                                width={780}
                                height={728}
                                alt={item.title || 'Feature'}
                                className="parallax-image"
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  objectFit: 'cover',
                                  borderRadius: '16px',
                                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {i !== sortedItems.length - 1 && (
                    <hr className="parallax-divider border-gray-100 dark:border-opacity-15 m-0 opacity-100" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .parallax-section-wrapper {
          background: ${backgroundColor};
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .parallax-header {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .parallax-items-container {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .parallax-stacked-section {
          position: sticky;
          top: 100px;
          padding: 3rem 0;
          margin-bottom: 100px;
          background: ${backgroundColor};
          opacity: 0;
          transform: translateY(50px) scale(0.98);
          transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform, opacity;
          border-radius: 20px;
        }

        .parallax-stacked-section.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .parallax-content-wrapper {
          background: ${backgroundColor};
          padding: 2rem;
          border-radius: 16px;
          position: relative;
          z-index: 1;
        }

        .parallax-image {
          transition: all 0.5s ease;
        }

        .parallax-image:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2) !important;
        }

        .parallax-divider {
          margin: 0;
          opacity: 0;
        }

        /* Z-index and margin-top for perfect stacking effect */
        ${sortedItems.map((_, index) => {
          const nthChild = getNthChildValue(index);
          const zIndex = 50 - (index * 5);
          const marginTop = index > 0 ? '-100px' : '0';
          const scale = 1 - (index * 0.02);
          return `.parallax-items-container > .parallax-stacked-section:nth-of-type(${index + 1}) {
            z-index: ${zIndex};
            margin-top: ${marginTop};
          }
          .parallax-items-container > .parallax-stacked-section:nth-of-type(${index + 1}):not(.is-visible) {
            transform: translateY(50px) scale(${scale});
          }`;
        }).join('\n        ')}

        /* Content animations */
        .parallax-content {
          animation-delay: 0.2s;
        }

        .parallax-image-wrapper {
          animation-delay: 0.4s;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .parallax-section-wrapper {
            padding: 80px 0;
          }

          .parallax-stacked-section {
            top: 80px;
            margin-bottom: 80px;
            padding: 2rem 0;
          }

          ${sortedItems.map((_, index) => {
            if (index === 0) return '';
            return `.parallax-items-container > .parallax-stacked-section:nth-of-type(${index + 1}) {
              margin-top: -80px;
            }`;
          }).join('\n          ')}
        }

        @media (max-width: 768px) {
          .parallax-section-wrapper {
            padding: 60px 0;
          }

          .parallax-stacked-section {
            top: 60px;
            margin-bottom: 60px;
            padding: 1.5rem 0;
          }

          .parallax-content-wrapper {
            padding: 1.5rem;
          }

          ${sortedItems.map((_, index) => {
            if (index === 0) return '';
            return `.parallax-items-container > .parallax-stacked-section:nth-of-type(${index + 1}) {
              margin-top: -60px;
            }`;
          }).join('\n          ')}

          .parallax-image {
            border-radius: 12px;
          }
        }

        @media (max-width: 576px) {
          .parallax-stacked-section {
            margin-bottom: 40px;
          }

          ${sortedItems.map((_, index) => {
            if (index === 0) return '';
            return `.parallax-items-container > .parallax-stacked-section:nth-of-type(${index + 1}) {
              margin-top: -40px;
            }`;
          }).join('\n          ')}
        }
      `}} />
    </div>
  );
};

export default ParallaxContentSection;
