import React from 'react';
import { Drawer, List, ListItem, ListItemText, TextField, IconButton, Button, Link } from '@mui/material';
import { Search } from '@mui/icons-material';
import { styled } from '@mui/system';

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const Logo = styled('img')({
  height: '40px',
  marginRight: '10px', // Add some spacing between the logo and the text
});

const AppName = styled('h1')({
  fontSize: '1.5rem', // Adjust the font size
  color: 'white', // White text to match the sidebar theme
  margin: 0, // Remove any margin
  fontWeight: 'normal', // Adjust the font weight if needed
});

const SearchContainer = styled('form')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const drawerWidth = 250; // Set width of the Drawer

const Navbar = ({ onOpen }) => {
  const navItems = ['Discover', 'My Wishlist', 'My Loans', 'My Listings', 'Account'];

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#554971', // Set background color to match your previous sidebar
          color: 'white',
        },
      }}
    >
      <div style={{ padding: '16px' }}>
        {/* Logo and App Name */}
        <LogoContainer>
          <Logo src="logo-white.svg" alt="Logo" />
          <AppName>Peekabook</AppName> {/* Add the app name next to the logo */}
        </LogoContainer>
        
        {/* Search Field */}
        <SearchContainer>
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton type="submit">
                  <Search />
                </IconButton>
              ),
            }}
            sx={{
              backgroundColor: 'white', // White background for the TextField
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                color: 'black', // Ensure text inside is black
              },
            }}
          />
        </SearchContainer>
        
        {/* Navigation Links */}
        <List>
          {navItems.map((text) => (
            <ListItem button key={text}>
              <Link href="#" underline="none" sx={{ width: '100%', color: 'inherit' }}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>

        {/* Button to Create a Listing */}
        <Button
          onClick={onOpen}
          variant="contained"
          color="primary"
          sx={{ marginTop: '16px', width: '100%' }}
        >
          Create a listing
        </Button>
      </div>
    </Drawer>
  );
};

export default Navbar;
