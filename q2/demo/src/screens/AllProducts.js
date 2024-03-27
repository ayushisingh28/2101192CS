import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productlist from '../components/Productlist';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from API
    axios.get('API_URL')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <Productlist products={products} />
    </div>
  );
};

export default AllProducts;
