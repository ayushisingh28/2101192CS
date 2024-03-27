import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetails from '../components/detailsproduct';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    // Fetch product data from API
    axios.get(`API_URL/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductPage;
