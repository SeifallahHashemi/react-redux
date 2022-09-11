import {configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from "./CounterSlice";
import modalSliceReducer from "./ModalSlice";
import cartSliceReducer from "./CartSlice";


const store = configureStore({
    reducer: { counter: counterSliceReducer, modal: modalSliceReducer, cart: cartSliceReducer}
});

export default store;