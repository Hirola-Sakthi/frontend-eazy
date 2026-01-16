import React from 'react';

const FeaturesGridSection = ({ section }) => {
  if (!section) return null;

  const items = section.contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const backgroundColor = section.sectionStyles?.backgroundColor || '#667eea';
  const textColor = section.sectionStyles?.textColor || '#ffffff';
  const headingColor = section.sectionStyles?.headingColor || '#ffffff';

  return (
    <div
      className="features-section"
      style={{
        padding: section.sectionStyles?.padding || '80px 20px',
        background: `linear-gradient(135deg, ${backgroundColor} 0%, #764ba2 100%)`,
        color: textColor
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title" style={{
            color: headingColor,
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="section-subtitle" style={{
              color: `rgba(255,255,255,0.9)`,
              fontSize: '1.2rem'
            }}>
              {section.subtitle}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {sortedItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div
                className="feature-card"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  height: '100%',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Icon or Image */}
                <div className="feature-icon mb-3" style={{ fontSize: '3rem', color: 'white' }}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  ) : item.icon ? (
                    <i className={item.icon}></i>
                  ) : null}
                </div>

                {/* Content */}
                <h3 className="feature-title" style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>
                <p className="feature-description" style={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: '1.6',
                  marginBottom: 0
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGridSection;
