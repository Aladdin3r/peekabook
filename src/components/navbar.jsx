// Navbar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, TextField, IconButton, Button, Link } from '@mui/material';
import { Search, Menu } from '@mui/icons-material';
import { styled } from '@mui/system';

const Logo = styled('img')({
  height: '40px',
  marginBottom: '16px',
});

const Sidebar = styled('div')({
  width: 250,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#554971',
  height: '100%', 
  color: 'white',
});

const SearchContainer = styled('form')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const Navbar = () => {
  const navItems = ['Discover', 'Book listings', 'My listings', 'My Loans', 'Account'];

  return (
    <Sidebar>
      <Logo src="logo-white.svg" alt="Logo" />
      <SearchContainer>
        <TextField
          variant="outlined"
          placeholder="search"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <Search />
              </IconButton>
            ),
          }}
        />
      </SearchContainer>
      <List>
        {navItems.map((text) => (
          <ListItem button key={text}>
            <Link href="#" underline="none" sx={{ width: '100%', color: 'inherit' }}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Link href="#" underline="none">
        <Button variant="contained" color="primary" sx={{ marginTop: '16px', width: '100%' }}>
          Create a listing
        </Button>
      </Link>
    </Sidebar>
  );
};

export default Navbar;
