import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import ProductDetail from './Pages/ProductDetail';
import Wishlist from './Components/Wishlist';

import { CartProvider } from './Context/CartContext';
import { WishlistProvider } from './Context/WishlistContext'; 

import Header from './Components/Header';

function App() {
  return (
    <CartProvider>
      <WishlistProvider> 
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} /> 
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
