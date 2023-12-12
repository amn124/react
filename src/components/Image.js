import React from 'react';
import product from '../product';

const Image = () => {
  return <img src={product.imagePath} alt={product.name} className="product-image" />;
}

export default Image;
