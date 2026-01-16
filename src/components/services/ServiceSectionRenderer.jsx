import React from 'react';
import AccSoftBanBelow from './AccSoftBanBelow';
import AccSoftware from './AccSoftware';
import HomeFeatures from './HomeFeatures';
import ProcessSection from './ProcessSection';
import WhySection from './WhySection';
import FeaturesGridSection from './sections/FeaturesGridSection';
import ProcessStepsSection from './sections/ProcessStepsSection';
import WhyChooseSection from './sections/WhyChooseSection';
import ContentBlocksSection from './sections/ContentBlocksSection';
import StatsCounterSection from './sections/StatsCounterSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import FeaturesCardsCarouselSection from './sections/FeaturesCardsCarouselSection';
import FeaturesListExpandableSection from './sections/FeaturesListExpandableSection';
import ParallaxContentSection from './sections/ParallaxContentSection';
import StickyContentSection from './sections/StickyContentSection';
import FAQSection from './sections/FAQSection';
import AboutAccordionSection from './sections/AboutAccordionSection';
import FeaturesShowcaseSection from './sections/FeaturesShowcaseSection';
import InfoCardsSection from './sections/InfoCardsSection';
import TextContentSection from './sections/TextContentSection';
import TemplateSectionRenderer from './TemplateSectionRenderer';

// Helper function to render a single template
const renderTemplate = (templateData, index) => {
  const templateType = templateData.templateType || templateData.sectionType;

  // Create a section-like object for the template
  const templateSection = {
    ...templateData,
    sectionType: templateType,
    items: templateData.contentItems || templateData.items || [],
    isActive: true
  };

  switch (templateType) {
    // Legacy section types (keep for backwards compatibility)
    case 'banner_below':
      return <AccSoftBanBelow key={index} section={templateSection} />;

    case 'software_features':
      return <AccSoftware key={index} section={templateSection} />;

    // New simplified React component sections
    case 'features_grid':
      return <FeaturesGridSection key={index} section={templateSection} />;

    case 'process_section':
    case 'process_steps':
      return <ProcessStepsSection key={index} section={templateSection} />;

    case 'why_section':
    case 'why_choose':
      return <WhyChooseSection key={index} section={templateSection} />;

    case 'content_blocks':
      return <ContentBlocksSection key={index} section={templateSection} />;

    case 'stats_counter':
      return <StatsCounterSection key={index} section={templateSection} />;

    case 'testimonials':
      return <TestimonialsSection key={index} section={templateSection} />;

    case 'cta_section':
      return <CTASection key={index} section={templateSection} />;

    case 'features_cards_carousel':
      return <FeaturesCardsCarouselSection key={index} section={templateSection} />;

    case 'features_list_expandable':
      return <FeaturesListExpandableSection key={index} section={templateSection} />;

    case 'parallax_content':
      return <ParallaxContentSection key={index} section={templateSection} />;

    case 'sticky_content':
      return <StickyContentSection key={index} section={templateSection} />;

    case 'faq_accordion':
      return <FAQSection key={index} section={templateSection} />;

    case 'about_accordion':
      return <AboutAccordionSection key={index} section={templateSection} />;

    case 'features_showcase':
      return <FeaturesShowcaseSection key={index} section={templateSection} />;

    case 'info_cards':
      return <InfoCardsSection key={index} section={templateSection} />;

    case 'text_content':
      return <TextContentSection key={index} section={templateSection} />;

    case 'custom_section':
    case 'html_custom':
    case 'custom_html':
      if (templateSection.htmlContent) {
        return <TemplateSectionRenderer key={index} section={templateSection} />;
      }
      return null;

    default:
      if (templateSection.htmlContent) {
        return <TemplateSectionRenderer key={index} section={templateSection} />;
      }
      return null;
  }
};

