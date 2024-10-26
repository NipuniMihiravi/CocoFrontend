import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Offer = () => {
    const [items, setItems] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchOfferData();
    }, []);

    const fetchOfferData = () => {
        axios.get(`${API_URL}/api/category`) // Fetch all categories
            .then(response => {
                console.log('Fetched category data:', response.data);
                // Check if there are at least three categories
                if (response.data.length >= 3) {
                    const thirdCategory = response.data[2]; // Get the third category (0-based index)
                    // Ensure thirdCategory has an `items` array
                    if (thirdCategory.items && thirdCategory.items.length > 0) {
                        const itemsFromThirdCategory = thirdCategory.items.slice(0, 3); // Get first three items
                        setItems(itemsFromThirdCategory);
                    } else {
                        console.error("Third category has no items.");
                        setItems([]);
                    }
                } else {
                    console.error("Less than three categories available.");
                    setItems([]);
                }
            })
            .catch(error => console.error('Error fetching category data:', error));
    };

    return (
        <div className="offer-container">
            <div className="offer-heading">
                <h1>Special Offers</h1>
            </div>
            <div className="offer-items-row">
                {items.map(item => (
                    <div className="offer-item" key={item.id}>
                        <img src={`data:image/jpeg;base64,${item.image}`} alt={item.name} className="offer-item-image" />
                        <div className="offer-item-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;
