// App.js
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/navbar';
import './index.css';

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
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