const ServiceSectionRenderer = ({ section }) => {
  console.log('🎨 Rendering section:', section);

  if (!section || !section.isActive) {
    console.log('⚠️ Section not active or null:', section);
    return null;
  }

  // NEW: Check if this section has multiple components
  console.log('🔍 Checking templates:', {
    hasTemplates: !!section.templates,
    isArray: Array.isArray(section.templates),
    length: section.templates?.length,
    sectionType: section.sectionType
  });

  if (section.templates && Array.isArray(section.templates) && section.templates.length > 0) {
    console.log('✅ Multi-component section with', section.templates.length, 'components');
    // Sort components by order
    const sortedTemplates = [...section.templates].sort((a, b) => (a.order || 0) - (b.order || 0));

    // Render all components in this section
    return (
      <div className="multi-component-section" data-section-id={section._id}>
        {/* Section Header (if configured) */}
        {(section.title || section.subtitle || section.description) && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px 40px',
            background: '#f8f9fa'
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {section.subtitle && (
                <p style={{
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: '#1338be',
                  marginBottom: '12px',
                  fontWeight: '700'
                }}>
                  {section.subtitle}
                </p>
              )}
              {section.title && (
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '800',
                  marginBottom: '20px',
                  color: '#1338be',
                  lineHeight: '1.2'
                }}>
                  {section.title}
                </h2>
              )}
              {section.description && (
                <p style={{
                  fontSize: '1.125rem',
                  color: '#2a2a72',
                  lineHeight: '1.7',
                  opacity: 0.9
                }}>
                  {section.description}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Render all components */}
        {sortedTemplates.map((template, index) => renderTemplate(template, index))}
      </div>
    );
  }

  // LEGACY: Single component mode (backwards compatibility)
  // Render the appropriate component based on section type
  console.log('🔄 Using legacy rendering mode for sectionType:', section.sectionType);

  switch (section.sectionType) {
    // Legacy section types (keep for backwards compatibility)
    case 'banner_below':
      return <AccSoftBanBelow section={section} />;

    case 'software_features':
      return <AccSoftware section={section} />;

    // New simplified React component sections
    case 'features_grid':
      return <FeaturesGridSection section={section} />;

    case 'process_section':
    case 'process_steps':
      return <ProcessStepsSection section={section} />;

    case 'why_section':
    case 'why_choose':
      return <WhyChooseSection section={section} />;

    case 'content_blocks':
      console.log('✅ Rendering ContentBlocksSection');
      return <ContentBlocksSection section={section} />;

    case 'stats_counter':
      return <StatsCounterSection section={section} />;

    case 'testimonials':
      console.log('✅ Rendering TestimonialsSection');
      return <TestimonialsSection section={section} />;

    case 'cta_section':
      return <CTASection section={section} />;

    case 'features_cards_carousel':
      return <FeaturesCardsCarouselSection section={section} />;

    case 'features_list_expandable':
      return <FeaturesListExpandableSection section={section} />;

    case 'parallax_content':
      console.log('Rendering ParallaxContentSection', section);
      return <ParallaxContentSection section={section} />;

    case 'sticky_content':
      console.log('Rendering StickyContentSection', section);
      return <StickyContentSection section={section} />;

    case 'faq_accordion':
      console.log('Rendering FAQSection', section);
      return <FAQSection section={section} />;

    case 'about_accordion':
      return <AboutAccordionSection section={section} />;

    case 'features_showcase':
      return <FeaturesShowcaseSection section={section} />;

    case 'info_cards':
      return <InfoCardsSection section={section} />;

    case 'text_content':
      return <TextContentSection section={section} />;

    // Custom HTML sections (for advanced users)
    case 'custom_section':
    case 'html_custom':
    case 'custom_html':
      if (section.htmlContent) {
        return <TemplateSectionRenderer section={section} />;
      }
      return null;

    default:
      if (section.htmlContent) {
        return <TemplateSectionRenderer section={section} />;
      }
      return null;
  }
};

export default ServiceSectionRenderer;
