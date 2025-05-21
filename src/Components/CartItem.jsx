import { Box, Typography, IconButton, Button, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext"; // Create this context

export default function CartItem({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { addToWishlist } = useWishlist();

  const handleSaveForLater = () => {
    addToWishlist(item);
    removeFromCart(item.id);
  };

  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 2, borderRadius: 2 }}>
      <img src={item.image} alt={item.name} width="100" height="100" style={{ objectFit: 'cover', borderRadius: 8 }} />

      <Box sx={{ flexGrow: 1, ml: 2 }}>
        <Typography fontWeight="bold">{item.name}</Typography>
        <Typography color="text.secondary" fontSize={14}>₹{item.price}</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: 2,
            px: 1,
            py: 0.5,
            mr: 1
          }}>
            <IconButton size="small" onClick={() => decreaseQuantity(item.id)}>
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography mx={1}>{item.quantity}</Typography>
            <IconButton size="small" onClick={() => increaseQuantity(item.id)}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>

          <IconButton color="error" onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>

          <Button onClick={handleSaveForLater} sx={{ ml: 2, textTransform: 'none' }}>
            Save for later
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
