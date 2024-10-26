import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './App.css';
import Footer from './Footer';

Modal.setAppElement('#root');

const Gallery2 = () => {
  const [activeForm, setActiveForm] = useState('Food');
  const [images, setImages] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/gallery/gallery`, { params: { name: activeForm } });
        console.log(response.data); // Debugging: Check the structure of response

        // Check if response.data.images is an array of base64 image strings
        if (Array.isArray(response.data.images)) {
          setImages(response.data.images);
        } else {
          console.error('Unexpected response format:', response.data);
          setImages([]);
        }
      } catch (error) {
        console.error('Error fetching gallery images', error);
      }
    };

    fetchImages();
  }, [activeForm]);

  return (
    <div>
      <div className="full-gallery-heading1">
        <h1>Our Gallery</h1>
        <p>Explore our gallery collection, capturing the happiest moments in our customers' lives.</p>
      </div>

      <div className="full-gallery-container">
        <div className="galleries-container">
          <div className="galleries-button-group">
            <button
              onClick={() => setActiveForm('Wedding Events')}
              className={`galleries-form-toggle-button ${activeForm === 'Wedding Events' ? 'active' : ''}`}
            >
              Wedding Events
            </button>
            <button
              onClick={() => setActiveForm('Special Events')}
              className={`galleries-form-toggle-button ${activeForm === 'Special Events' ? 'active' : ''}`}
            >
              Special Events
            </button>
            <button
              onClick={() => setActiveForm('Day Outing')}
              className={`galleries-form-toggle-button ${activeForm === 'Day Outing' ? 'active' : ''}`}
            >
              Day Outing
            </button>
            <button
              onClick={() => setActiveForm('Pre Shoot')}
              className={`galleries-form-toggle-button ${activeForm === 'Pre Shoot' ? 'active' : ''}`}
            >
              Pre Shoot
            </button>
            <button
              onClick={() => setActiveForm('Food')}
              className={`galleries-form-toggle-button ${activeForm === 'Food' ? 'active' : ''}`}
            >
              Food
            </button>
            <button
              onClick={() => setActiveForm('Property')}
              className={`galleries-form-toggle-button ${activeForm === 'Property' ? 'active' : ''}`}
            >
              Property
            </button>
          </div>

          <ul className="galleries-images">
            {images.length > 0 ? (
              images.map((imageData, index) => (
                <li key={index} className="galleries-image-item">
                  <img
                    src={`data:image/jpeg;base64,${imageData}`} // Assuming imageData is base64 string
                    alt=""
                    className="galleries-image"
                  />
                </li>
              ))
            ) : (
              <p>No images available for {activeForm}</p>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery2;
