import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalAmount += product.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing) {
        state.totalAmount -= existing.price * existing.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
        state.totalAmount += existing.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
        state.totalAmount -= existing.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
