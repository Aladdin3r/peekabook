// ListingCard.jsx
import React from 'react';
import './ListingCard.css';

const ListingCard = ({ image, title, author, location, distance, isAvailable }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={`${title} cover`} className="book-image" />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-location">
          {location} ({distance} km away)
        </p>
        <div
          className={`availability-indicator ${
            isAvailable ? 'available' : 'not-available'
          }`}
        >
          {isAvailable ? 'Available' : 'Not Available'}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
