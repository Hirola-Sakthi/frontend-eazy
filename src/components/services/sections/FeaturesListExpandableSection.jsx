import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './FeaturesListExpandableSection.css';

const FeaturesListExpandableSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className="features-list-expandable-section"
      style={{
        background: backgroundColor,
        padding: '40px 0',
        width: '100%'
      }}
      id="features"
    >
      <div className="features-list-parent" style={{ width: '90%', margin: 'auto' }}>
        {/* Section Header */}
        {(subtitle || title || description) && (
          <div className="features-list-header">
            {subtitle && (
              <h6 style={{
                color: headingColor,
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                {subtitle}
              </h6>
            )}
            {title && (
              <h2 style={{
                color: headingColor,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                marginBottom: description ? '15px' : '30px'
              }}>
                {title}
              </h2>
            )}
            {description && (
              <p style={{
                color: textColor,
                fontSize: '1.125rem',
                marginBottom: '30px',
                opacity: 0.9
              }}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className="features-list-content container-xxl container-xl container-lg">
          <div className="row">
            {sortedItems.slice(0, showAll || !isMobile ? sortedItems.length : 6).map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="features-list-item" style={{
                  borderColor: `${headingColor}10`
                }}>
                  {item.image && (
                    <div className="features-list-item-image">
                      <img src={item.image} alt={item.title || 'Feature'} />
                    </div>
                  )}
                  <div>
                    {item.title && (
                      <h5 style={{ color: headingColor }}>{item.title}</h5>
                    )}
                    {item.description && (
                      <p style={{ color: textColor }}>{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button for Mobile */}
          {isMobile && sortedItems.length > 6 && (
            <div className="text-center mt-3">
              <h6
                onClick={toggleShowAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: headingColor,
                  fontSize: '1rem',
                  fontWeight: '600',
                  gap: '8px'
                }}
              >
                {showAll ? "Show Less" : "Read More"}
                <ChevronDown
                  size={20}
                  style={{
                    transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </h6>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesListExpandableSection;
