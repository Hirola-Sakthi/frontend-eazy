import React from 'react';

const ContentBlocksSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#f8f9fa';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section
      className="content-blocks-section"
      style={{
        background: backgroundColor,
        padding: '100px 5%',
        width: '100%'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        {(title || subtitle || description) && (
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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

        {/* Content Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {sortedItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '60px',
                alignItems: 'center'
              }}
            >
              {/* Image */}
              {item.image && (
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <img
                    src={item.image}
                    alt={item.title || 'Content'}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                {/* Title */}
                {item.title && (
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    fontWeight: '800',
                    marginBottom: '20px',
                    color: headingColor,
                    lineHeight: '1.2'
                  }}>
                    {item.title}
                  </h3>
                )}

                {/* Description */}
                {item.description && (
                  <p style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.8',
                    color: textColor,
                    marginBottom: '28px',
                    opacity: 0.9
                  }}>
                    {item.description}
                  </p>
                )}

                {/* Link Button */}
                {item.link && item.linkText && (
                  <a
                    href={item.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 32px',
                      background: 'linear-gradient(135deg, #1338be, #2a2a72)',
                      color: '#ffffff',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(19, 56, 190, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 25px rgba(19, 56, 190, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(19, 56, 190, 0.3)';
                    }}
                  >
                    {item.linkText}
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBlocksSection;
