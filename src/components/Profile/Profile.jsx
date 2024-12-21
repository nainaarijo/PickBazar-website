// import React from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';

const ProfileDashboard = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Left Sidebar */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box sx={{ backgroundColor: '#fff', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6">Wallet Points</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Typography>Total</Typography>
              <Typography>0</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
              <Typography>Used</Typography>
              <Typography>0</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
              <Typography>Available</Typography>
              <Typography>0</Typography>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: '#fff', padding: 2, borderRadius: 2, marginTop: 3 }}>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>Profile</Typography>
            <Typography variant="body1">Change Password</Typography>
            <Typography variant="body1">My Orders</Typography>
            <Typography variant="body1">Downloads</Typography>
            <Typography variant="body1">My Wishlists</Typography>
            <Typography variant="body1">My Questions</Typography>
            <Typography variant="body1">My Refunds</Typography>
            <Typography variant="body1">My Reports</Typography>
            <Typography variant="body1">My Cards</Typography>
            <Typography variant="body1">Need Help</Typography>
            <Typography variant="body1">Logout</Typography>
          </Box>
        </Grid>

        {/* Right Content */}
        <Grid item xs={12} md={9}>
          <Box sx={{ backgroundColor: '#fff', padding: 3, borderRadius: 2 }}>
            <Box sx={{ borderBottom: '1px solid #ccc', paddingBottom: 3 }}>
              <Typography variant="h6" gutterBottom>
                Profile
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography>Avatar</Typography>
                </Box>
                <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Box>
              <TextField fullWidth label="Name" defaultValue="John Doe" sx={{ marginTop: 3 }} />
              <TextField fullWidth label="Bio" multiline rows={4} sx={{ marginTop: 3 }} />
              <Button variant="contained" color="success" sx={{ marginTop: 3 }}>
                Save
              </Button>
            </Box>

            {/* Email Section */}
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">Email</Typography>
              <TextField fullWidth defaultValue="admin@demo.com" sx={{ marginTop: 2 }} />
              <Button variant="contained" color="success" sx={{ marginTop: 2 }}>
                Update
              </Button>
            </Box>

            {/* Contact Section */}
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">Contact Number</Typography>
              <TextField fullWidth defaultValue="+1 (936) 514-1641" sx={{ marginTop: 2 }} />
              <Button variant="text" sx={{ marginTop: 1 }}>
                + Update
              </Button>
            </Box>

            {/* Addresses Section */}
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">Addresses</Typography>
              <Grid container spacing={3} sx={{ marginTop: 2 }}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1">Billing</Typography>
                      <Typography variant="body2">
                        2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1">Shipping</Typography>
                      <Typography variant="body2">
                        2148 Stratford Park, KY, Winchester, 40391, United States
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Button variant="text" sx={{ marginTop: 2 }}>
                + Add
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDashboard;