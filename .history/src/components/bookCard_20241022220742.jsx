// components/BookCard.jsx
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import  

const BookCard = ({ bookImage, title, author, location, available, owner }) => {
  return (
    <div className="book-card">
      <img src={bookImage} alt={title} className="book-image" />
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="location">
          <LocationOnIcon fontSize="small" />
          <span>{location}</span>
        </div>
        <p className="book-owner">Owner: {owner}</p>
      </div>
      <div className="availability">
        {available ? (
          <span className="available">
            <CheckCircleIcon fontSize="small" /> Available
          </span>
        ) : (
          <span className="unavailable">
            <CancelIcon fontSize="small" /> Unavailable
          </span>
        )}
      </div>
    </div>
  );
};

export default BookCard;
