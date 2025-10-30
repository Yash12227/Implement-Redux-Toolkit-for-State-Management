import React from 'react';
import ProductList from './components/ProductList';
import Cart from './features/cart/Cart';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 Redux Toolkit Shopping Cart</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
