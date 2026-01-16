import React from 'react';

const TestimonialsSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section
      className="testimonials-section"
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

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {sortedItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '32px',
                border: '2px solid #e8eaf2',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Testimonial Text */}
              {item.description && (
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.8',
                  color: textColor,
                  fontStyle: 'italic',
                  margin: '0',
                  flex: 1
                }}>
                  "{item.description}"
                </p>
              )}

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid #e8eaf2'
              }}>
                {/* Avatar */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || 'Author'}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                )}

                {/* Name and Role */}
                <div style={{ flex: 1 }}>
                  {item.title && (
                    <div style={{
                      fontWeight: '700',
                      fontSize: '1.0625rem',
                      marginBottom: '4px',
                      color: headingColor
                    }}>
                      {item.title}
                    </div>
                  )}
                  {item.linkText && (
                    <div style={{
                      fontSize: '0.9375rem',
                      color: textColor,
                      opacity: 0.7
                    }}>
                      {item.linkText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
