import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Dialog } from '@mui/material';
import Navbar from './components/navbar.jsx';
import './index.css';
import './App.css';
import { useState } from 'react';
import BookCard from './components/BookCard.jsx';
import booksData from './booksData.js';
import AddBook from './components/AddBooks.jsx';
import Map from './components/map.jsx'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#000f08',
    },
    secondary: {
      main: '#5295cb',
    },
  },
});

const App = () => {
  const [books, setBooks] = useState(booksData);
  const [open, setOpen] = useState(false);

  const handleAddBook = (newBook) => {
    const updatedBooks = [
      ...books,
      { ...newBook, id: books.length + 1 }
    ];
    setBooks(updatedBooks);
    setOpen(false);
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
            <h2>Books Near You:</h2>
            <Map /> 
          </div>
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
