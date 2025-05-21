import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Context/WishlistContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = wishlist.some(item => item.id === product.id);
  const [animate, setAnimate] = useState(false);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        position: 'relative',
      }}
    >
      {/* Wishlist Icon */}
      <IconButton
        onClick={handleWishlistClick}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: '#fff',
          transition: 'transform 0.2s ease-in-out',
          transform: animate ? 'scale(1.3)' : 'scale(1)',
        }}
      >
        {isInWishlist ? (
          <FavoriteIcon sx={{ color: 'red' }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>

      {/* Image */}
      <Box
        sx={{
          height: 220,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 200,
            width: 200,
            objectFit: 'contain',
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Product Info */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{product.price}
        </Typography>
      </CardContent>

      {/* Bottom Action Row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mt: 1,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={() => addToCart(product)}
          sx={{ textTransform: 'none', flex: 1 }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
}
