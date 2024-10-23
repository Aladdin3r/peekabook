import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/navbar';
import './index.css';
import 
import BookCard from './components/bookCard';
import booksData from './booksData';


const theme = createTheme({
  // You can customize your theme here
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="root">
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main-content">
          {/* Other main content goes here */}
          <h1>Welcome to Peekabook!</h1>
          <p>Your content goes here.</p>

          <div className="book-listings">
            {booksData.map((book) => (
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
    </ThemeProvider>
  );
};

export default App;
