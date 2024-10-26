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
                                    src={`${process.env.PUBLIC_URL}/images/G1.jpg`}
                                    className="service2-image"
                                    alt="Day Out Event 1"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/G2.jpg`}
                                    className="service2-image"
                                    alt="Day Out 2"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/G3.jpg`}
                                    className="service2-image"
                                    alt="Day Out 3"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/G4.jpg`}
                                    className="service2-image"
                                    alt="Day Out 4"
                                />
                            </div>
                        </td>
                        <td className="content-column">
                            <h2>Pre Shoot Location</h2>
                            <p>At Cocoloco Garden, we proudly offer our picturesque location for all your pre-shoot needs. Whether you're planning a bridal shoot, a pre-wedding shoot, a birthday photoshoot,
                             or capturing any other special moment, our entire garden is at your disposal to create stunning memories..</p>
                             <p>For more information about our pre-shoot packages and to explore the options we offer, please don’t hesitate to contact us. Click the link below to discover the details and book your pre-shoot at Cocoloco Garden today!</p>

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
