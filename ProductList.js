import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'T-Shirt', price: 20 },
  { id: 2, name: 'Jeans', price: 40 },
  { id: 3, name: 'Sneakers', price: 60 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛍 Product List</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{ border: '1px solid #ccc', padding: '1rem', width: '150px' }}
          >
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
