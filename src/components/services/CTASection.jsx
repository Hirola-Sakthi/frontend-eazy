import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({ section }) => {
  if (!section) return null;

  const backgroundColor = section.sectionStyles?.backgroundColor || '#667eea';
  const textColor = section.sectionStyles?.textColor || '#ffffff';
  const headingColor = section.sectionStyles?.headingColor || '#ffffff';

  // Get button info from contentItems or use defaults
  const buttons = section.contentItems || [
    { title: 'Get Started Free', link: '/contact-us', order: 0 },
    { title: 'Schedule Demo', link: '/contact-us', order: 1, linkText: 'outline' }
  ];
  const sortedButtons = buttons.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div
      className="cta-section"
      style={{
        padding: section.sectionStyles?.padding || '100px 20px',
        background: `linear-gradient(135deg, ${backgroundColor} 0%, #764ba2 100%)`,
        color: textColor,
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* CTA Title */}
        <h2 className="cta-title" style={{
          color: headingColor,
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          {section.title || 'Ready to Get Started?'}
        </h2>

        {/* CTA Subtitle */}
        {section.subtitle && (
          <p className="cta-subtitle" style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1.3rem',
            marginBottom: '2rem'
          }}>
            {section.subtitle}
          </p>
        )}

        {/* CTA Description */}
        {section.description && (
          <p className="cta-description" style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '1.1rem',
            marginBottom: '2.5rem'
          }}>
            {section.description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="cta-buttons" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {sortedButtons.slice(0, 2).map((button, index) => {
            const isOutline = button.linkText === 'outline' || index === 1;

            return (
              <Link
                key={index}
                to={button.link || '/contact-us'}
                className="btn"
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  background: isOutline ? 'transparent' : 'white',
                  color: isOutline ? 'white' : '#667eea',
                  border: isOutline ? '2px solid white' : 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {button.title || (index === 0 ? 'Get Started' : 'Learn More')}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
