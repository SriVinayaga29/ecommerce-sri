import { Box, Typography, Paper, Grid, Fade, Button } from '@mui/material';
import { useWishlist } from '../Context/WishlistContext';
import { useCart } from '../Context/CartContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id); // optional: remove after adding to cart
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Your Wishlist</Typography>

      {wishlist.length === 0 ? (
        <Typography mt={2}>No items in wishlist.</Typography>
      ) : (
        <Grid container spacing={2}>
          {wishlist.map((item) => (
            <Fade in={true} key={item.id}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 150, height: 150, objectFit: 'contain', marginBottom: 8 }}
                  />
                  <Typography fontWeight="bold">{item.name}</Typography>
                  <Typography color="text.secondary" gutterBottom>₹{item.price}</Typography>

                  <Button
                    variant="contained"
                    onClick={() => handleAddToCart(item)}
                    sx={{ mt: 2, textTransform: 'none' }}
                  >
                    Add to Cart
                  </Button>
                </Paper>
              </Grid>
            </Fade>
          ))}
        </Grid>
      )}
    </Box>
  );
}
