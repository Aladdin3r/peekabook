import React, { useEffect } from 'react';
import BookCard from '../components/BookCard';

const MyListings = ({ books }) => {
  useEffect(() => {
    document.title = "My Listings - Peekabook";
  }, []);

  // Example: Filtering books listed by the current user
  const listings = books.filter((book) => book.owner === "John Doe"); // Replace with logged-in user

  return (
    <div>
      <h1>My Listings</h1>
      <div className="book-listings">
        {listings.map((book) => (
          <BookCard
            key={book.id}
            bookImage={book.bookImage}
            title={book.title}
            author={book.author}
            location={book.location}
            available={book.available}
            owner={book.owner}
          />
        ))}
      </div>
    </div>
  );
};

export default MyListings;
