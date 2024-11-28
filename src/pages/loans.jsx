import React, { useEffect } from 'react';
import BookCard from '../components/BookCard';

const MyLoans = ({ books }) => {
  useEffect(() => {
    document.title = "My Loans - Peekabook";
  }, []);

  // Example: hardcoding loaned items
  const loans = books.filter((book) => [2, 4].includes(book.id));

  return (
    <div>
      <h1>My Loans</h1>
      <div className="book-listings">
        {loans.map((book) => (
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

export default MyLoans;
