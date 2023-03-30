import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

interface purchaseSliceState{
    items: CartItem[]
}

const initialState: purchaseSliceState = {
    items: []
}

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {
        addPurchaseItem(state, action: PayloadAction<CartItem[]>){
            state.items.push(...action.payload)
        }
    }
})

export const {addPurchaseItem} = purchaseSlice.actions

export default purchaseSlice.reducer