import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Assuming your CSS file

const CoverImageFive = () => {

    return (
        <div className="package-container">
            <table className="package-table">
                <tbody>
                    <tr>

                        <td className="package-content">
                            <div className="package-content-text">
                                <h1>Our Packages and Menu</h1>
                                <p>
                                    At Cocoloca Garden, we present you with exceptional packages designed for a memorable day spent with your loved ones.
                                </p>
                            </div>
                        </td>

                        <td className="cover-package">
                                                    <div className="image-gallery-package">

                                                                <img
                                                                  src={`${process.env.PUBLIC_URL}/images/04.jpg`} alt="cocoloco garden"
                                                                    className="gallery-image-package" // Apply styling from CSS
                                                                />

                                                    </div>
                                                </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CoverImageFive;
