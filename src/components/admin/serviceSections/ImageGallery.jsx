import React, { useState, useEffect } from 'react';
import { getAllUploadedImages, uploadImage, deleteImage } from '../../../api/admin/uploadedImage.api';
import './AdminStyles.css';

const ImageGallery = ({ onSelectImage, allowUpload = true, selectedImage = null }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [folder, setFolder] = useState('');

  useEffect(() => {
    fetchImages();
  }, [folder]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const filters = {};
      if (folder) filters.folder = folder;
      const response = await getAllUploadedImages(filters);
      setImages(response.data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const response = await uploadImage(file, folder || 'cms-blog-images', [], '');
      setImages([response.data, ...images]);
      if (onSelectImage) {
        onSelectImage(response.data.url);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (imageId) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      await deleteImage(imageId);
      setImages(images.filter(img => img._id !== imageId));
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };

  const filteredImages = images.filter(img =>
    img.fileName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="image-gallery-container">
      <div className="gallery-header">
        <h3>Image Gallery</h3>
        <div className="gallery-controls">
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
          {allowUpload && (
            <label className="btn btn-primary upload-btn">
              {uploading ? 'Uploading...' : 'Upload Image'}
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: 'none' }}
                disabled={uploading}
              />
            </label>
          )}
        </div>
      </div>

      {loading ? (
        <div className="gallery-loading">
          <div className="spinner-border" role="status"></div>
          <p>Loading images...</p>
        </div>
      ) : (
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className={`gallery-item ${selectedImage === image.url ? 'selected' : ''}`}
              onClick={() => onSelectImage && onSelectImage(image.url)}
            >
              <div className="image-wrapper">
                <img src={image.url} alt={image.fileName} />
                <div className="image-overlay">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(image._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="image-info">
                <p className="image-filename">{image.fileName}</p>
                <p className="image-dimensions">{image.width} × {image.height}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredImages.length === 0 && (
        <div className="gallery-empty">
          <p>No images found. Upload some images to get started!</p>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
