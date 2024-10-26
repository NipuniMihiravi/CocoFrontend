import React from 'react';
import './App.css'; // Assuming your CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Service2 = () => {
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
                                    src={`${process.env.PUBLIC_URL}/images/coco6.jpeg`}
                                    className="service2-image"
                                    alt="Wedding Event 1"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/coco3.jpeg`}
                                    className="service2-image"
                                    alt="Wedding Event 2"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/ser3.jpg`}
                                    className="service2-image"
                                    alt="Wedding Event 3"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/shoot4.jpeg`}
                                    className="service2-image"
                                    alt="Wedding Event 4"
                                />
                            </div>
                        </td>
                        <td className="content-column">
                            <h2>Wedding Event</h2>
                            <p>At CocoLoco, your dream wedding becomes a reality with our stunning outdoor venue, perfect for creating unforgettable memories. Surrounded by serene poolside and garden views, our location offers the ideal backdrop for your special day, whether it’s an intimate gathering or a grand celebration.</p>
                            <p>We pride ourselves on delivering exceptional service, ensuring every moment of your wedding is seamless, memorable, and infused with modern elegance. From the smallest detail to the grandest gesture, our team is here to provide support every step of the way.</p>
                            <p>At CocoLoco, we understand the importance of balancing style and budget. We proudly work with you to create a wedding experience that fits your financial needs, without sacrificing the quality and elegance you deserve.</p>
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

export default Service2;
