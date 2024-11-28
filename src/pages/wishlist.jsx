import React, { useEffect } from 'react';
import BookCard from '../components/BookCard';

const MyWishlist = ({ books }) => {
  useEffect(() => {
    document.title = "My Wishlist - Peekabook";
  }, []);

  // Example: hardcoding wishlist items
  const wishlist = books.filter((book) => [1, 3].includes(book.id));

  return (
    <div>
      <h1>My Wishlist</h1>
      <div className="book-listings">
        {wishlist.map((book) => (
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

export default MyWishlist;
