import React, { useEffect, useRef } from 'react';
import Handlebars from 'handlebars';

const TemplateSectionRenderer = ({ section }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!section || !containerRef.current) return;

    // Prepare data for Handlebars template
    const templateData = {
      title: section.title || '',
      subtitle: section.subtitle || '',
      description: section.description || '',
      contentItems: section.contentItems || [],
      backgroundColor: section.sectionStyles?.backgroundColor || '#ffffff',
      textColor: section.sectionStyles?.textColor || '#000000',
      headingColor: section.sectionStyles?.headingColor || '#000000',
      layoutConfig: section.layoutConfig || {}
    };

    // Compile and render HTML template
    try {
      if (section.htmlContent) {
        const template = Handlebars.compile(section.htmlContent);
        const htmlOutput = template(templateData);
        containerRef.current.innerHTML = htmlOutput;
      }

      // Inject custom CSS
      if (section.cssContent) {
        const styleId = `section-style-${section._id}`;
        let styleElement = document.getElementById(styleId);

        if (!styleElement) {
          styleElement = document.createElement('style');
          styleElement.id = styleId;
          document.head.appendChild(styleElement);
        }

        styleElement.textContent = section.cssContent;
      }
    } catch (error) {
      console.error('Error rendering template section:', error);
      containerRef.current.innerHTML = '<div class="alert alert-danger">Error rendering section</div>';
    }

    // Cleanup function
    return () => {
      const styleId = `section-style-${section._id}`;
      const styleElement = document.getElementById(styleId);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [section]);

  if (!section) return null;

  // Apply section styles
  const sectionStyle = {
    backgroundColor: section.sectionStyles?.backgroundColor,
    color: section.sectionStyles?.textColor,
    padding: section.sectionStyles?.padding || '80px 20px',
    margin: section.sectionStyles?.margin
  };

  const containerClass = [
    section.sectionStyles?.containerClass,
    ...(section.sectionStyles?.customClasses || [])
  ].filter(Boolean).join(' ');

  return (
    <div
      className={`template-section ${containerClass}`}
      style={sectionStyle}
      ref={containerRef}
    />
  );
};

export default TemplateSectionRenderer;
