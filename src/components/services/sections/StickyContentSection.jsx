import React, { useEffect, useState, useRef } from 'react';

const StickyContentSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {}, htmlContent, cssContent } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const [activeIndex, setActiveIndex] = useState(0);
  const observersRef = useRef([]);

  useEffect(() => {
    const contentSections = document.querySelectorAll('.sticky-content-block');

    // Enhanced scroll-based navigation with better accuracy
    const updateNavigation = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      contentSections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos <= bottom) {
          setActiveIndex(index);
        }
      });
    };

    // Intersection Observer for active navigation
    const navObserverOptions = {
      threshold: 0.3,
      rootMargin: '-20% 0px -50% 0px'
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(contentSections).indexOf(entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, navObserverOptions);

    // Intersection Observer for visibility animation
    const viewObserverOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    };

    const viewObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, viewObserverOptions);

    contentSections.forEach((section) => {
      navObserver.observe(section);
      viewObserver.observe(section);
    });

    observersRef.current.push(navObserver, viewObserver);

    window.addEventListener('scroll', updateNavigation, { passive: true });
    updateNavigation();

    return () => {
      window.removeEventListener('scroll', updateNavigation);
      observersRef.current.forEach((obs) => obs.disconnect());
      observersRef.current = [];
    };
  }, [sortedItems.length]);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('.sticky-content-block');
    if (sections[index]) {
      const top = sections[index].offsetTop - 120;
      window.scrollTo({ top, behavior: 'smooth' });
    }
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
    <div className="sticky-section-wrapper" id="sticky-content-section">
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="sticky-header panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-12 sm:max-w-600px xl:max-w-800px mx-auto text-center">
            {subtitle && (
              <span className="fs-6 fw-bold text-uppercase" style={{
                color: headingColor,
                letterSpacing: '1.5px',
                marginBottom: '0.5rem'
              }}>
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="h3 lg:h2 xl:h1 m-0" style={{
                color: headingColor,
                fontWeight: '700',
                lineHeight: '1.2'
              }}>
                {title}
              </h2>
            )}
            {description && (
              <p className="fs-6 xl:fs-5" style={{
                color: textColor,
                opacity: 0.8,
                lineHeight: '1.7',
                maxWidth: '700px'
              }}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className="row" style={{ position: 'relative' }}>
          {/* Sticky Navigation - Left Side */}
          <div className="col-12 col-lg-3">
            <nav className="sticky-nav-menu">
              <ul>
                {sortedItems.map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(index);
                      }}
                      className={`nav-link ${activeIndex === index ? 'active-link' : ''}`}
                      href={`#section-${index}`}
                    >
                      <span className="nav-indicator"></span>
                      <span className="nav-bullet"></span>
                      <span className="nav-text">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content - Right Side */}
          <div className="col-12 col-lg-9">
            <div className="sticky-content-wrapper">
              {sortedItems.map((item, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="sticky-content-block"
                  data-index={index}
                >
                  <div className="content-inner">
                    <div className="row align-items-center g-4 lg:g-6">
                      <div className="col-12 col-md-6">
                        <div className="content-text">
                          <h3 className="h4 lg:h3 xl:h2" style={{
                            color: headingColor,
                            marginBottom: '1.5rem',
                            fontWeight: '700',
                            lineHeight: '1.3'
                          }}>
                            {item.title}
                          </h3>
                          <p className="fs-6 xl:fs-5" style={{
                            color: textColor,
                            opacity: 0.8,
                            lineHeight: 1.8,
                            marginBottom: '1rem'
                          }}>
                            {item.description}
                          </p>
                          {item.link && item.linkText && (
                            <a
                              href={item.link}
                              className="content-link"
                              style={{
                                color: headingColor,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                fontWeight: '600',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <span>{item.linkText}</span>
                              <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" style={{ marginLeft: '8px' }} />
                            </a>
                          )}
                        </div>
                      </div>
                      {item.image && (
                        <div className="col-12 col-md-6">
                          <div className="content-image-wrapper">
                            <img
                              src={item.image}
                              loading="lazy"
                              alt={item.title || 'Content'}
                              className="content-image"
                              style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                                transition: 'all 0.4s ease'
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sticky-section-wrapper {
          background: ${backgroundColor};
          padding: 100px 0;
          position: relative;
        }

        .sticky-header {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Sticky Navigation Styles */
        .sticky-nav-menu {
          position: sticky;
          top: 100px;
          align-self: flex-start;
          padding: 2rem 1.5rem;
          background: ${backgroundColor};
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .sticky-nav-menu:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .sticky-nav-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sticky-nav-menu .nav-link {
          display: flex;
          align-items: center;
          gap: 14px;
          color: ${textColor};
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          opacity: 0.6;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          position: relative;
          padding: 10px 0;
          transform: translateX(0);
        }

        .sticky-nav-menu .nav-link:hover {
          opacity: 0.9;
          transform: translateX(5px);
          color: ${headingColor};
        }

        .sticky-nav-menu .nav-link.active-link {
          color: ${headingColor};
          opacity: 1;
          transform: translateX(8px);
        }

        .sticky-nav-menu .nav-indicator {
          position: absolute;
          left: -24px;
          width: 3px;
          height: 100%;
          background: ${headingColor};
          opacity: 0;
          border-radius: 3px;
          transition: all 0.4s ease;
          transform: scaleY(0);
        }

        .sticky-nav-menu .nav-link.active-link .nav-indicator {
          opacity: 1;
          transform: scaleY(1);
        }

        .sticky-nav-menu .nav-bullet {
          width: 14px;
          height: 14px;
          min-width: 14px;
          border-radius: 50%;
          border: 2.5px solid ${textColor};
          background: transparent;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          z-index: 1;
        }

        .sticky-nav-menu .nav-link:hover .nav-bullet {
          border-color: ${headingColor};
          transform: scale(1.15);
        }

        .sticky-nav-menu .nav-link.active-link .nav-bullet {
          background: ${headingColor};
          border-color: ${headingColor};
          box-shadow: 0 0 0 5px ${headingColor}20;
          transform: scale(1.2);
        }

        .sticky-nav-menu .nav-text {
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .sticky-nav-menu .nav-link.active-link .nav-text {
          font-weight: 700;
        }

        /* Content Styles */
        .sticky-content-wrapper {
          padding-left: 3rem;
        }

        .sticky-content-block {
          padding: 80px 0;
          min-height: 500px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .sticky-content-block.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .sticky-content-block:first-child {
          padding-top: 0;
        }

        .sticky-content-block:last-child {
          padding-bottom: 0;
        }

        .content-inner {
          background: ${backgroundColor};
          padding: 2.5rem;
          border-radius: 20px;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .content-inner:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          transform: translateY(-5px);
        }

        .content-text {
          animation: fadeInLeft 0.6s ease-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .content-image {
          animation: fadeInRight 0.6s ease-out;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .content-image:hover {
          transform: scale(1.03) translateY(-8px) !important;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.18) !important;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .sticky-section-wrapper {
            padding: 80px 0;
          }

          .sticky-nav-menu {
            top: 80px;
            padding: 1.5rem;
          }

          .sticky-content-wrapper {
            padding-left: 2rem;
          }

          .sticky-content-block {
            padding: 60px 0;
            min-height: 400px;
          }

          .content-inner {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .sticky-section-wrapper {
            padding: 60px 0;
          }

          .sticky-nav-menu {
            position: relative;
            top: 0;
            margin-bottom: 40px;
            padding: 1.5rem;
            border-bottom: 3px solid ${textColor}15;
            box-shadow: none;
          }

          .sticky-nav-menu ul {
            flex-direction: row;
            overflow-x: auto;
            gap: 20px;
            padding-bottom: 10px;
            scrollbar-width: thin;
            scrollbar-color: ${headingColor}30 transparent;
          }

          .sticky-nav-menu ul::-webkit-scrollbar {
            height: 6px;
          }

          .sticky-nav-menu ul::-webkit-scrollbar-track {
            background: transparent;
          }

          .sticky-nav-menu ul::-webkit-scrollbar-thumb {
            background: ${headingColor}30;
            border-radius: 3px;
          }

          .sticky-nav-menu li {
            white-space: nowrap;
          }

          .sticky-nav-menu .nav-text {
            white-space: nowrap;
            font-size: 0.9rem;
          }

          .sticky-nav-menu .nav-link {
            padding: 8px 0;
          }

          .sticky-nav-menu .nav-link.active-link {
            transform: translateX(0);
          }

          .sticky-nav-menu .nav-indicator {
            display: none;
          }

          .sticky-content-wrapper {
            padding-left: 0;
          }

          .sticky-content-block {
            padding: 50px 0;
            min-height: auto;
          }

          .content-inner {
            padding: 1.5rem;
          }

          .content-image {
            margin-top: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .sticky-content-block {
            padding: 40px 0;
          }

          .content-inner {
            padding: 1.25rem;
          }
        }

        /* Add scroll animation trigger */
        @media (prefers-reduced-motion: no-preference) {
          .sticky-content-block {
            scroll-margin-top: 120px;
          }
        }
      `}} />
    </div>
  );
};

export default StickyContentSection;
