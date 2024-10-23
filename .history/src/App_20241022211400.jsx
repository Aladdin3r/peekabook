// App.js
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/navbar';
import './index.css';
import BookCard from './components/bookCard';

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

          <BookCard
            bookImage="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
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