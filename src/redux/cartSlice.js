// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // All available products
  cart: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.items.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice += product.price;
      } else {
        state.cart.items.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
      }
      state.cart.totalQuantity += 1;
      state.cart.totalAmount += product.price;
    },
    removeProductFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.items.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cart.items = state.cart.items.filter((item) => item.id !== product.id);
        } else {
          existingProduct.quantity -= 1;
          existingProduct.totalPrice -= product.price;
        }
        state.cart.totalQuantity -= 1;
        state.cart.totalAmount -= product.price;
      }
    },
  },
});

export const { setProducts, addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
