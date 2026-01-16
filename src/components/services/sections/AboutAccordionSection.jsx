import React, { useEffect, useRef, useState } from 'react';

const AboutAccordionSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {}, htmlContent, cssContent } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Handle accordion content height
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === activeIndex) {
          ref.style.maxHeight = ref.scrollHeight + 'px';
          ref.style.opacity = '1';
        } else {
          ref.style.maxHeight = '0px';
          ref.style.opacity = '0';
        }
      }
    });
  }, [activeIndex]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  if (htmlContent) {
    return (
      <section style={{ background: backgroundColor }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {cssContent && <style dangerouslySetInnerHTML={{ __html: cssContent }} />}
      </section>
    );
  }

  // Check if we have a valid image
  const hasImage = sortedItems[0]?.image && sortedItems[0].image.trim() !== '';

  return (
    <div className="about-accordion-wrapper">
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 15px' }}>
        {/* Header */}
        {(subtitle || title || description) && (
          <div className="about-header">
            {subtitle && (
              <span className="about-subtitle" style={{ color: headingColor }}>
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="about-title" style={{ color: headingColor }}>
                {title}
              </h2>
            )}
            {description && (
              <p className="about-description" style={{ color: textColor }}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`row ${hasImage ? 'align-items-start' : 'justify-content-center'}`} style={{ gap: hasImage ? '3rem' : '0' }}>
          {/* Accordion Content */}
          <div className={hasImage ? 'col-12 col-lg-6' : 'col-12 col-lg-8'}>
            <div className="accordion-container">
              {sortedItems.map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleAccordion(index);
                      }
                    }}
                  >
                    <h3 className="accordion-title" style={{
                      color: activeIndex === index ? headingColor : textColor
                    }}>
                      {item.title}
                    </h3>
                    <div className="accordion-icon" style={{
                      background: activeIndex === index ? headingColor : 'transparent',
                      color: activeIndex === index ? '#ffffff' : headingColor,
                      borderColor: activeIndex === index ? headingColor : textColor
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="accordion-content"
                    ref={(el) => (contentRefs.current[index] = el)}
                  >
                    <div className="accordion-content-inner">
                      <p style={{ color: textColor }}>{item.description}</p>
                      {item.link && item.linkText && (
                        <a
                          href={item.link}
                          className="accordion-link"
                          style={{ color: headingColor }}
                        >
                          {item.linkText}
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
                            <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image (only if provided) */}
          {hasImage && (
            <div className="col-12 col-lg-5">
              <div className="about-image-wrapper">
                <img
                  src={sortedItems[0].image}
                  alt={title || 'About'}
                  className="about-image"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-accordion-wrapper {
          background: ${backgroundColor};
          padding: 80px 0;
          position: relative;
        }

        .about-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .about-subtitle {
          display: inline-block;
          font-size: 0.813rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }

        .about-title {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0.75rem 0 1rem;
        }

        .about-description {
          font-size: 1.063rem;
          line-height: 1.7;
          opacity: 0.85;
          max-width: 700px;
          margin: 0 auto;
        }

        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: ${backgroundColor === '#ffffff' ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'};
          border: 1px solid rgba(19, 56, 190, 0.1);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .accordion-item:hover {
          border-color: rgba(19, 56, 190, 0.3);
          box-shadow: 0 4px 12px rgba(19, 56, 190, 0.08);
        }

        .accordion-item.active {
          border-color: ${headingColor};
          box-shadow: 0 4px 16px rgba(19, 56, 190, 0.12);
        }

        .accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }

        .accordion-header:hover {
          background: rgba(19, 56, 190, 0.02);
        }

        .accordion-title {
          flex: 1;
          margin: 0;
          font-size: 1.063rem;
          font-weight: 600;
          line-height: 1.5;
          transition: color 0.2s ease;
          padding-right: 1rem;
        }

        .accordion-item.active .accordion-title {
          font-weight: 700;
          color: ${headingColor} !important;
        }

        .accordion-icon {
          width: 28px;
          height: 28px;
          min-width: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1.5px solid;
          transition: all 0.3s ease;
        }

        .accordion-icon svg {
          transition: transform 0.3s ease;
        }

        .accordion-item.active .accordion-icon svg {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .accordion-content-inner {
          padding: 0 1.5rem 1.25rem;
        }

        .accordion-content-inner p {
          margin: 0 0 0.75rem;
          line-height: 1.7;
          opacity: 0.9;
          font-size: 0.938rem;
        }

        .accordion-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.938rem;
          transition: all 0.2s ease;
        }

        .accordion-link:hover {
          transform: translateX(3px);
        }

        .about-image-wrapper {
          position: sticky;
          top: 100px;
        }

        .about-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 991px) {
          .about-accordion-wrapper {
            padding: 60px 0;
          }

          .about-title {
            font-size: 1.875rem;
          }

          .about-image-wrapper {
            position: relative;
            top: 0;
            margin-top: 2rem;
          }
        }

        @media (max-width: 768px) {
          .about-header {
            margin-bottom: 2rem;
          }

          .about-title {
            font-size: 1.625rem;
          }

          .accordion-header {
            padding: 1rem 1.25rem;
          }

          .accordion-content-inner {
            padding: 0 1.25rem 1rem;
          }
        }

        @media (max-width: 576px) {
          .about-title {
            font-size: 1.5rem;
          }

          .about-subtitle {
            font-size: 0.75rem;
          }

          .accordion-title {
            font-size: 0.938rem;
          }
        }
      `}} />
    </div>
  );
};

export default AboutAccordionSection;
