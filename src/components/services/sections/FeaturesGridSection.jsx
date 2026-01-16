import React from 'react';

const FeaturesGridSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section
      className="features-grid-section"
      style={{
        background: backgroundColor,
        padding: '100px 5%',
        width: '100%'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        {(title || subtitle || description) && (
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            {subtitle && (
              <p style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: '#1338be',
                marginBottom: '12px',
                fontWeight: '700'
              }}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                marginBottom: '20px',
                color: headingColor,
                lineHeight: '1.2'
              }}>
                {title}
              </h2>
            )}
            {description && (
              <p style={{
                fontSize: '1.125rem',
                maxWidth: '700px',
                margin: '0 auto',
                color: textColor,
                lineHeight: '1.7',
                opacity: 0.9
              }}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {sortedItems.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '20px'
              }}
            >
              {/* SVG Icon */}
              {item.image && (
                <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.title || 'Feature icon'}
                    style={{
                      width: '64px',
                      height: '64px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              )}

              {/* Title */}
              {item.title && (
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: headingColor
                }}>
                  {item.title}
                </h3>
              )}

              {/* Description */}
              {item.description && (
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: textColor,
                  margin: '0',
                  opacity: 0.85
                }}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;
