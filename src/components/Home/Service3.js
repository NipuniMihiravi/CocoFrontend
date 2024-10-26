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
                                    src={`${process.env.PUBLIC_URL}/images/special4.jpg`}
                                    className="service2-image"
                                    alt="Special Event 1"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/soecial2.jpg`}
                                    className="service2-image"
                                    alt="Special Event 2"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/special3.jpg`}
                                    className="service2-image"
                                    alt="Special Event 3"
                                />
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/special1.jpg`}
                                    className="service2-image"
                                    alt="Special Event 4"
                                />
                            </div>
                        </td>
                        <td className="content-column">
                            <h2>Special Event</h2>
                            <p>At Cocoloco, we believe every celebration deserves to be unforgettable, and that’s why we go above and beyond to make your special events extraordinary. Whether it's a lively birthday bash, a charming bridal shower, a festive Avurudu celebration, or any other gathering close to your heart, our garden venue offers an ideal blend of elegance and fun. The expansive, lush outdoor space is designed to host events of all sizes, from intimate gatherings to large-scale celebrations, surrounded by nature’s beauty.</p>
                            <p>At Cocoloco Garden, it’s not just a party—it’s an experience where memories are made, laughter is shared, and moments are cherished forever. Let us help you create the perfect atmosphere to celebrate life’s milestones, making your event as vibrant and unforgettable as our surroundings.</p>

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
