import React from 'react';
import './ServiceComponents.css';

const ProcessSection = ({ section }) => {
  if (!section) return null;

  const hasProcessSteps = section.processSteps && section.processSteps.length > 0;

  return (
    <div
      className='process-section-parent'
      style={{
        backgroundColor: section.backgroundColor || '#f8f9fa',
        color: section.textColor || '#000000'
      }}
    >
      <div className="container">
        <div className='process-section-header'>
          {section.subtitle && <h6>{section.subtitle}</h6>}
          <h2>{section.title}</h2>
          {section.description && <p>{section.description}</p>}
        </div>

        {section.image && !hasProcessSteps && (
          <div className="process-section-image">
            <img src={section.image} alt={section.title || 'Process'} />
          </div>
        )}

        {hasProcessSteps && (
          <div className="process-steps">
            <div className="row">
              {section.processSteps
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((step, index) => (
                  <div className="col-md-3" key={index}>
                    <div className='process-step-card'>
                      {step.image && (
                        <div className='process-step-image'>
                          <img src={step.image} alt={step.title || ''} />
                        </div>
                      )}
                      <h5>{step.title}</h5>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessSection;
