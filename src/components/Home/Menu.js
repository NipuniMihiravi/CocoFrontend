import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Assuming your CSS file
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CoverImageFive = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL; // Use galleryImages to hold the image data

    useEffect(() => {
        fetchGalleryImages();
    }, []);

    const fetchGalleryImages = async () => {
        try {
            // Fetch the documents with the specific name "Cocoloco Menu"
            const response = await axios.get(`${API_URL}/api/gallery`, {
                params: { name: "Cocoloco Menu" } // Adjust the query based on your backend API
            });

            console.log('Fetched items:', response.data);

            if (response.data && response.data.length > 6) {
                // Access the seventh document in the response data array (index 6)
                const selectedGallery = response.data[6];
                setGalleryImages(selectedGallery.images); // Set the images array directly from the selected document
            } else {
                console.error("Not enough data found; seventh row not available");
            }
        } catch (error) {
            console.error('Error fetching gallery images:', error);
        }
    };

    return (
        <div className="package-heading1">
            <h1>Our Menu</h1>
            <p>
                Here is our mouthwatering menu, carefully crafted for you to enjoy and customize to your liking. Feel free to discuss your preferences with us, and together we’ll tailor the perfect experience for you. We are committed to delivering the very best service, ensuring your satisfaction every step of the way.
            </p>

            <div className="package-container1">
                <table className="package-table1">
                    <tbody>
                        <tr>
                            <td className="package-content1">
                                <div className="package-content-text1">
                                    <h2>Cocoloco Menu</h2>
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
                                                src={`data:image/jpeg;base64,${image.imageData}`} // Assuming imageData is base64 encoded
                                                alt={`Menu item ${index + 1}`} // Provide alt text for accessibility
                                                className="gallery-image1-package" // Apply styling from CSS
                                            />
                                        ))
                                    ) : (
                                        <p>Currently No Special Offers Available in Cocoloco Garden</p> // Fallback if no images are available
                                    )}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="package-menu-image">
                <img src={`${process.env.PUBLIC_URL}/images/Food1.jpg`} alt="Delicious dish 1" />
                <img src={`${process.env.PUBLIC_URL}/images/Food2.jpg`} alt="Delicious dish 2" />
                <img src={`${process.env.PUBLIC_URL}/images/Food3.jpg`} alt="Delicious dish 3" />
                <img src={`${process.env.PUBLIC_URL}/images/Food4.jpg`} alt="Delicious dish 4" />
                <img src={`${process.env.PUBLIC_URL}/images/Food5.jpg`} alt="Delicious dish 5" />
            </div>
        </div>
    );
};

export default CoverImageFive;
