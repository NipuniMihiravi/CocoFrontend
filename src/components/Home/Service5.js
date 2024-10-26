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
                                    src={`${process.env.PUBLIC_URL}/images/dayout1.jpg`}
                                    className="service2-image"
                                    alt="Day Out Event 1"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/dayout2.jpg`}
                                    className="service2-image"
                                    alt="Day Out 2"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/dayout3.jpg`}
                                    className="service2-image"
                                    alt="Day Out 3"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/dayout4.jpg`}
                                    className="service2-image"
                                    alt="Day Out 4"
                                />
                            </div>
                        </td>
                        <td className="content-column">
                            <h2>Day Out With Cocoloco</h2>
                            <p>At Cocoloco, we offer exclusive day outing packages designed to cater to all types of gatherings, whether it's an office retreat, a family get-together, or any special occasion. Our day and night packages are thoughtfully crafted to ensure everyone has a memorable and enjoyable experience.</p>
                            <p>Each package includes a refreshing welcome drink to kick off your day, followed by a delicious buffet tailored to your preferences. As the day winds down, enjoy a relaxing evening coffee, perfect for unwinding after your activities. For those looking to cool off, our pool is open to all guests, offering a refreshing escape in the midst of our lush surroundings.</p>

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
