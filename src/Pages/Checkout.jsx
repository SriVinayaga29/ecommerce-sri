import { Box, Grid, Paper, Typography, TextField, Button, Divider } from '@mui/material';

export default function Checkout() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        {/* Left: Shipping & Payment */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }} elevation={3}>
            <Typography variant="h6" gutterBottom>
              Shipping Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="City" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Postal Code" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Phone Number" variant="outlined" />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Card Number" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Expiry Date" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="CVV" variant="outlined" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right: Order Summary */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }} elevation={3}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
              <Typography>Item Total</Typography>
              <Typography>₹1200</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
              <Typography>Shipping</Typography>
              <Typography>₹50</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
              <Typography variant="subtitle1">Total</Typography>
              <Typography variant="subtitle1">₹1250</Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, textTransform: 'none' }}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
