import React from 'react';

const StatsCounterSection = ({ section }) => {
  if (!section) return null;

  const items = section.contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const backgroundColor = section.sectionStyles?.backgroundColor || '#f093fb';
  const textColor = section.sectionStyles?.textColor || '#ffffff';
  const headingColor = section.sectionStyles?.headingColor || '#ffffff';

  return (
    <div
      className="stats-section"
      style={{
        padding: section.sectionStyles?.padding || '80px 20px',
        background: `linear-gradient(135deg, ${backgroundColor} 0%, #f5576c 100%)`,
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
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.2rem'
            }}>
              {section.subtitle}
            </p>
          )}
        </div>

        {/* Stats Grid */}
        <div className="row g-4 text-center">
          {sortedItems.map((item, index) => (
            <div key={index} className="col-6 col-md-3">
              <div
                className="stat-card"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Icon */}
                {item.icon && (
                  <div className="stat-icon mb-3" style={{ fontSize: '2.5rem', color: 'white' }}>
                    <i className={item.icon}></i>
                  </div>
                )}

                {/* Number */}
                <div className="stat-number" style={{
                  color: 'white',
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  lineHeight: '1'
                }}>
                  {item.title}
                </div>

                {/* Label */}
                <div className="stat-label" style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounterSection;
