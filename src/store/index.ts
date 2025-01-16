import { configureStore } from '@reduxjs/toolkit';
import productReducer, { ProductState } from './slices/productSlice';
import userReducer, { UserState } from './slices/userSlice';
import cartReducer, { CartState } from './slices/cartSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = {
  product: ProductState;
  user: UserState;
  cart: CartState;
};

export type AppDispatch = typeof store.dispatch;
export default store;
