import { useCart } from '../Context/CartContext';
import CartItem from '../Components/CartItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      {cart.length > 0 && (
        <Button variant="contained" onClick={() => navigate('/checkout')}>Checkout</Button>
      )}
    </div>
  );
}
