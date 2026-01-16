import React from 'react';

const TextContentSection = ({ section }) => {
  const { title, subtitle, description, sectionStyles = {}, htmlContent, cssContent } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  if (htmlContent) {
    return (
      <section style={{ background: backgroundColor }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {cssContent && <style dangerouslySetInnerHTML={{ __html: cssContent }} />}
      </section>
    );
  }

  return (
    <div className="text-content-wrapper">
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 15px' }}>
        <div className="text-content-inner">
          {subtitle && (
            <h6 className="text-content-subtitle" style={{ color: headingColor }}>
              {subtitle}
            </h6>
          )}
          {title && (
            <h2 className="text-content-title" style={{ color: headingColor }}>
              {title}
            </h2>
          )}
          {description && (
            <div
              className="text-content-description"
              style={{ color: textColor }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-content-wrapper {
          background: ${backgroundColor};
          padding: 80px 0;
          position: relative;
        }

        .text-content-inner {
          text-align: center;
        }

        .text-content-subtitle {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          display: block;
        }

        .text-content-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1.5rem;
        }

        .text-content-description {
          font-size: 1.125rem;
          line-height: 1.8;
          opacity: 0.9;
          text-align: left;
        }

        .text-content-description p {
          margin-bottom: 1.25rem;
        }

        .text-content-description h3,
        .text-content-description h4,
        .text-content-description h5 {
          color: ${headingColor};
          margin: 2rem 0 1rem;
          font-weight: 700;
        }

        .text-content-description h3 {
          font-size: 1.75rem;
        }

        .text-content-description h4 {
          font-size: 1.5rem;
        }

        .text-content-description h5 {
          font-size: 1.25rem;
        }

        .text-content-description ul,
        .text-content-description ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .text-content-description li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }

        .text-content-description a {
          color: ${headingColor};
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }

        .text-content-description a:hover {
          opacity: 0.8;
        }

        .text-content-description strong {
          font-weight: 700;
          color: ${headingColor};
        }

        .text-content-description blockquote {
          border-left: 4px solid ${headingColor};
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          opacity: 0.85;
        }

        @media (max-width: 991px) {
          .text-content-wrapper {
            padding: 60px 0;
          }

          .text-content-title {
            font-size: 2rem;
          }

          .text-content-description {
            font-size: 1.063rem;
          }
        }

        @media (max-width: 768px) {
          .text-content-wrapper {
            padding: 50px 0;
          }

          .text-content-title {
            font-size: 1.75rem;
          }

          .text-content-description {
            font-size: 1rem;
          }

          .text-content-description h3 {
            font-size: 1.5rem;
          }

          .text-content-description h4 {
            font-size: 1.25rem;
          }

          .text-content-description h5 {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 576px) {
          .text-content-wrapper {
            padding: 40px 0;
          }

          .text-content-title {
            font-size: 1.5rem;
          }

          .text-content-subtitle {
            font-size: 0.75rem;
          }

          .text-content-description {
            font-size: 0.938rem;
          }

          .text-content-description ul,
          .text-content-description ol {
            padding-left: 1.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default TextContentSection;
