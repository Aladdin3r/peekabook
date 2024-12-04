import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Dialog } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import './index.css';
import './App.css';
import BookCard from './components/BookCard.jsx';
import booksData from './booksData.js';
import AddBook from './components/AddBooks.jsx';
import Map from './components/map.jsx';
import MyWishlist from './pages/wishlist.jsx';
import MyLoans from './pages/loans.jsx';
import MyListings from './pages/listings.jsx';
import Account from './pages/Account.jsx';

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
    const updatedBooks = [...books, { ...newBook, id: books.length + 1 }];
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
      <Router>
        <div id="root">
          <div className="sidebar">
            <Navbar onOpen={handleOpen} />
          </div>
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
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
                }
              />
              <Route path="/wishlist" element={<MyWishlist books={books} />} />
              <Route path="/loans" element={<MyLoans books={books} />} />
              <Route path="/listings" element={<MyListings books={books} />} />
              <Route path="/account" element={<Account />} />
              <Route
                path="*"
                element={
                  <div>
                    <h1>404 - Page Not Found</h1>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="add-book-dialog">
          <div style={{ padding: '20px' }}>
            <AddBook onAddBook={handleAddBook} />
          </div>
        </Dialog>
      </Router>
    </ThemeProvider>
  );
};

export default App;
