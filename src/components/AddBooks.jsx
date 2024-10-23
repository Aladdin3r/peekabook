import React, { useState } from 'react';
import { TextField, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddBook({ onAddBook }) {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        location: 'Your Location', // Default location
        available: true,
        owner: '',
        bookImage: null, // Change to null for uploaded files
    });

    const [openLocationDialog, setOpenLocationDialog] = useState(false);

    const handleChangeLocation = (newLocation) => {
        setBookDetails((prev) => ({
            ...prev,
            location: newLocation,
        }));
        setOpenLocationDialog(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setBookDetails((prev) => ({
            ...prev,
            bookImage: file, // Store the uploaded file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddBook(bookDetails);
        // Reset form after submission
        setBookDetails({ title: '', author: '', location: 'Your Location', available: true, owner: '', bookImage: null });
    };

    return (
        <div className="add-book">
            <Typography variant="h5" gutterBottom>
                Add a New Book Listing
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={bookDetails.title}
                    onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Author"
                    name="author"
                    value={bookDetails.author}
                    onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
                    fullWidth
                    required
                    margin="normal"
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Location"
                        value={bookDetails.location}
                        onChange={(e) => setBookDetails({ ...bookDetails, location: e.target.value })}
                        fullWidth
                        required
                        margin="normal"
                        disabled // Disable editing directly in this field
                    />
                    <Button variant="outlined" onClick={() => setOpenLocationDialog(true)} style={{ marginLeft: '8px' }}>
                        Change
                    </Button>
                </div>
                <TextField
                    label="Owner"
                    name="owner"
                    value={bookDetails.owner}
                    onChange={(e) => setBookDetails({ ...bookDetails, owner: e.target.value })}
                    fullWidth
                    required
                    margin="normal"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    style={{ marginBottom: '16px' }}
                />
                <div>
                    <label>
                        Available
                        <input
                            type="checkbox"
                            name="available"
                            checked={bookDetails.available}
                            onChange={(e) => setBookDetails({ ...bookDetails, available: e.target.checked })}
                        />
                    </label>
                </div>
                <Button variant="contained" color="primary" type="submit">
                    Add Book
                </Button>
            </form>

            {/* Dialog for changing location */}
            <Dialog open={openLocationDialog} onClose={() => setOpenLocationDialog(false)}>
                <DialogTitle>Change Location</DialogTitle>
                <DialogContent>
                    <TextField
                        label="New Location"
                        onChange={(e) => handleChangeLocation(e.target.value)}
                        fullWidth
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenLocationDialog(false)} color="primary">
                        Close
                    </Button>
                    <Button onClick={() => handleChangeLocation('Your New Location')} color="primary"> {/* Example location, replace with your logic */}
                        Set Location
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
