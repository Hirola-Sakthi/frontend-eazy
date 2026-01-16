import React from 'react';

const ProcessStepsSection = ({ section }) => {
  if (!section) return null;

  const items = section.contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const backgroundColor = section.sectionStyles?.backgroundColor || '#f8f9fa';
  const textColor = section.sectionStyles?.textColor || '#1a1a1a';
  const headingColor = section.sectionStyles?.headingColor || '#1a1a1a';

  return (
    <div
      className="process-section"
      style={{
        padding: section.sectionStyles?.padding || '80px 20px',
        background: backgroundColor,
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
              color: '#666',
              fontSize: '1.2rem'
            }}>
              {section.subtitle}
            </p>
          )}
        </div>

        {/* Process Steps */}
        <div className="row g-4 justify-content-center">
          {sortedItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div
                className="step-card text-center"
                style={{
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Step Number */}
                <div className="step-number" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 1rem'
                }}>
                  {item.number || index + 1}
                </div>

                {/* Icon or Image */}
                <div className="step-icon mb-3" style={{ fontSize: '2.5rem', color: '#667eea' }}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'contain'
                      }}
                    />
                  ) : item.icon ? (
                    <i className={item.icon}></i>
                  ) : null}
                </div>

                {/* Content */}
                <h3 className="step-title" style={{
                  color: '#1a1a1a',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>
                <p className="step-description" style={{
                  color: '#666',
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

export default ProcessStepsSection;
