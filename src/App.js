import './App.scss';
import Section from "./UI/Section/Section";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Modal from "./components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from "./store/ModalSlice";
import CartProvider from "./components/Products/CartProvider";
import WarningText from "./UI/Warning/WarningText";
import {useEffect} from "react";
import Notification from "./UI/Notification/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const shown = useSelector(state => state.modal.isShown);
    const itemIndex = useSelector(state => state.cart.items);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.modal.notification);
    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])
    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
        /*const sendCartData = async () => {
            dispatch(modalActions.showNotification({
                status: 'Sending',
                title: 'درحال ارسال ...',
                message: 'در حال ارسال اطلاعات به سبد خرید شما'
            }))
            const response = await fetch('https://react-redux-ef0a3-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            if (!response.ok) {
                throw new Error('Send Request Failed !')
            }
            dispatch(modalActions.showNotification({
                status: 'Success',
                title: 'ارسال موفق',
                message: 'اطلاعات با موفقیت به سرور ارسال گردید با تشکر از خرید شما'
            }))
        };
        if (!isInitial) {
            isInitial = true;
            return;
        }
        sendCartData().catch(error => {
            dispatch(modalActions.showNotification({
                status: 'Error',
                title: 'خطا!!!',
                message: 'متاسفانه ارتباط با سرور برقرار نشد لطفا مجددا اقدام نمایید'
            }))
        })*/
    }, [cart, dispatch])
    const hideModalHandler = () => {
        dispatch(modalActions.hideModal())
    }
    return (
        <Section className={"container"}>
            {notification &&
                <Notification title={notification.title} message={notification.message} status={notification.status}/>}
            {shown && <Modal onConfirm={hideModalHandler}>{itemIndex.length > 0 ? <CartProvider/> :
                <WarningText onConfirm={hideModalHandler} title={"خروج"} warning={"سبد خرید شما خالی است!"}/>}</Modal>}
            <header>
                <Cart/>
            </header>
            <div>
                <Products/>
            </div>
        </Section>
    );
}

export default App;
