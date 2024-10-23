import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const BookCard = ({ bookImage, title, author, location, available, owner }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        height: '450px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '1rem',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        image={bookImage}
        alt={title}
        sx={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" component="div" className="book-title" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="book-description">
            {author}
          </Typography>
          {/* Center the location */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary" ml={0.5}>
              {location}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Owner: {owner}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          {available ? (
            <Chip
              icon={<CheckCircleIcon />}
              label="Available"
              color="success"
              variant="outlined"
            />
          ) : (
            <Chip
              icon={<CancelIcon />}
              label="Unavailable"
              color="error"
              variant="outlined"
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
