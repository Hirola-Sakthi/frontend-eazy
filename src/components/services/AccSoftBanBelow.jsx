import React from 'react';
import './ServiceComponents.css';

const AccSoftBanBelow = ({ section }) => {
  if (!section) return null;

  return (
    <div
      className='RestaurentBannerBelow-parent'
      style={{
        backgroundColor: section.backgroundColor || '#ffffff',
        color: section.textColor || '#000000'
      }}
    >
      <h2>{section.title}</h2>
      {section.description && <p>{section.description}</p>}
      {section.image && (
        <div className="banner-below-image">
          <img src={section.image} alt={section.title || 'Banner'} />
        </div>
      )}
    </div>
  );
};

export default AccSoftBanBelow;
