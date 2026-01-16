import React from 'react';
import './ServiceComponents.css';

const AccSoftware = ({ section }) => {
  if (!section || !section.items || section.items.length === 0) return null;

  return (
    <div
      className='BillingSoftware-parent'
      style={{
        backgroundColor: section.backgroundColor || '#ffffff',
        color: section.textColor || '#000000'
      }}
    >
      <div className='BillingSoftware-sub'>
        <h2>{section.title}</h2>
        {section.description && <p>{section.description}</p>}
      </div>
      <div className="BillingSoftware-content">
        <div className="container-xxl">
          <div className="row">
            {section.items
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className='BillingSoftware-content-sub'>
                    {item.image && (
                      <div className='BillingSoftware-content-image'>
                        <img src={item.image} alt={item.title || ''} />
                      </div>
                    )}
                    {item.icon && (
                      <div className='BillingSoftware-content-icon'>
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
      </div>
    </div>
  );
};

export default AccSoftware;
