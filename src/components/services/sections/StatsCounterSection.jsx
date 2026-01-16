import React from 'react';

const StatsCounterSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || 'linear-gradient(135deg, #1338be, #2a2a72)';
  const textColor = sectionStyles.textColor || '#ffffff';
  const headingColor = sectionStyles.headingColor || '#ffffff';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section
      className="stats-counter-section"
      style={{
        background: backgroundColor,
        padding: '100px 5%',
        width: '100%',
        color: textColor
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
                color: '#ffffff',
                marginBottom: '12px',
                fontWeight: '700',
                opacity: 0.9
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
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.7'
              }}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          {sortedItems.map((item, index) => (
            <div key={index} style={{ padding: '20px' }}>
              {/* SVG Icon (optional) */}
              {item.image && (
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.title || 'Stat icon'}
                    style={{
                      width: '56px',
                      height: '56px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.9
                    }}
                  />
                </div>
              )}

              {/* Number */}
              {item.title && (
                <div style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  marginBottom: '12px',
                  color: '#ffffff',
                  lineHeight: '1'
                }}>
                  {item.title}
                </div>
              )}

              {/* Label */}
              {item.description && (
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'rgba(255,255,255,0.85)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;
