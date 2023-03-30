import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import  cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import sneakersReducer from './slices/sneakersSlice';
import purchaseReducer from './slices/purchaseSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        sneakers: sneakersReducer,
        purchase: purchaseReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch