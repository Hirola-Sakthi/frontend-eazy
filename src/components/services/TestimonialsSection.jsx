import React from 'react';

const TestimonialsSection = ({ section }) => {
  if (!section) return null;

  const items = section.contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const backgroundColor = section.sectionStyles?.backgroundColor || '#ffffff';
  const textColor = section.sectionStyles?.textColor || '#1a1a1a';
  const headingColor = section.sectionStyles?.headingColor || '#1a1a1a';

  return (
    <div
      className="testimonials-section"
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

        {/* Testimonials Grid */}
        <div className="row g-4">
          {sortedItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="testimonial-card"
                style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                {/* Quote Icon */}
                <div className="quote-icon" style={{
                  fontSize: '2rem',
                  color: '#667eea',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-quote-left"></i>
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text" style={{
                  color: '#333',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                  flex: 1
                }}>
                  {item.description}
                </p>

                {/* Author Info */}
                <div className="testimonial-author" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e0e0e0'
                }}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                  <div>
                    <div className="author-name" style={{
                      color: '#1a1a1a',
                      fontWeight: '600',
                      marginBottom: '0.25rem'
                    }}>
                      {item.title}
                    </div>
                    {item.linkText && (
                      <div className="author-role" style={{
                        color: '#666',
                        fontSize: '0.9rem'
                      }}>
                        {item.linkText}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
