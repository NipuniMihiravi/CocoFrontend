import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const Facility = () => {
    const [facilities, setFacilities] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchFacilities();
    }, []);

    const fetchFacilities = () => {
        axios.get(`${API_URL}/api/facility`) // Corrected template literal usage
            .then(response => {
                setFacilities(response.data);
            })
            .catch(error => console.error('Error fetching facilities:', error));
    };

    return (
        <div>
            <div className="facility-header">
                <h2>Immerse Yourself in Comfort With Us...</h2>
            </div>
            <div className="facility-detail">
                <div className="facility-grid">
                    {facilities.length > 0 ? (
                        facilities.map((facility, index) => (
                            <div key={facility._id} className="facility-card">
                                <div className={`facility-row ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
                                    <div className="facility-image-container">
                                        <img
                                            src={`data:image/jpeg;base64,${facility.image}`} // Assuming base64-encoded JPEG
                                            alt={facility.name}
                                            className="facility-image"
                                        />
                                    </div>
                                    <div className="facility-info">
                                        <h2>{facility.heading}</h2>
                                        <p>{facility.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No facilities available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Facility;
