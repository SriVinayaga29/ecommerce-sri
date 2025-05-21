import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Context/WishlistContext';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo / Home */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: '#fff' }}
        >
          MyShop
        </Typography>

        {/* Right Section: Checkout, Wishlist, Cart */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            component={Link}
            to="/checkout"
            sx={{ color: '#fff', textDecoration: 'none' }}
          >
            Checkout
          </Typography>

          {/* Wishlist Icon */}
          <IconButton onClick={() => navigate('/wishlist')} color="inherit">
            <Badge badgeContent={wishlist.length} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>

          {/* Cart Icon */}
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
