import React from 'react';

const detailsproduct = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default detailsproduct;
