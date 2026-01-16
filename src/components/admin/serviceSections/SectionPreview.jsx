import React from 'react';
import { ServiceSectionRenderer } from '../../services';

const SectionPreview = ({ section }) => {
  if (!section) return <p>No section data to preview</p>;

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
      <ServiceSectionRenderer section={section} />
    </div>
  );
};

export default SectionPreview;
