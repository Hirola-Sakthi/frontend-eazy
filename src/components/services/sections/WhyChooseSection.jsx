import React from 'react';

const WhyChooseSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section
      className="why-choose-section"
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

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {sortedItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}
            >
              {/* SVG Icon */}
              {item.image && (
                <div style={{ flexShrink: 0 }}>
                  <img
                    src={item.image}
                    alt={item.title || 'Benefit icon'}
                    style={{
                      width: '48px',
                      height: '48px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div style={{ flex: 1 }}>
                {/* Title */}
                {item.title && (
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '8px',
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
