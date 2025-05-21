import { useState } from 'react';
import { Grid, Pagination, Box, Container } from '@mui/material';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T-Shirt', price: 25, image: '/assets/images/shirt.png' },
  { id: 2, name: 'Sneakers', price: 60, image: '/assets/images/blue.jpg' },
  { id: 3, name: 'Watch', price: 45, image: '/assets/images/watch.jpg' },
  { id: 4, name: 'Headphones', price: 50, image: '/assets/images/headphones.png' },
 
  { id: 5, name: 'Sunglasses', price: 20, image: '/assets/images/syn.jpg' },

  { id: 6, name: 'Hat', price: 15, image: '/assets/images/redcap.jpg' },
   { id: 7, name: 'Backpack', price: 35, image: '/assets/images/laptopbag.jpg' },
  
  { id: 8, name: 'Wallet', price: 30, image: '/assets/images/wallet.jpg' },
  { id: 9, name: 'Jacket', price: 80, image: '/assets/images/jacket.jpg' },
  { id: 10, name: 'Laptop Bag', price: 70, image: '/assets/images/laptopbag.jpg' },
];

const itemsPerPage = 4; 

export default function ProductList() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {paginatedProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={10} mb={2}>
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Container>
  );
}
