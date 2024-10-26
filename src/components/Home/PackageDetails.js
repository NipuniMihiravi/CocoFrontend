import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CoverImageFive = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchGalleryImages();
    }, []);

    const fetchGalleryImages = async () => {
        try {
            // Fetch the documents with the specific name "Cocoloco Special Package"
            const response = await axios.get(`${API_URL}/api/gallery`, {
                params: { name: "Cocoloco Special Package" }
            });

            console.log('Fetched items:', response.data);

            if (response.data && response.data.length > 4) {
                // Access the fifth document in the response data array
                const selectedGallery = response.data[4];
                setGalleryImages(selectedGallery.images); // Set images array from the selected document
            } else {
                console.error("Not enough data found, fifth document not available");
            }
        } catch (error) {
            console.error('Error fetching gallery images:', error);
        }
    };

    return (
        <div className="package-heading1">
            <h1>Our Packages</h1>
            <p>
                Our offerings ensure that you create lasting memories while enjoying quality time together. Below, you'll find detailed information about our thoughtfully crafted packages, along with our mouthwatering menu options tailored to enhance your experience. Dive into our offerings for a delightful day!
            </p>

            <div className="package-container1">
                <table className="package-table1">
                    <tbody>
                        <tr>
                            <td className="package-content1">
                                <div className="package-content-text1">
                                    <h2>Cocoloco Special Package</h2>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="cover-package1">
                                <div className="image-gallery1-package">
                                    {galleryImages.length > 0 ? (
                                        galleryImages.map((image, index) => (
                                            <img
                                                key={index}
                                                src={`data:image/jpeg;base64,${image.imageData}`}
                                                alt=""
                                                className="gallery-image1-package"
                                            />
                                        ))
                                    ) : (
                                        <p>Currently No Special Offers Available in Cocoloco Garden</p>
                                    )}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CoverImageFive;
