import React from 'react';

const ProcessStepsSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#f8f9fa';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section
      className="process-steps-section"
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

        {/* Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          position: 'relative'
        }}>
          {sortedItems.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Step Number */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1338be, #2a2a72)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                fontWeight: '800',
                margin: '0 auto 24px',
                boxShadow: '0 4px 20px rgba(19, 56, 190, 0.3)'
              }}>
                {index + 1}
              </div>

              {/* SVG Icon (optional) */}
              {item.image && (
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.title || 'Step icon'}
                    style={{
                      width: '48px',
                      height: '48px',
                      objectFit: 'contain',
                      opacity: 0.8
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

export default ProcessStepsSection;
