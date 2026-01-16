import React, { useState, useEffect } from 'react';

const InfoCardsSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {}, htmlContent, cssContent } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-play carousel on mobile
  useEffect(() => {
    if (isMobile && isAutoPlaying && sortedItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sortedItems.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isMobile, isAutoPlaying, sortedItems.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (htmlContent) {
    return (
      <section style={{ background: backgroundColor }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {cssContent && <style dangerouslySetInnerHTML={{ __html: cssContent }} />}
      </section>
    );
  }

  return (
    <div className="info-cards-wrapper">
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 15px' }}>
        {/* Header */}
        {(subtitle || title || description) && (
          <div className="info-cards-header">
            {subtitle && (
              <h5 className="info-cards-subtitle" style={{ color: headingColor }}>
                {subtitle}
              </h5>
            )}
            {title && (
              <h3 className="info-cards-title" style={{ color: headingColor }}>
                {title}
              </h3>
            )}
            {description && (
              <p className="info-cards-description" style={{ color: textColor }}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Desktop Grid */}
        <div className="info-cards-grid desktop-grid">
          <div className="row">
            {sortedItems.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="info-card">
                  {item.image && (
                    <div className="info-card-image">
                      <img src={item.image} alt={item.title || 'Info'} loading="lazy" />
                    </div>
                  )}
                  <h5 className="info-card-title" style={{ color: headingColor }}>
                    {item.title}
                  </h5>
                  <p className="info-card-description" style={{ color: textColor }}>
                    {item.description}
                  </p>
                  {item.link && item.linkText && (
                    <a
                      href={item.link}
                      className="info-card-link"
                      style={{ color: headingColor }}
                    >
                      {item.linkText}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="info-cards-carousel mobile-carousel">
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sortedItems.map((item, index) => (
                <div key={index} className="carousel-slide">
                  <div className="info-card">
                    {item.image && (
                      <div className="info-card-image">
                        <img src={item.image} alt={item.title || 'Info'} loading="lazy" />
                      </div>
                    )}
                    <h5 className="info-card-title" style={{ color: headingColor }}>
                      {item.title}
                    </h5>
                    <p className="info-card-description" style={{ color: textColor }}>
                      {item.description}
                    </p>
                    {item.link && item.linkText && (
                      <a
                        href={item.link}
                        className="info-card-link"
                        style={{ color: headingColor }}
                      >
                        {item.linkText}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          {sortedItems.length > 1 && (
            <div className="carousel-dots">
              {sortedItems.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{
                    background: index === currentSlide ? headingColor : 'rgba(42, 42, 114, 0.3)'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .info-cards-wrapper {
          background: ${backgroundColor};
          padding: 80px 0;
          position: relative;
        }

        .info-cards-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .info-cards-subtitle {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
        }

        .info-cards-title {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0.5rem 0 1rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .info-cards-description {
          font-size: 1.063rem;
          line-height: 1.7;
          opacity: 0.85;
          max-width: 700px;
          margin: 0 auto;
        }

        .desktop-grid {
          display: block;
        }

        .mobile-carousel {
          display: none;
        }

        .info-card {
          background: ${backgroundColor === '#ffffff' ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'};
          border: 1px solid rgba(19, 56, 190, 0.1);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .info-card:hover {
          border-color: rgba(19, 56, 190, 0.3);
          box-shadow: 0 8px 24px rgba(19, 56, 190, 0.12);
          transform: translateY(-8px);
        }

        .info-card-image {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${headingColor}15, ${textColor}15);
          border-radius: 20px;
          padding: 1.5rem;
        }

        .info-card-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .info-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 1rem;
        }

        .info-card-description {
          font-size: 0.938rem;
          line-height: 1.7;
          margin: 0 0 1.5rem;
          opacity: 0.85;
          flex: 1;
        }

        .info-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.938rem;
          transition: all 0.2s ease;
        }

        .info-card-link:hover {
          transform: translateX(4px);
        }

        .info-card-link svg {
          transition: transform 0.2s ease;
        }

        .info-card-link:hover svg {
          transform: translateX(2px);
        }

        /* Mobile Carousel Styles */
        @media (max-width: 767px) {
          .desktop-grid {
            display: none;
          }

          .mobile-carousel {
            display: block;
          }

          .carousel-container {
            overflow: hidden;
            position: relative;
          }

          .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
          }

          .carousel-slide {
            min-width: 100%;
            padding: 0 1rem;
          }

          .carousel-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 2rem;
          }

          .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .carousel-dot.active {
            width: 28px;
            border-radius: 5px;
          }

          .info-card-image {
            width: 100px;
            height: 100px;
          }
        }

        @media (max-width: 991px) {
          .info-cards-wrapper {
            padding: 60px 0;
          }

          .info-cards-title {
            font-size: 1.75rem;
          }

          .info-card {
            padding: 1.75rem;
          }
        }

        @media (max-width: 576px) {
          .info-cards-title {
            font-size: 1.5rem;
          }

          .info-card {
            padding: 1.5rem;
          }

          .info-card-title {
            font-size: 1.125rem;
          }

          .info-card-description {
            font-size: 0.875rem;
          }
        }
      `}} />
    </div>
  );
};

export default InfoCardsSection;
