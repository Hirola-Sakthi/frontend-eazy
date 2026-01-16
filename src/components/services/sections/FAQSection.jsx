import React, { useEffect, useRef, useState } from 'react';

const FAQSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {}, htmlContent, cssContent } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    questionRefs.current.forEach((el) => {
      if (el) el.classList.remove('active');
    });
    parentRefs.current.forEach((el) => {
      if (el) el.classList.remove('active');
    });
    answerRefs.current.forEach((el) => {
      if (el) {
        el.style.height = '0px';
        el.style.overflow = 'hidden';
        el.style.transition = 'all 0.5s ease-in-out';
        el.style.marginTop = '0px';
      }
    });

    if (currentIndex !== -1 && answerRefs.current[currentIndex]) {
      if (questionRefs.current[currentIndex]) {
        questionRefs.current[currentIndex].classList.add('active');
      }
      if (parentRefs.current[currentIndex]) {
        parentRefs.current[currentIndex].classList.add('active');
      }
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + 'px';
      element.style.overflow = 'hidden';
      element.style.transition = 'all 0.5s ease-in-out';
      element.style.marginTop = '20px';
    }
  }, [currentIndex]);

  if (htmlContent) {
    return (
      <section style={{ background: backgroundColor }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {cssContent && <style dangerouslySetInnerHTML={{ __html: cssContent }} />}
      </section>
    );
  }

  return (
    <div className="faq-section-wrapper">
      <div className="section-outer panel">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="section-inner panel">
            {/* Header */}
            {(title || subtitle || description) && (
              <div className="faq-header panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-10 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center">
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

            {/* FAQ Accordion */}
            <div className="faq-accordion-container">
              <ul className="faq-accordion-list">
                {sortedItems.map((item, index) => (
                  <li
                    key={index}
                    ref={(el) => (parentRefs.current[index] = el)}
                    className={`faq-item ${currentIndex === index ? 'uc-open' : ''}`}
                    onClick={() => {
                      setCurrentIndex((pre) => (pre === index ? -1 : index));
                    }}
                  >
                    <a
                      className="faq-question"
                      role="button"
                      aria-disabled="false"
                      ref={(el) => (questionRefs.current[index] = el)}
                    >
                      <span className="question-text">{item.title || item.question}</span>
                      <span className="question-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </a>
                    <div
                      className="faq-answer"
                      ref={(el) => (answerRefs.current[index] = el)}
                    >
                      <p>{item.description || item.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-section-wrapper {
          background: ${backgroundColor};
          padding: 100px 0;
          position: relative;
        }

        .faq-header {
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

        .faq-accordion-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2.5rem;
          background: ${backgroundColor === '#ffffff' ? '#f8f9fa' : 'rgba(255, 255, 255, 0.05)'};
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .faq-accordion-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .faq-item {
          background: ${backgroundColor};
          border: 2px solid ${textColor}10;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          opacity: 0;
          animation: fadeInItem 0.6s ease-out forwards;
        }

        @keyframes fadeInItem {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        ${sortedItems.map((_, index) => {
          return `.faq-item:nth-child(${index + 1}) {
            animation-delay: ${index * 0.1}s;
          }`;
        }).join('\n        ')}

        .faq-item:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          border-color: ${headingColor}30;
          transform: translateY(-2px);
        }

        .faq-item.uc-open {
          border-color: ${headingColor};
          box-shadow: 0 8px 32px ${headingColor}25;
          transform: translateY(-2px);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.75rem 2rem;
          color: ${textColor};
          font-weight: 600;
          font-size: 1.15rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
        }

        .faq-question:hover {
          color: ${headingColor};
        }

        .faq-question.active {
          color: ${headingColor};
          font-weight: 700;
        }

        .question-text {
          flex: 1;
          padding-right: 1.5rem;
          line-height: 1.5;
        }

        .question-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${headingColor}15;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .question-icon svg {
          transition: all 0.4s ease;
        }

        .faq-item.uc-open .question-icon {
          background: ${headingColor};
          color: white;
          transform: rotate(45deg);
          box-shadow: 0 4px 12px ${headingColor}40;
        }

        .faq-question:hover .question-icon {
          background: ${headingColor}25;
          transform: scale(1.1);
        }

        .faq-item.uc-open .question-icon svg {
          color: white;
        }

        .faq-answer {
          height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .faq-answer p {
          padding: 0 2rem 1.75rem 2rem;
          margin: 0;
          color: ${textColor};
          opacity: 0.85;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .faq-section-wrapper {
            padding: 80px 0;
          }

          .faq-accordion-container {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .faq-section-wrapper {
            padding: 60px 0;
          }

          .faq-accordion-container {
            padding: 1.5rem;
            border-radius: 16px;
          }

          .faq-item {
            border-radius: 12px;
          }

          .faq-question {
            padding: 1.5rem 1.25rem;
            font-size: 1.05rem;
          }

          .faq-answer p {
            padding: 0 1.25rem 1.5rem 1.25rem;
            font-size: 1rem;
          }

          .question-icon {
            width: 32px;
            height: 32px;
          }

          .question-icon svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 576px) {
          .faq-question {
            padding: 1.25rem 1rem;
            font-size: 1rem;
          }

          .faq-answer p {
            padding: 0 1rem 1.25rem 1rem;
            font-size: 0.95rem;
          }

          .question-text {
            padding-right: 1rem;
          }
        }
      `}} />
    </div>
  );
};

export default FAQSection;
