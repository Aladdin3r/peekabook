import React from 'react';
import {  Button, Link } from '@mui/material';
import BookCard from '../components/BookCard';
import booksData from '../booksData';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function BookPage({ selectedBook }) {

    const { bookImage, title, author, location, available, owner, synopsis, ownerNote } = selectedBook;

    // show books w same title
    const similarBooks = booksData.filter((book) => book.title === title && book.id !== selectedBook.id);

    return(
        <>
        <div className="book-page-container">
            <h1>{title}</h1>
            <div className="details-container"> 
                <div className='details-image'>
                    <img src={bookImage} alt={title} className="book-image" />
                </div>
                <div>
                    <div className="details-book-details">
                        <p className="book-author">Author: {author}</p>
                        <p> Synopsis: {synopsis}</p>
                        <p>{location}</p>
                        <p className="book-owner">Owner: {owner}</p>
                        <p> Owner's Note: {ownerNote}</p>
                    </div>
                </div>
                <div className='borrow-option'>
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
                    <div className='borrow-option-buttons'>
                        <Button>Borrow Book</Button>
                        <Button>Add to Wishlist</Button>
                        <Button>Message Owner</Button>
                    </div>

                </div>
            </div>

        </div>
        <div className="section-container">
            <h2>Books With This Title Near You:</h2>
            <div className="book-listings">
                {similarBooks.length > 0 ? (
                    similarBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            bookImage={book.bookImage}
                            title={book.title}
                            author={book.author}
                            location={book.location}
                            available={book.available}
                            owner={book.owner}
                        />
                    ))
                ) : (
                    <p>No other books with this title nearby.</p>
                )}
            </div>
          </div>
        </>
    )
}