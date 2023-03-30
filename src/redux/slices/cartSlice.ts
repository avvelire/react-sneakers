import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type CartItem = {
    id: number;
    imageUrl: string;
    title: string;
    price: number
}

interface CartSliceState {
    active: boolean;
    totalPrice: number;
    items: CartItem[]
}

const initialState: CartSliceState = {
    active: false,
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        changeActive(state, action: PayloadAction<boolean>){
            state.active = action.payload
        },
        addItem(state, action: PayloadAction<CartItem>){
            state.items.push({...action.payload})

            state.totalPrice = state.items.reduce((sum, obj) => {
                return +(obj.price + sum).toFixed(2)
              }, 0);

        },
        removeItem(state, action: PayloadAction<number>){
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => +(obj.price + sum).toFixed(2), 0);
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
          },
    }
})

export const {changeActive, addItem, removeItem, clearItems} = cartSlice.actions

export default cartSlice.reducer