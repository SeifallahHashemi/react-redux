import { createSlice } from "@reduxjs/toolkit";

const initialState = { isShown: false, notification: null};
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal(state) {
            state.isShown = true;
        },
        hideModal(state) {
            state.isShown = false;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                message: action.payload.message,
                title: action.payload.title,
            }
        }
    }
})
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;