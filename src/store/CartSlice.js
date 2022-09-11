import {createSlice} from "@reduxjs/toolkit";

// const initialState = { items: [], totalQuantity: 0};
const cartSlice = createSlice({
    name: "productCart",
    initialState: { items: [], totalQuantity: 0, changed: false, isShowNotification: false},
    reducers: {
        replaceCart(state, action){
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action) {
            state.totalQuantity++;
            state.isShowNotification = !state.isShowNotification;
            state.changed = true;
            const existItem = state.items.find(item => item.id === action.payload.id);
            if (existItem) {
                existItem.totalPrice += existItem.price;
                existItem.quantity = existItem.quantity + 1;
            } else {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                    totalPrice: action.payload.price
                })
            }
        },
        removeItemfromCart(state, action) {
            state.totalQuantity--;
            state.isShowNotification = !state.isShowNotification;
            state.changed = true;
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;