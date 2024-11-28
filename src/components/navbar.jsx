import React from 'react';
import { Drawer, List, ListItem, ListItemText, TextField, IconButton, Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const Logo = styled('img')({
  height: '40px',
  marginRight: '10px',
});

const AppName = styled('h1')({
  fontSize: '1.5rem',
  color: 'white',
  margin: 0,
  fontWeight: 'normal',
});

const SearchContainer = styled('form')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const drawerWidth = 250;

const Navbar = ({ onOpen }) => {
  // Define nav items with their corresponding routes
  const navItems = [
    { text: 'Discover', path: '/' },
    { text: 'My Wishlist', path: '/wishlist' },
    { text: 'My Loans', path: '/loans' },
    { text: 'My Listings', path: '/listings' },
    { text: 'Account', path: '/account' },
  ];

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
          backgroundColor: '#554971',
          color: 'white',
        },
      }}
    >
      <div style={{ padding: '16px' }}>
        <LogoContainer>
          <Logo src="logo-white.svg" alt="Logo" />
          <AppName>Peekabook</AppName>
        </LogoContainer>
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
              backgroundColor: 'white',
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                color: 'black',
              },
            }}
          />
        </SearchContainer>
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.text}>
              {/* Use Link from react-router-dom */}
              <Link
                to={item.path} // Specify the route
                style={{ textDecoration: 'none', width: '100%', color: '#f5f3f5' }}
              >
                <ListItemText primary={item.text} />
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
