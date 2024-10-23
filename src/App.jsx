import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Dialog } from '@mui/material';
import Navbar from './components/navbar.jsx'
import './index.css';
import './App.css'
import { useState } from 'react';
import BookCard from './components/BookCard.jsx';
import booksData from './booksData.js';
import AddBook from './components/AddBooks.jsx';
// import Footer from './components/Footer';


const theme = createTheme({
  // You can customize your theme here
});

const App = () => {
  const [books, setBooks] = useState(booksData);
  const [open, setOpen] = useState(false);

  const handleAddBook = (newBook) => {
    const updatedBooks = [
      ...books, // Use the current state instead of booksData
      { ...newBook, id: books.length + 1 } // Assign a new ID based on the current state
    ];
    setBooks(updatedBooks); // Update the state with the new array
    setOpen(false); // Close modal after adding the book
  };  

  const handleOpen = () => {
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="root">
        <div className="sidebar">
          <Navbar onOpen={handleOpen} />
        </div>
        <div className="main-content">
          <h1>Welcome to Peekabook!</h1>
          <div className="section-container">
            <h2>Books You Might Like:</h2>

            <div className="book-listings">
              {books.map((book) => (
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
        </div>
        <div>
          {/* <Footer/> */}
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <div style={{ padding: '20px' }}>
          <AddBook onAddBook={handleAddBook} />
        </div>
      </Dialog>
    </ThemeProvider>
  );
};

export default App;
