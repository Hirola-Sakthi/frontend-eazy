import React from 'react';
import './ServiceComponents.css';

const WhySection = ({ section }) => {
  if (!section || !section.items || section.items.length === 0) return null;

  return (
    <div
      className='why-section-parent'
      style={{
        backgroundColor: section.backgroundColor || '#ffffff',
        color: section.textColor || '#000000'
      }}
    >
      <div className="container">
        <div className='why-section-header'>
          {section.subtitle && <h6>{section.subtitle}</h6>}
          <h2>{section.title}</h2>
          {section.description && <p>{section.description}</p>}
        </div>

        <div className="why-section-content">
          <div className="row">
            {section.items
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className='why-section-card'>
                    {item.number && (
                      <div className='why-section-number'>
                        <span>{item.number}</span>
                      </div>
                    )}
                    {item.image && (
                      <div className='why-section-image'>
                        <img src={item.image} alt={item.title || ''} />
                      </div>
                    )}
                    {item.icon && (
                      <div className='why-section-icon'>
                        <i className={item.icon}></i>
                      </div>
                    )}
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {section.buttonText && section.buttonLink && (
          <div className="why-section-footer">
            <a href={section.buttonLink} className="btn btn-primary">
              {section.buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhySection;
