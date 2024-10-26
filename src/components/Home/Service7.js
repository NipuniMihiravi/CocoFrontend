import React from 'react';
import './App.css'; // Assuming your CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Service3 = () => {
    const navigate = useNavigate(); // Initialize navigate

    // Function to handle navigation
    const handleNavigate = () => {
        navigate('/galleries'); // Navigate to the gallery page
    };

    return (
        <div className="table-container">
            <table className="service-table">
                <tbody>
                    <tr>
                        <td className="image2-column">
                            <div className="image2-grid">
                                {/* Render four different images manually */}
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/accomadation.jpg`}
                                    className="service2-image"
                                    alt="Day Out Event 1"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/pacl9.jpeg`}
                                    className="service2-image"
                                    alt="Day Out 2"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/pacl7.jpeg`}
                                    className="service2-image"
                                    alt="Day Out 3"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/Room.jpeg`}
                                    className="service2-image"
                                    alt="Day Out 4"
                                />
                            </div>
                        </td>
                        <td className="content-column">
                            <h2>Cocoloco Accommodation</h2>
                            <p>Cocoloco offers spacious accommodation in a beautiful bungalow that spreads across a large area. The bungalow features 7 well-appointed rooms, each equipped with modern bathroom facilities and air conditioning for your comfort. The rooms are designed with cozy bedding to ensure a restful stay.</p>
                             <p>It’s the ideal retreat to unwind, surrounded by the serene beauty of Cocoloco Garden. Come and enjoy a calming, rejuvenating stay, where you can truly relax and recharge.</p>

                            <button className="service-button" onClick={handleNavigate}>
                                Click Here For See More Gallery ..
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Service3;
