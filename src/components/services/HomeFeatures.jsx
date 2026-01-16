import React, { useState, useEffect } from 'react';
import './ServiceComponents.css';

const HomeFeatures = ({ section }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!section || !section.items || section.items.length === 0) return null;

  const sortedItems = section.items.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div
      className='HomeFeatures-parent'
      style={{
        backgroundColor: section.backgroundColor || '#ffffff',
        color: section.textColor || '#000000'
      }}
    >
      <div className='HomeFeatures-sub'>
        {section.subtitle && <h6>{section.subtitle}</h6>}
        <h2>{section.title}</h2>
        {section.description && <p>{section.description}</p>}
      </div>
      <div className='HomeFeatures-content container-xxl container-xl container-lg'>
        <div className="row">
          {sortedItems.slice(0, showAll || !isMobile ? sortedItems.length : 6).map((item, index) => (
            <div key={index} className="col-md-4">
              <div className='HomeFeatures-content-sub'>
                {item.image && (
                  <div className='HomeFeatures-content-sub-image'>
                    <img src={item.image} alt={item.title || ''} />
                  </div>
                )}
                {item.icon && (
                  <div className='HomeFeatures-content-sub-icon'>
                    <i className={item.icon}></i>
                  </div>
                )}
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && sortedItems.length > 6 && (
          <div className="text-center mt-3">
            <h6 onClick={toggleShowAll} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', justifyContent: 'center' }}>
              {showAll ? "Show Less" : "Read More"}
              <span style={{ marginLeft: '8px' }}>↓</span>
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeFeatures;
