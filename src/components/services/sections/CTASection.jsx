import React from 'react';

const CTASection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || 'linear-gradient(135deg, #1338be, #2a2a72)';
  const textColor = sectionStyles.textColor || '#ffffff';
  const headingColor = sectionStyles.headingColor || '#ffffff';

  const buttons = contentItems || [];
  const sortedButtons = buttons.sort((a, b) => (a.order || 0) - (b.order || 0));
  const primaryButton = sortedButtons[0] || { title: 'Get Started', link: '/contact-us' };
  const secondaryButton = sortedButtons[1];

  return (
    <section
      className="cta-section"
      style={{
        background: backgroundColor,
        padding: '100px 5%',
        width: '100%',
        textAlign: 'center',
        color: textColor
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Title */}
        {title && (
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '20px',
            color: headingColor,
            lineHeight: '1.2'
          }}>
            {title}
          </h2>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            marginBottom: '20px',
            color: 'rgba(255,255,255,0.95)',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '40px',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '700px',
            margin: '0 auto 48px',
            lineHeight: '1.7'
          }}>
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '40px'
        }}>
          {/* Primary Button */}
          <a
            href={primaryButton.link || '/contact-us'}
            style={{
              padding: '16px 48px',
              fontSize: '1.125rem',
              borderRadius: '8px',
              textDecoration: 'none',
              background: '#ffffff',
              color: '#1338be',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            }}
          >
            {primaryButton.title || primaryButton.linkText || 'Get Started'}
            <span>→</span>
          </a>

          {/* Secondary Button */}
          {secondaryButton && (
            <a
              href={secondaryButton.link || '/contact-us'}
              style={{
                padding: '16px 48px',
                fontSize: '1.125rem',
                borderRadius: '8px',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.4)',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {secondaryButton.title || secondaryButton.linkText || 'Learn More'}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
