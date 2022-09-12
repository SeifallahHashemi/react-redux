import {modalActions} from "./ModalSlice";
import {cartActions} from "./CartSlice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://react-redux-ef0a3-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) {
                throw new Error('Fetch Data Failed')
            }
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (e) {
            dispatch(modalActions.showNotification({
                status: 'Error',
                title: 'خطا!!!',
                message: 'متاسفانه ارتباط با سرور برقرار نشد لطفا مجددا اقدام نمایید'
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(modalActions.showNotification({
            status: 'Pending',
            title: 'درحال ارسال ...',
            message: 'در حال ارسال اطلاعات به سبد خرید شما'
        }))
        const sendRequest = async () => {
            const response = await fetch('https://react-redux-ef0a3-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });
            if (!response.ok) {
                throw new Error('Send Request Failed !')
            }
        };
        try {
            await sendRequest();
            dispatch(modalActions.showNotification({
                status: 'Success',
                title: 'ارسال موفق',
                message: 'اطلاعات با موفقیت به سرور ارسال گردید با تشکر از خرید شما'
            }))
        } catch (error) {
            dispatch(modalActions.showNotification({
                status: 'Error',
                title: 'خطا!!!',
                message: 'متاسفانه ارتباط با سرور برقرار نشد لطفا مجددا اقدام نمایید'
            }))
        }
    }
}