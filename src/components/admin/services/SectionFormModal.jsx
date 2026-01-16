import React from 'react';
import SectionForm from '../serviceSections/SectionForm';
import '../serviceSections/AdminStyles.css';

const SectionFormModal = ({ section, serviceName, serviceSlug, onSave, onCancel }) => {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1200px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
        }}
      >
        <div className="modal-header" style={{
          padding: '20px',
          borderBottom: '1px solid #e0e0e0',
          position: 'sticky',
          top: 0,
          background: 'white',
          zIndex: 100
        }}>
          <h2 style={{ margin: 0 }}>
            {section ? 'Edit Section' : 'Add New Section'}
          </h2>
          <button
            className="close-btn"
            onClick={onCancel}
            style={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              background: 'transparent',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: '20px' }}>
          <SectionForm
            section={section}
            onSave={onSave}
            onCancel={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFormModal;
