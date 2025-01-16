import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
