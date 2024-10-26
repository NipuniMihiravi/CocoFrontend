import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Ensure the CSS file path is correct
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Facility1 = () => {
  const [facilities, setFacilities] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/facility`); // Corrected template literal
      setFacilities(response.data.slice(0, 5)); // Get the first five facilities
    } catch (error) {
      console.error('Error fetching facilities:', error);
    }
  };

  return (
    <section className="facility-section" id="facilities">
      <h2 className="facility-header">OUR FACILITY</h2>
      <div className="section-container">
        <div className="facility-row">
          {facilities.length > 0 ? (
            facilities.map((facility, index) => (
              <div className="facility-item" key={facility._id}>
                <div className="facility-square">
                  <img
                    src={`data:image/jpeg;base64,${facility.image}`} // Adjust image format if necessary
                    alt={`Facility ${index + 1}`}
                    className="facility-image2"
                  />
                </div>
                <p className="facility-name">{facility.heading}</p> {/* Assuming facility has 'heading' */}
              </div>
            ))
          ) : (
            <p>No facilities available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Facility1;
