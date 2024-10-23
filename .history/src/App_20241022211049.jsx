// App.jsx
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/navbar';
import BookCard from './components/BookCard';
import './index.css';

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="root">
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main-content">
          <h1>Welcome to Peekabook!</h1>
          <BookCard
            bookImage="https://example.com/book-cover.jpg"
            title="The Great Gatsby"
            author="F. Scott Fitzgerald"
            location="2 km away"
            available={true}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
