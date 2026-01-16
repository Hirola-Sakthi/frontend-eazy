import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturesCardsCarouselSection.css';

const FeaturesCardsCarouselSection = ({ section }) => {
  const { title, subtitle, description, contentItems = [], sectionStyles = {} } = section;

  const backgroundColor = sectionStyles.backgroundColor || '#ffffff';
  const textColor = sectionStyles.textColor || '#2a2a72';
  const headingColor = sectionStyles.headingColor || '#1338be';

  const items = contentItems || section.items || [];
  const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 767;

  const mobileCardStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '10px',
    height: '100%',
  };

  const mobileImageStyle = {
    width: '50%',
    margin: '0 auto',
  };

  return (
    <section
      className="features-cards-carousel-section"
      style={{
        background: backgroundColor,
        padding: '50px 0 35px 0',
        width: '100%'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 15px' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {subtitle && (
            <h5 style={{
              fontSize: '1rem',
              color: headingColor,
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              {subtitle}
            </h5>
          )}
          {title && (
            <h3 style={{
              width: '35%',
              margin: '10px auto 25px auto',
              textAlign: 'center',
              padding: '25px 15px',
              fontSize: '34px',
              color: headingColor,
              fontWeight: '700',
              lineHeight: '1.3'
            }}>
              {title}
            </h3>
          )}
          {description && (
            <p style={{
              fontSize: '1.125rem',
              maxWidth: '700px',
              margin: '0 auto 40px',
              color: textColor,
              lineHeight: '1.7',
              opacity: 0.9
            }}>
              {description}
            </p>
          )}
        </div>

        {/* Desktop Grid View */}
        <div className="features-cards-grid d-none d-md-block">
          <div className="container">
            <div className="row">
              {sortedItems.map((item, index) => (
                <div key={index} className="col-6 col-md-4">
                  <div className="features-card-wrapper">
                    <div className="features-card-content" style={{ color: textColor }}>
                      <div className="features-card-image">
                        {item.image && <img src={item.image} alt={item.title || 'Feature'} />}
                      </div>
                      {item.title && (
                        <h5 style={{ color: headingColor }}>{item.title}</h5>
                      )}
                      {item.description && (
                        <p style={{ color: textColor }}>{item.description}</p>
                      )}
                      {item.link && item.linkText && (
                        <Link to={item.link} style={{ color: headingColor }}>
                          {item.linkText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="features-cards-carousel d-block d-md-none">
          <Slider {...sliderSettings}>
            {sortedItems.map((item, index) => (
              <div key={index}>
                <div className="features-card-wrapper" style={isMobile ? mobileCardStyle : {}}>
                  <div className="features-card-content" style={{ color: textColor }}>
                    <div className="features-card-image">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title || 'Feature'}
                          style={isMobile ? mobileImageStyle : {}}
                        />
                      )}
                    </div>
                    {item.title && (
                      <h5 style={{ color: headingColor }}>{item.title}</h5>
                    )}
                    {item.description && (
                      <p style={{ color: textColor }}>{item.description}</p>
                    )}
                    {item.link && item.linkText && (
                      <Link to={item.link} style={{ color: headingColor }}>
                        {item.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCardsCarouselSection;
