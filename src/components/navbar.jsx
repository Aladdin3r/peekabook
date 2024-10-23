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
          {navItems.map((text) => (
            <ListItem button key={text}>
              <Link href="#" underline="none" sx={{ width: '100%', color: '#f5f3f5' }}>
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
