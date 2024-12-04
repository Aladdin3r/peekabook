// import React from 'react';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';

// const BookCard = ({ bookImage, title, author, location, available, owner }) => {
//   return (
//     <div className="book-card">
//       <img src={bookImage} alt={title} className="book-image" />
//       <div className="book-details">
//         <h2 className="book-title">{title}</h2>
//         <p className="book-author">{author}</p>
//         <p className="book-owner">Owner: {owner}</p>
//         </div>
//         <div className="book-footer">
//           <div className="location">
//             <LocationOnIcon fontSize="small" />
//             <span>{location}</span>
//           </div>
//           <div className="availability">
//             {available ? (
//               <span className="available">
//                 <CheckCircleIcon fontSize="small" /> Available
//               </span>
//             ) : (
//               <span className="unavailable">
//                 <CancelIcon fontSize="small" /> Unavailable
//               </span>
//             )}
//           </div>
//         </div>
//     </div>
//   );
// };

// export default BookCard;

import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BookCard = ({ bookImage, title, author, location, available, owner, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
    onToggleFavorite(); // Notify parent component about the toggle
  };

  return (
    <div className="book-card">
      <div className="book-header">
        <img src={bookImage} alt={title} className="book-image" />
        <div className="favorite-button" onClick={handleFavoriteClick}>
          {isFavorite ? (
            <FavoriteIcon fontSize="small" style={{ color: 'red' }} />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
        </div>
      </div>
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <p className="book-owner">Owner: {owner}</p>
      </div>
      <div className="book-footer">
        <div className="location">
          <LocationOnIcon fontSize="small" />
          <span>{location}</span>
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
    </div>
  );
};

export default BookCard;
